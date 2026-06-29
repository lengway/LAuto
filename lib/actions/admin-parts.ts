"use server";

import { revalidatePath } from "next/cache";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { z } from "zod";

import { prisma } from "@/lib/db";
import { slugifyToLatin } from "@/lib/slug";

const basePartSchema = z.object({
  title: z.string().min(2),
  description: z.string().optional().transform((value) => value?.trim() || null),
  categorySelection: z.string().optional(),
  imageUrl: z.string().optional().transform((value) => value?.trim() || null),
  imageUrls: z.string().optional().transform((value) => value?.trim() || null),
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

function parseCommon(formData: FormData) {
  const raw = {
    title: String(formData.get("title") ?? ""),
    description: String(formData.get("description") ?? ""),
    categorySelection: String(formData.get("categorySelection") ?? ""),
    imageUrl: String(formData.get("imageUrl") ?? ""),
    imageUrls: String(formData.get("imageUrls") ?? ""),
    priceFrom: String(formData.get("priceFrom") ?? ""),
    inStock:
      formData.get("inStock") === "true" ||
      formData.get("inStock") === "on" ||
      formData.get("inStock") === "1",
    compatibleCarModels: String(formData.get("compatibleCarModels") ?? ""),
  };

  const parsed = basePartSchema.parse(raw);

  if (!parsed.categorySelection?.trim()) {
    throw new Error("Выберите хотя бы одну категорию");
  }

  return {
    ...parsed,
    categorySelection: parsed.categorySelection,
  };
}

type CategorySelectionItem = {
  id: string;
  name: string;
  isNew: boolean;
};

function parseCategorySelection(selection: string | undefined): CategorySelectionItem[] {
  if (!selection?.trim()) {
    return [];
  }

  let parsed: unknown;

  try {
    parsed = JSON.parse(selection);
  } catch {
    throw new Error("Некорректный формат категорий");
  }

  if (!Array.isArray(parsed)) {
    throw new Error("Некорректный формат категорий");
  }

  const normalized: CategorySelectionItem[] = [];

  for (const item of parsed) {
    if (!item || typeof item !== "object") {
      continue;
    }

    const maybe = item as Partial<CategorySelectionItem>;
    const name = String(maybe.name ?? "").trim();
    const id = String(maybe.id ?? "").trim();
    const isNew = Boolean(maybe.isNew);

    if (!name) {
      continue;
    }

    if (!isNew && !id) {
      continue;
    }

    normalized.push({ id, name, isNew });
  }

  return normalized;
}

async function resolveCategoryIds(selection: string | undefined): Promise<string[]> {
  const items = parseCategorySelection(selection);
  if (!items.length) {
    throw new Error("Выберите хотя бы одну категорию");
  }

  const categoryIds: string[] = [];

  for (const item of items) {
    if (!item.isNew) {
      categoryIds.push(item.id);
      continue;
    }

    const slug = slugifyToLatin(item.name);
    if (!slug) {
      continue;
    }

    const category = await prisma.category.upsert({
      where: { slug },
      update: { name: item.name },
      create: { name: item.name, slug },
      select: { id: true },
    });

    categoryIds.push(category.id);
  }

  const uniqueIds = Array.from(new Set(categoryIds.filter(Boolean)));
  if (!uniqueIds.length) {
    throw new Error("Выберите хотя бы одну категорию");
  }

  return uniqueIds;
}

async function buildUniquePartSlug(title: string, currentPartId?: string): Promise<string> {
  const baseSlug = slugifyToLatin(title) || `part-${Date.now()}`;
  let candidate = baseSlug;

  for (let index = 0; index < 100; index += 1) {
    const existing = await prisma.part.findUnique({
      where: {
        slug: candidate,
      },
      select: {
        id: true,
      },
    });

    if (!existing || existing.id === currentPartId) {
      return candidate;
    }

    candidate = `${baseSlug}-${index + 2}`;
  }

  return `${baseSlug}-${Date.now()}`;
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

  const cars = (await prisma.model.findMany({
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
  await prisma.partFitment.deleteMany({
    where: {
      partId,
    },
  });

  if (!carIds.length) {
    return;
  }

  await prisma.partFitment.createMany({
    data: carIds.map((carId) => ({ partId, modelId: carId })),
    skipDuplicates: true,
  });
}

async function replacePartCategories(partId: string, categoryIds: string[]) {
  await prisma.partCategory.deleteMany({
    where: {
      partId,
    },
  });

  if (!categoryIds.length) {
    return;
  }

  await prisma.partCategory.createMany({
    data: categoryIds.map((categoryId) => ({ partId, categoryId })),
    skipDuplicates: true,
  });
}

function parseImageUrlsInput(input?: string | null): string[] {
  if (!input?.trim()) {
    return [];
  }

  return Array.from(
    new Set(
      input
        .split(/[\n,;]+/)
        .map((entry) => entry.trim())
        .filter(Boolean)
    )
  );
}

function getSafeFileExtension(fileName: string): string {
  const extension = fileName.split(".").pop()?.toLowerCase() ?? "";

  if (["jpg", "jpeg", "png", "webp", "gif", "avif"].includes(extension)) {
    return extension;
  }

  return "jpg";
}

async function replacePartImages(
  formData: FormData,
  partId: string,
  title: string,
  imageUrlFromInput?: string | null,
  imageUrlsInput?: string | null
) {
  const uploadCandidates = [formData.get("image"), ...formData.getAll("images")]
    .filter((entry): entry is File => entry instanceof File && entry.size > 0);

  const normalizedUrls = Array.from(
    new Set([
      ...(imageUrlFromInput?.trim() ? [imageUrlFromInput.trim()] : []),
      ...parseImageUrlsInput(imageUrlsInput),
    ])
  );

  const uploadDir = path.join(process.cwd(), "public", "uploads", "parts");
  const uploadedUrls: string[] = [];

  if (uploadCandidates.length) {
    await mkdir(uploadDir, { recursive: true });
  }

  for (let index = 0; index < uploadCandidates.length; index += 1) {
    const candidate = uploadCandidates[index]!;

    if (!candidate.type.startsWith("image/")) {
      throw new Error("Нужно загрузить файл изображения");
    }

    const extension = getSafeFileExtension(candidate.name);
    const fileName = `${partId}-${Date.now()}-${index}.${extension}`;
    const absolutePath = path.join(uploadDir, fileName);
    const publicUrl = `/uploads/parts/${fileName}`;

    const bytes = await candidate.arrayBuffer();
    await writeFile(absolutePath, Buffer.from(bytes));
    uploadedUrls.push(publicUrl);
  }

  const finalUrls = [...normalizedUrls, ...uploadedUrls];

  await prisma.image.deleteMany({
    where: {
      partId,
    },
  });

  if (!finalUrls.length) {
    return;
  }

  await prisma.image.createMany({
    data: finalUrls.map((url, sortOrder) => ({
      partId,
      url,
      alt: title,
      sortOrder,
    })),
  });
}

export async function createPartAction(formData: FormData) {
  const parsed = parseCommon(formData);
  const slug = await buildUniquePartSlug(parsed.title);
  const carIds = await resolveCarIds(parsed.compatibleCarModels);
  const categoryIds = await resolveCategoryIds(parsed.categorySelection);
  const categoryId = categoryIds[0]!;

  const part = await prisma.part.create({
    data: {
      title: parsed.title,
      description: parsed.description,
      slug,
      categoryId,
      priceFrom: parsed.priceFrom,
      inStock: parsed.inStock,
    },
  });

  await replaceCompatibilities(part.id, carIds);
  await replacePartCategories(part.id, categoryIds);
  await replacePartImages(formData, part.id, parsed.title, parsed.imageUrl, parsed.imageUrls);

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
  const slug = await buildUniquePartSlug(parsed.title, partId);
  const carIds = await resolveCarIds(parsed.compatibleCarModels);
  const categoryIds = await resolveCategoryIds(parsed.categorySelection);
  const categoryId = categoryIds[0]!;

  const part = await prisma.part.update({
    where: {
      id: partId,
    },
    data: {
      title: parsed.title,
      description: parsed.description,
      slug,
      categoryId,
      priceFrom: parsed.priceFrom,
      inStock: parsed.inStock,
    },
  });

  await replaceCompatibilities(part.id, carIds);
  await replacePartCategories(part.id, categoryIds);
  await replacePartImages(formData, part.id, parsed.title, parsed.imageUrl, parsed.imageUrls);

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

