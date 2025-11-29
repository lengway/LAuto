import { BrandCatalog } from "@/components/brands/brand-catalog";
import { BrandFilters } from "@/components/brands/brand-filters";
import { BrandSearchBar } from "@/components/brands/brand-search-bar";
import { placeholderCars } from "@/components/brands/brand-data";
import { Separator } from "@/components/ui/separator";

export default function BrandsPage() {
  return (
    <div className="min-h-screen py-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-8 lg:flex-row lg:gap-10">
        <div className="lg:w-80 xl:w-96">
          <BrandFilters />
        </div>
        <div className="flex-1 space-y-6">
          <div className="space-y-3">
            <div>
              <p className="text-sm uppercase tracking-wide text-muted-foreground">Manufacturer catalog</p>
              <h1 className="text-3xl font-semibold">Explore brands, trims, and production years</h1>
              <p className="text-sm text-muted-foreground">
                Filter by country, dig into models, and preview configurations before jumping into LAuto's AI manuals.
              </p>
            </div>
            <BrandSearchBar />
          </div>
          <Separator />
          <BrandCatalog cars={placeholderCars} />
        </div>
      </div>
    </div>
  );
}
