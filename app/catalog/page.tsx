import type { Metadata } from "next";
import Link from "next/link";

import { CatalogSearchForm } from "@/components/catalog/catalog-search-form";
import { PartsGrid } from "@/components/catalog/parts-grid";
import { Badge } from "@/components/ui/badge";
import { listCatalogBrands, listCatalogCars, listCatalogCategories, listCatalogParts } from "@/lib/services/catalog";

export const metadata: Metadata = {
  title: "Каталог запчастей | Chinalending",
  description: "Подробный каталог китайских автозапчастей с поиском по OEM, VIN, бренду и модели.",
};

type CatalogPageProps = {
  searchParams: Promise<{
    q?: string;
    category?: string;
    brand?: string;
    car?: string;
    stock?: string;
    min?: string;
    max?: string;
    sort?: "newest" | "price_asc" | "price_desc" | "title_asc";
  }>;
};

export default async function CatalogPage({ searchParams }: CatalogPageProps) {
  const params = await searchParams;
  const query = params.q?.trim() ?? "";
  const categorySlug = params.category?.trim() || undefined;
  const brandSlug = params.brand?.trim() || undefined;
  const carSlug = params.car?.trim() || undefined;
  const inStockOnly = params.stock === "1";
  const minPrice = params.min && params.min.trim() ? Number(params.min) : undefined;
  const maxPrice = params.max && params.max.trim() ? Number(params.max) : undefined;
  const sort = params.sort ?? "newest";

  const [parts, categories, brands, cars] = await Promise.all([
    listCatalogParts({
      query,
      categorySlug,
      brandSlug,
      carSlug,
      inStockOnly,
      minPrice,
      maxPrice,
      sort,
    }),
    listCatalogCategories(),
    listCatalogBrands(),
    listCatalogCars(),
  ]);

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-10">
      <section className="space-y-3">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Chinalending Kazakhstan</p>
        <h1 className="text-2xl font-semibold sm:text-3xl">Подробный каталог автозапчастей</h1>
        <p className="text-sm text-muted-foreground">Ищите по названию, OEM, бренду, модели, цене и наличию. С карточки можно сразу отправить запрос в WhatsApp.</p>
      </section>

      <CatalogSearchForm
        defaultQuery={query}
        categories={categories}
        brands={brands}
        cars={cars}
        defaultCategorySlug={categorySlug}
        defaultBrandSlug={brandSlug}
        defaultCarSlug={carSlug}
        defaultInStockOnly={inStockOnly}
        defaultMinPrice={params.min}
        defaultMaxPrice={params.max}
        defaultSort={sort}
      />

      <section className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Link key={category.id} href={`/catalog?category=${category.slug}`}>
            <Badge variant="outline" className="py-1">
              {category.name} · {category.partsCount}
            </Badge>
          </Link>
        ))}
      </section>

      {parts.length ? (
        <PartsGrid parts={parts} />
      ) : (
        <div className="rounded-xl border border-dashed border-border/70 p-8 text-center text-sm text-muted-foreground">
          По текущим параметрам ничего не найдено. Измените фильтры или попробуйте другой OEM.
        </div>
      )}
    </div>
  );
}
