"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { ingestCatalogRawText } from "@/lib/services/import-pipeline";
import type { AiCatalogImportResult } from "@/lib/services/ai-catalog-import";
import type { IngestionRunSummary } from "@/lib/services/import-pipeline";

export type AiImportState = {
  status: "idle" | "imported" | "needs_clarification" | "error";
  message?: string;
  confirmation?: string;
  aiResult?: AiCatalogImportResult;
  importSummary?: IngestionRunSummary;
};

const formSchema = z.object({
  rawInput: z.string().min(10),
});

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

  if (!parsedForm.data.rawInput.trim()) {
    return {
      status: "error",
      message: "Введите текст с деталями (минимум 10 символов)",
    };
  }

  try {
    const result = await ingestCatalogRawText(parsedForm.data.rawInput);

    revalidatePath("/admin");
    revalidatePath("/admin/parts");
    revalidatePath("/admin/models");
    revalidatePath("/admin/brands");
    revalidatePath("/catalog");

    const hasWarnings = (result.aiResult?.errors.length ?? 0) > 0 || result.summary.rowsFailed > 0;
    const hasImportedRows = result.summary.rowsSuccess > 0;

    if (!hasImportedRows) {
      return {
        status: "error",
        message: "AI обработал данные, но ни одна строка не была импортирована. Проверьте JSON-результат.",
        confirmation: "Запчасти не приняты.",
        aiResult: result.aiResult,
        importSummary: result.summary,
      };
    }

    const acceptedCount = result.summary.acceptedParts.length;

    return {
      status: hasWarnings ? "needs_clarification" : "imported",
      message: hasWarnings
        ? `Импорт завершен частично: ${result.summary.rowsSuccess} успешно, ${result.summary.rowsFailed} с ошибками.`
        : `Импорт завершен: успешно загружено ${result.summary.rowsSuccess} строк.`,
      confirmation: `Подтверждение: принято запчастей ${acceptedCount}.`,
      aiResult: result.aiResult,
      importSummary: result.summary,
    };
  } catch (error) {
    return {
      status: "error",
      message: error instanceof Error ? error.message : "Ошибка AI-импорта",
    };
  }
}
