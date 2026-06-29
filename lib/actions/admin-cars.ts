"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { prisma } from "@/lib/db";

const carSchema = z.object({
  brandName: z.string().min(1).transform((value) => value.trim()),
  model: z.string().min(1).transform((value) => value.trim()),
  generation: z.string().optional().transform((value) => value?.trim() || null),
  years: z.string().optional().transform((value) => value?.trim() || null),
});

function toSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "");
}

function parseCarFormData(formData: FormData) {
  return carSchema.parse({
    brandName: String(formData.get("brandName") ?? ""),
    model: String(formData.get("model") ?? ""),
    generation: String(formData.get("generation") ?? ""),
    years: String(formData.get("years") ?? ""),
  });
}

async function resolveBrandIdByName(brandName: string): Promise<string> {
  const normalizedName = brandName.trim();
  const slug = toSlug(normalizedName);

  const brand = await prisma.brand.upsert({
    where: { slug },
    update: {
      name: normalizedName,
    },
    create: {
      name: normalizedName,
      slug,
    },
    select: {
      id: true,
    },
  });

  return brand.id;
}

async function buildUniqueCarSlug(base: string, brandId: string, currentCarId?: string): Promise<string> {
  const normalized = base || `car-${Date.now()}`;

  const existing = await prisma.model.findFirst({
    where: {
      brandId,
      slug: normalized,
    },
    select: { id: true },
  });

  if (!existing || (currentCarId && existing.id === currentCarId)) {
    return normalized;
  }

  return `${normalized}-${Date.now()}`;
}

function revalidateCarPages(slug?: string, previousSlug?: string) {
  revalidatePath("/admin");
  revalidatePath("/admin/cars");
  revalidatePath("/admin/parts");
  revalidatePath("/admin/vin");
  revalidatePath("/catalog");

  if (slug) {
    revalidatePath(`/car/${slug}`);
  }

  if (previousSlug && previousSlug !== slug) {
    revalidatePath(`/car/${previousSlug}`);
  }
}

export async function createCarAction(formData: FormData) {
  const parsed = parseCarFormData(formData);
  const brandId = await resolveBrandIdByName(parsed.brandName);

  const slugBase = toSlug([parsed.model, parsed.generation].filter(Boolean).join(" "));
  const slug = await buildUniqueCarSlug(slugBase, brandId);

  const car = await prisma.model.create({
    data: {
      brandId,
      model: parsed.model,
      generation: parsed.generation,
      years: parsed.years,
      slug,
    },
  });

  revalidateCarPages(car.slug);
}

export async function updateCarAction(formData: FormData) {
  const carId = String(formData.get("carId") ?? "");

  if (!carId) {
    throw new Error("carId is required");
  }

  const parsed = parseCarFormData(formData);
  const brandId = await resolveBrandIdByName(parsed.brandName);

  const existing = await prisma.model.findUnique({
    where: { id: carId },
    select: { slug: true },
  });

  const slugBase = toSlug([parsed.model, parsed.generation].filter(Boolean).join(" "));
  const slug = await buildUniqueCarSlug(slugBase, brandId, carId);

  const car = await prisma.model.update({
    where: { id: carId },
    data: {
      brandId,
      model: parsed.model,
      generation: parsed.generation,
      years: parsed.years,
      slug,
    },
  });

  revalidateCarPages(car.slug, existing?.slug);
}

export async function deleteCarAction(formData: FormData) {
  const carId = String(formData.get("carId") ?? "");

  if (!carId) {
    throw new Error("carId is required");
  }

  const existing = await prisma.model.findUnique({
    where: { id: carId },
    select: { slug: true },
  });

  await prisma.model.delete({
    where: { id: carId },
  });

  revalidateCarPages(undefined, existing?.slug);
}

