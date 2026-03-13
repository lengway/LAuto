"use server";

import { revalidatePath } from "next/cache";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { z } from "zod";

import { prisma } from "@/lib/db";

const basePartSchema = z.object({
  title: z.string().min(2),
  oemNumber: z.string().min(2),
  categoryId: z.string().min(1),
  priceFrom: z.union([z.string(), z.number()]).optional().transform((value) => {
    if (value === undefined || value === "") {
      return null;
    }

    const numeric = Number(value);
    if (Number.isNaN(numeric) || numeric < 0) {
      return null;
    }

    return Math.round(numeric);
  }),
  inStock: z.boolean(),
  compatibleCarModels: z.string().optional(),
});

function toSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "");
}

function parseCommon(formData: FormData) {
  const raw = {
    title: String(formData.get("title") ?? ""),
    oemNumber: String(formData.get("oemNumber") ?? ""),
    categoryId: String(formData.get("categoryId") ?? ""),
    priceFrom: String(formData.get("priceFrom") ?? ""),
    inStock:
      formData.get("inStock") === "true" ||
      formData.get("inStock") === "on" ||
      formData.get("inStock") === "1",
    compatibleCarModels: String(formData.get("compatibleCarModels") ?? ""),
  };

  return basePartSchema.parse(raw);
}

type DbCarLookup = {
  id: string;
  model: string;
  generation: string | null;
  slug: string;
  brand: {
    name: string;
  };
};

async function resolveCarIds(input: string | undefined): Promise<string[]> {
  const requestedNames = (input ?? "")
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);

  const normalizedNames = Array.from(new Set(requestedNames.map((entry) => entry.toLowerCase())));

  if (!normalizedNames.length) {
    return [];
  }

  const cars = (await prisma.car.findMany({
    include: {
      brand: true,
    },
  })) as DbCarLookup[];

  const matched = cars.filter((car) => {
    const fullName = [car.brand.name, car.model, car.generation].filter(Boolean).join(" ").toLowerCase();
    return normalizedNames.includes(fullName) || normalizedNames.includes(car.slug.toLowerCase());
  });

  return matched.map((entry) => entry.id);
}

async function replaceCompatibilities(partId: string, carIds: string[]) {
  await prisma.partCompatibility.deleteMany({
    where: {
      partId,
    },
  });

  if (!carIds.length) {
    return;
  }

  await prisma.partCompatibility.createMany({
    data: carIds.map((carId) => ({ partId, carId })),
    skipDuplicates: true,
  });
}

function getSafeFileExtension(fileName: string): string {
  const extension = fileName.split(".").pop()?.toLowerCase() ?? "";

  if (["jpg", "jpeg", "png", "webp", "gif", "avif"].includes(extension)) {
    return extension;
  }

  return "jpg";
}

async function savePartImage(formData: FormData, partId: string, title: string) {
  const candidate = formData.get("image");

  if (!(candidate instanceof File) || candidate.size === 0) {
    return;
  }

  if (!candidate.type.startsWith("image/")) {
    throw new Error("Нужно загрузить файл изображения");
  }

  const extension = getSafeFileExtension(candidate.name);
  const fileName = `${partId}-${Date.now()}.${extension}`;
  const uploadDir = path.join(process.cwd(), "public", "uploads", "parts");
  const absolutePath = path.join(uploadDir, fileName);
  const publicUrl = `/uploads/parts/${fileName}`;

  await mkdir(uploadDir, { recursive: true });
  const bytes = await candidate.arrayBuffer();
  await writeFile(absolutePath, Buffer.from(bytes));

  await prisma.image.upsert({
    where: {
      partId_sortOrder: {
        partId,
        sortOrder: 0,
      },
    },
    update: {
      url: publicUrl,
      alt: title,
    },
    create: {
      partId,
      url: publicUrl,
      alt: title,
      sortOrder: 0,
    },
  });
}

export async function createPartAction(formData: FormData) {
  const parsed = parseCommon(formData);
  const slugBase = toSlug(`${parsed.title} ${parsed.oemNumber}`);
  const carIds = await resolveCarIds(parsed.compatibleCarModels);

  const part = await prisma.part.create({
    data: {
      title: parsed.title,
      oemNumber: parsed.oemNumber,
      slug: slugBase || `part-${Date.now()}`,
      categoryId: parsed.categoryId,
      priceFrom: parsed.priceFrom,
      inStock: parsed.inStock,
    },
  });

  await replaceCompatibilities(part.id, carIds);
  await savePartImage(formData, part.id, parsed.title);

  revalidatePath("/admin");
  revalidatePath("/admin/parts");
  revalidatePath("/catalog");
}

export async function updatePartAction(formData: FormData) {
  const partId = String(formData.get("partId") ?? "");

  if (!partId) {
    throw new Error("partId is required");
  }

  const parsed = parseCommon(formData);
  const slugBase = toSlug(`${parsed.title} ${parsed.oemNumber}`);
  const carIds = await resolveCarIds(parsed.compatibleCarModels);

  const part = await prisma.part.update({
    where: {
      id: partId,
    },
    data: {
      title: parsed.title,
      oemNumber: parsed.oemNumber,
      slug: slugBase || `part-${Date.now()}`,
      categoryId: parsed.categoryId,
      priceFrom: parsed.priceFrom,
      inStock: parsed.inStock,
    },
  });

  await replaceCompatibilities(part.id, carIds);
  await savePartImage(formData, part.id, parsed.title);

  revalidatePath("/admin");
  revalidatePath("/admin/parts");
  revalidatePath("/catalog");
  revalidatePath(`/part/${part.slug}`);
}

export async function deletePartAction(formData: FormData) {
  const partId = String(formData.get("partId") ?? "");

  if (!partId) {
    throw new Error("partId is required");
  }

  const existing = await prisma.part.findUnique({
    where: {
      id: partId,
    },
    select: {
      slug: true,
    },
  });

  await prisma.part.delete({
    where: {
      id: partId,
    },
  });

  revalidatePath("/admin");
  revalidatePath("/admin/parts");
  revalidatePath("/catalog");

  if (existing?.slug) {
    revalidatePath(`/part/${existing.slug}`);
  }
}
