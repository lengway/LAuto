import type { Metadata } from "next";
import Link from "next/link";

import { PartsGrid } from "@/components/catalog/parts-grid";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { listCatalogBrands, listCatalogCars, listCatalogParts } from "@/lib/services/catalog";

export const metadata: Metadata = {
  title: "Каталог запчастей | Chinalending",
  description: "Каталог запчастей по шагам: марка, модель, список всех деталей.",
};

type CatalogPageProps = {
  searchParams: Promise<{
    brand?: string;
    car?: string;
  }>;
};

export default async function CatalogPage({ searchParams }: CatalogPageProps) {
  const params = await searchParams;
  const brandSlug = params.brand?.trim() || undefined;
  const carSlug = params.car?.trim() || undefined;

  const [brands, cars, parts] = await Promise.all([
    listCatalogBrands(),
    listCatalogCars(brandSlug),
    carSlug
      ? listCatalogParts({
          brandSlug,
          carSlug,
          sort: "title_asc",
        })
      : Promise.resolve([]),
  ]);

  const selectedBrand = brands.find((brand) => brand.slug === brandSlug) ?? null;
  const selectedCar = cars.find((car) => car.slug === carSlug) ?? null;

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-10">
      <section className="space-y-3">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Chinalending Kazakhstan</p>
        <h1 className="text-2xl font-semibold sm:text-3xl">Каталог: марка → модель → все детали</h1>
        <p className="text-sm text-muted-foreground">Шаг 1: выберите марку карточкой. Шаг 2: выберите модель карточкой. Шаг 3: получите список деталей.</p>
      </section>

      {selectedBrand ? (
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <Badge variant="outline">Марка: {selectedBrand.name}</Badge>
          {selectedCar ? <Badge variant="secondary">Модель: {selectedCar.fullName}</Badge> : null}
          <Link href="/catalog" className="text-xs text-muted-foreground underline underline-offset-4">
            Сбросить выбор
          </Link>
        </div>
      ) : null}

      {!selectedBrand ? (
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">1) Выберите марку</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {brands.map((brand) => (
              <Link key={brand.slug} href={`/catalog?brand=${encodeURIComponent(brand.slug)}`}>
                <Card className="h-full border-border/60 bg-card/90 transition-colors hover:border-primary/60">
                  <CardHeader>
                    <CardTitle className="text-base">{brand.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex h-24 items-center justify-center rounded-lg border border-dashed border-border/70 bg-muted/40 text-xs text-muted-foreground">
                      PNG марки: /public/placeholders/brands/{brand.slug}.png
                    </div>
                    <p className="text-xs text-muted-foreground">Моделей в базе: {brand.carsCount}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {selectedBrand && !selectedCar ? (
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">2) Выберите модель</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cars.map((car) => (
              <Link
                key={car.id}
                href={`/catalog?brand=${encodeURIComponent(selectedBrand.slug)}&car=${encodeURIComponent(car.slug)}`}
              >
                <Card className="h-full border-border/60 bg-card/90 transition-colors hover:border-primary/60">
                  <CardHeader>
                    <CardTitle className="text-base">{car.fullName}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex h-24 items-center justify-center rounded-lg border border-dashed border-border/70 bg-muted/40 text-xs text-muted-foreground">
                      PNG модели: /public/placeholders/models/{car.slug}.png
                    </div>
                    <p className="text-xs text-muted-foreground">Нажмите, чтобы открыть детали</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {selectedCar && parts.length ? (
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">3) Детали для модели</h2>
          <PartsGrid parts={parts} />
        </section>
      ) : selectedCar ? (
        <div className="rounded-xl border border-dashed border-border/70 p-8 text-center text-sm text-muted-foreground">
          Для выбранной модели пока нет деталей.
        </div>
      ) : null}

      {selectedCar ? (
        <Link href={`/car/${selectedCar.slug}`} className="text-sm text-muted-foreground underline underline-offset-4">
          Открыть отдельную страницу модели
        </Link>
      ) : null}
    </div>
  );
}
