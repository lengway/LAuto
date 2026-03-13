"use client";

import { useActionState } from "react";

import { importPartsFromAiAction, type AiImportState } from "@/lib/actions/admin-ai-import";
import { Button } from "@/components/ui/button";

const initialState: AiImportState = {
  status: "idle",
};

export function AiImportForm() {
  const [state, formAction, isPending] = useActionState(importPartsFromAiAction, initialState);

  return (
    <div className="space-y-4">
      <form action={formAction} className="space-y-3 rounded-lg border border-dashed border-border/70 p-4">
        <textarea
          name="rawInput"
          required
          rows={10}
          placeholder="Вставьте сырой текст с деталями. Каждая строка может содержать одну позицию."
          className="w-full rounded-md border border-border/60 bg-background px-3 py-2 text-sm outline-none"
        />
        <Button type="submit" disabled={isPending}>
          {isPending ? "Обрабатываю..." : "Запустить AI-импорт"}
        </Button>
      </form>

      {state.message ? (
        <div className="rounded-md border border-border/60 bg-muted/30 p-3 text-sm">
          {state.message}
        </div>
      ) : null}

      {state.aiResult ? (
        <section className="space-y-2">
          <h3 className="text-sm font-semibold">Ответ AI (JSON)</h3>
          <pre className="overflow-x-auto rounded-md bg-muted/40 p-3 text-xs">
{JSON.stringify(state.aiResult, null, 2)}
          </pre>
        </section>
      ) : null}

      {state.importSummary ? (
        <section className="space-y-2">
          <h3 className="text-sm font-semibold">Итог импорта (JSON)</h3>
          <pre className="overflow-x-auto rounded-md bg-muted/40 p-3 text-xs">
{JSON.stringify(state.importSummary, null, 2)}
          </pre>
        </section>
      ) : null}
    </div>
  );
}
