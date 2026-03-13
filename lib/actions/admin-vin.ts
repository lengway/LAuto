"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { prisma } from "@/lib/db";

const vinPatternSchema = z.object({
  pattern: z
    .string()
    .min(2)
    .max(12)
    .transform((value) => value.trim().toUpperCase()),
  carId: z.string().min(1),
});

function parseVinPatternFormData(formData: FormData) {
  return vinPatternSchema.parse({
    pattern: String(formData.get("pattern") ?? ""),
    carId: String(formData.get("carId") ?? ""),
  });
}

function revalidateVinAdminPages() {
  revalidatePath("/admin");
  revalidatePath("/admin/vin");
  revalidatePath("/vin-search");
}

export async function createVinPatternAction(formData: FormData) {
  const parsed = parseVinPatternFormData(formData);

  await prisma.vinPattern.create({
    data: {
      pattern: parsed.pattern,
      carId: parsed.carId,
    },
  });

  revalidateVinAdminPages();
}

export async function updateVinPatternAction(formData: FormData) {
  const id = String(formData.get("id") ?? "");

  if (!id) {
    throw new Error("id is required");
  }

  const parsed = parseVinPatternFormData(formData);

  await prisma.vinPattern.update({
    where: { id },
    data: {
      pattern: parsed.pattern,
      carId: parsed.carId,
    },
  });

  revalidateVinAdminPages();
}

export async function deleteVinPatternAction(formData: FormData) {
  const id = String(formData.get("id") ?? "");

  if (!id) {
    throw new Error("id is required");
  }

  await prisma.vinPattern.delete({
    where: { id },
  });

  revalidateVinAdminPages();
}
