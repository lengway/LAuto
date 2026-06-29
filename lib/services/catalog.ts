import { prisma } from "@/lib/db";

import { fallbackCars, fallbackCategories, fallbackParts } from "./catalog-fallback";

export type CatalogPart = {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  category: {
    name: string;
    slug: string;
  };
  priceFrom: number | null;
  inStock: boolean;
  imageUrl: string | null;
  imageUrls: string[];
  compatibleCars: Array<{
    slug: string;
    fullName: string;
  }>;
};

export type CatalogCategory = {
  id: string;
  name: string;
  slug: string;
  partsCount: number;
};

export type CatalogCar = {
  id: string;
  slug: string;
  fullName: string;
  brandName: string;
  brandSlug: string;
};

export type CatalogBrand = {
  slug: string;
  name: string;
  carsCount: number;
};

type ListPartsInput = {
  query?: string;
  categorySlug?: string;
  brandSlug?: string;
  carSlug?: string;
  inStockOnly?: boolean;
  minPrice?: number;
  maxPrice?: number;
  sort?: "newest" | "price_asc" | "price_desc" | "title_asc";
};

type DbPart = {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  priceFrom: number | null;
  inStock: boolean;
  category: {
    name: string;
    slug: string;
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
        slug: string;
      };
    };
  }>;
};

type DbCategory = {
  id: string;
  name: string;
  slug: string;
  _count: {
    parts: number;
  };
};

type DbCar = {
  id: string;
  slug: string;
  model: string;
  generation: string | null;
  brand: {
    name: string;
    slug: string;
  };
};

function buildCarName(brand: string, model: string, generation: string | null) {
  return [brand, model, generation].filter(Boolean).join(" ");
}

function mapFallbackPart(partSlug: string): CatalogPart | null {
  const part = fallbackParts.find((entry) => entry.slug === partSlug);
  if (!part) {
    return null;
  }

  return {
    id: part.id,
    slug: part.slug,
    title: part.title,
    description: part.description,
    category: {
      name: part.category.name,
      slug: part.category.slug,
    },
    priceFrom: part.priceFrom,
    inStock: part.inStock,
    imageUrl: part.imageUrl,
    imageUrls: part.imageUrl ? [part.imageUrl] : [],
    compatibleCars: part.carSlugs
      .map((slug) => fallbackCars.find((car) => car.slug === slug))
      .filter((car): car is (typeof fallbackCars)[number] => Boolean(car))
      .map((car) => ({
        slug: car.slug,
        fullName: buildCarName(car.brand.name, car.model, car.generation),
      })),
  };
}

function listFallbackParts(input: ListPartsInput = {}) {
  const normalizedQuery = input.query?.trim().toLowerCase() ?? "";

  let filtered = fallbackParts;

  if (input.categorySlug) {
    filtered = filtered.filter((part) => part.category.slug === input.categorySlug);
  }

  if (input.carSlug) {
    filtered = filtered.filter((part) => part.carSlugs.includes(input.carSlug!));
  }

  if (input.brandSlug) {
    filtered = filtered.filter((part) =>
      part.carSlugs.some((slug) => fallbackCars.find((car) => car.slug === slug)?.brand.slug === input.brandSlug)
    );
  }

  if (input.inStockOnly) {
    filtered = filtered.filter((part) => part.inStock);
  }

  if (typeof input.minPrice === "number") {
    filtered = filtered.filter((part) => typeof part.priceFrom === "number" && part.priceFrom >= input.minPrice!);
  }

  if (typeof input.maxPrice === "number") {
    filtered = filtered.filter((part) => typeof part.priceFrom === "number" && part.priceFrom <= input.maxPrice!);
  }

  if (normalizedQuery) {
    filtered = filtered.filter((part) => {
      const compatibleCars = part.carSlugs
        .map((slug) => fallbackCars.find((car) => car.slug === slug))
        .filter((car): car is (typeof fallbackCars)[number] => Boolean(car));

      return (
        part.title.toLowerCase().includes(normalizedQuery) ||
        part.description.toLowerCase().includes(normalizedQuery) ||
        part.category.name.toLowerCase().includes(normalizedQuery) ||
        compatibleCars.some((car) =>
          [car.brand.name, car.model, car.generation ?? ""].join(" ").toLowerCase().includes(normalizedQuery)
        )
      );
    });
  }

  switch (input.sort) {
    case "price_asc":
      filtered = [...filtered].sort((a, b) => (a.priceFrom ?? Number.MAX_SAFE_INTEGER) - (b.priceFrom ?? Number.MAX_SAFE_INTEGER));
      break;
    case "price_desc":
      filtered = [...filtered].sort((a, b) => (b.priceFrom ?? 0) - (a.priceFrom ?? 0));
      break;
    case "title_asc":
      filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
      break;
    default:
      break;
  }

  return filtered.map((part) => mapFallbackPart(part.slug)).filter((part): part is CatalogPart => Boolean(part));
}

function listFallbackCategories(): CatalogCategory[] {
  return fallbackCategories.map((category) => ({
    id: category.id,
    name: category.name,
    slug: category.slug,
    partsCount: fallbackParts.filter((part) => part.category.slug === category.slug).length,
  }));
}

function listFallbackCars(brandSlug?: string): CatalogCar[] {
  return fallbackCars
    .filter((car) => (brandSlug ? car.brand.slug === brandSlug : true))
    .map((car) => ({
    id: car.id,
    slug: car.slug,
    fullName: buildCarName(car.brand.name, car.model, car.generation),
    brandName: car.brand.name,
    brandSlug: car.brand.slug,
  }));
}

function listFallbackBrands(): CatalogBrand[] {
  const map = new Map<string, CatalogBrand>();

  for (const car of fallbackCars) {
    const existing = map.get(car.brand.slug);
    if (existing) {
      existing.carsCount += 1;
      continue;
    }

    map.set(car.brand.slug, {
      slug: car.brand.slug,
      name: car.brand.name,
      carsCount: 1,
    });
  }

  return Array.from(map.values()).sort((a, b) => a.name.localeCompare(b.name));
}

export async function listCatalogParts(input: ListPartsInput = {}): Promise<CatalogPart[]> {
  const normalizedQuery = input.query?.trim() ?? "";

  const normalizedMinPrice = typeof input.minPrice === "number" && Number.isFinite(input.minPrice) ? input.minPrice : undefined;
  const normalizedMaxPrice = typeof input.maxPrice === "number" && Number.isFinite(input.maxPrice) ? input.maxPrice : undefined;

  const orderBy:
    | { createdAt: "desc" }
    | { title: "asc" }
    | { priceFrom: "asc" }
    | { priceFrom: "desc" } =
    input.sort === "price_asc"
      ? { priceFrom: "asc" }
      : input.sort === "price_desc"
        ? { priceFrom: "desc" }
        : input.sort === "title_asc"
          ? { title: "asc" }
          : { createdAt: "desc" };

  try {
    const compatibilityFilters: Array<object> = [];

    if (input.carSlug) {
      compatibilityFilters.push({
        compatibilities: {
          some: {
            car: {
              slug: input.carSlug,
            },
          },
        },
      });
    }

    if (input.brandSlug) {
      compatibilityFilters.push({
        compatibilities: {
          some: {
            car: {
              brand: {
                slug: input.brandSlug,
              },
            },
          },
        },
      });
    }

    const parts = (await prisma.part.findMany({
      where: {
        ...(input.categorySlug
          ? {
              category: {
                slug: input.categorySlug,
              },
            }
          : {}),
        ...(compatibilityFilters.length ? { AND: compatibilityFilters } : {}),
        ...(input.inStockOnly
          ? {
              inStock: true,
            }
          : {}),
        ...(typeof normalizedMinPrice === "number" || typeof normalizedMaxPrice === "number"
          ? {
              priceFrom: {
                ...(typeof normalizedMinPrice === "number" ? { gte: normalizedMinPrice } : {}),
                ...(typeof normalizedMaxPrice === "number" ? { lte: normalizedMaxPrice } : {}),
              },
            }
          : {}),
        ...(normalizedQuery
          ? {
              OR: [
                {
                  title: {
                    contains: normalizedQuery,
                    mode: "insensitive",
                  },
                },
                {
                  description: {
                    contains: normalizedQuery,
                    mode: "insensitive",
                  },
                },
                {
                  category: {
                    name: {
                      contains: normalizedQuery,
                      mode: "insensitive",
                    },
                  },
                },
                {
                  compatibilities: {
                    some: {
                      car: {
                        model: {
                          contains: normalizedQuery,
                          mode: "insensitive",
                        },
                      },
                    },
                  },
                },
                {
                  compatibilities: {
                    some: {
                      car: {
                        brand: {
                          name: {
                            contains: normalizedQuery,
                            mode: "insensitive",
                          },
                        },
                      },
                    },
                  },
                },
              ],
            }
          : {}),
      },
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
      orderBy,
    })) as DbPart[];

    return parts.map((part) => ({
      id: part.id,
      slug: part.slug,
      title: part.title,
      description: part.description,
      category: {
        name: part.category.name,
        slug: part.category.slug,
      },
      priceFrom: part.priceFrom,
      inStock: part.inStock,
      imageUrl: part.images[0]?.url ?? null,
      imageUrls: part.images.map((image) => image.url),
      compatibleCars: part.compatibilities.map((compatibility) => ({
        slug: compatibility.car.slug,
        fullName: buildCarName(
          compatibility.car.brand.name,
          compatibility.car.model,
          compatibility.car.generation
        ),
      })),
    }));
  } catch {
    return listFallbackParts(input);
  }
}

export async function listCatalogCategories(): Promise<CatalogCategory[]> {
  try {
    const categories = (await prisma.category.findMany({
      include: {
        _count: {
          select: {
            parts: true,
          },
        },
      },
      orderBy: {
        name: "asc",
      },
    })) as DbCategory[];

    return categories.map((category) => ({
      id: category.id,
      name: category.name,
      slug: category.slug,
      partsCount: category._count.parts,
    }));
  } catch {
    return listFallbackCategories();
  }
}

export async function listCatalogCars(brandSlug?: string): Promise<CatalogCar[]> {
  try {
    const cars = (await prisma.model.findMany({
      where: brandSlug
        ? {
            brand: {
              slug: brandSlug,
            },
          }
        : undefined,
      include: {
        brand: true,
      },
      orderBy: [{ brand: { name: "asc" } }, { model: "asc" }],
    })) as DbCar[];

    return cars.map((car) => ({
      id: car.id,
      slug: car.slug,
      fullName: buildCarName(car.brand.name, car.model, car.generation),
      brandName: car.brand.name,
      brandSlug: car.brand.slug,
    }));
  } catch {
    return listFallbackCars(brandSlug);
  }
}

export async function listCatalogBrands(): Promise<CatalogBrand[]> {
  try {
    const brands = await prisma.brand.findMany({
      include: {
        _count: {
          select: {
            models: true,
          },
        },
      },
      orderBy: {
        name: "asc",
      },
    }) as Array<{
      slug: string;
      name: string;
      _count: {
        models: number;
      };
    }>;

    return brands.map((brand) => ({
      slug: brand.slug,
      name: brand.name,
      carsCount: brand._count.models,
    }));
  } catch {
    return listFallbackBrands();
  }
}

export async function getPartBySlug(slug: string): Promise<CatalogPart | null> {
  try {
    const part = (await prisma.part.findUnique({
      where: { slug },
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
    })) as DbPart | null;

    if (!part) {
      return null;
    }

    return {
      id: part.id,
      slug: part.slug,
      title: part.title,
      description: part.description,
      category: {
        name: part.category.name,
        slug: part.category.slug,
      },
      priceFrom: part.priceFrom,
      inStock: part.inStock,
      imageUrl: part.images[0]?.url ?? null,
      imageUrls: part.images.map((image) => image.url),
      compatibleCars: part.compatibilities.map((compatibility) => ({
        slug: compatibility.car.slug,
        fullName: buildCarName(
          compatibility.car.brand.name,
          compatibility.car.model,
          compatibility.car.generation
        ),
      })),
    };
  } catch {
    return mapFallbackPart(slug);
  }
}

export async function getCarBySlug(slug: string): Promise<CatalogCar | null> {
  try {
    const car = await prisma.model.findFirst({
      where: { slug },
      include: {
        brand: true,
      },
    });

    if (!car) {
      return null;
    }

    return {
      id: car.id,
      slug: car.slug,
      fullName: buildCarName(car.brand.name, car.model, car.generation),
      brandName: car.brand.name,
      brandSlug: car.brand.slug,
    };
  } catch {
    const fallbackCar = fallbackCars.find((car) => car.slug === slug);
    if (!fallbackCar) {
      return null;
    }

    return {
      id: fallbackCar.id,
      slug: fallbackCar.slug,
      fullName: buildCarName(fallbackCar.brand.name, fallbackCar.model, fallbackCar.generation),
      brandName: fallbackCar.brand.name,
      brandSlug: fallbackCar.brand.slug,
    };
  }
}

