import { prisma } from "@/lib/db";
import { fallbackCars, fallbackCategories, fallbackParts } from "@/lib/services/catalog-fallback";

export type AdminPartRow = {
  id: string;
  title: string;
  slug: string;
  oemNumber: string;
  categoryId: string;
  categoryName: string;
  compatibleCars: string[];
  compatibleCarSlugs: string[];
  imageUrl: string | null;
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

export type AdminCarRow = {
  id: string;
  brandId: string;
  brandName: string;
  model: string;
  generation: string | null;
  years: string | null;
  slug: string;
};

export type AdminOverview = {
  partsCount: number;
  carsCount: number;
  vinPatternsCount: number;
  latestImports: Array<{
    id: string;
    file: string;
    status: string;
    createdAt: string;
  }>;
};

export type AdminImportJob = {
  id: string;
  file: string;
  status: string;
  createdAt: string;
  summary: unknown;
};

export type AdminVinPatternRow = {
  id: string;
  pattern: string;
  carId: string;
  carSlug: string;
  carFullName: string;
};

type DbPartRow = {
  id: string;
  title: string;
  slug: string;
  oemNumber: string;
  categoryId: string;
  priceFrom: number | null;
  inStock: boolean;
  category: {
    name: string;
  };
  images: Array<{
    url: string;
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
};

type DbCar = {
  id: string;
  brandId: string;
  slug: string;
  model: string;
  generation: string | null;
  years: string | null;
  brand: {
    name: string;
  };
};

type DbImportJob = {
  id: string;
  file: string;
  status: string;
  createdAt: Date;
};

type DbVinPatternRow = {
  id: string;
  pattern: string;
  carId: string;
  car: {
    slug: string;
    model: string;
    generation: string | null;
    brand: {
      name: string;
    };
  };
};

const fallbackVinRows: AdminVinPatternRow[] = [
  { id: "fallback-vin-1", pattern: "LVT", carId: "car1", carSlug: "chery-tiggo-7-pro", carFullName: "Chery Tiggo 7 Pro" },
  { id: "fallback-vin-2", pattern: "LVV", carId: "car1", carSlug: "chery-tiggo-7-pro", carFullName: "Chery Tiggo 7 Pro" },
  { id: "fallback-vin-3", pattern: "L6T", carId: "car2", carSlug: "geely-coolray", carFullName: "Geely Coolray" },
  { id: "fallback-vin-4", pattern: "LGW", carId: "car3", carSlug: "haval-jolion", carFullName: "Haval Jolion" },
  { id: "fallback-vin-5", pattern: "LS5", carId: "car4", carSlug: "changan-cs55-plus", carFullName: "Changan CS55 Plus" },
  { id: "fallback-vin-6", pattern: "LJ1", carId: "car5", carSlug: "jac-js6", carFullName: "JAC JS6" },
];

function fallbackRows(): AdminPartRow[] {
  return fallbackParts.map((part) => ({
    id: part.id,
    title: part.title,
    slug: part.slug,
    oemNumber: part.oemNumber,
    categoryId: part.category.id,
    categoryName: part.category.name,
    compatibleCars: part.carSlugs,
    compatibleCarSlugs: part.carSlugs,
    imageUrl: part.imageUrl,
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
          take: 1,
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
      oemNumber: part.oemNumber,
      categoryId: part.categoryId,
      categoryName: part.category.name,
      compatibleCars: part.compatibilities.map((entry) =>
        [entry.car.brand.name, entry.car.model, entry.car.generation]
          .filter(Boolean)
          .join(" ")
      ),
      compatibleCarSlugs: part.compatibilities.map((entry) => entry.car.slug),
      imageUrl: part.images[0]?.url ?? null,
      priceFrom: part.priceFrom,
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
    const cars = (await prisma.car.findMany({
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

export async function listAdminCars(): Promise<AdminCarRow[]> {
  try {
    const cars = (await prisma.car.findMany({
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
      generation: car.generation,
      years: null,
      slug: car.slug,
    }));
  }
}

export async function getAdminOverview(): Promise<AdminOverview> {
  try {
    const [partsCount, carsCount, vinPatternsCount, latestImports] = await Promise.all([
      prisma.part.count(),
      prisma.car.count(),
      prisma.vinPattern.count(),
      prisma.importJob.findMany({
        orderBy: {
          createdAt: "desc",
        },
        take: 5,
      }),
    ]) as [number, number, number, DbImportJob[]];

    return {
      partsCount,
      carsCount,
      vinPatternsCount,
      latestImports: latestImports.map((job) => ({
        id: job.id,
        file: job.file,
        status: job.status,
        createdAt: job.createdAt.toISOString(),
      })),
    };
  } catch {
    return {
      partsCount: fallbackParts.length,
      carsCount: fallbackCars.length,
      vinPatternsCount: 3,
      latestImports: [],
    };
  }
}

export async function listAdminImportJobs(): Promise<AdminImportJob[]> {
  try {
    const jobs = (await prisma.importJob.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 20,
    })) as Array<{
      id: string;
      file: string;
      status: string;
      createdAt: Date;
      summary: unknown;
    }>;

    return jobs.map((job) => ({
      id: job.id,
      file: job.file,
      status: job.status,
      createdAt: job.createdAt.toISOString(),
      summary: job.summary,
    }));
  } catch {
    return [];
  }
}

export async function listAdminVinPatterns(): Promise<AdminVinPatternRow[]> {
  try {
    const rows = (await prisma.vinPattern.findMany({
      include: {
        car: {
          include: {
            brand: true,
          },
        },
      },
      orderBy: {
        pattern: "asc",
      },
    })) as DbVinPatternRow[];

    return rows.map((row) => ({
      id: row.id,
      pattern: row.pattern,
      carId: row.carId,
      carSlug: row.car.slug,
      carFullName: [row.car.brand.name, row.car.model, row.car.generation].filter(Boolean).join(" "),
    }));
  } catch {
    return fallbackVinRows;
  }
}
