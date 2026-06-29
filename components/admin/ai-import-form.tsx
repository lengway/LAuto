"use client";

import { useEffect, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { AiCatalogImportResult } from "@/lib/services/ai-catalog-import";
import type { IngestionRunSummary } from "@/lib/services/import-pipeline";
import type { AiImportJobStatus } from "@/lib/services/ai-import-jobs";

type FormState = {
  status: "idle" | "imported" | "needs_clarification" | "error";
  message?: string;
  confirmation?: string;
  aiResult?: AiCatalogImportResult;
  importSummary?: IngestionRunSummary;
  logs?: string[];
};

export function AiImportForm() {
  const [rawInput, setRawInput] = useState("");
  const [jobId, setJobId] = useState<string | null>(null);
  const [jobStatus, setJobStatus] = useState<AiImportJobStatus | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [isStopping, setIsStopping] = useState(false);
  const [shouldPoll, setShouldPoll] = useState(false);
  const [state, setState] = useState<FormState>({ status: "idle" });
  const [jsonDialogOpen, setJsonDialogOpen] = useState(false);
  const [jsonCopied, setJsonCopied] = useState(false);

  const acceptedParts = state.importSummary?.acceptedParts ?? [];
  const logs = useMemo(() => state.logs ?? state.importSummary?.logs ?? [], [state.logs, state.importSummary?.logs]);
  const rawJson = useMemo(
    () =>
      JSON.stringify(
        {
          aiResult: state.aiResult ?? null,
          importSummary: state.importSummary ?? null,
        },
        null,
        2
      ),
    [state.aiResult, state.importSummary]
  );

  const isTerminal = jobStatus === "completed" || jobStatus === "failed" || jobStatus === "stopped";

  async function pollStatus(currentJobId: string) {
    const response = await fetch(`/api/admin/ai-import/status?jobId=${encodeURIComponent(currentJobId)}`, {
      method: "GET",
      cache: "no-store",
    });

    const payload = (await response.json()) as {
      error?: string;
      job?: {
        status: AiImportJobStatus;
        message?: string;
        confirmation?: string;
        aiResult?: AiCatalogImportResult;
        summary?: IngestionRunSummary;
        logs?: string[];
      };
    };

    if (!response.ok || !payload.job) {
      setState({
        status: "error",
        message: payload.error ?? "Не удалось получить статус обработки",
      });
      setShouldPoll(false);
      setIsPending(false);
      return;
    }

    const mappedStatus: FormState["status"] =
      payload.job.status === "failed"
        ? "error"
        : payload.job.status === "completed" && (payload.job.summary?.rowsFailed ?? 0) > 0
          ? "needs_clarification"
          : payload.job.status === "completed"
            ? "imported"
            : payload.job.status === "stopped"
              ? "error"
              : "idle";

    setJobStatus(payload.job.status);
    setState({
      status: mappedStatus,
      message: payload.job.message,
      confirmation: payload.job.confirmation,
      aiResult: payload.job.aiResult,
      importSummary: payload.job.summary,
      logs: payload.job.logs,
    });

    if (payload.job.status === "completed" || payload.job.status === "failed" || payload.job.status === "stopped") {
      setShouldPoll(false);
      setIsPending(false);
      setIsStopping(false);
    }
  }

  useEffect(() => {
    if (!jobId || !shouldPoll) {
      return;
    }

    const interval = setInterval(() => {
      void pollStatus(jobId);
    }, 1500);

    void pollStatus(jobId);

    return () => {
      clearInterval(interval);
    };
  }, [jobId, shouldPoll]);

  async function handleStart() {
    setIsPending(true);
    setIsStopping(false);
    setState({ status: "idle", message: undefined, confirmation: undefined, aiResult: undefined, importSummary: undefined, logs: [] });

    const response = await fetch("/api/admin/ai-import/start", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rawInput }),
    });

    const payload = (await response.json()) as {
      error?: string;
      job?: {
        id: string;
        status: AiImportJobStatus;
        message?: string;
        logs?: string[];
      };
    };

    if (!response.ok || !payload.job) {
      setState({
        status: "error",
        message: payload.error ?? "Не удалось запустить импорт",
      });
      setIsPending(false);
      setShouldPoll(false);
      return;
    }

    setJobId(payload.job.id);
    setJobStatus(payload.job.status);
    setState({
      status: "idle",
      message: payload.job.message,
      logs: payload.job.logs ?? [],
    });
    setShouldPoll(true);
  }

  async function handleStop() {
    if (!jobId) {
      return;
    }

    setIsStopping(true);

    const response = await fetch("/api/admin/ai-import/stop", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ jobId }),
    });

    const payload = (await response.json()) as {
      error?: string;
      job?: {
        status: AiImportJobStatus;
        message?: string;
        confirmation?: string;
        logs?: string[];
      };
    };

    if (!response.ok || !payload.job) {
      setState((prev) => ({
        ...prev,
        status: "error",
        message: payload.error ?? "Не удалось остановить обработку",
      }));
      setIsStopping(false);
      return;
    }

    const job = payload.job;

    setJobStatus(job.status);
    setState((prev) => ({
      ...prev,
      status: "error",
      message: job.message,
      confirmation: job.confirmation,
      logs: job.logs ?? prev.logs,
    }));

    setShouldPoll(false);
    setIsPending(false);
    setIsStopping(false);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!rawInput.trim() || rawInput.trim().length < 10) {
      setState({
        status: "error",
        message: "Введите текст с деталями (минимум 10 символов)",
      });
      return;
    }

    await handleStart();
  }

  async function handleCopyRawJson() {
    try {
      await navigator.clipboard.writeText(rawJson);
      setJsonCopied(true);
      setTimeout(() => setJsonCopied(false), 1500);
    } catch {
      setJsonCopied(false);
    }
  }

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-3 rounded-lg border border-dashed border-border/70 p-4">
        <textarea
          name="rawInput"
          required
          rows={10}
          placeholder="Вставьте сырой текст с деталями. Каждая строка может содержать одну позицию."
          className="w-full rounded-md border border-border/60 bg-background px-3 py-2 text-sm outline-none"
          value={rawInput}
          onChange={(event) => setRawInput(event.target.value)}
        />
        <div className="flex flex-wrap gap-2">
          <Button type="submit" disabled={isPending || isStopping}>
          {isPending ? "Обрабатываю..." : "Запустить AI-импорт"}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={handleStop}
            disabled={!jobId || !shouldPoll || isTerminal || isStopping}
          >
            {isStopping ? "Останавливаю..." : "Остановить обработку"}
          </Button>
        </div>
      </form>

      {isPending ? (
        <div className="rounded-md border border-primary/40 bg-primary/5 p-3 text-sm">
          Идет процессинг в фоне. Polling статуса активен.
        </div>
      ) : null}

      {jobId ? (
        <div className="rounded-md border border-border/60 bg-muted/30 p-3 text-xs">
          jobId: {jobId} · статус: {jobStatus ?? "-"}
        </div>
      ) : null}

      {state.message ? (
        <div className="rounded-md border border-border/60 bg-muted/30 p-3 text-sm">
          {state.message}
        </div>
      ) : null}

      {state.confirmation ? (
        <div className="rounded-md border border-green-500/40 bg-green-500/10 p-3 text-sm font-medium text-green-900 dark:text-green-200">
          {state.confirmation}
        </div>
      ) : null}

      {acceptedParts.length ? (
        <details className="rounded-md border border-border/60 p-3" open>
          <summary className="cursor-pointer text-sm font-semibold">Принятые запчасти ({acceptedParts.length})</summary>
          <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
            {acceptedParts.map((part) => (
              <li key={`${part.partId}-${part.line}`}>
                #{part.line} · {part.title} · {part.brand} · {part.models.join(", ")}
              </li>
            ))}
          </ul>
        </details>
      ) : null}

      {logs.length ? (
        <details className="rounded-md border border-border/60 p-3" open>
          <summary className="cursor-pointer text-sm font-semibold">Логи процессинга ({logs.length})</summary>
          <pre className="mt-2 max-h-80 overflow-auto rounded-md bg-muted/40 p-3 text-xs">
{logs.join("\n")}
          </pre>
        </details>
      ) : null}

      {(state.aiResult || state.importSummary) ? (
        <div className="flex items-center gap-2">
          <Dialog open={jsonDialogOpen} onOpenChange={setJsonDialogOpen}>
            <DialogTrigger asChild>
              <Button type="button" variant="outline" size="sm">
                Показать raw JSON
              </Button>
            </DialogTrigger>
            <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-3xl">
              <DialogHeader>
                <DialogTitle>Raw JSON импорта</DialogTitle>
              </DialogHeader>
              <div className="space-y-2">
                <Button type="button" size="sm" variant="outline" onClick={handleCopyRawJson}>
                  {jsonCopied ? "Скопировано" : "Копировать JSON"}
                </Button>
                <pre className="max-h-[60vh] overflow-auto rounded-md bg-muted/40 p-3 text-xs">
{rawJson}
                </pre>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      ) : null}
    </div>
  );
}
