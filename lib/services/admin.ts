import { prisma } from "@/lib/db";
import { fallbackCars, fallbackCategories, fallbackParts } from "@/lib/services/catalog-fallback";

export type AdminPartRow = {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  categoryId: string;
  categoryName: string;
  compatibleCars: string[];
  compatibleCarSlugs: string[];
  imageUrl: string | null;
  imageUrls: string[];
  priceFrom: number | null;
  inStock: boolean;
};

export type AdminCategoryOption = {
  id: string;
  name: string;
  slug: string;
};

export type AdminCarOption = {
  id: string;
  slug: string;
  fullName: string;
};

export type AdminBrandOption = {
  id: string;
  name: string;
  slug: string;
};

export type AdminBrandRow = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  imageUrl: string | null;
};

export type AdminCarRow = {
  id: string;
  brandId: string;
  brandName: string;
  model: string;
  description: string | null;
  imageUrl: string | null;
  generation: string | null;
  years: string | null;
  slug: string;
};

export type AdminOverview = {
  partsCount: number;
  carsCount: number;
  brandsCount: number;
};

export type AdminImportJob = {
  id: string;
  file: string;
  status: string;
  createdAt: string;
  summary: unknown;
};

type DbPartRow = {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  categoryId: string;
  priceFrom: unknown;
  inStock: boolean;
  category: {
    name: string;
  };
  images: Array<{
    url: string;
    sortOrder: number;
  }>;
  compatibilities: Array<{
    car: {
      slug: string;
      model: string;
      generation: string | null;
      brand: {
        name: string;
      };
    };
  }>;
};

type DbCategory = {
  id: string;
  name: string;
  slug: string;
};

type DbBrand = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  imageUrl: string | null;
};

type DbCar = {
  id: string;
  brandId: string;
  slug: string;
  model: string;
  description: string | null;
  imageUrl: string | null;
  generation: string | null;
  years: string | null;
  brand: {
    name: string;
  };
};

function toPlainNumber(input: unknown): number | null {
  if (input === null || input === undefined || input === "") {
    return null;
  }

  if (typeof input === "number") {
    return Number.isFinite(input) ? input : null;
  }

  if (typeof input === "object" && input !== null) {
    const maybeDecimal = input as { toNumber?: unknown };
    if (typeof maybeDecimal.toNumber === "function") {
      const numeric = maybeDecimal.toNumber();
      return Number.isFinite(numeric) ? numeric : null;
    }
  }

  const numeric = Number(String(input));
  return Number.isFinite(numeric) ? numeric : null;
}

function fallbackRows(): AdminPartRow[] {
  return fallbackParts.map((part) => ({
    id: part.id,
    title: part.title,
    slug: part.slug,
    description: part.description,
    categoryId: part.category.id,
    categoryName: part.category.name,
    compatibleCars: part.carSlugs,
    compatibleCarSlugs: part.carSlugs,
    imageUrl: part.imageUrl,
    imageUrls: part.imageUrl ? [part.imageUrl] : [],
    priceFrom: part.priceFrom,
    inStock: part.inStock,
  }));
}

export async function listAdminParts(): Promise<AdminPartRow[]> {
  try {
    const parts = (await prisma.part.findMany({
      include: {
        category: true,
        images: {
          orderBy: {
            sortOrder: "asc",
          },
        },
        compatibilities: {
          include: {
            car: {
              include: {
                brand: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    })) as DbPartRow[];

    return parts.map((part) => ({
      id: part.id,
      title: part.title,
      slug: part.slug,
      description: part.description,
      categoryId: part.categoryId,
      categoryName: part.category.name,
      compatibleCars: part.compatibilities.map((entry) =>
        [entry.car.brand.name, entry.car.model, entry.car.generation]
          .filter(Boolean)
          .join(" ")
      ),
      compatibleCarSlugs: part.compatibilities.map((entry) => entry.car.slug),
      imageUrl: part.images[0]?.url ?? null,
      imageUrls: part.images.map((image) => image.url),
      priceFrom: toPlainNumber(part.priceFrom),
      inStock: part.inStock,
    }));
  } catch {
    return fallbackRows();
  }
}

export async function listAdminCategoryOptions(): Promise<AdminCategoryOption[]> {
  try {
    const categories = (await prisma.category.findMany({
      orderBy: {
        name: "asc",
      },
    })) as DbCategory[];

    return categories.map((entry) => ({
      id: entry.id,
      name: entry.name,
      slug: entry.slug,
    }));
  } catch {
    return fallbackCategories.map((entry) => ({
      id: entry.id,
      name: entry.name,
      slug: entry.slug,
    }));
  }
}

export async function listAdminCarOptions(): Promise<AdminCarOption[]> {
  try {
    const cars = (await prisma.model.findMany({
      include: {
        brand: true,
      },
      orderBy: [{ brand: { name: "asc" } }, { model: "asc" }],
    })) as DbCar[];

    return cars.map((car) => ({
      id: car.id,
      slug: car.slug,
      fullName: [car.brand.name, car.model, car.generation].filter(Boolean).join(" "),
    }));
  } catch {
    return fallbackCars.map((car) => ({
      id: car.id,
      slug: car.slug,
      fullName: [car.brand.name, car.model, car.generation].filter(Boolean).join(" "),
    }));
  }
}

export async function listAdminBrandOptions(): Promise<AdminBrandOption[]> {
  try {
    const brands = (await prisma.brand.findMany({
      orderBy: {
        name: "asc",
      },
    })) as DbBrand[];

    return brands.map((brand) => ({
      id: brand.id,
      name: brand.name,
      slug: brand.slug,
    }));
  } catch {
    const uniqueFallbackBrands = new Map<string, AdminBrandOption>();

    for (const car of fallbackCars) {
      if (!uniqueFallbackBrands.has(car.brand.slug)) {
        uniqueFallbackBrands.set(car.brand.slug, {
          id: car.brand.slug,
          name: car.brand.name,
          slug: car.brand.slug,
        });
      }
    }

    return Array.from(uniqueFallbackBrands.values()).sort((a, b) => a.name.localeCompare(b.name));
  }
}

export async function listAdminBrands(): Promise<AdminBrandRow[]> {
  try {
    const brands = (await prisma.brand.findMany({
      orderBy: {
        name: "asc",
      },
    })) as DbBrand[];

    return brands.map((brand) => ({
      id: brand.id,
      name: brand.name,
      slug: brand.slug,
      description: brand.description,
      imageUrl: brand.imageUrl,
    }));
  } catch {
    const uniqueFallbackBrands = new Map<string, AdminBrandRow>();

    for (const car of fallbackCars) {
      if (!uniqueFallbackBrands.has(car.brand.slug)) {
        uniqueFallbackBrands.set(car.brand.slug, {
          id: car.brand.slug,
          name: car.brand.name,
          slug: car.brand.slug,
          description: null,
          imageUrl: null,
        });
      }
    }

    return Array.from(uniqueFallbackBrands.values()).sort((a, b) => a.name.localeCompare(b.name));
  }
}

export async function listAdminCars(): Promise<AdminCarRow[]> {
  try {
    const cars = (await prisma.model.findMany({
      include: {
        brand: true,
      },
      orderBy: [{ brand: { name: "asc" } }, { model: "asc" }],
    })) as DbCar[];

    return cars.map((car) => ({
      id: car.id,
      brandId: car.brandId,
      brandName: car.brand.name,
      model: car.model,
      description: car.description,
      imageUrl: car.imageUrl,
      generation: car.generation,
      years: car.years,
      slug: car.slug,
    }));
  } catch {
    return fallbackCars.map((car) => ({
      id: car.id,
      brandId: car.brand.slug,
      brandName: car.brand.name,
      model: car.model,
      description: null,
      imageUrl: null,
      generation: car.generation,
      years: null,
      slug: car.slug,
    }));
  }
}

export async function listAdminModels(): Promise<AdminCarRow[]> {
  return listAdminCars();
}

export async function getAdminOverview(): Promise<AdminOverview> {
  try {
    const [partsCount, carsCount, brandsCount] = await Promise.all([
      prisma.part.count(),
      prisma.model.count(),
      prisma.brand.count(),
    ]);

    return {
      partsCount,
      carsCount,
      brandsCount,
    };
  } catch {
    const brandSlugs = new Set(fallbackCars.map((car) => car.brand.slug));

    return {
      partsCount: fallbackParts.length,
      carsCount: fallbackCars.length,
      brandsCount: brandSlugs.size,
    };
  }
}

export async function listAdminImportJobs(): Promise<AdminImportJob[]> {
  return [];
}

