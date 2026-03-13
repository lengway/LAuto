"use client";

import { useMemo, useState } from "react";

import { PartsCatalog } from "./parts-catalog";
import { PartsFilters, PartsFilterState, defaultPartsFilters } from "./parts-filters";
import { PartsSearchBar } from "./parts-search-bar";
import { placeholderParts } from "./part-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function PartsExplorer() {
  const [filters, setFilters] = useState<PartsFilterState>({ ...defaultPartsFilters });
  const [query, setQuery] = useState("");
  const [vin, setVin] = useState("");

  const filteredParts = useMemo(() => {
    return placeholderParts.filter((part) => {
      if (filters.categories.length && !filters.categories.includes(part.category)) {
        return false;
      }
      if (filters.brands.length && !filters.brands.includes(part.brand)) {
        return false;
      }
      if (filters.minOffers && part.offers < filters.minOffers) {
        return false;
      }
      if (query && !part.name.toLowerCase().includes(query.toLowerCase())) {
        return false;
      }
      if (vin && !part.vin.toLowerCase().includes(vin.toLowerCase())) {
        return false;
      }
      return true;
    });
  }, [filters, query, vin]);

  const handleResetAll = () => {
    setFilters({ ...defaultPartsFilters });
    setQuery("");
    setVin("");
  };

  const activePills = [
    filters.categories.length ? `${filters.categories.length} categories` : null,
    filters.brands.length ? `${filters.brands.length} brands` : null,
    filters.minOffers ? `≥ ${filters.minOffers} offers` : null,
    vin ? `VIN ${vin}` : null,
    query ? `Search: ${query}` : null,
  ].filter(Boolean) as string[];

  return (
    <div className="min-h-screen py-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-8 lg:flex-row lg:gap-10">
        <div className="lg:w-80 xl:w-96">
          <PartsFilters value={filters} onChange={setFilters} onReset={handleResetAll} />
        </div>
        <div className="flex-1 space-y-6">
          <div className="space-y-4">
            <div>
              <p className="text-sm uppercase tracking-wide text-muted-foreground">Parts catalog</p>
              <h1 className="text-3xl font-semibold">Explore OEM & performance components</h1>
              <p className="text-sm text-muted-foreground">
                The same catalog experience as vehicles, but tuned for components—drill into categories, brand support, and VIN-specific matches.
              </p>
            </div>
            <PartsSearchBar query={query} vin={vin} onQueryChange={setQuery} onVinChange={setVin} />
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <Badge variant="outline">{filteredParts.length} listings</Badge>
            {activePills.map((pill) => (
              <Badge key={pill} variant="secondary">
                {pill}
              </Badge>
            ))}
            {activePills.length > 0 && (
              <Button variant="ghost" size="sm" onClick={handleResetAll}>
                Reset
              </Button>
            )}
          </div>

          <Separator />

          {filteredParts.length ? (
            <PartsCatalog parts={filteredParts} />
          ) : (
            <div className="rounded-xl border border-dashed border-border/60 p-10 text-center text-sm text-muted-foreground">
              No matches yet. Adjust the filters or provide a VIN to surface compatible inventory.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
