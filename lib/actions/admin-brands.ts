"use server";

import { revalidatePath } from "next/cache";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { z } from "zod";

import { prisma } from "@/lib/db";

const brandDelegate = (prisma as unknown as { brand: any }).brand;

const brandSchema = z.object({
  name: z.string().min(1).transform((value) => value.trim()),
  description: z.string().optional().transform((value) => value?.trim() || null),
  imageUrl: z.string().optional().transform((value) => value?.trim() || null),
});

function toSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "");
}

function parseBrandFormData(formData: FormData) {
  return brandSchema.parse({
    name: String(formData.get("name") ?? ""),
    description: String(formData.get("description") ?? ""),
    imageUrl: String(formData.get("imageUrl") ?? ""),
  });
}

function getSafeFileExtension(fileName: string): string {
  const extension = fileName.split(".").pop()?.toLowerCase() ?? "";

  if (["jpg", "jpeg", "png", "webp", "gif", "avif"].includes(extension)) {
    return extension;
  }

  return "jpg";
}

async function resolveBrandImageUrl(formData: FormData, brandSlug: string, imageUrlFromInput?: string | null) {
  const normalizedImageUrl = imageUrlFromInput?.trim() ?? "";
  const candidate = formData.get("image");

  if (!(candidate instanceof File) || candidate.size === 0) {
    return normalizedImageUrl || null;
  }

  if (!candidate.type.startsWith("image/")) {
    throw new Error("Нужно загрузить файл изображения");
  }

  const extension = getSafeFileExtension(candidate.name);
  const fileName = `${brandSlug}-${Date.now()}.${extension}`;
  const uploadDir = path.join(process.cwd(), "public", "uploads", "brands");
  const absolutePath = path.join(uploadDir, fileName);

  await mkdir(uploadDir, { recursive: true });
  const bytes = await candidate.arrayBuffer();
  await writeFile(absolutePath, Buffer.from(bytes));

  return `/uploads/brands/${fileName}`;
}

function revalidateBrandPages() {
  revalidatePath("/admin");
  revalidatePath("/admin/brands");
  revalidatePath("/admin/models");
  revalidatePath("/catalog");
}

export async function createBrandAction(formData: FormData) {
  const parsed = parseBrandFormData(formData);
  const slug = toSlug(parsed.name);

  if (!slug) {
    throw new Error("Некорректное название марки");
  }

  const imageUrl = await resolveBrandImageUrl(formData, slug, parsed.imageUrl);

  await brandDelegate.upsert({
    where: { slug },
    update: {
      name: parsed.name,
      description: parsed.description,
      imageUrl,
    },
    create: {
      name: parsed.name,
      slug,
      description: parsed.description,
      imageUrl,
    },
  });

  revalidateBrandPages();
}

export async function updateBrandAction(formData: FormData) {
  const brandId = String(formData.get("brandId") ?? "");
  if (!brandId) {
    throw new Error("brandId is required");
  }

  const parsed = parseBrandFormData(formData);
  const slug = toSlug(parsed.name);

  if (!slug) {
    throw new Error("Некорректное название марки");
  }

  const current = await brandDelegate.findUnique({
    where: { id: brandId },
    select: { id: true },
  });

  if (!current) {
    throw new Error("Марка не найдена");
  }

  const existingBySlug = await brandDelegate.findUnique({
    where: { slug },
    select: { id: true },
  });

  const nextSlug = existingBySlug && existingBySlug.id !== brandId ? `${slug}-${Date.now()}` : slug;
  const imageUrl = await resolveBrandImageUrl(formData, nextSlug, parsed.imageUrl);

  await brandDelegate.update({
    where: { id: brandId },
    data: {
      name: parsed.name,
      slug: nextSlug,
      description: parsed.description,
      imageUrl,
    },
  });

  revalidateBrandPages();
}

export async function deleteBrandAction(formData: FormData) {
  const brandId = String(formData.get("brandId") ?? "");
  if (!brandId) {
    throw new Error("brandId is required");
  }

  try {
    await brandDelegate.delete({
      where: { id: brandId },
    });
  } catch {
    throw new Error("Нельзя удалить марку, пока у нее есть связанные модели.");
  }

  revalidateBrandPages();
}
