module.exports = [
"[externals]/node:fs/promises [external] (node:fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs/promises", () => require("node:fs/promises"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[project]/lib/actions/admin-brands.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"401656e164a07fb7c0c2d98684084398c999281ed5":"deleteBrandAction","40d0008181309030359f56635a6a46ce67534d9098":"updateBrandAction","40f931d2867e0f064180e268edc1189963a96db83b":"createBrandAction"},"",""] */ __turbopack_context__.s([
    "createBrandAction",
    ()=>createBrandAction,
    "deleteBrandAction",
    ()=>deleteBrandAction,
    "updateBrandAction",
    ()=>updateBrandAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_ace9e6b1fee9bd89d608f1baf139bac6/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_ace9e6b1fee9bd89d608f1baf139bac6/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs/promises [external] (node:fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.3.6/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/db/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_ace9e6b1fee9bd89d608f1baf139bac6/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
const brandDelegate = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].brand;
const brandSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1).transform((value)=>value.trim()),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().transform((value)=>value?.trim() || null),
    imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().transform((value)=>value?.trim() || null)
});
function toSlug(text) {
    return text.toLowerCase().trim().replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-+|-+$/g, "");
}
function parseBrandFormData(formData) {
    return brandSchema.parse({
        name: String(formData.get("name") ?? ""),
        description: String(formData.get("description") ?? ""),
        imageUrl: String(formData.get("imageUrl") ?? "")
    });
}
function getSafeFileExtension(fileName) {
    const extension = fileName.split(".").pop()?.toLowerCase() ?? "";
    if ([
        "jpg",
        "jpeg",
        "png",
        "webp",
        "gif",
        "avif"
    ].includes(extension)) {
        return extension;
    }
    return "jpg";
}
async function resolveBrandImageUrl(formData, brandSlug, imageUrlFromInput) {
    const normalizedImageUrl = imageUrlFromInput?.trim() ?? "";
    const candidate = formData.get("image");
    if (!(candidate instanceof File) || candidate.size === 0) {
        return normalizedImageUrl || null;
    }
    if (!candidate.type.startsWith("image/")) {
        throw new Error("Нужно загрузить файл изображения");
    }
    const extension = getSafeFileExtension(candidate.name);
    const fileName = `${brandSlug}-${Date.now()}.${extension}`;
    const uploadDir = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(process.cwd(), "public", "uploads", "brands");
    const absolutePath = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(uploadDir, fileName);
    await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["mkdir"])(uploadDir, {
        recursive: true
    });
    const bytes = await candidate.arrayBuffer();
    await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["writeFile"])(absolutePath, Buffer.from(bytes));
    return `/uploads/brands/${fileName}`;
}
function revalidateBrandPages() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/brands");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/models");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/catalog");
}
async function createBrandAction(formData) {
    const parsed = parseBrandFormData(formData);
    const slug = toSlug(parsed.name);
    if (!slug) {
        throw new Error("Некорректное название марки");
    }
    const imageUrl = await resolveBrandImageUrl(formData, slug, parsed.imageUrl);
    await brandDelegate.upsert({
        where: {
            slug
        },
        update: {
            name: parsed.name,
            description: parsed.description,
            imageUrl
        },
        create: {
            name: parsed.name,
            slug,
            description: parsed.description,
            imageUrl
        }
    });
    revalidateBrandPages();
}
async function updateBrandAction(formData) {
    const brandId = String(formData.get("brandId") ?? "");
    if (!brandId) {
        throw new Error("brandId is required");
    }
    const parsed = parseBrandFormData(formData);
    const slug = toSlug(parsed.name);
    if (!slug) {
        throw new Error("Некорректное название марки");
    }
    const current = await brandDelegate.findUnique({
        where: {
            id: brandId
        },
        select: {
            id: true
        }
    });
    if (!current) {
        throw new Error("Марка не найдена");
    }
    const existingBySlug = await brandDelegate.findUnique({
        where: {
            slug
        },
        select: {
            id: true
        }
    });
    const nextSlug = existingBySlug && existingBySlug.id !== brandId ? `${slug}-${Date.now()}` : slug;
    const imageUrl = await resolveBrandImageUrl(formData, nextSlug, parsed.imageUrl);
    await brandDelegate.update({
        where: {
            id: brandId
        },
        data: {
            name: parsed.name,
            slug: nextSlug,
            description: parsed.description,
            imageUrl
        }
    });
    revalidateBrandPages();
}
async function deleteBrandAction(formData) {
    const brandId = String(formData.get("brandId") ?? "");
    if (!brandId) {
        throw new Error("brandId is required");
    }
    try {
        await brandDelegate.delete({
            where: {
                id: brandId
            }
        });
    } catch  {
        throw new Error("Нельзя удалить марку, пока у нее есть связанные модели.");
    }
    revalidateBrandPages();
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createBrandAction,
    updateBrandAction,
    deleteBrandAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createBrandAction, "40f931d2867e0f064180e268edc1189963a96db83b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateBrandAction, "40d0008181309030359f56635a6a46ce67534d9098", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteBrandAction, "401656e164a07fb7c0c2d98684084398c999281ed5", null);
}),
"[project]/.next-internal/server/app/admin/brands/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/actions/admin-brands.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$admin$2d$brands$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/admin-brands.ts [app-rsc] (ecmascript)");
;
;
;
}),
"[project]/.next-internal/server/app/admin/brands/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/actions/admin-brands.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "401656e164a07fb7c0c2d98684084398c999281ed5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$admin$2d$brands$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteBrandAction"],
    "40d0008181309030359f56635a6a46ce67534d9098",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$admin$2d$brands$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateBrandAction"],
    "40f931d2867e0f064180e268edc1189963a96db83b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$admin$2d$brands$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createBrandAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$brands$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$admin$2d$brands$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/admin/brands/page/actions.js { ACTIONS_MODULE0 => "[project]/lib/actions/admin-brands.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$admin$2d$brands$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/admin-brands.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__55d9700e._.js.map