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
"[project]/frontend/lib/actions/admin-cars.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40432abfdccf8c8f735be287cb4dd4052cd7b51284":"updateCarAction","40773e186035f976b71fde2e9e7c71cd3c0d6ee1f7":"deleteCarAction","4092ad11e0bc2c5df7d54f2dd5205e5dfc5906d171":"createCarAction"},"",""] */ __turbopack_context__.s([
    "createCarAction",
    ()=>createCarAction,
    "deleteCarAction",
    ()=>deleteCarAction,
    "updateCarAction",
    ()=>updateCarAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/lib/db/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/db/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
const carSchema = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    brandName: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1).transform((value)=>value.trim()),
    model: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1).transform((value)=>value.trim()),
    generation: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().transform((value)=>value?.trim() || null),
    years: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().transform((value)=>value?.trim() || null)
});
function toSlug(text) {
    return text.toLowerCase().trim().replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-+|-+$/g, "");
}
function parseCarFormData(formData) {
    return carSchema.parse({
        brandName: String(formData.get("brandName") ?? ""),
        model: String(formData.get("model") ?? ""),
        generation: String(formData.get("generation") ?? ""),
        years: String(formData.get("years") ?? "")
    });
}
async function resolveBrandIdByName(brandName) {
    const normalizedName = brandName.trim();
    const slug = toSlug(normalizedName);
    const brand = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].brand.upsert({
        where: {
            slug
        },
        update: {
            name: normalizedName
        },
        create: {
            name: normalizedName,
            slug
        },
        select: {
            id: true
        }
    });
    return brand.id;
}
async function buildUniqueCarSlug(base, currentCarId) {
    const normalized = base || `car-${Date.now()}`;
    const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].car.findUnique({
        where: {
            slug: normalized
        },
        select: {
            id: true
        }
    });
    if (!existing || currentCarId && existing.id === currentCarId) {
        return normalized;
    }
    return `${normalized}-${Date.now()}`;
}
function revalidateCarPages(slug, previousSlug) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/cars");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/parts");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/vin");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/catalog");
    if (slug) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/car/${slug}`);
    }
    if (previousSlug && previousSlug !== slug) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/car/${previousSlug}`);
    }
}
async function createCarAction(formData) {
    const parsed = parseCarFormData(formData);
    const brandId = await resolveBrandIdByName(parsed.brandName);
    const slugBase = toSlug([
        parsed.model,
        parsed.generation
    ].filter(Boolean).join(" "));
    const slug = await buildUniqueCarSlug(slugBase);
    const car = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].car.create({
        data: {
            brandId,
            model: parsed.model,
            generation: parsed.generation,
            years: parsed.years,
            slug
        }
    });
    revalidateCarPages(car.slug);
}
async function updateCarAction(formData) {
    const carId = String(formData.get("carId") ?? "");
    if (!carId) {
        throw new Error("carId is required");
    }
    const parsed = parseCarFormData(formData);
    const brandId = await resolveBrandIdByName(parsed.brandName);
    const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].car.findUnique({
        where: {
            id: carId
        },
        select: {
            slug: true
        }
    });
    const slugBase = toSlug([
        parsed.model,
        parsed.generation
    ].filter(Boolean).join(" "));
    const slug = await buildUniqueCarSlug(slugBase, carId);
    const car = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].car.update({
        where: {
            id: carId
        },
        data: {
            brandId,
            model: parsed.model,
            generation: parsed.generation,
            years: parsed.years,
            slug
        }
    });
    revalidateCarPages(car.slug, existing?.slug);
}
async function deleteCarAction(formData) {
    const carId = String(formData.get("carId") ?? "");
    if (!carId) {
        throw new Error("carId is required");
    }
    const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].car.findUnique({
        where: {
            id: carId
        },
        select: {
            slug: true
        }
    });
    await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].car.delete({
        where: {
            id: carId
        }
    });
    revalidateCarPages(undefined, existing?.slug);
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createCarAction,
    updateCarAction,
    deleteCarAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createCarAction, "4092ad11e0bc2c5df7d54f2dd5205e5dfc5906d171", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCarAction, "40432abfdccf8c8f735be287cb4dd4052cd7b51284", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteCarAction, "40773e186035f976b71fde2e9e7c71cd3c0d6ee1f7", null);
}),
"[project]/frontend/.next-internal/server/app/admin/cars/page/actions.js { ACTIONS_MODULE0 => \"[project]/frontend/lib/actions/admin-cars.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$actions$2f$admin$2d$cars$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/actions/admin-cars.ts [app-rsc] (ecmascript)");
;
;
;
}),
"[project]/frontend/.next-internal/server/app/admin/cars/page/actions.js { ACTIONS_MODULE0 => \"[project]/frontend/lib/actions/admin-cars.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "40432abfdccf8c8f735be287cb4dd4052cd7b51284",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$actions$2f$admin$2d$cars$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateCarAction"],
    "40773e186035f976b71fde2e9e7c71cd3c0d6ee1f7",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$actions$2f$admin$2d$cars$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteCarAction"],
    "4092ad11e0bc2c5df7d54f2dd5205e5dfc5906d171",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$actions$2f$admin$2d$cars$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCarAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$cars$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$frontend$2f$lib$2f$actions$2f$admin$2d$cars$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/frontend/.next-internal/server/app/admin/cars/page/actions.js { ACTIONS_MODULE0 => "[project]/frontend/lib/actions/admin-cars.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$actions$2f$admin$2d$cars$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/actions/admin-cars.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c1aaab71._.js.map