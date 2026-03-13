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
"[project]/frontend/lib/actions/admin-parts.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"401ad8163d38babef5da6706134665aa5275810eaa":"deletePartAction","40bd2d0e84dcd065ad244654164b807fb890e6e8a5":"createPartAction","40ffb39d185511b700e6f58c6f12cec278b1b1ac41":"updatePartAction"},"",""] */ __turbopack_context__.s([
    "createPartAction",
    ()=>createPartAction,
    "deletePartAction",
    ()=>deletePartAction,
    "updatePartAction",
    ()=>updatePartAction
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
const basePartSchema = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    title: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2),
    oemNumber: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2),
    categoryId: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    priceFrom: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    ]).optional().transform((value)=>{
        if (value === undefined || value === "") {
            return null;
        }
        const numeric = Number(value);
        if (Number.isNaN(numeric) || numeric < 0) {
            return null;
        }
        return Math.round(numeric);
    }),
    inStock: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    compatibleCarModels: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
function toSlug(text) {
    return text.toLowerCase().trim().replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-+|-+$/g, "");
}
function parseCommon(formData) {
    const raw = {
        title: String(formData.get("title") ?? ""),
        oemNumber: String(formData.get("oemNumber") ?? ""),
        categoryId: String(formData.get("categoryId") ?? ""),
        priceFrom: String(formData.get("priceFrom") ?? ""),
        inStock: formData.get("inStock") === "true" || formData.get("inStock") === "on" || formData.get("inStock") === "1",
        compatibleCarModels: String(formData.get("compatibleCarModels") ?? "")
    };
    return basePartSchema.parse(raw);
}
async function resolveCarIds(input) {
    const requestedNames = (input ?? "").split(",").map((entry)=>entry.trim()).filter(Boolean);
    const normalizedNames = Array.from(new Set(requestedNames.map((entry)=>entry.toLowerCase())));
    if (!normalizedNames.length) {
        return [];
    }
    const cars = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].car.findMany({
        include: {
            brand: true
        }
    });
    const matched = cars.filter((car)=>{
        const fullName = [
            car.brand.name,
            car.model,
            car.generation
        ].filter(Boolean).join(" ").toLowerCase();
        return normalizedNames.includes(fullName) || normalizedNames.includes(car.slug.toLowerCase());
    });
    return matched.map((entry)=>entry.id);
}
async function replaceCompatibilities(partId, carIds) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].partCompatibility.deleteMany({
        where: {
            partId
        }
    });
    if (!carIds.length) {
        return;
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].partCompatibility.createMany({
        data: carIds.map((carId)=>({
                partId,
                carId
            })),
        skipDuplicates: true
    });
}
async function createPartAction(formData) {
    const parsed = parseCommon(formData);
    const slugBase = toSlug(`${parsed.title} ${parsed.oemNumber}`);
    const carIds = await resolveCarIds(parsed.compatibleCarModels);
    const part = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].part.create({
        data: {
            title: parsed.title,
            oemNumber: parsed.oemNumber,
            slug: slugBase || `part-${Date.now()}`,
            categoryId: parsed.categoryId,
            priceFrom: parsed.priceFrom,
            inStock: parsed.inStock
        }
    });
    await replaceCompatibilities(part.id, carIds);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/parts");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/catalog");
}
async function updatePartAction(formData) {
    const partId = String(formData.get("partId") ?? "");
    if (!partId) {
        throw new Error("partId is required");
    }
    const parsed = parseCommon(formData);
    const slugBase = toSlug(`${parsed.title} ${parsed.oemNumber}`);
    const carIds = await resolveCarIds(parsed.compatibleCarModels);
    const part = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].part.update({
        where: {
            id: partId
        },
        data: {
            title: parsed.title,
            oemNumber: parsed.oemNumber,
            slug: slugBase || `part-${Date.now()}`,
            categoryId: parsed.categoryId,
            priceFrom: parsed.priceFrom,
            inStock: parsed.inStock
        }
    });
    await replaceCompatibilities(part.id, carIds);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/parts");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/catalog");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/part/${part.slug}`);
}
async function deletePartAction(formData) {
    const partId = String(formData.get("partId") ?? "");
    if (!partId) {
        throw new Error("partId is required");
    }
    const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].part.findUnique({
        where: {
            id: partId
        },
        select: {
            slug: true
        }
    });
    await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].part.delete({
        where: {
            id: partId
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/parts");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/catalog");
    if (existing?.slug) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/part/${existing.slug}`);
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createPartAction,
    updatePartAction,
    deletePartAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createPartAction, "40bd2d0e84dcd065ad244654164b807fb890e6e8a5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updatePartAction, "40ffb39d185511b700e6f58c6f12cec278b1b1ac41", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deletePartAction, "401ad8163d38babef5da6706134665aa5275810eaa", null);
}),
"[project]/frontend/.next-internal/server/app/admin/parts/page/actions.js { ACTIONS_MODULE0 => \"[project]/frontend/lib/actions/admin-parts.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$actions$2f$admin$2d$parts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/actions/admin-parts.ts [app-rsc] (ecmascript)");
;
;
;
}),
"[project]/frontend/.next-internal/server/app/admin/parts/page/actions.js { ACTIONS_MODULE0 => \"[project]/frontend/lib/actions/admin-parts.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "401ad8163d38babef5da6706134665aa5275810eaa",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$actions$2f$admin$2d$parts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deletePartAction"],
    "40bd2d0e84dcd065ad244654164b807fb890e6e8a5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$actions$2f$admin$2d$parts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createPartAction"],
    "40ffb39d185511b700e6f58c6f12cec278b1b1ac41",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$actions$2f$admin$2d$parts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updatePartAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$parts$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$frontend$2f$lib$2f$actions$2f$admin$2d$parts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/frontend/.next-internal/server/app/admin/parts/page/actions.js { ACTIONS_MODULE0 => "[project]/frontend/lib/actions/admin-parts.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$actions$2f$admin$2d$parts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/actions/admin-parts.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__dac36454._.js.map