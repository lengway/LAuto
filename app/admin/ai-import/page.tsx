import type { Metadata } from "next";

import { AiImportForm } from "@/components/admin/ai-import-form";
import { listAdminImportJobs } from "@/lib/services/admin";

export const metadata: Metadata = {
  title: "AI-импорт запчастей | Chinalending",
};

function summarizeErrors(summary: unknown): string[] {
  if (!summary || typeof summary !== "object") {
    return [];
  }

  const value = summary as { errors?: unknown };
  return Array.isArray(value.errors)
    ? value.errors.filter((entry): entry is string => typeof entry === "string")
    : [];
}

export default async function AdminAiImportPage() {
  const jobs = await listAdminImportJobs();
  const aiJobs = jobs.filter((job) => {
    if (!job.summary || typeof job.summary !== "object") {
      return false;
    }

    const summary = job.summary as { source?: unknown };
    return summary.source === "ai";
  });

  return (
    <div className="space-y-6">
      <section className="space-y-4 rounded-xl border border-border/60 p-4">
        <h2 className="text-lg font-semibold">AI-импорт каталога из сообщения</h2>
        <p className="text-sm text-muted-foreground">
          Вставьте текст с множеством деталей. AI вернет JSON с нормализованными строками или ошибки с line/field, если чего-то не хватает.
        </p>
        <p className="text-sm text-muted-foreground">
          После валидации backend преобразует результат в CSV и загружает данные в БД как обычный import job.
        </p>

        <AiImportForm />
      </section>

      <section className="space-y-3 rounded-xl border border-border/60 p-4">
        <h3 className="text-base font-semibold">История AI-импортов</h3>

        {aiJobs.length ? (
          <div className="space-y-3">
            {aiJobs.map((job) => {
              const errors = summarizeErrors(job.summary);

              return (
                <div key={job.id} className="rounded-lg border border-border/60 p-3 text-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{job.file}</p>
                    <span className="text-muted-foreground">{job.status}</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{new Date(job.createdAt).toLocaleString()}</p>

                  {job.summary ? (
                    <pre className="mt-2 overflow-x-auto rounded-md bg-muted/40 p-2 text-xs">
{JSON.stringify(job.summary, null, 2)}
                    </pre>
                  ) : null}

                  {errors.length ? (
                    <div className="mt-2 rounded-md border border-dashed border-border/60 p-2 text-xs text-muted-foreground">
                      {errors.slice(0, 5).map((error) => (
                        <p key={error}>{error}</p>
                      ))}
                      {errors.length > 5 ? <p>...и ещё {errors.length - 5} ошибок</p> : null}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">AI-импортов пока нет.</p>
        )}
      </section>
    </div>
  );
}
