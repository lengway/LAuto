import type { Metadata } from "next";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAdminOverview } from "@/lib/services/admin";

export const metadata: Metadata = {
  title: "Обзор админки | Chinalending",
};

export default async function AdminOverviewPage() {
  const overview = await getAdminOverview();

  return (
    <div className="space-y-6">
      <section className="grid gap-3 sm:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">Запчасти</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">{overview.partsCount}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">Автомобили</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">{overview.carsCount}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">VIN-паттерны</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">{overview.vinPatternsCount}</p>
          </CardContent>
        </Card>
      </section>

      <section className="rounded-xl border border-border/60 p-4">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Последние задания импорта</h2>
          <Link href="/admin/import" className="text-sm underline underline-offset-4">
            Открыть импорт
          </Link>
        </div>

        {overview.latestImports.length ? (
          <div className="space-y-2 text-sm">
            {overview.latestImports.map((job) => (
              <div key={job.id} className="flex items-center justify-between rounded-lg border border-border/60 px-3 py-2">
                <span>{job.file}</span>
                <span className="text-muted-foreground">{job.status}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">Заданий импорта пока нет.</p>
        )}
      </section>
    </div>
  );
}
