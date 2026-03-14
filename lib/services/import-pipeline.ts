import * as XLSX from "xlsx";
import type { Prisma } from "@prisma/client";

import { prisma } from "@/lib/db";

type RawSeedRow = {
  line: number;
  article: string;
  oem: string;
  name: string;
  brand: string;
  price: string;
  rawJson: Prisma.InputJsonValue;
};

type ParsedRow = {
  id: string;
  line: number;
  article: string | null;
  titleGuess: string;
  brandGuess: string;
  modelGuess: string;
  side: string | null;
  position: string | null;
  oem: string | null;
  price: number | null;
};

type NormalizedRow = ParsedRow & {
  title: string;
  brand: string;
  model: string;
  category: string;
};

type IngestionSource = "upload" | "ai";

export type IngestionRunResult = {
  jobId: string;
  status: "completed" | "failed";
  summary: {
    source: IngestionSource;
    rowsTotal: number;
    rowsParsed: number;
    rowsNormalized: number;
    rowsImported: number;
    rowsSuccess: number;
    rowsFailed: number;
    stageCounts: {
      raw: number;
      parsed: number;
      normalized: number;
      validated: number;
      imported: number;
      failed: number;
    };
    errors: string[];
  };
};

type AiNormalizedItem = {
  line: number;
  title: string;
  brand: string;
  model: string;
  category: string;
};

type AiNormalizeResponse = {
  rows?: unknown;
};

const OEM_REGEX = /[A-Z0-9-]{6,}/g;
const MAX_AI_BATCH_SIZE = 20;
const UPDATE_BATCH_SIZE = 100;
const CREATE_BATCH_SIZE = 500;
const CHUNK_PARALLELISM = Math.min(10, Math.max(1, Number(process.env.IMPORT_CHUNK_PARALLELISM ?? 4) || 4));

const SUPPORTED_BRANDS = ["Changan", "Chery", "Geely", "JAC", "Haval", "Jetour", "Omoda", "Jaecoo"] as const;
const SUPPORTED_MODELS = [
  "Tiggo 2",
  "Tiggo 4",
  "Tiggo 7",
  "Tiggo 8",
  "CS35",
  "CS55",
  "Coolray",
  "Okavango",
  "Uni V",
  "Uni K",
  "Alsvin",
] as const;

const BRAND_KEY_MAP = new Map(SUPPORTED_BRANDS.map((entry) => [normalizeAliasKey(entry), entry]));
const MODEL_KEY_MAP = new Map(SUPPORTED_MODELS.map((entry) => [normalizeAliasKey(entry), entry]));

const categoryRules: Array<{ pattern: RegExp; category: string }> = [
  { pattern: /амортизатор|стойка стабилизатора|втулка стабилизатора/iu, category: "suspension" },
  { pattern: /бампер|балка бампера|дверь|крыло/iu, category: "body" },
  { pattern: /датчик/iu, category: "electronics" },
  { pattern: /фильтр/iu, category: "engine" },
  { pattern: /бачок/iu, category: "cooling" },
];

const sideRules: Array<{ pattern: RegExp; side: "left" | "right" }> = [
  { pattern: /\bлев(ый|ая|ое|ые|ого|ому|ую|ом|ыми)?\b/iu, side: "left" },
  { pattern: /\bправ(ый|ая|ое|ые|ого|ому|ую|ом|ыми)?\b/iu, side: "right" },
];

const positionRules: Array<{ pattern: RegExp; position: "front" | "rear" | "upper" | "lower" }> = [
  { pattern: /\bпередн(ий|яя|ее|ие|его|ему|юю|ем|ими)?\b/iu, position: "front" },
  { pattern: /\bзадн(ий|яя|ее|ие|его|ему|юю|ем|ими)?\b/iu, position: "rear" },
  { pattern: /\bверхн(ий|яя|ее|ие|его|ему|юю|ем|ими)?\b/iu, position: "upper" },
  { pattern: /\bнижн(ий|яя|ее|ие|его|ему|юю|ем|ими)?\b/iu, position: "lower" },
];

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "");
}

function normalizeWhitespace(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function normalizeAliasKey(value: string): string {
  return normalizeWhitespace(value).toLowerCase().replace(/[\s_-]+/g, "");
}

function getCell(record: Record<string, unknown>, keys: string[]): string {
  for (const key of keys) {
    const rawValue = record[key];
    if (rawValue !== undefined && rawValue !== null && String(rawValue).trim() !== "") {
      return normalizeWhitespace(String(rawValue));
    }
  }

  return "";
}

function parsePrice(input: string | number | undefined): number | null {
  if (input === undefined || input === null || String(input).trim() === "") {
    return null;
  }

  const normalized = String(input)
    .replace(/\s+/g, "")
    .replace(/[^\d,.-]/g, "")
    .replace(",", ".")
    .trim();

  if (!normalized) {
    return null;
  }

  const numeric = Number(normalized);
  if (!Number.isFinite(numeric) || numeric < 0) {
    return null;
  }

  return Math.round(numeric * 100) / 100;
}

function extractOemCode(input: string): string | null {
  const normalized = input.toUpperCase();
  const match = normalized.match(OEM_REGEX);
  if (!match?.length) {
    return null;
  }

  return match[0] ?? null;
}

function inferCategory(input: string): string {
  const normalized = normalizeWhitespace(input).toLowerCase();
  for (const rule of categoryRules) {
    if (rule.pattern.test(normalized)) {
      return rule.category;
    }
  }

  return normalized || "other";
}

function normalizeKnownBrand(input: string): string {
  return BRAND_KEY_MAP.get(normalizeAliasKey(input)) ?? "";
}

function inferBrandFromText(input: string): string {
  const key = normalizeAliasKey(input);
  for (const [brandKey, brand] of BRAND_KEY_MAP.entries()) {
    if (brandKey && key.includes(brandKey)) {
      return brand;
    }
  }

  return "";
}

function inferModelFromText(input: string): string {
  const key = normalizeAliasKey(input);
  const matches = SUPPORTED_MODELS.filter((model) => key.includes(normalizeAliasKey(model)));
  if (!matches.length) {
    return "";
  }

  return matches.sort((left, right) => right.length - left.length)[0] ?? "";
}

function inferSide(input: string): string | null {
  for (const rule of sideRules) {
    if (rule.pattern.test(input)) {
      return rule.side;
    }
  }

  return null;
}

function inferPosition(input: string): string | null {
  for (const rule of positionRules) {
    if (rule.pattern.test(input)) {
      return rule.position;
    }
  }

  return null;
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function cleanTitleGuess(rawName: string, brandGuess: string, modelGuess: string): string {
  let value = rawName;

  if (brandGuess) {
    value = value.replace(new RegExp(escapeRegExp(brandGuess), "giu"), " ");
  }

  if (modelGuess) {
    value = value.replace(new RegExp(escapeRegExp(modelGuess), "giu"), " ");
  }

  for (const rule of sideRules) {
    value = value.replace(rule.pattern, " ");
  }

  for (const rule of positionRules) {
    value = value.replace(rule.pattern, " ");
  }

  value = value.replace(/[(),]+/g, " ");
  value = normalizeWhitespace(value);

  return value || rawName;
}

function chunk<T>(items: T[], size: number): T[][] {
  if (size <= 0) {
    return [items];
  }

  const batches: T[][] = [];
  for (let index = 0; index < items.length; index += size) {
    batches.push(items.slice(index, index + size));
  }

  return batches;
}

async function mapWithConcurrency<T, R>(
  items: T[],
  concurrency: number,
  worker: (item: T, index: number) => Promise<R>
): Promise<R[]> {
  if (!items.length) {
    return [];
  }

  const safeConcurrency = Math.max(1, Math.min(concurrency, items.length));
  const output = new Array<R>(items.length);
  let cursor = 0;

  const runWorker = async () => {
    while (true) {
      const current = cursor;
      cursor += 1;
      if (current >= items.length) {
        return;
      }

      output[current] = await worker(items[current], current);
    }
  };

  await Promise.all(Array.from({ length: safeConcurrency }, () => runWorker()));
  return output;
}

function parseAiResponse(raw: string): AiNormalizeResponse {
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (Array.isArray(parsed)) {
      return { rows: parsed };
    }

    return parsed as AiNormalizeResponse;
  } catch {
    const jsonArrayMatch = raw.match(/\[[\s\S]*\]/);
    if (jsonArrayMatch) {
      return { rows: JSON.parse(jsonArrayMatch[0]) as unknown[] };
    }

    const jsonObjectMatch = raw.match(/\{[\s\S]*\}/);
    if (!jsonObjectMatch) {
      throw new Error("AI returned invalid JSON");
    }

    return JSON.parse(jsonObjectMatch[0]) as AiNormalizeResponse;
  }
}

function toAiItem(input: unknown): AiNormalizedItem | null {
  if (!input || typeof input !== "object") {
    return null;
  }

  const row = input as Record<string, unknown>;
  const line = Number(row.line ?? 0);
  const title = normalizeWhitespace(String(row.title ?? ""));
  const brand = normalizeWhitespace(String(row.brand ?? ""));
  const model = normalizeWhitespace(String(row.model ?? ""));
  const category = normalizeWhitespace(String(row.category ?? ""));

  if (!Number.isInteger(line) || line <= 0) {
    return null;
  }

  return {
    line,
    title,
    brand,
    model,
    category,
  };
}

function toRawSeedRowsFromSheet(records: Array<Record<string, unknown>>): RawSeedRow[] {
  return records.map((raw, index) => ({
    line: index + 2,
    article: getCell(raw, ["article", "Article", "артикул", "Артикул"]),
    oem: getCell(raw, ["oem", "OEM", "oemNumber", "OEM Number", "ОЕМ"]),
    name: getCell(raw, ["name", "Name", "title", "Title", "Наименование"]),
    brand: getCell(raw, ["brand", "Brand", "Бренд"]),
    price: getCell(raw, ["price", "Price", "priceFrom", "Price From", "Цена"]),
    rawJson: toInputJsonValue(raw),
  }));
}

function toRawSeedRowsFromText(rawInput: string): RawSeedRow[] {
  return rawInput
    .split(/\r?\n/g)
    .map((line) => normalizeWhitespace(line))
    .filter(Boolean)
    .map((line, index) => ({
      line: index + 1,
      article: "",
      oem: "",
      name: line,
      brand: "",
      price: "",
      rawJson: toInputJsonValue({ rawLine: line }),
    }));
}

function toInputJsonValue(input: unknown): Prisma.InputJsonValue {
  return JSON.parse(JSON.stringify(input ?? null)) as Prisma.InputJsonValue;
}

function parseDeterministically(
  row: {
    id: string;
    line: number;
    article: string | null;
    oem: string | null;
    name: string | null;
    brand: string | null;
    price: string | null;
  }
): ParsedRow {
  const article = normalizeWhitespace(String(row.article ?? "")) || null;
  const name = normalizeWhitespace(String(row.name ?? ""));
  const rawBrand = normalizeWhitespace(String(row.brand ?? ""));

  const oemFromField = extractOemCode(String(row.oem ?? ""));
  const oemFromArticle = extractOemCode(String(row.article ?? ""));
  const oemFromName = extractOemCode(name);
  const oem = oemFromField ?? oemFromArticle ?? oemFromName;

  const brandGuess = normalizeKnownBrand(rawBrand) || inferBrandFromText(`${name} ${rawBrand}`);
  const modelGuess = inferModelFromText(`${name} ${rawBrand}`);
  const side = inferSide(name);
  const position = inferPosition(name);
  const titleGuess = cleanTitleGuess(name, brandGuess, modelGuess);

  const price = parsePrice(row.price ?? undefined);

  return {
    id: row.id,
    line: row.line,
    article,
    titleGuess,
    brandGuess,
    modelGuess,
    side,
    position,
    oem,
    price,
  };
}

async function updateRowsInBatches(operations: Prisma.PrismaPromise<unknown>[]): Promise<void> {
  for (const batch of chunk(operations, UPDATE_BATCH_SIZE)) {
    await prisma.$transaction(batch);
  }
}

function mergeRawJson(
  rawJson: Prisma.JsonValue | Prisma.InputJsonValue | null | undefined,
  patch: Record<string, unknown>
): Prisma.InputJsonValue {
  if (!rawJson || typeof rawJson !== "object" || Array.isArray(rawJson)) {
    return toInputJsonValue(patch);
  }

  return toInputJsonValue({
    ...(rawJson as Record<string, unknown>),
    ...patch,
  });
}

async function normalizeWithAiBatch(rows: ParsedRow[]): Promise<Map<number, AiNormalizedItem>> {
  const apiKey = process.env.OPENAI_API_KEY?.trim();
  if (!apiKey || rows.length === 0) {
    return new Map();
  }

  const model = process.env.OPENAI_MODEL?.trim() || "gpt-4o-mini";
  const payloadRows = rows.map((row) => ({
    line: row.line,
    title_guess: row.titleGuess,
    brand_guess: row.brandGuess,
    model_guess: row.modelGuess,
  }));

  const prompt = `You normalize automotive parts rows.\n\nRules:\n- Return strict JSON array only.\n- Each item must be {"line":number,"title":string,"brand":string,"model":string,"category":string}.\n- Normalize only title, brand, model, category.\n- Keep line unchanged.\n- Never invent OEM, article, price, side, position, or any extra fields.\n- If uncertain, keep original guess values.\n- No markdown and no explanations.`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      temperature: 0,
      messages: [
        {
          role: "system",
          content: prompt,
        },
        {
          role: "user",
          content: JSON.stringify(payloadRows),
        },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error(`AI API error: ${response.status}`);
  }

  const result = (await response.json()) as {
    choices?: Array<{
      message?: {
        content?: string;
      };
    }>;
  };

  const content = result.choices?.[0]?.message?.content;
  if (!content) {
    throw new Error("AI normalization returned empty content");
  }

  const parsed = parseAiResponse(content);
  const rowsArray = Array.isArray(parsed.rows) ? parsed.rows : [];

  const map = new Map<number, AiNormalizedItem>();
  for (const candidate of rowsArray) {
    const normalized = toAiItem(candidate);
    if (!normalized) {
      continue;
    }

    map.set(normalized.line, normalized);
  }

  return map;
}

async function normalizeRowsWithAi(
  parsedRows: ParsedRow[],
  errors: string[]
): Promise<NormalizedRow[]> {
  const batches = chunk(parsedRows, MAX_AI_BATCH_SIZE);
  const normalizedChunks = await mapWithConcurrency(batches, CHUNK_PARALLELISM, async (batch) => {
    try {
      const aiMap = await normalizeWithAiBatch(batch);

      return batch.map((row) => {
        const aiValue = aiMap.get(row.line);
        const fallbackTitle = row.titleGuess;
        return {
          ...row,
          title: normalizeWhitespace(aiValue?.title || fallbackTitle),
          brand: normalizeWhitespace(aiValue?.brand || row.brandGuess),
          model: normalizeWhitespace(aiValue?.model || row.modelGuess),
          category: normalizeWhitespace(aiValue?.category || inferCategory(fallbackTitle) || "other"),
        };
      });
    } catch (error) {
      errors.push(`AI batch normalization failed: ${(error as Error).message}`);

      return batch.map((row) => ({
        ...row,
        title: row.titleGuess,
        brand: row.brandGuess,
        model: row.modelGuess,
        category: inferCategory(row.titleGuess),
      }));
    }
  });

  return normalizedChunks.flat();
}

async function ensureUniquePartSlug(baseSlug: string): Promise<string> {
  const fallbackBase = baseSlug || `part-${Date.now()}`;
  let candidate = fallbackBase;
  let suffix = 1;

  while (true) {
    const existing = await prisma.part.findUnique({
      where: {
        slug: candidate,
      },
      select: {
        id: true,
      },
    });

    if (!existing) {
      return candidate;
    }

    candidate = `${fallbackBase}-${suffix}`;
    suffix += 1;
  }
}

async function importValidatedRow(row: NormalizedRow): Promise<void> {
  const normalizedBrand = normalizeKnownBrand(row.brand) || normalizeWhitespace(row.brand);
  const normalizedModel = MODEL_KEY_MAP.get(normalizeAliasKey(row.model)) ?? normalizeWhitespace(row.model);
  const normalizedTitle = normalizeWhitespace(row.title);
  const normalizedCategory = normalizeWhitespace(row.category || "other");

  const brand = await prisma.brand.upsert({
    where: {
      slug: slugify(normalizedBrand),
    },
    update: {
      name: normalizedBrand,
    },
    create: {
      name: normalizedBrand,
      slug: slugify(normalizedBrand),
    },
  });

  const category = await prisma.category.upsert({
    where: {
      slug: slugify(normalizedCategory),
    },
    update: {
      name: normalizedCategory,
    },
    create: {
      name: normalizedCategory,
      slug: slugify(normalizedCategory),
    },
  });

  const carSlug = slugify(`${normalizedBrand} ${normalizedModel}`);
  const car = await prisma.car.upsert({
    where: {
      brandId_slug: {
        brandId: brand.id,
        slug: carSlug,
      },
    },
    update: {
      model: normalizedModel,
      brandId: brand.id,
    },
    create: {
      brandId: brand.id,
      model: normalizedModel,
      slug: carSlug,
    },
  });

  const existingPart = await prisma.part.findFirst({
    where: {
      title: normalizedTitle,
      oemNumber: row.oem,
      compatibilities: {
        some: {
          carId: car.id,
        },
      },
    },
    select: {
      id: true,
      slug: true,
    },
  });

  const partSlugBase = slugify(`${normalizedTitle} ${row.oem ?? normalizedModel}`);
  const partSlug = existingPart?.slug ?? (await ensureUniquePartSlug(partSlugBase));

  const part = existingPart
    ? await prisma.part.update({
        where: {
          id: existingPart.id,
        },
        data: {
          title: normalizedTitle,
          categoryId: category.id,
          oemNumber: row.oem,
          priceFrom: row.price,
          side: row.side,
          position: row.position,
          slug: partSlug,
          inStock: true,
        },
      })
    : await prisma.part.create({
        data: {
          title: normalizedTitle,
          categoryId: category.id,
          oemNumber: row.oem,
          priceFrom: row.price,
          side: row.side,
          position: row.position,
          slug: partSlug,
          inStock: true,
        },
      });

  await prisma.partCompatibility.createMany({
    data: [
      {
        partId: part.id,
        carId: car.id,
      },
    ],
    skipDuplicates: true,
  });
}

async function runCatalogIngestion(
  seedRows: RawSeedRow[],
  fileName: string,
  source: IngestionSource
): Promise<IngestionRunResult> {
  const rowsTotal = seedRows.length;
  const importJob = await prisma.importJob.create({
    data: {
      file: fileName,
      status: "pending",
      rowsTotal,
      rowsSuccess: 0,
      rowsFailed: 0,
      summary: {
        source,
        rowsTotal,
        rowsParsed: 0,
        rowsNormalized: 0,
        rowsImported: 0,
        rowsSuccess: 0,
        rowsFailed: 0,
        stageCounts: {
          raw: rowsTotal,
          parsed: 0,
          normalized: 0,
          validated: 0,
          imported: 0,
          failed: 0,
        },
        errors: [],
      },
    },
  });

  const errors: string[] = [];

  try {
    await prisma.importJob.update({
      where: {
        id: importJob.id,
      },
      data: {
        status: "processing",
      },
    });

    for (const batch of chunk(seedRows, CREATE_BATCH_SIZE)) {
      await prisma.rawImportRow.createMany({
        data: batch.map((row) => ({
          jobId: importJob.id,
          line: row.line,
          article: row.article,
          oem: row.oem,
          name: row.name,
          brand: row.brand,
          price: row.price,
          rawJson: row.rawJson,
          stage: "raw",
        })),
      });
    }

    const rawRows = await prisma.rawImportRow.findMany({
      where: {
        jobId: importJob.id,
      },
      orderBy: {
        line: "asc",
      },
      select: {
        id: true,
        line: true,
        article: true,
        oem: true,
        name: true,
        brand: true,
        price: true,
        rawJson: true,
      },
    });

    const parsedRows = rawRows.map((row) => parseDeterministically(row));
    const parsedById = new Map(parsedRows.map((row) => [row.id, row]));
    const rawJsonById = new Map<string, Prisma.JsonValue | Prisma.InputJsonValue | null>(
      rawRows.map((row) => [row.id, row.rawJson])
    );

    await updateRowsInBatches(
      rawRows.map((row) => {
        const mergedJson = mergeRawJson(row.rawJson, {
          parsed: {
            line: parsedById.get(row.id)?.line,
            title_guess: parsedById.get(row.id)?.titleGuess,
            brand_guess: parsedById.get(row.id)?.brandGuess,
            model_guess: parsedById.get(row.id)?.modelGuess,
            side: parsedById.get(row.id)?.side,
            position: parsedById.get(row.id)?.position,
          },
        });
        rawJsonById.set(row.id, mergedJson);

        return prisma.rawImportRow.update({
          where: {
            id: row.id,
          },
          data: {
            stage: "parsed",
            rawJson: mergedJson,
          },
        });
      })
    );

    const normalizedRows = await normalizeRowsWithAi(parsedRows, errors);

    await updateRowsInBatches(
      normalizedRows.map((row) => {
        const mergedJson = mergeRawJson(rawJsonById.get(row.id), {
          normalized: {
            line: row.line,
            title: row.title,
            brand: row.brand,
            model: row.model,
            category: row.category,
            side: row.side,
            position: row.position,
          },
        });
        rawJsonById.set(row.id, mergedJson);

        return prisma.rawImportRow.update({
          where: {
            id: row.id,
          },
          data: {
            stage: "normalized",
            rawJson: mergedJson,
          },
        });
      })
    );

    const validatedRows: NormalizedRow[] = [];

    await updateRowsInBatches(
      normalizedRows.map((row) => {
        const rowErrors: string[] = [];

        if (!row.title) {
          rowErrors.push("title must not be empty");
        }

        if (!row.brand) {
          rowErrors.push("brand must exist");
        }

        if (row.brand && !BRAND_KEY_MAP.has(normalizeAliasKey(row.brand))) {
          rowErrors.push("brand not in dictionary");
        }

        if (!row.model) {
          rowErrors.push("model must exist");
        }

        if (row.model && !MODEL_KEY_MAP.has(normalizeAliasKey(row.model))) {
          rowErrors.push("model not in dictionary");
        }

        if (rowErrors.length) {
          errors.push(`Line ${row.line}: ${rowErrors.join(", ")}`);

          const mergedJson = mergeRawJson(rawJsonById.get(row.id), {
            validationErrors: rowErrors,
          });
          rawJsonById.set(row.id, mergedJson);

          return prisma.rawImportRow.update({
            where: { id: row.id },
            data: {
              stage: "failed",
              rawJson: mergedJson,
            },
          });
        }

        validatedRows.push(row);
        return prisma.rawImportRow.update({
          where: { id: row.id },
          data: {
            stage: "validated",
          },
        });
      })
    );

    const dedupedRows: NormalizedRow[] = [];
    const seenKeys = new Set<string>();

    await updateRowsInBatches(
      validatedRows.map((row) => {
        const key = [row.title, row.brand, row.model, row.oem ?? ""]
          .map((entry) => normalizeAliasKey(entry))
          .join("|");

        if (seenKeys.has(key)) {
          const reason = "duplicate by title + brand + model + oem";
          errors.push(`Line ${row.line}: ${reason}`);

          const mergedJson = mergeRawJson(rawJsonById.get(row.id), {
            deduplicationError: reason,
          });
          rawJsonById.set(row.id, mergedJson);

          return prisma.rawImportRow.update({
            where: { id: row.id },
            data: {
              stage: "failed",
              rawJson: mergedJson,
            },
          });
        }

        seenKeys.add(key);
        dedupedRows.push(row);

        return prisma.rawImportRow.update({
          where: { id: row.id },
          data: {
            stage: "validated",
          },
        });
      })
    );

    let imported = 0;

    for (const row of dedupedRows) {
      try {
        await importValidatedRow(row);

        imported += 1;
        await prisma.rawImportRow.update({
          where: {
            id: row.id,
          },
          data: {
            stage: "imported",
          },
        });
      } catch (error) {
        errors.push(`Line ${row.line}: ${(error as Error).message}`);

        const mergedJson = mergeRawJson(rawJsonById.get(row.id), {
          importError: (error as Error).message,
        });
        rawJsonById.set(row.id, mergedJson);

        await prisma.rawImportRow.update({
          where: {
            id: row.id,
          },
          data: {
            stage: "failed",
            rawJson: mergedJson,
          },
        });
      }
    }

    const rowsSuccess = imported;
    const rowsFailed = rowsTotal - rowsSuccess;

    const stageCounts = {
      raw: rowsTotal,
      parsed: parsedRows.length,
      normalized: normalizedRows.length,
      validated: validatedRows.length,
      imported: rowsSuccess,
      failed: rowsFailed,
    };

    const summary = {
      source,
      rowsTotal,
      rowsParsed: parsedRows.length,
      rowsNormalized: normalizedRows.length,
      rowsImported: rowsSuccess,
      rowsSuccess,
      rowsFailed,
      stageCounts,
      errors,
    };

    const status = rowsFailed > 0 ? "failed" : "completed";

    await prisma.importJob.update({
      where: {
        id: importJob.id,
      },
      data: {
        status,
        rowsTotal,
        rowsSuccess,
        rowsFailed,
        summary,
      },
    });

    return {
      jobId: importJob.id,
      status,
      summary,
    };
  } catch (error) {
    const summary = {
      source,
      rowsTotal,
      rowsParsed: 0,
      rowsNormalized: 0,
      rowsImported: 0,
      rowsSuccess: 0,
      rowsFailed: rowsTotal,
      stageCounts: {
        raw: rowsTotal,
        parsed: 0,
        normalized: 0,
        validated: 0,
        imported: 0,
        failed: rowsTotal,
      },
      errors: [...errors, `Fatal error: ${(error as Error).message}`],
    };

    await prisma.importJob.update({
      where: {
        id: importJob.id,
      },
      data: {
        status: "failed",
        rowsTotal,
        rowsSuccess: 0,
        rowsFailed: rowsTotal,
        summary,
      },
    });

    throw error;
  }
}

export async function ingestCatalogUpload(file: File): Promise<IngestionRunResult> {
  const arrayBuffer = await file.arrayBuffer();
  const workbook = XLSX.read(arrayBuffer, { type: "array" });
  const firstSheetName = workbook.SheetNames[0];

  if (!firstSheetName) {
    throw new Error("No readable sheet found in uploaded file");
  }

  const worksheet = workbook.Sheets[firstSheetName];
  const records = XLSX.utils.sheet_to_json<Record<string, unknown>>(worksheet, {
    defval: "",
    raw: false,
  });

  const seedRows = toRawSeedRowsFromSheet(records);

  return runCatalogIngestion(seedRows, file.name || `upload-${Date.now()}.csv`, "upload");
}

export async function ingestCatalogRawText(rawInput: string): Promise<IngestionRunResult> {
  const seedRows = toRawSeedRowsFromText(rawInput);
  if (!seedRows.length) {
    throw new Error("No rows found in input text");
  }

  return runCatalogIngestion(seedRows, `ai-import-${Date.now()}.txt`, "ai");
}
