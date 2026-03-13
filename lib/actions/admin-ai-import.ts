"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import * as XLSX from "xlsx";

import { prisma } from "@/lib/db";
import { parseCatalogTextWithAi } from "@/lib/services/ai-catalog-import";

export type AiImportState = {
  status: "idle" | "imported" | "needs_clarification" | "error";
  message?: string;
  aiResult?: unknown;
  importSummary?: unknown;
};

const formSchema = z.object({
  rawInput: z.string().min(10),
});

const rowSchema = z.object({
  line: z.number().int().positive(),
  title: z.string().min(1),
  oem: z.string().optional(),
  brand: z.string().min(1),
  model: z.string().min(1),
  category: z.string().min(1),
  price: z.union([z.string(), z.number()]).optional(),
  image: z.string().optional(),
});

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "");
}

function parsePrice(input: string | number | undefined): number | null {
  if (input === undefined || input === "") {
    return null;
  }

  const normalizedInput = String(input)
    .replace(/\s+/g, "")
    .replace(",", ".")
    .trim();

  const numeric = Number(normalizedInput);
  if (Number.isNaN(numeric) || numeric < 0) {
    return null;
  }

  return Math.round(numeric);
}

function normalizeCategoryName(input: string): string {
  const value = input.trim();

  if (!value || value === "-" || value === "—") {
    return "Прочее";
  }

  return value;
}

function resolveOemNumber(input: string | undefined, importJobId: string, line: number): string {
  const normalized = String(input ?? "").trim();

  if (normalized) {
    return normalized;
  }

  return `AI-NOOEM-${importJobId.slice(-8)}-${line}`;
}

function rowsToCsv(rows: Array<z.infer<typeof rowSchema>>): string {
  const exportRows = rows.map((row) => ({
    line: row.line,
    title: row.title,
    oem: row.oem,
    brand: row.brand,
    model: row.model,
    category: row.category,
    price: row.price ?? "",
    image: row.image ?? "",
  }));

  const sheet = XLSX.utils.json_to_sheet(exportRows);
  return XLSX.utils.sheet_to_csv(sheet);
}

function parseCsvRows(csv: string): Array<Record<string, unknown>> {
  const workbook = XLSX.read(csv, { type: "string" });
  const firstSheetName = workbook.SheetNames[0];

  if (!firstSheetName) {
    return [];
  }

  const worksheet = workbook.Sheets[firstSheetName];
  return XLSX.utils.sheet_to_json<Record<string, unknown>>(worksheet, {
    defval: "",
    raw: false,
  });
}

export async function importPartsFromAiAction(
  _prevState: AiImportState,
  formData: FormData
): Promise<AiImportState> {
  const parsedForm = formSchema.safeParse({
    rawInput: String(formData.get("rawInput") ?? ""),
  });

  if (!parsedForm.success) {
    return {
      status: "error",
      message: "Введите текст с деталями (минимум 10 символов)",
    };
  }

  let aiResult;

  try {
    const knownCars = await prisma.car.findMany({
      include: {
        brand: {
          select: {
            name: true,
          },
        },
      },
      orderBy: [
        { brand: { name: "asc" } },
        { model: "asc" },
      ],
      take: 500,
    });

    const knownModels = Array.from(
      new Set(
        knownCars
          .flatMap((car) => {
            const fullName = [car.brand.name, car.model, car.generation].filter(Boolean).join(" ").trim();
            return [fullName, car.model.trim()].filter(Boolean);
          })
          .map((entry) => entry.toLowerCase())
      )
    );

    aiResult = await parseCatalogTextWithAi(parsedForm.data.rawInput, { knownModels });
  } catch (error) {
    return {
      status: "error",
      message: (error as Error).message,
    };
  }

  if (aiResult.status !== "ok") {
    return {
      status: "needs_clarification",
      message: "AI нашел проблемы в данных. Исправьте строки и попробуйте снова.",
      aiResult,
    };
  }

  const validatedRows = aiResult.rows
    .map((row) => rowSchema.safeParse(row))
    .filter((entry): entry is { success: true; data: z.infer<typeof rowSchema> } => entry.success)
    .map((entry) => entry.data);

  if (!validatedRows.length) {
    return {
      status: "needs_clarification",
      message: "AI не вернул валидные строки для импорта.",
      aiResult,
    };
  }

  const csv = rowsToCsv(validatedRows);
  const parsedCsvRows = parseCsvRows(csv);

  const importJob = await prisma.importJob.create({
    data: {
      file: `ai-import-${Date.now()}.csv`,
      status: "pending",
      summary: {
        source: "ai",
        totalRows: parsedCsvRows.length,
        createdParts: 0,
        updatedParts: 0,
        linkedCompatibilities: 0,
        errors: [],
      },
    },
  });

  try {
    await prisma.importJob.update({
      where: { id: importJob.id },
      data: { status: "processing" },
    });

    let createdParts = 0;
    let updatedParts = 0;
    let linkedCompatibilities = 0;
    const errors: string[] = [];

    for (let index = 0; index < parsedCsvRows.length; index += 1) {
      const row = parsedCsvRows[index];
      const mapped = {
        line: Number(row.line) || index + 1,
        title: String(row.title ?? "").trim(),
        oem: String(row.oem ?? "").trim(),
        brand: String(row.brand ?? "").trim(),
        model: String(row.model ?? "").trim(),
        category: normalizeCategoryName(String(row.category ?? "")),
        price: String(row.price ?? "").trim(),
        image: String(row.image ?? "").trim(),
      };

      const parsed = rowSchema.safeParse(mapped);

      if (!parsed.success) {
        errors.push(`Строка ${mapped.line}: отсутствуют обязательные поля`);
        continue;
      }

      const data = parsed.data;
      const oemNumber = resolveOemNumber(data.oem, importJob.id, data.line);

      try {
        const brand = await prisma.brand.upsert({
          where: { slug: slugify(data.brand) },
          update: { name: data.brand },
          create: { name: data.brand, slug: slugify(data.brand) },
        });

        const category = await prisma.category.upsert({
          where: { slug: slugify(data.category) },
          update: { name: data.category },
          create: { name: data.category, slug: slugify(data.category) },
        });

        const car = await prisma.car.upsert({
          where: { slug: slugify(`${data.brand} ${data.model}`) },
          update: {
            brandId: brand.id,
            model: data.model,
          },
          create: {
            brandId: brand.id,
            model: data.model,
            slug: slugify(`${data.brand} ${data.model}`),
          },
        });

        const existingPart = await prisma.part.findUnique({
          where: { oemNumber },
          select: { id: true },
        });

        const part = await prisma.part.upsert({
          where: { oemNumber },
          update: {
            title: data.title,
            slug: slugify(`${data.title} ${oemNumber}`),
            categoryId: category.id,
            priceFrom: parsePrice(data.price),
            inStock: true,
          },
          create: {
            title: data.title,
            oemNumber,
            slug: slugify(`${data.title} ${oemNumber}`),
            categoryId: category.id,
            priceFrom: parsePrice(data.price),
            inStock: true,
          },
        });

        if (existingPart) {
          updatedParts += 1;
        } else {
          createdParts += 1;
        }

        const compatibility = await prisma.partCompatibility.createMany({
          data: [{ partId: part.id, carId: car.id }],
          skipDuplicates: true,
        });

        linkedCompatibilities += compatibility.count;

        if (data.image?.trim()) {
          await prisma.image.upsert({
            where: {
              partId_sortOrder: {
                partId: part.id,
                sortOrder: 0,
              },
            },
            update: {
              url: data.image.trim(),
              alt: data.title,
            },
            create: {
              partId: part.id,
              url: data.image.trim(),
              alt: data.title,
              sortOrder: 0,
            },
          });
        }
      } catch (error) {
        errors.push(`Строка ${data.line}: ${(error as Error).message}`);
      }
    }

    const summary = {
      source: "ai",
      totalRows: parsedCsvRows.length,
      createdParts,
      updatedParts,
      linkedCompatibilities,
      errors,
      aiNotes: aiResult.notes,
    };

    await prisma.importJob.update({
      where: { id: importJob.id },
      data: {
        status: errors.length ? "failed" : "completed",
        summary,
      },
    });

    revalidatePath("/admin");
    revalidatePath("/admin/import");
    revalidatePath("/admin/ai-import");
    revalidatePath("/admin/parts");
    revalidatePath("/catalog");

    return {
      status: errors.length ? "needs_clarification" : "imported",
      message: errors.length
        ? "Импорт завершен с ошибками. Проверьте строки в JSON ниже."
        : "AI-импорт успешно завершен.",
      aiResult,
      importSummary: summary,
    };
  } catch (error) {
    await prisma.importJob.update({
      where: { id: importJob.id },
      data: {
        status: "failed",
        summary: {
          source: "ai",
          fatalError: (error as Error).message,
        },
      },
    });

    return {
      status: "error",
      message: (error as Error).message,
      aiResult,
    };
  }
}
