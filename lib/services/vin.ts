import { prisma } from "@/lib/db";
import { getCarBySlug, listCatalogParts, type CatalogCar, type CatalogPart } from "@/lib/services/catalog";
import { fallbackCars } from "@/lib/services/catalog-fallback";

const fallbackPatterns = [
  { pattern: "LVT", carSlug: "chery-tiggo-7-pro" },
  { pattern: "LVV", carSlug: "chery-tiggo-7-pro" },
  { pattern: "L6T", carSlug: "geely-coolray" },
  { pattern: "LGW", carSlug: "haval-jolion" },
  { pattern: "LS5", carSlug: "changan-cs55-plus" },
  { pattern: "LJ1", carSlug: "jac-js6" },
];

export type VinSearchResult = {
  rawVin: string;
  normalizedVin: string;
  matchedPattern: string | null;
  car: CatalogCar | null;
  parts: CatalogPart[];
  message: string | null;
};

type DbVinPatternWithCar = {
  pattern: string;
  car: {
    slug: string;
  };
};

type DbVinPatternOnly = {
  pattern: string;
};

function normalizeVin(vin: string): string {
  return vin.trim().toUpperCase().replace(/\s+/g, "");
}

function isValidVinFormat(vin: string): boolean {
  return /^[A-HJ-NPR-Z0-9]{3,17}$/.test(vin);
}

async function fallbackVinLookup(normalizedVin: string): Promise<VinSearchResult> {
  const matched = [...fallbackPatterns]
    .sort((a, b) => b.pattern.length - a.pattern.length)
    .find((entry) => normalizedVin.startsWith(entry.pattern));

  if (!matched) {
    return {
      rawVin: normalizedVin,
      normalizedVin,
      matchedPattern: null,
      car: null,
      parts: [],
      message: "Префикс VIN пока не поддерживается. Попробуйте поиск по каталогу или отправьте VIN в WhatsApp.",
    };
  }

  const car = await getCarBySlug(matched.carSlug);
  const parts = car ? await listCatalogParts({ carSlug: car.slug }) : [];

  return {
    rawVin: normalizedVin,
    normalizedVin,
    matchedPattern: matched.pattern,
    car,
    parts,
    message: car ? null : "Автомобиль определён по префиксу, но не найден в каталоге.",
  };
}

export async function searchByVin(rawVin: string): Promise<VinSearchResult> {
  const normalizedVin = normalizeVin(rawVin);

  if (!normalizedVin) {
    return {
      rawVin,
      normalizedVin,
      matchedPattern: null,
      car: null,
      parts: [],
      message: "Введите VIN для поиска совместимых запчастей.",
    };
  }

  if (!isValidVinFormat(normalizedVin)) {
    return {
      rawVin,
      normalizedVin,
      matchedPattern: null,
      car: null,
      parts: [],
      message: "Некорректный формат VIN. Используйте 3–17 символов (A-Z, 0-9).",
    };
  }

  try {
    const patterns = (await prisma.vinPattern.findMany({
      include: {
        car: {
          include: {
            brand: true,
          },
        },
      },
    })) as DbVinPatternWithCar[];

    const matched = patterns
      .map((entry) => ({
        pattern: entry.pattern.toUpperCase(),
        carSlug: entry.car.slug,
      }))
      .sort((a, b) => b.pattern.length - a.pattern.length)
      .find((entry) => normalizedVin.startsWith(entry.pattern));

    if (!matched) {
      return {
        rawVin,
        normalizedVin,
        matchedPattern: null,
        car: null,
        parts: [],
        message: "Префикс VIN пока не поддерживается. Попробуйте поиск по каталогу или отправьте VIN в WhatsApp.",
      };
    }

    const car = await getCarBySlug(matched.carSlug);
    const parts = car ? await listCatalogParts({ carSlug: car.slug }) : [];

    return {
      rawVin,
      normalizedVin,
      matchedPattern: matched.pattern,
      car,
      parts,
      message: car ? null : "Автомобиль определён по префиксу, но не найден в каталоге.",
    };
  } catch {
    return fallbackVinLookup(normalizedVin);
  }
}

export async function listSupportedVinPrefixes(): Promise<string[]> {
  try {
    const patterns = (await prisma.vinPattern.findMany({
      select: {
        pattern: true,
      },
      orderBy: {
        pattern: "asc",
      },
    })) as DbVinPatternOnly[];

    return patterns.map((entry) => entry.pattern.toUpperCase());
  } catch {
    return fallbackPatterns.map((entry) => entry.pattern);
  }
}

export function getFallbackCarsCount(): number {
  return fallbackCars.length;
}
