export type FallbackCategory = {
  id: string;
  name: string;
  slug: string;
};

export type FallbackCar = {
  id: string;
  slug: string;
  model: string;
  generation: string | null;
  brand: {
    name: string;
    slug: string;
  };
};

export type FallbackPart = {
  id: string;
  slug: string;
  title: string;
  oemNumber: string;
  description: string;
  category: FallbackCategory;
  priceFrom: number;
  inStock: boolean;
  imageUrl: string;
  carSlugs: string[];
};

export const fallbackCategories: FallbackCategory[] = [
  { id: "c1", name: "Подвеска", slug: "suspension" },
  { id: "c2", name: "Фильтры", slug: "filters" },
  { id: "c3", name: "Двигатель", slug: "engine" },
  { id: "c4", name: "Электрика", slug: "electronics" },
  { id: "c5", name: "Кузов", slug: "body" },
  { id: "c6", name: "Тормозная система", slug: "brakes" },
  { id: "c7", name: "Трансмиссия", slug: "transmission" },
  { id: "c8", name: "Охлаждение", slug: "cooling" },
];

export const fallbackCars: FallbackCar[] = [
  {
    id: "car1",
    slug: "chery-tiggo-7-pro",
    model: "Tiggo 7",
    generation: "Pro",
    brand: { name: "Chery", slug: "chery" },
  },
  {
    id: "car2",
    slug: "geely-coolray",
    model: "Coolray",
    generation: null,
    brand: { name: "Geely", slug: "geely" },
  },
  {
    id: "car3",
    slug: "haval-jolion",
    model: "Jolion",
    generation: null,
    brand: { name: "Haval", slug: "haval" },
  },
  {
    id: "car4",
    slug: "changan-cs55-plus",
    model: "CS55 Plus",
    generation: null,
    brand: { name: "Changan", slug: "changan" },
  },
  {
    id: "car5",
    slug: "jac-js6",
    model: "JS6",
    generation: null,
    brand: { name: "JAC", slug: "jac" },
  },
  {
    id: "car6",
    slug: "geely-atlas-pro",
    model: "Atlas",
    generation: "Pro",
    brand: { name: "Geely", slug: "geely" },
  },
  {
    id: "car7",
    slug: "chery-tiggo-8-pro",
    model: "Tiggo 8",
    generation: "Pro",
    brand: { name: "Chery", slug: "chery" },
  },
  {
    id: "car8",
    slug: "haval-f7",
    model: "F7",
    generation: null,
    brand: { name: "Haval", slug: "haval" },
  },
];

export const fallbackParts: FallbackPart[] = [
  {
    id: "part1",
    slug: "front-shock-absorber-123-abc",
    title: "Амортизатор передний",
    oemNumber: "123-ABC",
    description: "Передний амортизатор подвески для Chery Tiggo 7 Pro.",
    category: fallbackCategories[0],
    priceFrom: 15000,
    inStock: true,
    imageUrl:
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=80",
    carSlugs: ["chery-tiggo-7-pro"],
  },
  {
    id: "part2",
    slug: "oil-filter-88722",
    title: "Фильтр масляный",
    oemNumber: "88722",
    description: "OEM масляный фильтр для Chery Tiggo 7 Pro и Geely Coolray.",
    category: fallbackCategories[1],
    priceFrom: 4500,
    inStock: true,
    imageUrl:
      "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=1200&q=80",
    carSlugs: ["chery-tiggo-7-pro", "geely-coolray"],
  },
  {
    id: "part3",
    slug: "air-filter-hvl-9911",
    title: "Фильтр воздушный",
    oemNumber: "HVL-9911",
    description: "Воздушный фильтр для Haval Jolion.",
    category: fallbackCategories[1],
    priceFrom: 5200,
    inStock: true,
    imageUrl:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
    carSlugs: ["haval-jolion"],
  },
  {
    id: "part4",
    slug: "rear-brake-pads-gly-4471",
    title: "Колодки тормозные задние",
    oemNumber: "GLY-4471",
    description: "Комплект задних тормозных колодок для Geely Coolray и Atlas Pro.",
    category: fallbackCategories[5],
    priceFrom: 7800,
    inStock: true,
    imageUrl:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80",
    carSlugs: ["geely-coolray", "geely-atlas-pro"],
  },
  {
    id: "part5",
    slug: "front-brake-disc-hvl-4410",
    title: "Диск тормозной передний",
    oemNumber: "HVL-4410",
    description: "Передний тормозной диск для Haval Jolion и Haval F7.",
    category: fallbackCategories[5],
    priceFrom: 12400,
    inStock: true,
    imageUrl:
      "https://images.unsplash.com/photo-1595716146228-378b558d46d9?auto=format&fit=crop&w=1200&q=80",
    carSlugs: ["haval-jolion", "haval-f7"],
  },
  {
    id: "part6",
    slug: "radiator-chg-3201",
    title: "Радиатор охлаждения",
    oemNumber: "CHG-3201",
    description: "Радиатор двигателя для Changan CS55 Plus.",
    category: fallbackCategories[7],
    priceFrom: 26800,
    inStock: true,
    imageUrl:
      "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?auto=format&fit=crop&w=1200&q=80",
    carSlugs: ["changan-cs55-plus"],
  },
  {
    id: "part7",
    slug: "water-pump-chr-2100",
    title: "Помпа системы охлаждения",
    oemNumber: "CHR-2100",
    description: "Водяная помпа двигателя для Chery Tiggo 7 Pro и Tiggo 8 Pro.",
    category: fallbackCategories[7],
    priceFrom: 14600,
    inStock: false,
    imageUrl:
      "https://images.unsplash.com/photo-1635764703282-f4a56f6abf54?auto=format&fit=crop&w=1200&q=80",
    carSlugs: ["chery-tiggo-7-pro", "chery-tiggo-8-pro"],
  },
  {
    id: "part8",
    slug: "ignition-coil-jac-8841",
    title: "Катушка зажигания",
    oemNumber: "JAC-8841",
    description: "Катушка зажигания для JAC JS6.",
    category: fallbackCategories[3],
    priceFrom: 6900,
    inStock: true,
    imageUrl:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    carSlugs: ["jac-js6"],
  },
  {
    id: "part9",
    slug: "spark-plug-set-gee-1902",
    title: "Свечи зажигания (комплект)",
    oemNumber: "GEE-1902",
    description: "Комплект свечей зажигания для Geely Coolray и Atlas Pro.",
    category: fallbackCategories[2],
    priceFrom: 5600,
    inStock: true,
    imageUrl:
      "https://images.unsplash.com/photo-1613214149922-f1809c99f203?auto=format&fit=crop&w=1200&q=80",
    carSlugs: ["geely-coolray", "geely-atlas-pro"],
  },
  {
    id: "part10",
    slug: "timing-belt-kit-hvl-7730",
    title: "Комплект ГРМ",
    oemNumber: "HVL-7730",
    description: "Комплект ремня ГРМ и роликов для Haval F7.",
    category: fallbackCategories[2],
    priceFrom: 23100,
    inStock: false,
    imageUrl:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
    carSlugs: ["haval-f7"],
  },
  {
    id: "part11",
    slug: "gearbox-mount-chr-5512",
    title: "Опора КПП",
    oemNumber: "CHR-5512",
    description: "Опора коробки передач для Chery Tiggo 8 Pro.",
    category: fallbackCategories[6],
    priceFrom: 9800,
    inStock: true,
    imageUrl:
      "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=1200&q=80",
    carSlugs: ["chery-tiggo-8-pro"],
  },
  {
    id: "part12",
    slug: "cv-joint-outer-chg-8820",
    title: "ШРУС наружный",
    oemNumber: "CHG-8820",
    description: "Наружный ШРУС привода для Changan CS55 Plus.",
    category: fallbackCategories[6],
    priceFrom: 17400,
    inStock: true,
    imageUrl:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
    carSlugs: ["changan-cs55-plus"],
  },
  {
    id: "part13",
    slug: "headlight-right-jac-7711",
    title: "Фара передняя правая",
    oemNumber: "JAC-7711",
    description: "Правая передняя фара для JAC JS6.",
    category: fallbackCategories[4],
    priceFrom: 39200,
    inStock: true,
    imageUrl:
      "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80",
    carSlugs: ["jac-js6"],
  },
  {
    id: "part14",
    slug: "bumper-grille-chr-9042",
    title: "Решётка переднего бампера",
    oemNumber: "CHR-9042",
    description: "Решётка переднего бампера для Chery Tiggo 7 Pro.",
    category: fallbackCategories[4],
    priceFrom: 11800,
    inStock: true,
    imageUrl:
      "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?auto=format&fit=crop&w=1200&q=80",
    carSlugs: ["chery-tiggo-7-pro"],
  },
  {
    id: "part15",
    slug: "front-control-arm-gee-4208",
    title: "Рычаг передней подвески",
    oemNumber: "GEE-4208",
    description: "Рычаг передней подвески для Geely Atlas Pro.",
    category: fallbackCategories[0],
    priceFrom: 20800,
    inStock: true,
    imageUrl:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80",
    carSlugs: ["geely-atlas-pro"],
  },
  {
    id: "part16",
    slug: "engine-mount-hvl-6102",
    title: "Подушка двигателя",
    oemNumber: "HVL-6102",
    description: "Опора двигателя для Haval Jolion.",
    category: fallbackCategories[2],
    priceFrom: 8700,
    inStock: true,
    imageUrl:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80",
    carSlugs: ["haval-jolion"],
  },
];
