"use server";

import { revalidatePath } from "next/cache";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { z } from "zod";

import { prisma } from "@/lib/db";

const modelDelegate = (prisma as unknown as { model: any }).model;

const modelSchema = z.object({
  brandId: z.string().min(1),
  model: z.string().min(1).transform((value) => value.trim()),
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

function parseModelFormData(formData: FormData) {
  return modelSchema.parse({
    brandId: String(formData.get("brandId") ?? ""),
    model: String(formData.get("model") ?? ""),
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

async function resolveModelImageUrl(formData: FormData, modelSlug: string, imageUrlFromInput?: string | null) {
  const normalizedImageUrl = imageUrlFromInput?.trim() ?? "";
  const candidate = formData.get("image");

  if (!(candidate instanceof File) || candidate.size === 0) {
    return normalizedImageUrl || null;
  }

  if (!candidate.type.startsWith("image/")) {
    throw new Error("Нужно загрузить файл изображения");
  }

  const extension = getSafeFileExtension(candidate.name);
  const fileName = `${modelSlug}-${Date.now()}.${extension}`;
  const uploadDir = path.join(process.cwd(), "public", "uploads", "models");
  const absolutePath = path.join(uploadDir, fileName);

  await mkdir(uploadDir, { recursive: true });
  const bytes = await candidate.arrayBuffer();
  await writeFile(absolutePath, Buffer.from(bytes));

  return `/uploads/models/${fileName}`;
}

async function buildUniqueModelSlug(base: string, brandId: string, currentModelId?: string): Promise<string> {
  const normalized = base || `model-${Date.now()}`;

  const existing = await modelDelegate.findFirst({
    where: {
      brandId,
      slug: normalized,
    },
    select: { id: true },
  });

  if (!existing || (currentModelId && existing.id === currentModelId)) {
    return normalized;
  }

  return `${normalized}-${Date.now()}`;
}

function revalidateModelPages(slug?: string, previousSlug?: string) {
  revalidatePath("/admin");
  revalidatePath("/admin/models");
  revalidatePath("/admin/brands");
  revalidatePath("/catalog");

  if (slug) {
    revalidatePath(`/car/${slug}`);
  }

  if (previousSlug && previousSlug !== slug) {
    revalidatePath(`/car/${previousSlug}`);
  }
}

export async function createModelAction(formData: FormData) {
  const parsed = parseModelFormData(formData);

  const slugBase = toSlug(parsed.model);
  const slug = await buildUniqueModelSlug(slugBase, parsed.brandId);
  const imageUrl = await resolveModelImageUrl(formData, slug, parsed.imageUrl);

  const model = await modelDelegate.create({
    data: {
      brandId: parsed.brandId,
      model: parsed.model,
      slug,
      description: parsed.description,
      imageUrl,
    },
  });

  revalidateModelPages(model.slug);
}

export async function updateModelAction(formData: FormData) {
  const modelId = String(formData.get("modelId") ?? "");

  if (!modelId) {
    throw new Error("modelId is required");
  }

  const parsed = parseModelFormData(formData);
  const existing = await modelDelegate.findUnique({
    where: { id: modelId },
    select: { slug: true },
  });

  const slugBase = toSlug(parsed.model);
  const slug = await buildUniqueModelSlug(slugBase, parsed.brandId, modelId);
  const imageUrl = await resolveModelImageUrl(formData, slug, parsed.imageUrl);

  const model = await modelDelegate.update({
    where: { id: modelId },
    data: {
      brandId: parsed.brandId,
      model: parsed.model,
      slug,
      description: parsed.description,
      imageUrl,
    },
  });

  revalidateModelPages(model.slug, existing?.slug);
}

export async function deleteModelAction(formData: FormData) {
  const modelId = String(formData.get("modelId") ?? "");

  if (!modelId) {
    throw new Error("modelId is required");
  }

  const existing = await modelDelegate.findUnique({
    where: { id: modelId },
    select: { slug: true },
  });

  await modelDelegate.delete({
    where: { id: modelId },
  });

  revalidateModelPages(undefined, existing?.slug);
}
