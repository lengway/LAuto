"use server";

import { z } from "zod";

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

export async function createVinPatternAction(formData: FormData) {
  parseVinPatternFormData(formData);
  throw new Error("VIN-паттерны отключены в упрощенной версии каталога.");
}

export async function updateVinPatternAction(formData: FormData) {
  const id = String(formData.get("id") ?? "");

  if (!id) {
    throw new Error("id is required");
  }

  parseVinPatternFormData(formData);
  throw new Error("VIN-паттерны отключены в упрощенной версии каталога.");
}

export async function deleteVinPatternAction(formData: FormData) {
  const id = String(formData.get("id") ?? "");

  if (!id) {
    throw new Error("id is required");
  }

  throw new Error("VIN-паттерны отключены в упрощенной версии каталога.");
}
