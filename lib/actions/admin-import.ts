"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import * as XLSX from "xlsx";

import { prisma } from "@/lib/db";

const rowSchema = z.object({
  title: z.string().min(1),
  oem: z.string().min(1),
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

  const numeric = Number(input);

  if (Number.isNaN(numeric) || numeric < 0) {
    return null;
  }

  return Math.round(numeric);
}

function getCell(record: Record<string, unknown>, keys: string[]): string {
  for (const key of keys) {
    if (record[key] !== undefined && record[key] !== null && String(record[key]).trim() !== "") {
      return String(record[key]).trim();
    }
  }

  return "";
}

function mapRawRow(raw: Record<string, unknown>) {
  return {
    title: getCell(raw, ["title", "Title", "name", "part", "Part"]),
    oem: getCell(raw, ["oem", "OEM", "oemNumber", "OEM Number"]),
    brand: getCell(raw, ["brand", "Brand"]),
    model: getCell(raw, ["model", "Model"]),
    category: getCell(raw, ["category", "Category"]),
    price: getCell(raw, ["price", "Price", "priceFrom", "Price From"]),
    image: getCell(raw, ["image", "Image", "imageUrl", "Image URL"]),
  };
}

export async function importPartsAction(formData: FormData) {
  const file = formData.get("file");

  if (!(file instanceof File)) {
    throw new Error("Необходимо выбрать файл");
  }

  const fileName = file.name || "upload";
  const extension = fileName.toLowerCase().split(".").pop() ?? "";

  if (!["csv", "xls", "xlsx"].includes(extension)) {
    throw new Error("Неподдерживаемый формат файла. Используйте CSV, XLS или XLSX.");
  }

  const importJob = await prisma.importJob.create({
    data: {
      file: fileName,
      status: "pending",
      summary: {
        totalRows: 0,
        createdParts: 0,
        updatedParts: 0,
        linkedCompatibilities: 0,
        errors: [],
      },
    },
  });

  try {
    await prisma.importJob.update({
      where: {
        id: importJob.id,
      },
      data: {
        status: "processing",
      },
    });

    const arrayBuffer = await file.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer, { type: "array" });
    const firstSheetName = workbook.SheetNames[0];

    if (!firstSheetName) {
      throw new Error("В файле не найден читаемый лист");
    }

    const worksheet = workbook.Sheets[firstSheetName];
    const rows = XLSX.utils.sheet_to_json<Record<string, unknown>>(worksheet, {
      defval: "",
      raw: false,
    });

    let createdParts = 0;
    let updatedParts = 0;
    let linkedCompatibilities = 0;
    const errors: string[] = [];

    for (let index = 0; index < rows.length; index += 1) {
      const rowNumber = index + 2;
      const mapped = mapRawRow(rows[index]);
      const parsed = rowSchema.safeParse(mapped);

      if (!parsed.success) {
        errors.push(`Строка ${rowNumber}: отсутствуют обязательные колонки`);
        continue;
      }

      const data = parsed.data;

      try {
        const brandName = data.brand.trim();
        const modelName = data.model.trim();
        const categoryName = data.category.trim();
        const title = data.title.trim();
        const oemNumber = data.oem.trim();

        const brand = await prisma.brand.upsert({
          where: {
            slug: slugify(brandName),
          },
          update: {
            name: brandName,
          },
          create: {
            name: brandName,
            slug: slugify(brandName),
          },
        });

        const category = await prisma.category.upsert({
          where: {
            slug: slugify(categoryName),
          },
          update: {
            name: categoryName,
          },
          create: {
            name: categoryName,
            slug: slugify(categoryName),
          },
        });

        const car = await prisma.car.upsert({
          where: {
            slug: slugify(`${brandName} ${modelName}`),
          },
          update: {
            brandId: brand.id,
            model: modelName,
          },
          create: {
            brandId: brand.id,
            model: modelName,
            slug: slugify(`${brandName} ${modelName}`),
          },
        });

        const existingPart = await prisma.part.findUnique({
          where: {
            oemNumber,
          },
          select: {
            id: true,
          },
        });

        const part = await prisma.part.upsert({
          where: {
            oemNumber,
          },
          update: {
            title,
            slug: slugify(`${title} ${oemNumber}`),
            categoryId: category.id,
            priceFrom: parsePrice(data.price),
            inStock: true,
          },
          create: {
            oemNumber,
            title,
            slug: slugify(`${title} ${oemNumber}`),
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
          data: [{
            partId: part.id,
            carId: car.id,
          }],
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
              alt: title,
            },
            create: {
              partId: part.id,
              url: data.image.trim(),
              alt: title,
              sortOrder: 0,
            },
          });
        }
      } catch (error) {
        errors.push(`Строка ${rowNumber}: ${(error as Error).message}`);
      }
    }

    await prisma.importJob.update({
      where: {
        id: importJob.id,
      },
      data: {
        status: errors.length ? "failed" : "completed",
        summary: {
          totalRows: rows.length,
          createdParts,
          updatedParts,
          linkedCompatibilities,
          errors,
        },
      },
    });
  } catch (error) {
    await prisma.importJob.update({
      where: {
        id: importJob.id,
      },
      data: {
        status: "failed",
        summary: {
          fatalError: (error as Error).message,
        },
      },
    });

    throw error;
  }

  revalidatePath("/admin");
  revalidatePath("/admin/import");
  revalidatePath("/admin/parts");
  revalidatePath("/catalog");
}
