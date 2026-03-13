import type { Metadata } from "next";
import Link from "next/link";

import { PartsGrid } from "@/components/catalog/parts-grid";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/config";
import { listSupportedVinPrefixes, searchByVin } from "@/lib/services/vin";

export const metadata: Metadata = {
  title: "VIN-поиск | Chinalending",
  description: "Подбор совместимых запчастей по VIN-префиксу и модели автомобиля.",
};

type VinSearchPageProps = {
  searchParams: Promise<{
    vin?: string;
  }>;
};

export default async function VinSearchPage({ searchParams }: VinSearchPageProps) {
  const params = await searchParams;
  const inputVin = params.vin?.trim() ?? "";

  const [result, prefixes] = await Promise.all([
    searchByVin(inputVin),
    listSupportedVinPrefixes(),
  ]);

  const whatsappText = inputVin
    ? `Здравствуйте. Проверьте, пожалуйста, этот VIN и подтвердите совместимые запчасти: ${inputVin}`
    : "Здравствуйте. Помогите подобрать совместимые запчасти по VIN.";

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-10">
      <section className="space-y-2">
        <h1 className="text-2xl font-semibold sm:text-3xl">VIN-поиск</h1>
        <p className="text-sm text-muted-foreground">
          Введите VIN: мы определим модель по префиксу и покажем совместимые запчасти.
        </p>
      </section>

      <form action="/vin-search" method="get" className="rounded-xl border border-border/60 bg-card/80 p-4 shadow-sm">
        <label htmlFor="vin" className="text-sm font-medium">
          VIN
        </label>
        <div className="mt-2 flex flex-col gap-2 sm:flex-row">
          <input
            id="vin"
            name="vin"
            maxLength={17}
            defaultValue={inputVin}
            placeholder="LVTDB11B9ND123456"
            className="h-11 w-full rounded-lg border border-border/60 bg-background/70 px-3 text-sm uppercase outline-none"
          />
          <Button type="submit" className="h-11 sm:min-w-32">
            Найти
          </Button>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Поддерживаемые префиксы: {prefixes.join(", ")}
        </p>
      </form>

      {inputVin ? (
        <section className="space-y-4">
          <div className="rounded-xl border border-border/60 bg-card/70 p-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline">VIN: {result.normalizedVin || "-"}</Badge>
              {result.matchedPattern ? (
                <Badge variant="secondary">Pattern: {result.matchedPattern}</Badge>
              ) : null}
            </div>

            <div className="mt-3 text-sm">
              {result.car ? (
                <div className="space-y-2">
                  <p className="font-medium">Определённый автомобиль: {result.car.fullName}</p>
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/car/${result.car.slug}`}>Открыть страницу авто</Link>
                  </Button>
                </div>
              ) : (
                <p className="text-muted-foreground">
                  {result.message ?? "По этому VIN не удалось определить автомобиль."}
                </p>
              )}
            </div>
          </div>

          {result.parts.length ? (
            <section className="space-y-3">
              <h2 className="text-lg font-semibold">Совместимые запчасти</h2>
              <PartsGrid parts={result.parts} />
            </section>
          ) : (
            <div className="rounded-xl border border-dashed border-border/70 p-6 text-sm text-muted-foreground">
              Подходящие запчасти пока не найдены. Отправьте VIN менеджеру для ручной проверки.
            </div>
          )}
        </section>
      ) : null}

      <section className="rounded-xl border border-border/60 bg-card/70 p-4 text-sm text-muted-foreground">
        Не нашли результат? Отправьте VIN и OEM-номера напрямую в WhatsApp.
        <a href={buildWhatsAppLink(whatsappText)} target="_blank" rel="noreferrer" className="ml-1 underline underline-offset-4">
          Написать в WhatsApp
        </a>
      </section>
    </div>
  );
}
