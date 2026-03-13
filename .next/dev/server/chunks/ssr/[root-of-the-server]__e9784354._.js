module.exports = [
"[project]/frontend/app/favicon.ico.mjs { IMAGE => \"[project]/frontend/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/frontend/app/favicon.ico.mjs { IMAGE => \"[project]/frontend/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/frontend/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/frontend/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/frontend/app/admin/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/frontend/app/admin/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/frontend/lib/services/catalog-fallback.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fallbackCars",
    ()=>fallbackCars,
    "fallbackCategories",
    ()=>fallbackCategories,
    "fallbackParts",
    ()=>fallbackParts
]);
const fallbackCategories = [
    {
        id: "c1",
        name: "Подвеска",
        slug: "suspension"
    },
    {
        id: "c2",
        name: "Фильтры",
        slug: "filters"
    },
    {
        id: "c3",
        name: "Двигатель",
        slug: "engine"
    },
    {
        id: "c4",
        name: "Электрика",
        slug: "electronics"
    },
    {
        id: "c5",
        name: "Кузов",
        slug: "body"
    },
    {
        id: "c6",
        name: "Тормозная система",
        slug: "brakes"
    },
    {
        id: "c7",
        name: "Трансмиссия",
        slug: "transmission"
    },
    {
        id: "c8",
        name: "Охлаждение",
        slug: "cooling"
    }
];
const fallbackCars = [
    {
        id: "car1",
        slug: "chery-tiggo-7-pro",
        model: "Tiggo 7",
        generation: "Pro",
        brand: {
            name: "Chery",
            slug: "chery"
        }
    },
    {
        id: "car2",
        slug: "geely-coolray",
        model: "Coolray",
        generation: null,
        brand: {
            name: "Geely",
            slug: "geely"
        }
    },
    {
        id: "car3",
        slug: "haval-jolion",
        model: "Jolion",
        generation: null,
        brand: {
            name: "Haval",
            slug: "haval"
        }
    },
    {
        id: "car4",
        slug: "changan-cs55-plus",
        model: "CS55 Plus",
        generation: null,
        brand: {
            name: "Changan",
            slug: "changan"
        }
    },
    {
        id: "car5",
        slug: "jac-js6",
        model: "JS6",
        generation: null,
        brand: {
            name: "JAC",
            slug: "jac"
        }
    },
    {
        id: "car6",
        slug: "geely-atlas-pro",
        model: "Atlas",
        generation: "Pro",
        brand: {
            name: "Geely",
            slug: "geely"
        }
    },
    {
        id: "car7",
        slug: "chery-tiggo-8-pro",
        model: "Tiggo 8",
        generation: "Pro",
        brand: {
            name: "Chery",
            slug: "chery"
        }
    },
    {
        id: "car8",
        slug: "haval-f7",
        model: "F7",
        generation: null,
        brand: {
            name: "Haval",
            slug: "haval"
        }
    }
];
const fallbackParts = [
    {
        id: "part1",
        slug: "front-shock-absorber-123-abc",
        title: "Амортизатор передний",
        oemNumber: "123-ABC",
        description: "Передний амортизатор подвески для Chery Tiggo 7 Pro.",
        category: fallbackCategories[0],
        priceFrom: 15000,
        inStock: true,
        imageUrl: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=80",
        carSlugs: [
            "chery-tiggo-7-pro"
        ]
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
        imageUrl: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=1200&q=80",
        carSlugs: [
            "chery-tiggo-7-pro",
            "geely-coolray"
        ]
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
        imageUrl: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
        carSlugs: [
            "haval-jolion"
        ]
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
        imageUrl: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80",
        carSlugs: [
            "geely-coolray",
            "geely-atlas-pro"
        ]
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
        imageUrl: "https://images.unsplash.com/photo-1595716146228-378b558d46d9?auto=format&fit=crop&w=1200&q=80",
        carSlugs: [
            "haval-jolion",
            "haval-f7"
        ]
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
        imageUrl: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?auto=format&fit=crop&w=1200&q=80",
        carSlugs: [
            "changan-cs55-plus"
        ]
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
        imageUrl: "https://images.unsplash.com/photo-1635764703282-f4a56f6abf54?auto=format&fit=crop&w=1200&q=80",
        carSlugs: [
            "chery-tiggo-7-pro",
            "chery-tiggo-8-pro"
        ]
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
        imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
        carSlugs: [
            "jac-js6"
        ]
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
        imageUrl: "https://images.unsplash.com/photo-1613214149922-f1809c99f203?auto=format&fit=crop&w=1200&q=80",
        carSlugs: [
            "geely-coolray",
            "geely-atlas-pro"
        ]
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
        imageUrl: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
        carSlugs: [
            "haval-f7"
        ]
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
        imageUrl: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=1200&q=80",
        carSlugs: [
            "chery-tiggo-8-pro"
        ]
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
        imageUrl: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
        carSlugs: [
            "changan-cs55-plus"
        ]
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
        imageUrl: "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80",
        carSlugs: [
            "jac-js6"
        ]
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
        imageUrl: "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?auto=format&fit=crop&w=1200&q=80",
        carSlugs: [
            "chery-tiggo-7-pro"
        ]
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
        imageUrl: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80",
        carSlugs: [
            "geely-atlas-pro"
        ]
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
        imageUrl: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80",
        carSlugs: [
            "haval-jolion"
        ]
    }
];
}),
"[project]/frontend/lib/services/admin.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAdminOverview",
    ()=>getAdminOverview,
    "listAdminBrandOptions",
    ()=>listAdminBrandOptions,
    "listAdminCarOptions",
    ()=>listAdminCarOptions,
    "listAdminCars",
    ()=>listAdminCars,
    "listAdminCategoryOptions",
    ()=>listAdminCategoryOptions,
    "listAdminImportJobs",
    ()=>listAdminImportJobs,
    "listAdminParts",
    ()=>listAdminParts,
    "listAdminVinPatterns",
    ()=>listAdminVinPatterns
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/lib/db/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/db/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$services$2f$catalog$2d$fallback$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/services/catalog-fallback.ts [app-rsc] (ecmascript)");
;
;
const fallbackVinRows = [
    {
        id: "fallback-vin-1",
        pattern: "LVT",
        carId: "car1",
        carSlug: "chery-tiggo-7-pro",
        carFullName: "Chery Tiggo 7 Pro"
    },
    {
        id: "fallback-vin-2",
        pattern: "LVV",
        carId: "car1",
        carSlug: "chery-tiggo-7-pro",
        carFullName: "Chery Tiggo 7 Pro"
    },
    {
        id: "fallback-vin-3",
        pattern: "L6T",
        carId: "car2",
        carSlug: "geely-coolray",
        carFullName: "Geely Coolray"
    },
    {
        id: "fallback-vin-4",
        pattern: "LGW",
        carId: "car3",
        carSlug: "haval-jolion",
        carFullName: "Haval Jolion"
    },
    {
        id: "fallback-vin-5",
        pattern: "LS5",
        carId: "car4",
        carSlug: "changan-cs55-plus",
        carFullName: "Changan CS55 Plus"
    },
    {
        id: "fallback-vin-6",
        pattern: "LJ1",
        carId: "car5",
        carSlug: "jac-js6",
        carFullName: "JAC JS6"
    }
];
function fallbackRows() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$services$2f$catalog$2d$fallback$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fallbackParts"].map((part)=>({
            id: part.id,
            title: part.title,
            slug: part.slug,
            oemNumber: part.oemNumber,
            categoryId: part.category.id,
            categoryName: part.category.name,
            compatibleCars: part.carSlugs,
            compatibleCarSlugs: part.carSlugs,
            priceFrom: part.priceFrom,
            inStock: part.inStock
        }));
}
async function listAdminParts() {
    try {
        const parts = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].part.findMany({
            include: {
                category: true,
                compatibilities: {
                    include: {
                        car: {
                            include: {
                                brand: true
                            }
                        }
                    }
                }
            },
            orderBy: {
                createdAt: "desc"
            }
        });
        return parts.map((part)=>({
                id: part.id,
                title: part.title,
                slug: part.slug,
                oemNumber: part.oemNumber,
                categoryId: part.categoryId,
                categoryName: part.category.name,
                compatibleCars: part.compatibilities.map((entry)=>[
                        entry.car.brand.name,
                        entry.car.model,
                        entry.car.generation
                    ].filter(Boolean).join(" ")),
                compatibleCarSlugs: part.compatibilities.map((entry)=>entry.car.slug),
                priceFrom: part.priceFrom,
                inStock: part.inStock
            }));
    } catch  {
        return fallbackRows();
    }
}
async function listAdminCategoryOptions() {
    try {
        const categories = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].category.findMany({
            orderBy: {
                name: "asc"
            }
        });
        return categories.map((entry)=>({
                id: entry.id,
                name: entry.name,
                slug: entry.slug
            }));
    } catch  {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$services$2f$catalog$2d$fallback$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fallbackCategories"].map((entry)=>({
                id: entry.id,
                name: entry.name,
                slug: entry.slug
            }));
    }
}
async function listAdminCarOptions() {
    try {
        const cars = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].car.findMany({
            include: {
                brand: true
            },
            orderBy: [
                {
                    brand: {
                        name: "asc"
                    }
                },
                {
                    model: "asc"
                }
            ]
        });
        return cars.map((car)=>({
                id: car.id,
                slug: car.slug,
                fullName: [
                    car.brand.name,
                    car.model,
                    car.generation
                ].filter(Boolean).join(" ")
            }));
    } catch  {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$services$2f$catalog$2d$fallback$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fallbackCars"].map((car)=>({
                id: car.id,
                slug: car.slug,
                fullName: [
                    car.brand.name,
                    car.model,
                    car.generation
                ].filter(Boolean).join(" ")
            }));
    }
}
async function listAdminBrandOptions() {
    try {
        const brands = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].brand.findMany({
            orderBy: {
                name: "asc"
            }
        });
        return brands.map((brand)=>({
                id: brand.id,
                name: brand.name,
                slug: brand.slug
            }));
    } catch  {
        const uniqueFallbackBrands = new Map();
        for (const car of __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$services$2f$catalog$2d$fallback$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fallbackCars"]){
            if (!uniqueFallbackBrands.has(car.brand.slug)) {
                uniqueFallbackBrands.set(car.brand.slug, {
                    id: car.brand.slug,
                    name: car.brand.name,
                    slug: car.brand.slug
                });
            }
        }
        return Array.from(uniqueFallbackBrands.values()).sort((a, b)=>a.name.localeCompare(b.name));
    }
}
async function listAdminCars() {
    try {
        const cars = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].car.findMany({
            include: {
                brand: true
            },
            orderBy: [
                {
                    brand: {
                        name: "asc"
                    }
                },
                {
                    model: "asc"
                }
            ]
        });
        return cars.map((car)=>({
                id: car.id,
                brandId: car.brandId,
                brandName: car.brand.name,
                model: car.model,
                generation: car.generation,
                years: car.years,
                slug: car.slug
            }));
    } catch  {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$services$2f$catalog$2d$fallback$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fallbackCars"].map((car)=>({
                id: car.id,
                brandId: car.brand.slug,
                brandName: car.brand.name,
                model: car.model,
                generation: car.generation,
                years: null,
                slug: car.slug
            }));
    }
}
async function getAdminOverview() {
    try {
        const [partsCount, carsCount, vinPatternsCount, latestImports] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].part.count(),
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].car.count(),
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].vinPattern.count(),
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].importJob.findMany({
                orderBy: {
                    createdAt: "desc"
                },
                take: 5
            })
        ]);
        return {
            partsCount,
            carsCount,
            vinPatternsCount,
            latestImports: latestImports.map((job)=>({
                    id: job.id,
                    file: job.file,
                    status: job.status,
                    createdAt: job.createdAt.toISOString()
                }))
        };
    } catch  {
        return {
            partsCount: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$services$2f$catalog$2d$fallback$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fallbackParts"].length,
            carsCount: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$services$2f$catalog$2d$fallback$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fallbackCars"].length,
            vinPatternsCount: 3,
            latestImports: []
        };
    }
}
async function listAdminImportJobs() {
    try {
        const jobs = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].importJob.findMany({
            orderBy: {
                createdAt: "desc"
            },
            take: 20
        });
        return jobs.map((job)=>({
                id: job.id,
                file: job.file,
                status: job.status,
                createdAt: job.createdAt.toISOString(),
                summary: job.summary
            }));
    } catch  {
        return [];
    }
}
async function listAdminVinPatterns() {
    try {
        const rows = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].vinPattern.findMany({
            include: {
                car: {
                    include: {
                        brand: true
                    }
                }
            },
            orderBy: {
                pattern: "asc"
            }
        });
        return rows.map((row)=>({
                id: row.id,
                pattern: row.pattern,
                carId: row.carId,
                carSlug: row.car.slug,
                carFullName: [
                    row.car.brand.name,
                    row.car.model,
                    row.car.generation
                ].filter(Boolean).join(" ")
            }));
    } catch  {
        return fallbackVinRows;
    }
}
}),
"[project]/frontend/components/ui/table.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "Table",
    ()=>Table,
    "TableBody",
    ()=>TableBody,
    "TableCaption",
    ()=>TableCaption,
    "TableCell",
    ()=>TableCell,
    "TableFooter",
    ()=>TableFooter,
    "TableHead",
    ()=>TableHead,
    "TableHeader",
    ()=>TableHeader,
    "TableRow",
    ()=>TableRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Table = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Table() from the server but Table is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/frontend/components/ui/table.tsx <module evaluation>", "Table");
const TableBody = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TableBody() from the server but TableBody is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/frontend/components/ui/table.tsx <module evaluation>", "TableBody");
const TableCaption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TableCaption() from the server but TableCaption is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/frontend/components/ui/table.tsx <module evaluation>", "TableCaption");
const TableCell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TableCell() from the server but TableCell is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/frontend/components/ui/table.tsx <module evaluation>", "TableCell");
const TableFooter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TableFooter() from the server but TableFooter is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/frontend/components/ui/table.tsx <module evaluation>", "TableFooter");
const TableHead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TableHead() from the server but TableHead is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/frontend/components/ui/table.tsx <module evaluation>", "TableHead");
const TableHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TableHeader() from the server but TableHeader is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/frontend/components/ui/table.tsx <module evaluation>", "TableHeader");
const TableRow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TableRow() from the server but TableRow is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/frontend/components/ui/table.tsx <module evaluation>", "TableRow");
}),
"[project]/frontend/components/ui/table.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "Table",
    ()=>Table,
    "TableBody",
    ()=>TableBody,
    "TableCaption",
    ()=>TableCaption,
    "TableCell",
    ()=>TableCell,
    "TableFooter",
    ()=>TableFooter,
    "TableHead",
    ()=>TableHead,
    "TableHeader",
    ()=>TableHeader,
    "TableRow",
    ()=>TableRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Table = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Table() from the server but Table is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/frontend/components/ui/table.tsx", "Table");
const TableBody = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TableBody() from the server but TableBody is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/frontend/components/ui/table.tsx", "TableBody");
const TableCaption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TableCaption() from the server but TableCaption is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/frontend/components/ui/table.tsx", "TableCaption");
const TableCell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TableCell() from the server but TableCell is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/frontend/components/ui/table.tsx", "TableCell");
const TableFooter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TableFooter() from the server but TableFooter is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/frontend/components/ui/table.tsx", "TableFooter");
const TableHead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TableHead() from the server but TableHead is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/frontend/components/ui/table.tsx", "TableHead");
const TableHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TableHeader() from the server but TableHeader is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/frontend/components/ui/table.tsx", "TableHeader");
const TableRow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TableRow() from the server but TableRow is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/frontend/components/ui/table.tsx", "TableRow");
}),
"[project]/frontend/components/ui/table.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/frontend/components/ui/table.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/frontend/components/ui/table.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/frontend/app/admin/parts/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminPartsPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$actions$2f$admin$2d$parts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/actions/admin-parts.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$services$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/services/admin.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/ui/table.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/ui/button.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
const metadata = {
    title: "Управление запчастями | Chinalending"
};
async function AdminPartsPage() {
    const [parts, categories, cars] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$services$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listAdminParts"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$services$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listAdminCategoryOptions"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$services$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listAdminCarOptions"])()
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "rounded-xl border border-border/60 p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-3 text-lg font-semibold",
                        children: "Добавить запчасть"
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/admin/parts/page.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        action: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$actions$2f$admin$2d$parts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createPartAction"],
                        className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "title",
                                required: true,
                                placeholder: "Название",
                                className: "h-9 rounded-md border border-border/60 bg-background px-3 text-sm"
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "oemNumber",
                                required: true,
                                placeholder: "OEM номер",
                                className: "h-9 rounded-md border border-border/60 bg-background px-3 text-sm"
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                name: "categoryId",
                                required: true,
                                className: "h-9 rounded-md border border-border/60 bg-background px-3 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Выберите категорию"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                        lineNumber: 44,
                                        columnNumber: 13
                                    }, this),
                                    categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: category.id,
                                            children: category.name
                                        }, category.id, false, {
                                            fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                            lineNumber: 46,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "priceFrom",
                                placeholder: "Цена от",
                                type: "number",
                                min: 0,
                                className: "h-9 rounded-md border border-border/60 bg-background px-3 text-sm"
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                name: "inStock",
                                defaultValue: "true",
                                className: "h-9 rounded-md border border-border/60 bg-background px-3 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "true",
                                        children: "В наличии"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "false",
                                        children: "Нет в наличии"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "compatibleCarModels",
                                list: "parts-car-models-create",
                                placeholder: "Модели через запятую: Chery Tiggo 7 Pro, Geely Coolray",
                                className: "h-9 rounded-md border border-border/60 bg-background px-3 text-sm sm:col-span-2 lg:col-span-3"
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("datalist", {
                                id: "parts-car-models-create",
                                children: cars.map((car)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: car.fullName
                                    }, car.id, false, {
                                        fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                type: "submit",
                                className: "sm:w-fit",
                                children: "Создать"
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/app/admin/parts/page.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-xs text-muted-foreground",
                        children: "Начните вводить модель, выберите вариант из подсказок. Для нескольких моделей используйте запятую."
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/admin/parts/page.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/app/admin/parts/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "rounded-xl border border-border/60 p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-3 text-lg font-semibold",
                        children: "Таблица запчастей"
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/admin/parts/page.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Table"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableRow"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableHead"], {
                                            children: "Название"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableHead"], {
                                            children: "OEM"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableHead"], {
                                            children: "Категория"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableHead"], {
                                            children: "Совместимые авто"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableHead"], {
                                            children: "Цена"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                            lineNumber: 91,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableHead"], {
                                            children: "Наличие"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                            lineNumber: 92,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableHead"], {
                                            children: "Действия"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableBody"], {
                                children: parts.map((part)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableRow"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableCell"], {
                                                children: part.title
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                                lineNumber: 99,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableCell"], {
                                                children: part.oemNumber
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                                lineNumber: 100,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableCell"], {
                                                children: part.categoryName
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                                lineNumber: 101,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableCell"], {
                                                className: "max-w-72 whitespace-normal text-xs text-muted-foreground",
                                                children: part.compatibleCars.length ? part.compatibleCars.join(", ") : "-"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                                lineNumber: 102,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableCell"], {
                                                children: part.priceFrom ? `${part.priceFrom.toLocaleString()} ₸` : "-"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                                lineNumber: 105,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableCell"], {
                                                children: part.inStock ? "В наличии" : "Нет"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                                lineNumber: 106,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableCell"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                                    className: "cursor-pointer rounded-md border border-border/60 px-2 py-1 text-xs",
                                                                    children: "Изменить"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                                                    lineNumber: 110,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-2 w-64 rounded-md border border-border/60 bg-background p-2",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                                        action: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$actions$2f$admin$2d$parts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updatePartAction"],
                                                                        className: "grid gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "hidden",
                                                                                name: "partId",
                                                                                value: part.id
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                                                                lineNumber: 113,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                name: "title",
                                                                                defaultValue: part.title,
                                                                                required: true,
                                                                                className: "h-8 rounded-md border border-border/60 bg-background px-2 text-xs"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                                                                lineNumber: 114,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                name: "oemNumber",
                                                                                defaultValue: part.oemNumber,
                                                                                required: true,
                                                                                className: "h-8 rounded-md border border-border/60 bg-background px-2 text-xs"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                                                                lineNumber: 120,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                name: "categoryId",
                                                                                defaultValue: part.categoryId,
                                                                                className: "h-8 rounded-md border border-border/60 bg-background px-2 text-xs",
                                                                                children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: category.id,
                                                                                        children: category.name
                                                                                    }, category.id, false, {
                                                                                        fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                                                                        lineNumber: 132,
                                                                                        columnNumber: 31
                                                                                    }, this))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                                                                lineNumber: 126,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                name: "compatibleCarModels",
                                                                                list: `parts-car-models-edit-${part.id}`,
                                                                                defaultValue: part.compatibleCars.join(", "),
                                                                                className: "h-8 rounded-md border border-border/60 bg-background px-2 text-xs"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                                                                lineNumber: 137,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("datalist", {
                                                                                id: `parts-car-models-edit-${part.id}`,
                                                                                children: cars.map((car)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: car.fullName
                                                                                    }, car.id, false, {
                                                                                        fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                                                                        lineNumber: 145,
                                                                                        columnNumber: 31
                                                                                    }, this))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                                                                lineNumber: 143,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "number",
                                                                                name: "priceFrom",
                                                                                min: 0,
                                                                                defaultValue: part.priceFrom ?? "",
                                                                                className: "h-8 rounded-md border border-border/60 bg-background px-2 text-xs"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                                                                lineNumber: 148,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                name: "inStock",
                                                                                defaultValue: part.inStock ? "true" : "false",
                                                                                className: "h-8 rounded-md border border-border/60 bg-background px-2 text-xs",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "true",
                                                                                        children: "В наличии"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                                                                        lineNumber: 160,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "false",
                                                                                        children: "Нет в наличии"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                                                                        lineNumber: 161,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                                                                lineNumber: 155,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                                                                type: "submit",
                                                                                size: "sm",
                                                                                variant: "outline",
                                                                                children: "Сохранить"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                                                                lineNumber: 163,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                                                        lineNumber: 112,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                                                    lineNumber: 111,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                                            lineNumber: 109,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                            action: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$actions$2f$admin$2d$parts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deletePartAction"],
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "hidden",
                                                                    name: "partId",
                                                                    value: part.id
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                                                    lineNumber: 171,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                                                    type: "submit",
                                                                    size: "sm",
                                                                    variant: "destructive",
                                                                    children: "Удалить"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                                                    lineNumber: 172,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                                            lineNumber: 170,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                                lineNumber: 107,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, part.id, true, {
                                        fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/admin/parts/page.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/app/admin/parts/page.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/app/admin/parts/page.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/app/admin/parts/page.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}),
"[project]/frontend/app/admin/parts/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/frontend/app/admin/parts/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e9784354._.js.map