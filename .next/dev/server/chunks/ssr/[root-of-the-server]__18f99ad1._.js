module.exports = [
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/frontend/lib/db/prisma.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
const globalForPrisma = globalThis;
const hasDatabaseUrl = Boolean(process.env.DATABASE_URL?.trim());
function createMissingDatabaseUrlProxy() {
    return new Proxy({}, {
        get () {
            throw new Error("DATABASE_URL is not configured");
        }
    });
}
const prisma = globalForPrisma.prisma ?? (hasDatabaseUrl ? new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]({
    log: ("TURBOPACK compile-time truthy", 1) ? [
        "warn",
        "error"
    ] : "TURBOPACK unreachable"
}) : createMissingDatabaseUrlProxy());
if (("TURBOPACK compile-time value", "development") !== "production" && hasDatabaseUrl) {
    globalForPrisma.prisma = prisma;
}
}),
"[project]/frontend/lib/db/index.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/db/prisma.ts [app-rsc] (ecmascript)");
;
}),
"[project]/frontend/lib/actions/admin-import.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40ca5e8583d972533d78a38953efc72428a9a889b1":"importPartsAction"},"",""] */ __turbopack_context__.s([
    "importPartsAction",
    ()=>importPartsAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/xlsx/xlsx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/lib/db/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/db/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
const rowSchema = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    title: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    oem: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    brand: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    model: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    category: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    price: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    ]).optional(),
    image: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
function slugify(value) {
    return value.toLowerCase().trim().replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-+|-+$/g, "");
}
function parsePrice(input) {
    if (input === undefined || input === "") {
        return null;
    }
    const numeric = Number(input);
    if (Number.isNaN(numeric) || numeric < 0) {
        return null;
    }
    return Math.round(numeric);
}
function getCell(record, keys) {
    for (const key of keys){
        if (record[key] !== undefined && record[key] !== null && String(record[key]).trim() !== "") {
            return String(record[key]).trim();
        }
    }
    return "";
}
function mapRawRow(raw) {
    return {
        title: getCell(raw, [
            "title",
            "Title",
            "name",
            "part",
            "Part"
        ]),
        oem: getCell(raw, [
            "oem",
            "OEM",
            "oemNumber",
            "OEM Number"
        ]),
        brand: getCell(raw, [
            "brand",
            "Brand"
        ]),
        model: getCell(raw, [
            "model",
            "Model"
        ]),
        category: getCell(raw, [
            "category",
            "Category"
        ]),
        price: getCell(raw, [
            "price",
            "Price",
            "priceFrom",
            "Price From"
        ]),
        image: getCell(raw, [
            "image",
            "Image",
            "imageUrl",
            "Image URL"
        ])
    };
}
async function importPartsAction(formData) {
    const file = formData.get("file");
    if (!(file instanceof File)) {
        throw new Error("Необходимо выбрать файл");
    }
    const fileName = file.name || "upload";
    const extension = fileName.toLowerCase().split(".").pop() ?? "";
    if (![
        "csv",
        "xls",
        "xlsx"
    ].includes(extension)) {
        throw new Error("Неподдерживаемый формат файла. Используйте CSV, XLS или XLSX.");
    }
    const importJob = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].importJob.create({
        data: {
            file: fileName,
            status: "pending",
            summary: {
                totalRows: 0,
                createdParts: 0,
                updatedParts: 0,
                linkedCompatibilities: 0,
                errors: []
            }
        }
    });
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].importJob.update({
            where: {
                id: importJob.id
            },
            data: {
                status: "processing"
            }
        });
        const arrayBuffer = await file.arrayBuffer();
        const workbook = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["read"](arrayBuffer, {
            type: "array"
        });
        const firstSheetName = workbook.SheetNames[0];
        if (!firstSheetName) {
            throw new Error("В файле не найден читаемый лист");
        }
        const worksheet = workbook.Sheets[firstSheetName];
        const rows = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["utils"].sheet_to_json(worksheet, {
            defval: "",
            raw: false
        });
        let createdParts = 0;
        let updatedParts = 0;
        let linkedCompatibilities = 0;
        const errors = [];
        for(let index = 0; index < rows.length; index += 1){
            const rowNumber = index + 2;
            const mapped = mapRawRow(rows[index]);
            const parsed = rowSchema.safeParse(mapped);
            if (!parsed.success) {
                errors.push(`Строка ${rowNumber}: отсутствуют обязательные колонки`);
                continue;
            }
            const data = parsed.data;
            try {
                const brandName = data.brand.trim();
                const modelName = data.model.trim();
                const categoryName = data.category.trim();
                const title = data.title.trim();
                const oemNumber = data.oem.trim();
                const brand = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].brand.upsert({
                    where: {
                        slug: slugify(brandName)
                    },
                    update: {
                        name: brandName
                    },
                    create: {
                        name: brandName,
                        slug: slugify(brandName)
                    }
                });
                const category = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].category.upsert({
                    where: {
                        slug: slugify(categoryName)
                    },
                    update: {
                        name: categoryName
                    },
                    create: {
                        name: categoryName,
                        slug: slugify(categoryName)
                    }
                });
                const car = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].car.upsert({
                    where: {
                        slug: slugify(`${brandName} ${modelName}`)
                    },
                    update: {
                        brandId: brand.id,
                        model: modelName
                    },
                    create: {
                        brandId: brand.id,
                        model: modelName,
                        slug: slugify(`${brandName} ${modelName}`)
                    }
                });
                const existingPart = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].part.findUnique({
                    where: {
                        oemNumber
                    },
                    select: {
                        id: true
                    }
                });
                const part = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].part.upsert({
                    where: {
                        oemNumber
                    },
                    update: {
                        title,
                        slug: slugify(`${title} ${oemNumber}`),
                        categoryId: category.id,
                        priceFrom: parsePrice(data.price),
                        inStock: true
                    },
                    create: {
                        oemNumber,
                        title,
                        slug: slugify(`${title} ${oemNumber}`),
                        categoryId: category.id,
                        priceFrom: parsePrice(data.price),
                        inStock: true
                    }
                });
                if (existingPart) {
                    updatedParts += 1;
                } else {
                    createdParts += 1;
                }
                const compatibility = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].partCompatibility.createMany({
                    data: [
                        {
                            partId: part.id,
                            carId: car.id
                        }
                    ],
                    skipDuplicates: true
                });
                linkedCompatibilities += compatibility.count;
                if (data.image?.trim()) {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].image.upsert({
                        where: {
                            partId_sortOrder: {
                                partId: part.id,
                                sortOrder: 0
                            }
                        },
                        update: {
                            url: data.image.trim(),
                            alt: title
                        },
                        create: {
                            partId: part.id,
                            url: data.image.trim(),
                            alt: title,
                            sortOrder: 0
                        }
                    });
                }
            } catch (error) {
                errors.push(`Строка ${rowNumber}: ${error.message}`);
            }
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].importJob.update({
            where: {
                id: importJob.id
            },
            data: {
                status: errors.length ? "failed" : "completed",
                summary: {
                    totalRows: rows.length,
                    createdParts,
                    updatedParts,
                    linkedCompatibilities,
                    errors
                }
            }
        });
    } catch (error) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].importJob.update({
            where: {
                id: importJob.id
            },
            data: {
                status: "failed",
                summary: {
                    fatalError: error.message
                }
            }
        });
        throw error;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/import");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/parts");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/catalog");
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    importPartsAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(importPartsAction, "40ca5e8583d972533d78a38953efc72428a9a889b1", null);
}),
"[project]/frontend/.next-internal/server/app/admin/import/page/actions.js { ACTIONS_MODULE0 => \"[project]/frontend/lib/actions/admin-import.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$actions$2f$admin$2d$import$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/actions/admin-import.ts [app-rsc] (ecmascript)");
;
}),
"[project]/frontend/.next-internal/server/app/admin/import/page/actions.js { ACTIONS_MODULE0 => \"[project]/frontend/lib/actions/admin-import.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "40ca5e8583d972533d78a38953efc72428a9a889b1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$actions$2f$admin$2d$import$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["importPartsAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$import$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$frontend$2f$lib$2f$actions$2f$admin$2d$import$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/frontend/.next-internal/server/app/admin/import/page/actions.js { ACTIONS_MODULE0 => "[project]/frontend/lib/actions/admin-import.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$actions$2f$admin$2d$import$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/actions/admin-import.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__18f99ad1._.js.map