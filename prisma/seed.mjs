import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "");
}

async function upsertBrand(name) {
  return prisma.brand.upsert({
    where: { slug: slugify(name) },
    update: { name },
    create: { name, slug: slugify(name) },
  });
}

async function upsertCategory(name, parentId) {
  return prisma.category.upsert({
    where: { slug: slugify(name) },
    update: { name, parentId: parentId ?? null },
    create: { name, slug: slugify(name), parentId: parentId ?? null },
  });
}

async function upsertCar({ brandId, model, generation, years }) {
  const slug = slugify(generation ? `${model} ${generation}` : model);

  const existing = await prisma.model.findFirst({
    where: {
      brandId,
      slug,
    },
  });

  if (existing) {
    return prisma.model.update({
      where: { id: existing.id },
      data: { brandId, model, generation, years },
    });
  }

  return prisma.model.create({
    data: { brandId, model, slug, generation, years },
  });
}

async function upsertPart({ title, categoryId, description, priceFrom, inStock, imageUrl, compatibleCarIds }) {
  const slug = slugify(title);

  const part = await prisma.part.upsert({
    where: { slug },
    update: {
      title,
      slug,
      categoryId,
      description,
      priceFrom,
      inStock,
    },
    create: {
      slug,
      title,
      categoryId,
      description,
      priceFrom,
      inStock,
    },
  });

  if (imageUrl) {
    await prisma.image.upsert({
      where: {
        partId_sortOrder: {
          partId: part.id,
          sortOrder: 0,
        },
      },
      update: {
        url: imageUrl,
        alt: title,
      },
      create: {
        partId: part.id,
        url: imageUrl,
        alt: title,
        sortOrder: 0,
      },
    });
  }

  await prisma.partFitment.createMany({
    data: compatibleCarIds.map((carId) => ({ partId: part.id, modelId: carId })),
    skipDuplicates: true,
  });

  await prisma.partCategory.createMany({
    data: [{ partId: part.id, categoryId }],
    skipDuplicates: true,
  });

  return part;
}

async function main() {
  const chery = await upsertBrand("Chery");
  const geely = await upsertBrand("Geely");
  const haval = await upsertBrand("Haval");
  const changan = await upsertBrand("Changan");
  const jac = await upsertBrand("JAC");

  const suspension = await upsertCategory("Подвеска");
  const filters = await upsertCategory("Фильтры");
  const engine = await upsertCategory("Двигатель", null);
  const electronics = await upsertCategory("Электрика", null);
  const body = await upsertCategory("Кузов", null);
  const brakes = await upsertCategory("Тормозная система", null);
  const transmission = await upsertCategory("Трансмиссия", null);
  const cooling = await upsertCategory("Охлаждение", null);

  const tiggo7Pro = await upsertCar({
    brandId: chery.id,
    model: "Tiggo 7",
    generation: "Pro",
    years: "2021-2026",
  });

  const coolray = await upsertCar({
    brandId: geely.id,
    model: "Coolray",
    generation: null,
    years: "2020-2026",
  });

  const jolion = await upsertCar({
    brandId: haval.id,
    model: "Jolion",
    generation: null,
    years: "2021-2026",
  });

  const cs55Plus = await upsertCar({
    brandId: changan.id,
    model: "CS55 Plus",
    generation: null,
    years: "2021-2026",
  });

  const js6 = await upsertCar({
    brandId: jac.id,
    model: "JS6",
    generation: null,
    years: "2022-2026",
  });

  const atlasPro = await upsertCar({
    brandId: geely.id,
    model: "Atlas",
    generation: "Pro",
    years: "2021-2026",
  });

  const tiggo8Pro = await upsertCar({
    brandId: chery.id,
    model: "Tiggo 8",
    generation: "Pro",
    years: "2021-2026",
  });

  const f7 = await upsertCar({
    brandId: haval.id,
    model: "F7",
    generation: null,
    years: "2019-2026",
  });
  const partSeeds = [
    {
      title: "Амортизатор передний",
      categoryId: suspension.id,
      description: "Передний амортизатор подвески для Chery Tiggo 7 Pro.",
      priceFrom: 15000,
      inStock: true,
      imageUrl: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=80",
      compatibleCarIds: [tiggo7Pro.id],
    },
    {
      title: "Фильтр масляный",
      categoryId: filters.id,
      description: "Масляный фильтр для Chery Tiggo 7 Pro и Geely Coolray.",
      priceFrom: 4500,
      inStock: true,
      imageUrl: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=1200&q=80",
      compatibleCarIds: [tiggo7Pro.id, coolray.id],
    },
    {
      title: "Фильтр воздушный",
      categoryId: filters.id,
      description: "Воздушный фильтр для Haval Jolion.",
      priceFrom: 5200,
      inStock: true,
      imageUrl: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
      compatibleCarIds: [jolion.id],
    },
    {
      title: "Колодки тормозные задние",
      categoryId: brakes.id,
      description: "Комплект задних тормозных колодок для Geely Coolray и Atlas Pro.",
      priceFrom: 7800,
      inStock: true,
      imageUrl: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80",
      compatibleCarIds: [coolray.id, atlasPro.id],
    },
    {
      title: "Диск тормозной передний",
      categoryId: brakes.id,
      description: "Передний тормозной диск для Haval Jolion и Haval F7.",
      priceFrom: 12400,
      inStock: true,
      imageUrl: "https://images.unsplash.com/photo-1595716146228-378b558d46d9?auto=format&fit=crop&w=1200&q=80",
      compatibleCarIds: [jolion.id, f7.id],
    },
    {
      title: "Радиатор охлаждения",
      categoryId: cooling.id,
      description: "Радиатор двигателя для Changan CS55 Plus.",
      priceFrom: 26800,
      inStock: true,
      imageUrl: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?auto=format&fit=crop&w=1200&q=80",
      compatibleCarIds: [cs55Plus.id],
    },
    {
      title: "Помпа системы охлаждения",
      categoryId: cooling.id,
      description: "Водяная помпа двигателя для Chery Tiggo 7 Pro и Tiggo 8 Pro.",
      priceFrom: 14600,
      inStock: false,
      imageUrl: "https://images.unsplash.com/photo-1635764703282-f4a56f6abf54?auto=format&fit=crop&w=1200&q=80",
      compatibleCarIds: [tiggo7Pro.id, tiggo8Pro.id],
    },
    {
      title: "Катушка зажигания",
      categoryId: electronics.id,
      description: "Катушка зажигания для JAC JS6.",
      priceFrom: 6900,
      inStock: true,
      imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
      compatibleCarIds: [js6.id],
    },
    {
      title: "Свечи зажигания (комплект)",
      categoryId: engine.id,
      description: "Комплект свечей зажигания для Geely Coolray и Atlas Pro.",
      priceFrom: 5600,
      inStock: true,
      imageUrl: "https://images.unsplash.com/photo-1613214149922-f1809c99f203?auto=format&fit=crop&w=1200&q=80",
      compatibleCarIds: [coolray.id, atlasPro.id],
    },
    {
      title: "Комплект ГРМ",
      categoryId: engine.id,
      description: "Комплект ремня ГРМ и роликов для Haval F7.",
      priceFrom: 23100,
      inStock: false,
      imageUrl: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
      compatibleCarIds: [f7.id],
    },
    {
      title: "Опора КПП",
      categoryId: transmission.id,
      description: "Опора коробки передач для Chery Tiggo 8 Pro.",
      priceFrom: 9800,
      inStock: true,
      imageUrl: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=1200&q=80",
      compatibleCarIds: [tiggo8Pro.id],
    },
    {
      title: "ШРУС наружный",
      categoryId: transmission.id,
      description: "Наружный ШРУС привода для Changan CS55 Plus.",
      priceFrom: 17400,
      inStock: true,
      imageUrl: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
      compatibleCarIds: [cs55Plus.id],
    },
    {
      title: "Фара передняя правая",
      categoryId: body.id,
      description: "Правая передняя фара для JAC JS6.",
      priceFrom: 39200,
      inStock: true,
      imageUrl: "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80",
      compatibleCarIds: [js6.id],
    },
    {
      title: "Решётка переднего бампера",
      categoryId: body.id,
      description: "Решётка переднего бампера для Chery Tiggo 7 Pro.",
      priceFrom: 11800,
      inStock: true,
      imageUrl: "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?auto=format&fit=crop&w=1200&q=80",
      compatibleCarIds: [tiggo7Pro.id],
    },
    {
      title: "Рычаг передней подвески",
      categoryId: suspension.id,
      description: "Рычаг передней подвески для Geely Atlas Pro.",
      priceFrom: 20800,
      inStock: true,
      imageUrl: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80",
      compatibleCarIds: [atlasPro.id],
    },
    {
      title: "Подушка двигателя",
      categoryId: engine.id,
      description: "Опора двигателя для Haval Jolion.",
      priceFrom: 8700,
      inStock: true,
      imageUrl: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80",
      compatibleCarIds: [jolion.id],
    },
  ];

  for (const partSeed of partSeeds) {
    await upsertPart(partSeed);
  }

}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error("Seed failed", error);
    await prisma.$disconnect();
    process.exit(1);
  });
