import { randomUUID } from "node:crypto";

import type { AiCatalogImportResult } from "@/lib/services/ai-catalog-import";
import { ingestCatalogRawText, type IngestionRunSummary } from "@/lib/services/import-pipeline";

export type AiImportJobStatus = "queued" | "running" | "completed" | "failed" | "stopped";

type AiImportJob = {
  id: string;
  status: AiImportJobStatus;
  createdAt: string;
  updatedAt: string;
  message?: string;
  confirmation?: string;
  aiResult?: AiCatalogImportResult;
  summary?: IngestionRunSummary;
  logs: string[];
  abortController?: AbortController;
};

export type AiImportJobSnapshot = {
  id: string;
  status: AiImportJobStatus;
  createdAt: string;
  updatedAt: string;
  message?: string;
  confirmation?: string;
  aiResult?: AiCatalogImportResult;
  summary?: IngestionRunSummary;
  logs: string[];
};

const MAX_JOBS = 50;

declare global {
  var __aiImportJobs: Map<string, AiImportJob> | undefined;
}

function getStore(): Map<string, AiImportJob> {
  if (!globalThis.__aiImportJobs) {
    globalThis.__aiImportJobs = new Map<string, AiImportJob>();
  }

  return globalThis.__aiImportJobs;
}

function nowIso(): string {
  return new Date().toISOString();
}

function toSnapshot(job: AiImportJob): AiImportJobSnapshot {
  return {
    id: job.id,
    status: job.status,
    createdAt: job.createdAt,
    updatedAt: job.updatedAt,
    message: job.message,
    confirmation: job.confirmation,
    aiResult: job.aiResult,
    summary: job.summary,
    logs: job.logs,
  };
}

function pushJobLog(job: AiImportJob, message: string) {
  const entry = `${nowIso()} ${message}`;
  job.logs.push(entry);
  job.updatedAt = nowIso();
  console.info(`[ai-import][job:${job.id}] ${entry}`);
}

function trimStore(store: Map<string, AiImportJob>) {
  if (store.size <= MAX_JOBS) {
    return;
  }

  const jobs = Array.from(store.values()).sort((a, b) => +new Date(a.createdAt) - +new Date(b.createdAt));
  const toDelete = jobs.slice(0, store.size - MAX_JOBS);

  for (const job of toDelete) {
    store.delete(job.id);
  }
}

async function runJob(job: AiImportJob, rawInput: string) {
  job.status = "running";
  job.updatedAt = nowIso();
  job.message = "Идет обработка импорта...";
  job.confirmation = "Подтверждение появится после принятия первых запчастей.";
  job.abortController = new AbortController();
  pushJobLog(job, `Запущен фоновый импорт. inputLength=${rawInput.length}`);

  try {
    const result = await ingestCatalogRawText(rawInput, {
      signal: job.abortController.signal,
      onLog: (entry) => {
        job.logs.push(entry);
        job.updatedAt = nowIso();
      },
      onProgress: (summary) => {
        job.summary = summary;

        const accepted = summary.acceptedParts.length;
        const chunksDone = Number(summary.stageCounts.ai_chunks_done ?? 0);
        const chunksTotal = Number(summary.stageCounts.ai_chunks_total ?? 0);
        const processed = Number(summary.stageCounts.processed_rows ?? 0);
        const totalRows = Number(summary.rowsTotal ?? 0);

        job.message =
          chunksTotal > 0
            ? `Обработка: чанки ${chunksDone}/${chunksTotal}, строки ${processed}/${totalRows || "?"}`
            : `Обработка: строки ${processed}/${totalRows || "?"}`;

        if (accepted > 0) {
          job.confirmation = `Подтверждение (промежуточное): принято запчастей ${accepted}.`;
        }

        job.updatedAt = nowIso();
      },
    });

    const hasWarnings = (result.aiResult?.errors.length ?? 0) > 0 || result.summary.rowsFailed > 0;
    const acceptedCount = result.summary.acceptedParts.length;

    job.aiResult = result.aiResult;
    job.summary = result.summary;
    job.status = hasWarnings ? "completed" : "completed";
    job.message = hasWarnings
      ? `Импорт завершен частично: ${result.summary.rowsSuccess} успешно, ${result.summary.rowsFailed} с ошибками.`
      : `Импорт завершен: успешно загружено ${result.summary.rowsSuccess} строк.`;
    job.confirmation = `Подтверждение: принято запчастей ${acceptedCount}.`;
    pushJobLog(job, `Импорт завершен успешно. accepted=${acceptedCount}`);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Ошибка фонового импорта";

    if (message === "Импорт остановлен пользователем") {
      job.status = "stopped";
      job.message = "Обработка остановлена пользователем.";
      job.confirmation = "Подтверждение: обработка остановлена, polling можно завершить.";
      pushJobLog(job, "Импорт остановлен пользователем");
      return;
    }

    job.status = "failed";
    job.message = message;
    pushJobLog(job, `Импорт завершился ошибкой: ${message}`);
  } finally {
    job.abortController = undefined;
    job.updatedAt = nowIso();
  }
}

export function startAiImportJob(rawInput: string): AiImportJobSnapshot {
  const store = getStore();
  const id = randomUUID();
  const createdAt = nowIso();

  const job: AiImportJob = {
    id,
    status: "queued",
    createdAt,
    updatedAt: createdAt,
    logs: [],
  };

  store.set(id, job);
  trimStore(store);
  pushJobLog(job, "Задача создана и поставлена в очередь");

  void runJob(job, rawInput);

  return toSnapshot(job);
}

export function getAiImportJobSnapshot(jobId: string): AiImportJobSnapshot | null {
  const store = getStore();
  const job = store.get(jobId);
  if (!job) {
    return null;
  }

  return toSnapshot(job);
}

export function stopAiImportJob(jobId: string): AiImportJobSnapshot | null {
  const store = getStore();
  const job = store.get(jobId);
  if (!job) {
    return null;
  }

  if (job.status === "completed" || job.status === "failed" || job.status === "stopped") {
    return toSnapshot(job);
  }

  job.abortController?.abort();
  job.status = "stopped";
  job.message = "Остановка запрошена пользователем.";
  job.confirmation = "Подтверждение: остановка обработки запрошена.";
  pushJobLog(job, "Получен запрос на остановку");

  return toSnapshot(job);
}
