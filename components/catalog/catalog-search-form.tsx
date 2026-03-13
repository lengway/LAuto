import { IconSearch } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import type { CatalogBrand, CatalogCar, CatalogCategory } from "@/lib/services/catalog";

type CatalogSearchFormProps = {
  defaultQuery: string;
  action?: string;
  categories: CatalogCategory[];
  brands: CatalogBrand[];
  cars: CatalogCar[];
  defaultCategorySlug?: string;
  defaultBrandSlug?: string;
  defaultCarSlug?: string;
  defaultInStockOnly?: boolean;
  defaultMinPrice?: string;
  defaultMaxPrice?: string;
  defaultSort?: "newest" | "price_asc" | "price_desc" | "title_asc";
};

export function CatalogSearchForm({
  defaultQuery,
  action = "/catalog",
  categories,
  brands,
  cars,
  defaultCategorySlug,
  defaultBrandSlug,
  defaultCarSlug,
  defaultInStockOnly,
  defaultMinPrice,
  defaultMaxPrice,
  defaultSort = "newest",
}: CatalogSearchFormProps) {
  return (
    <form action={action} method="get" className="space-y-3 rounded-xl border border-border/60 bg-card/80 p-3 shadow-sm">
      <div className="flex gap-2">
        <div className="flex flex-1 items-center gap-2 rounded-lg border border-border/60 px-2">
          <IconSearch className="size-4 text-muted-foreground" />
          <input
            name="q"
            defaultValue={defaultQuery}
            placeholder="Поиск по названию, OEM, бренду, авто"
            className="h-10 w-full bg-transparent text-sm outline-none"
          />
        </div>
        <Button type="submit" className="h-10 px-4">
          Найти
        </Button>
      </div>

      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        <select
          name="category"
          defaultValue={defaultCategorySlug ?? ""}
          className="h-10 rounded-lg border border-border/60 bg-background px-3 text-sm"
        >
          <option value="">Все категории</option>
          {categories.map((category) => (
            <option key={category.id} value={category.slug}>
              {category.name}
            </option>
          ))}
        </select>

        <select
          name="brand"
          defaultValue={defaultBrandSlug ?? ""}
          className="h-10 rounded-lg border border-border/60 bg-background px-3 text-sm"
        >
          <option value="">Все бренды</option>
          {brands.map((brand) => (
            <option key={brand.slug} value={brand.slug}>
              {brand.name}
            </option>
          ))}
        </select>

        <select
          name="car"
          defaultValue={defaultCarSlug ?? ""}
          className="h-10 rounded-lg border border-border/60 bg-background px-3 text-sm"
        >
          <option value="">Все модели</option>
          {cars.map((car) => (
            <option key={car.id} value={car.slug}>
              {car.fullName}
            </option>
          ))}
        </select>

        <select
          name="sort"
          defaultValue={defaultSort}
          className="h-10 rounded-lg border border-border/60 bg-background px-3 text-sm"
        >
          <option value="newest">Сначала новые</option>
          <option value="price_asc">Цена по возрастанию</option>
          <option value="price_desc">Цена по убыванию</option>
          <option value="title_asc">По названию</option>
        </select>
      </div>

      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        <input
          name="min"
          inputMode="numeric"
          defaultValue={defaultMinPrice ?? ""}
          placeholder="Цена от, ₸"
          className="h-10 rounded-lg border border-border/60 bg-background px-3 text-sm outline-none"
        />
        <input
          name="max"
          inputMode="numeric"
          defaultValue={defaultMaxPrice ?? ""}
          placeholder="Цена до, ₸"
          className="h-10 rounded-lg border border-border/60 bg-background px-3 text-sm outline-none"
        />
        <label className="flex h-10 items-center gap-2 rounded-lg border border-border/60 bg-background px-3 text-sm">
          <input type="checkbox" name="stock" value="1" defaultChecked={defaultInStockOnly} />
          Только в наличии
        </label>
        <Button type="submit" variant="outline" className="h-10">
          Применить фильтры
        </Button>
      </div>
    </form>
  );
}
