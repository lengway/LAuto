import type { Metadata } from "next";

import { importPartsAction } from "@/lib/actions/admin-import";
import { listAdminImportJobs } from "@/lib/services/admin";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Импорт запчастей | Chinalending",
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

export default async function AdminImportPage() {
  const jobs = await listAdminImportJobs();

  return (
    <div className="space-y-6">
      <section className="space-y-4 rounded-xl border border-border/60 p-4">
        <h2 className="text-lg font-semibold">Импорт запчастей из Excel / CSV</h2>
        <p className="text-sm text-muted-foreground">
          Обязательные колонки: article, oem, name, brand, price.
          Поддерживаемые форматы: .csv, .xls, .xlsx.
        </p>

        <form action={importPartsAction} className="space-y-3 rounded-lg border border-dashed border-border/70 p-4">
          <input
            type="file"
            name="file"
            accept=".csv,.xls,.xlsx"
            required
            className="text-sm"
          />
          <Button type="submit">Запустить импорт</Button>
        </form>
      </section>

      <section className="space-y-3 rounded-xl border border-border/60 p-4">
        <h3 className="text-base font-semibold">История импортов</h3>

        {jobs.length ? (
          <div className="space-y-3">
            {jobs.map((job) => {
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
          <p className="text-sm text-muted-foreground">Заданий импорта пока нет.</p>
        )}
      </section>
    </div>
  );
}
