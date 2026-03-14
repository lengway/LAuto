"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { ingestCatalogRawText } from "@/lib/services/import-pipeline";

export type AiImportState = {
  status: "idle" | "imported" | "needs_clarification" | "error";
  message?: string;
  aiResult?: unknown;
  importSummary?: unknown;
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

  try {
    const result = await ingestCatalogRawText(parsedForm.data.rawInput);
    const hasFailedRows = result.summary.rowsFailed > 0;

    revalidatePath("/admin");
    revalidatePath("/admin/import");
    revalidatePath("/admin/ai-import");
    revalidatePath("/admin/parts");
    revalidatePath("/catalog");

    return {
      status: hasFailedRows ? "needs_clarification" : "imported",
      message: hasFailedRows
        ? "Импорт завершен с ошибками в отдельных строках. Проверьте итог ниже."
        : "AI-импорт успешно завершен.",
      aiResult: {
        stageCounts: result.summary.stageCounts,
      },
      importSummary: result.summary,
    };
  } catch (error) {
    return {
      status: "error",
      message: (error as Error).message,
    };
  }
}
