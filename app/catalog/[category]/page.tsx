import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CatalogSearchForm } from "@/components/catalog/catalog-search-form";
import { PartsGrid } from "@/components/catalog/parts-grid";
import { Badge } from "@/components/ui/badge";
import { listCatalogBrands, listCatalogCars, listCatalogCategories, listCatalogParts } from "@/lib/services/catalog";

type CategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
  searchParams: Promise<{
    q?: string;
    brand?: string;
    car?: string;
    stock?: string;
    min?: string;
    max?: string;
    sort?: "newest" | "price_asc" | "price_desc" | "title_asc";
  }>;
};

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const categories = await listCatalogCategories();
  const current = categories.find((entry) => entry.slug === category);

  if (!current) {
    return {
      title: "Категория не найдена | Chinalending",
    };
  }

  return {
    title: `${current.name} | Каталог запчастей Chinalending`,
    description: `Подбор запчастей в категории ${current.name.toLowerCase()} для китайских авто в Казахстане.`,
  };
}

export default async function CatalogCategoryPage({ params, searchParams }: CategoryPageProps) {
  const { category } = await params;
  const queryParams = await searchParams;
  const query = queryParams.q?.trim() ?? "";
  const brandSlug = queryParams.brand?.trim() || undefined;
  const carSlug = queryParams.car?.trim() || undefined;
  const inStockOnly = queryParams.stock === "1";
  const minPrice = queryParams.min && queryParams.min.trim() ? Number(queryParams.min) : undefined;
  const maxPrice = queryParams.max && queryParams.max.trim() ? Number(queryParams.max) : undefined;
  const sort = queryParams.sort ?? "newest";

  const categories = await listCatalogCategories();
  const currentCategory = categories.find((entry) => entry.slug === category);

  if (!currentCategory) {
    notFound();
  }

  const [parts, brands, cars] = await Promise.all([
    listCatalogParts({
      query,
      categorySlug: category,
      brandSlug,
      carSlug,
      inStockOnly,
      minPrice,
      maxPrice,
      sort,
    }),
    listCatalogBrands(),
    listCatalogCars(),
  ]);

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-10">
      <div className="space-y-2">
        <Link href="/catalog" className="text-sm text-muted-foreground hover:text-foreground">
          ← Назад в каталог
        </Link>
        <h1 className="text-2xl font-semibold sm:text-3xl">{currentCategory.name}</h1>
        <p className="text-sm text-muted-foreground">{currentCategory.partsCount} позиций в категории</p>
      </div>

      <CatalogSearchForm
        action={`/catalog/${category}`}
        defaultQuery={query}
        categories={categories}
        brands={brands}
        cars={cars}
        defaultCategorySlug={category}
        defaultBrandSlug={brandSlug}
        defaultCarSlug={carSlug}
        defaultInStockOnly={inStockOnly}
        defaultMinPrice={queryParams.min}
        defaultMaxPrice={queryParams.max}
        defaultSort={sort}
      />

      <div className="flex flex-wrap gap-2">
        {categories.map((entry) => (
          <Link key={entry.id} href={`/catalog/${entry.slug}`}>
            <Badge variant={entry.slug === category ? "secondary" : "outline"}>
              {entry.name}
            </Badge>
          </Link>
        ))}
      </div>

      {parts.length ? (
        <PartsGrid parts={parts} />
      ) : (
        <div className="rounded-xl border border-dashed border-border/70 p-8 text-center text-sm text-muted-foreground">
          По текущим фильтрам запчасти не найдены.
        </div>
      )}
    </div>
  );
}
