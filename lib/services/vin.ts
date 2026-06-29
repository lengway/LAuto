import { type CatalogCar, type CatalogPart } from "@/lib/services/catalog";
import { fallbackCars } from "@/lib/services/catalog-fallback";

export type VinSearchResult = {
  rawVin: string;
  normalizedVin: string;
  matchedPattern: string | null;
  car: CatalogCar | null;
  parts: CatalogPart[];
  message: string | null;
};

function normalizeVin(vin: string): string {
  return vin.trim().toUpperCase().replace(/\s+/g, "");
}

export async function searchByVin(rawVin: string): Promise<VinSearchResult> {
  const normalizedVin = normalizeVin(rawVin);

  return {
    rawVin,
    normalizedVin,
    matchedPattern: null,
    car: null,
    parts: [],
    message: "VIN-поиск отключен. Используйте каталог: марка → модель → детали.",
  };
}

export async function listSupportedVinPrefixes(): Promise<string[]> {
  return [];
}

export function getFallbackCarsCount(): number {
  return fallbackCars.length;
}
