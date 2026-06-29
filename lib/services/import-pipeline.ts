import { prisma } from "@/lib/db";
import { slugifyToLatin } from "@/lib/slug";
import { parseCatalogTextWithAi, type AiCatalogImportResult, type AiImportRow } from "@/lib/services/ai-catalog-import";

export type IngestionAcceptedPart = {
  line: number;
  partId: string;
  title: string;
  brand: string;
  models: string[];
};

export type IngestionRunSummary = {
  rowsTotal: number;
  rowsSuccess: number;
  rowsFailed: number;
  stageCounts: Record<string, number>;
  errors: string[];
  logs: string[];
  acceptedParts: IngestionAcceptedPart[];
};

export type IngestionRunResult = {
  aiResult?: AiCatalogImportResult;
  summary: IngestionRunSummary;
};

export type IngestionRunOptions = {
  signal?: AbortSignal;
  onLog?: (entry: string) => void;
  onProgress?: (summary: IngestionRunSummary) => void;
};

type ImportLookupCache = {
  brandIdBySlug: Map<string, string>;
  categoryIdBySlug: Map<string, string>;
  modelIdByBrandSlug: Map<string, string>;
};

function appendLog(summary: IngestionRunSummary, message: string, onLog?: (entry: string) => void) {
  const entry = `${new Date().toISOString()} ${message}`;
  summary.logs.push(entry);
  onLog?.(entry);
  console.info(`[ai-import][pipeline] ${entry}`);
}

function emitProgress(summary: IngestionRunSummary, onProgress?: (summary: IngestionRunSummary) => void) {
  if (!onProgress) {
    return;
  }

  onProgress({
    ...summary,
    stageCounts: { ...summary.stageCounts },
    errors: [...summary.errors],
    logs: [...summary.logs],
    acceptedParts: [...summary.acceptedParts],
  });
}

function throwIfAborted(signal?: AbortSignal) {
  if (!signal?.aborted) {
    return;
  }

  throw new Error("Импорт остановлен пользователем");
}

function parsePrice(value: string | number | undefined): number | null {
  if (value === undefined || value === null || value === "") {
    return null;
  }

  if (typeof value === "number") {
    return Number.isFinite(value) ? Number(value.toFixed(2)) : null;
  }

  const trimmed = value.trim();
  if (!trimmed) {
    return null;
  }

  const normalized = trimmed.replace(/\s+/g, "").replace(",", ".").replace(/[^\d.-]/g, "");
  const numeric = Number(normalized);

  if (!Number.isFinite(numeric)) {
    return null;
  }

  return Number(numeric.toFixed(2));
}

function splitModelNames(row: AiImportRow): string[] {
  const fromArray = Array.from(new Set((row.models ?? []).map((entry) => entry.trim()).filter(Boolean)));
  if (fromArray.length) {
    return fromArray;
  }

  const raw = row.model?.trim() ?? "";
  if (!raw) {
    return [];
  }

  return Array.from(
    new Set(
      raw
        .split(/[;,|\n]/)
        .map((entry) => entry.trim())
        .filter(Boolean)
    )
  );
}

async function resolveBrandId(brandName: string, cache: ImportLookupCache): Promise<string> {
  const normalizedName = brandName.trim();
  const slug = slugifyToLatin(normalizedName);
  const cachedId = cache.brandIdBySlug.get(slug);

  if (cachedId) {
    return cachedId;
  }

  const brand = await prisma.brand.upsert({
    where: { slug },
    update: { name: normalizedName },
    create: { name: normalizedName, slug },
    select: { id: true },
  });

  cache.brandIdBySlug.set(slug, brand.id);

  return brand.id;
}

async function resolveModelIds(brandId: string, modelNames: string[], cache: ImportLookupCache): Promise<string[]> {
  const modelIds: string[] = [];

  for (const modelName of modelNames) {
    const normalizedModel = modelName.trim();
    const slug = slugifyToLatin(normalizedModel);
    if (!slug) {
      continue;
    }

    const key = `${brandId}:${slug}`;
    const cachedId = cache.modelIdByBrandSlug.get(key);

    if (cachedId) {
      modelIds.push(cachedId);
      continue;
    }

    const record = await prisma.model.upsert({
      where: {
        brandId_slug: {
          brandId,
          slug,
        },
      },
      update: {
        model: normalizedModel,
      },
      create: {
        brandId,
        model: normalizedModel,
        slug,
      },
      select: {
        id: true,
      },
    });

    cache.modelIdByBrandSlug.set(key, record.id);
    modelIds.push(record.id);
  }

  return Array.from(new Set(modelIds));
}

async function resolveCategoryId(categoryName: string, cache: ImportLookupCache): Promise<string> {
  const normalizedName = categoryName.trim() || "прочее";
  const slug = slugifyToLatin(normalizedName) || "prochee";
  const cachedId = cache.categoryIdBySlug.get(slug);

  if (cachedId) {
    return cachedId;
  }

  const category = await prisma.category.upsert({
    where: { slug },
    update: { name: normalizedName },
    create: { name: normalizedName, slug },
    select: { id: true },
  });

  cache.categoryIdBySlug.set(slug, category.id);

  return category.id;
}

function resolvePartSlug(base: string): string {
  return slugifyToLatin(base) || `part-${Date.now()}`;
}

function splitRawInputToChunks(rawInput: string, maxLinesPerChunk: number): string[] {
  const normalizedMax = Math.max(20, Math.floor(maxLinesPerChunk));
  const lines = rawInput
    .split(/\r?\n/)
    .map((entry) => entry.trimEnd())
    .filter((entry) => entry.trim().length > 0);

  if (lines.length <= normalizedMax) {
    return [rawInput];
  }

  const header = lines[0] ?? "";
  const dataLines = header ? lines.slice(1) : lines;
  const payloadSize = Math.max(1, normalizedMax - (header ? 1 : 0));
  const chunks: string[] = [];

  for (let index = 0; index < dataLines.length; index += payloadSize) {
    const part = dataLines.slice(index, index + payloadSize);
    const chunkLines = header ? [header, ...part] : part;
    chunks.push(chunkLines.join("\n"));
  }

  return chunks;
}

function buildBaseSummary(errors: string[] = []): IngestionRunSummary {
  return {
    rowsTotal: 0,
    rowsSuccess: 0,
    rowsFailed: 0,
    stageCounts: {},
    errors,
    logs: [],
    acceptedParts: [],
  };
}

export async function ingestCatalogUpload(_file: File): Promise<IngestionRunResult> {
  return {
    summary: buildBaseSummary(["Импорт файла пока не поддержан. Используйте импорт сырого текста."]),
  };
}

export async function ingestCatalogRawText(rawInput: string, options?: IngestionRunOptions): Promise<IngestionRunResult> {
  const summary: IngestionRunSummary = {
    rowsTotal: 0,
    rowsSuccess: 0,
    rowsFailed: 0,
    stageCounts: {},
    errors: [],
    logs: [],
    acceptedParts: [],
  };

  appendLog(summary, `Старт импорта. Размер входного текста: ${rawInput.length} символов`, options?.onLog);
  emitProgress(summary, options?.onProgress);
  throwIfAborted(options?.signal);

  const brands = await prisma.brand.findMany({
    orderBy: { name: "asc" },
    select: { id: true, name: true, slug: true },
  });

  const categories = await prisma.category.findMany({
    orderBy: { name: "asc" },
    select: { id: true, name: true, slug: true },
  });

  const models = await prisma.model.findMany({
    select: {
      id: true,
      brandId: true,
      model: true,
      slug: true,
      brand: { select: { name: true } },
    },
    orderBy: [{ brand: { name: "asc" } }, { model: "asc" }],
  });

  const lookupCache: ImportLookupCache = {
    brandIdBySlug: new Map(brands.map((entry) => [entry.slug, entry.id])),
    categoryIdBySlug: new Map(categories.map((entry) => [entry.slug, entry.id])),
    modelIdByBrandSlug: new Map(models.map((entry) => [`${entry.brandId}:${entry.slug}`, entry.id])),
  };

  appendLog(
    summary,
    `Контекст из БД получен: brands=${brands.length}, models=${models.length}, categories=${categories.length}`,
    options?.onLog
  );
  emitProgress(summary, options?.onProgress);
  throwIfAborted(options?.signal);

  const chunkLines = Number(process.env.OPENAI_IMPORT_CHUNK_LINES ?? 220);
  const chunks = splitRawInputToChunks(rawInput, chunkLines);
  appendLog(summary, `Текст разбит на чанки для AI: ${chunks.length} (maxLines=${chunkLines})`, options?.onLog);
  summary.stageCounts.ai_chunks_total = chunks.length;
  summary.stageCounts.ai_chunks_done = 0;
  emitProgress(summary, options?.onProgress);

  const mergedRows: AiCatalogImportResult["rows"] = [];
  const mergedErrors: AiCatalogImportResult["errors"] = [];
  const mergedNotes = new Set<string>();

  for (let index = 0; index < chunks.length; index += 1) {
    throwIfAborted(options?.signal);

    const chunk = chunks[index]!;
    appendLog(summary, `Запуск AI-парсинга чанка ${index + 1}/${chunks.length}`, options?.onLog);
    emitProgress(summary, options?.onProgress);

    const chunkResult = await parseCatalogTextWithAi(chunk, {
      knownBrands: brands.map((entry) => entry.name),
      knownModels: models.map((entry) => [entry.brand.name, entry.model].filter(Boolean).join(" ")),
      knownBrandModels: models.map((entry) => ({
        brand: entry.brand.name,
        model: entry.model,
      })),
      signal: options?.signal,
    });

    mergedRows.push(...chunkResult.rows);
    mergedErrors.push(...chunkResult.errors);
    for (const note of chunkResult.notes) {
      mergedNotes.add(note);
    }

    appendLog(
      summary,
      `Чанк ${index + 1}/${chunks.length} обработан: rows=${chunkResult.rows.length}, errors=${chunkResult.errors.length}`,
      options?.onLog
    );
    summary.stageCounts.ai_chunks_done = index + 1;
    summary.stageCounts.ai_rows_collected = mergedRows.length;
    summary.stageCounts.ai_errors_collected = mergedErrors.length;
    summary.rowsTotal = mergedRows.length;
    summary.rowsFailed = mergedErrors.length;
    emitProgress(summary, options?.onProgress);
  }

  const aiResult: AiCatalogImportResult = {
    status: mergedErrors.length === 0 && mergedRows.length > 0 ? "ok" : "needs_clarification",
    rows: mergedRows,
    errors: mergedErrors,
    notes: Array.from(mergedNotes),
  };

  appendLog(
    summary,
    `AI вернул rows=${aiResult.rows.length}, errors=${aiResult.errors.length}, notes=${aiResult.notes.length}`,
    options?.onLog
  );

  summary.rowsTotal = aiResult.rows.length;
  summary.rowsSuccess = 0;
  summary.rowsFailed = aiResult.errors.length;
  summary.stageCounts = {
    parsed_rows: aiResult.rows.length,
    ai_errors: aiResult.errors.length,
    ai_chunks_total: chunks.length,
  };
  summary.errors = aiResult.errors.map((entry) => `line ${entry.line} ${entry.field}: ${entry.message}`);
  const verboseRowLogs = process.env.AI_IMPORT_VERBOSE_ROW_LOGS === "1";
  let processedRows = 0;
  summary.stageCounts.processed_rows = 0;
  summary.stageCounts.saved_rows = 0;
  summary.stageCounts.failed_rows = summary.rowsFailed;
  summary.stageCounts.accepted_parts = 0;
  emitProgress(summary, options?.onProgress);

  for (const row of aiResult.rows) {
    try {
      throwIfAborted(options?.signal);
      processedRows += 1;
      summary.stageCounts.processed_rows = processedRows;

      const title = row.title.trim();
      const brandName = row.brand.trim();
      const categoryName = row.category.trim() || "прочее";
      const modelNames = splitModelNames(row);

      if (verboseRowLogs) {
        appendLog(
          summary,
          `Обработка строки #${row.line}: title="${title}", brand="${brandName}", models=${modelNames.join(" | ") || "-"}`,
          options?.onLog
        );
      } else if (processedRows % 50 === 0) {
        appendLog(summary, `Прогресс: обработано ${processedRows}/${aiResult.rows.length} строк`, options?.onLog);
      }

      if (!title || !brandName || !modelNames.length) {
        summary.rowsFailed += 1;
        summary.errors.push(`line ${row.line}: отсутствуют обязательные поля title/brand/models`);
        appendLog(summary, `Строка #${row.line} отклонена: отсутствуют обязательные поля`, options?.onLog);
        summary.stageCounts.failed_rows = summary.rowsFailed;
        emitProgress(summary, options?.onProgress);
        continue;
      }

      const brandId = await resolveBrandId(brandName, lookupCache);
      const modelIds = await resolveModelIds(brandId, modelNames, lookupCache);
      if (!modelIds.length) {
        summary.rowsFailed += 1;
        summary.errors.push(`line ${row.line}: не удалось определить модели`);
        appendLog(summary, `Строка #${row.line} отклонена: не удалось определить modelIds`, options?.onLog);
        summary.stageCounts.failed_rows = summary.rowsFailed;
        emitProgress(summary, options?.onProgress);
        continue;
      }

      const categoryId = await resolveCategoryId(categoryName, lookupCache);
      const priceFrom = parsePrice(row.price);
      const slug = resolvePartSlug(title);

      const part = await prisma.part.upsert({
        where: { slug },
        update: {
          title,
          categoryId,
          priceFrom,
          inStock: true,
          isVisible: true,
        },
        create: {
          slug,
          title,
          categoryId,
          priceFrom,
          inStock: true,
          isVisible: true,
        },
        select: {
          id: true,
        },
      });

      await prisma.partCategory.createMany({
        data: [{ partId: part.id, categoryId }],
        skipDuplicates: true,
      });

      await prisma.partFitment.createMany({
        data: modelIds.map((modelId) => ({
          partId: part.id,
          modelId,
        })),
        skipDuplicates: true,
      });

      if (row.image?.trim()) {
        await prisma.image.upsert({
          where: {
            partId_sortOrder: {
              partId: part.id,
              sortOrder: 0,
            },
          },
          update: {
            url: row.image.trim(),
            alt: title,
          },
          create: {
            partId: part.id,
            url: row.image.trim(),
            alt: title,
            sortOrder: 0,
          },
        });
      }

      summary.rowsSuccess += 1;
      summary.acceptedParts.push({
        line: row.line,
        partId: part.id,
        title,
        brand: brandName,
        models: modelNames,
      });
      summary.stageCounts.saved_rows = summary.rowsSuccess;
      summary.stageCounts.accepted_parts = summary.acceptedParts.length;
      emitProgress(summary, options?.onProgress);

      if (verboseRowLogs) {
        appendLog(summary, `Строка #${row.line} принята. partId=${part.id}, fitments=${modelIds.length}`, options?.onLog);
      }
    } catch (error) {
      if (error instanceof Error && error.message === "Импорт остановлен пользователем") {
        throw error;
      }

      summary.rowsFailed += 1;
      const reason = error instanceof Error ? error.message : "Ошибка сохранения";
      summary.errors.push(`line ${row.line}: ${reason}`);
      summary.stageCounts.failed_rows = summary.rowsFailed;
      emitProgress(summary, options?.onProgress);
      appendLog(summary, `Строка #${row.line} завершилась ошибкой: ${reason}`, options?.onLog);
    }
  }

  summary.stageCounts.saved_rows = summary.rowsSuccess;
  summary.stageCounts.failed_rows = summary.rowsFailed;
  summary.stageCounts.accepted_parts = summary.acceptedParts.length;
  summary.stageCounts.processed_rows = processedRows;

  appendLog(
    summary,
    `Импорт завершен. accepted=${summary.acceptedParts.length}, success=${summary.rowsSuccess}, failed=${summary.rowsFailed}`,
    options?.onLog
  );
  emitProgress(summary, options?.onProgress);

  return {
    aiResult,
    summary,
  };
}
