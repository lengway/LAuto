module.exports = [
"[externals]/node:fs/promises [external] (node:fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs/promises", () => require("node:fs/promises"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[project]/lib/slug.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "slugifyToLatin",
    ()=>slugifyToLatin
]);
const cyrillicToLatinMap = {
    а: "a",
    ә: "a",
    б: "b",
    в: "v",
    г: "g",
    ғ: "g",
    д: "d",
    е: "e",
    ё: "e",
    ж: "zh",
    з: "z",
    и: "i",
    й: "i",
    к: "k",
    қ: "k",
    л: "l",
    м: "m",
    н: "n",
    ң: "n",
    о: "o",
    ө: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ұ: "u",
    ү: "u",
    ф: "f",
    х: "h",
    һ: "h",
    ц: "c",
    ч: "ch",
    ш: "sh",
    щ: "sh",
    ъ: "",
    ы: "y",
    і: "i",
    ь: "",
    э: "e",
    ю: "yu",
    я: "ya"
};
function transliterateToLatin(text) {
    return text.split("").map((char)=>{
        const normalized = char.toLowerCase();
        return cyrillicToLatinMap[normalized] ?? normalized;
    }).join("");
}
function slugifyToLatin(text) {
    const transliterated = transliterateToLatin(text).normalize("NFKD").replace(/[\u0300-\u036f]/g, "");
    return transliterated.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").replace(/-{2,}/g, "-");
}
}),
"[project]/lib/actions/admin-parts.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"4010ab947cd4556eaf78ba897a09152f9cff66a1d3":"deletePartAction","4083067169987d5e9611714c689c691106937cc18e":"createPartAction","40ad523199ecdb618ae4b51d8e16c7e9496770484c":"updatePartAction"},"",""] */ __turbopack_context__.s([
    "createPartAction",
    ()=>createPartAction,
    "deletePartAction",
    ()=>deletePartAction,
    "updatePartAction",
    ()=>updatePartAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_ace9e6b1fee9bd89d608f1baf139bac6/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_ace9e6b1fee9bd89d608f1baf139bac6/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs/promises [external] (node:fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.3.6/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/db/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$slug$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/slug.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.5_@babel+core@7.2_ace9e6b1fee9bd89d608f1baf139bac6/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const basePartSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().transform((value)=>value?.trim() || null),
    categorySelection: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().transform((value)=>value?.trim() || null),
    imageUrls: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().transform((value)=>value?.trim() || null),
    priceFrom: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
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
    inStock: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    compatibleCarModels: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$6$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
function parseCommon(formData) {
    const raw = {
        title: String(formData.get("title") ?? ""),
        description: String(formData.get("description") ?? ""),
        categorySelection: String(formData.get("categorySelection") ?? ""),
        imageUrl: String(formData.get("imageUrl") ?? ""),
        imageUrls: String(formData.get("imageUrls") ?? ""),
        priceFrom: String(formData.get("priceFrom") ?? ""),
        inStock: formData.get("inStock") === "true" || formData.get("inStock") === "on" || formData.get("inStock") === "1",
        compatibleCarModels: String(formData.get("compatibleCarModels") ?? "")
    };
    const parsed = basePartSchema.parse(raw);
    if (!parsed.categorySelection?.trim()) {
        throw new Error("Выберите хотя бы одну категорию");
    }
    return {
        ...parsed,
        categorySelection: parsed.categorySelection
    };
}
function parseCategorySelection(selection) {
    if (!selection?.trim()) {
        return [];
    }
    let parsed;
    try {
        parsed = JSON.parse(selection);
    } catch  {
        throw new Error("Некорректный формат категорий");
    }
    if (!Array.isArray(parsed)) {
        throw new Error("Некорректный формат категорий");
    }
    const normalized = [];
    for (const item of parsed){
        if (!item || typeof item !== "object") {
            continue;
        }
        const maybe = item;
        const name = String(maybe.name ?? "").trim();
        const id = String(maybe.id ?? "").trim();
        const isNew = Boolean(maybe.isNew);
        if (!name) {
            continue;
        }
        if (!isNew && !id) {
            continue;
        }
        normalized.push({
            id,
            name,
            isNew
        });
    }
    return normalized;
}
async function resolveCategoryIds(selection) {
    const items = parseCategorySelection(selection);
    if (!items.length) {
        throw new Error("Выберите хотя бы одну категорию");
    }
    const categoryIds = [];
    for (const item of items){
        if (!item.isNew) {
            categoryIds.push(item.id);
            continue;
        }
        const slug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$slug$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["slugifyToLatin"])(item.name);
        if (!slug) {
            continue;
        }
        const category = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].category.upsert({
            where: {
                slug
            },
            update: {
                name: item.name
            },
            create: {
                name: item.name,
                slug
            },
            select: {
                id: true
            }
        });
        categoryIds.push(category.id);
    }
    const uniqueIds = Array.from(new Set(categoryIds.filter(Boolean)));
    if (!uniqueIds.length) {
        throw new Error("Выберите хотя бы одну категорию");
    }
    return uniqueIds;
}
async function buildUniquePartSlug(title, currentPartId) {
    const baseSlug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$slug$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["slugifyToLatin"])(title) || `part-${Date.now()}`;
    let candidate = baseSlug;
    for(let index = 0; index < 100; index += 1){
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].part.findUnique({
            where: {
                slug: candidate
            },
            select: {
                id: true
            }
        });
        if (!existing || existing.id === currentPartId) {
            return candidate;
        }
        candidate = `${baseSlug}-${index + 2}`;
    }
    return `${baseSlug}-${Date.now()}`;
}
async function resolveCarIds(input) {
    const requestedNames = (input ?? "").split(",").map((entry)=>entry.trim()).filter(Boolean);
    const normalizedNames = Array.from(new Set(requestedNames.map((entry)=>entry.toLowerCase())));
    if (!normalizedNames.length) {
        return [];
    }
    const cars = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].model.findMany({
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
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].partFitment.deleteMany({
        where: {
            partId
        }
    });
    if (!carIds.length) {
        return;
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].partFitment.createMany({
        data: carIds.map((carId)=>({
                partId,
                modelId: carId
            })),
        skipDuplicates: true
    });
}
async function replacePartCategories(partId, categoryIds) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].partCategory.deleteMany({
        where: {
            partId
        }
    });
    if (!categoryIds.length) {
        return;
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].partCategory.createMany({
        data: categoryIds.map((categoryId)=>({
                partId,
                categoryId
            })),
        skipDuplicates: true
    });
}
function parseImageUrlsInput(input) {
    if (!input?.trim()) {
        return [];
    }
    return Array.from(new Set(input.split(/[\n,;]+/).map((entry)=>entry.trim()).filter(Boolean)));
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
async function replacePartImages(formData, partId, title, imageUrlFromInput, imageUrlsInput) {
    const uploadCandidates = [
        formData.get("image"),
        ...formData.getAll("images")
    ].filter((entry)=>entry instanceof File && entry.size > 0);
    const normalizedUrls = Array.from(new Set([
        ...imageUrlFromInput?.trim() ? [
            imageUrlFromInput.trim()
        ] : [],
        ...parseImageUrlsInput(imageUrlsInput)
    ]));
    const uploadDir = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(process.cwd(), "public", "uploads", "parts");
    const uploadedUrls = [];
    if (uploadCandidates.length) {
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["mkdir"])(uploadDir, {
            recursive: true
        });
    }
    for(let index = 0; index < uploadCandidates.length; index += 1){
        const candidate = uploadCandidates[index];
        if (!candidate.type.startsWith("image/")) {
            throw new Error("Нужно загрузить файл изображения");
        }
        const extension = getSafeFileExtension(candidate.name);
        const fileName = `${partId}-${Date.now()}-${index}.${extension}`;
        const absolutePath = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(uploadDir, fileName);
        const publicUrl = `/uploads/parts/${fileName}`;
        const bytes = await candidate.arrayBuffer();
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["writeFile"])(absolutePath, Buffer.from(bytes));
        uploadedUrls.push(publicUrl);
    }
    const finalUrls = [
        ...normalizedUrls,
        ...uploadedUrls
    ];
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].image.deleteMany({
        where: {
            partId
        }
    });
    if (!finalUrls.length) {
        return;
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].image.createMany({
        data: finalUrls.map((url, sortOrder)=>({
                partId,
                url,
                alt: title,
                sortOrder
            }))
    });
}
async function createPartAction(formData) {
    const parsed = parseCommon(formData);
    const slug = await buildUniquePartSlug(parsed.title);
    const carIds = await resolveCarIds(parsed.compatibleCarModels);
    const categoryIds = await resolveCategoryIds(parsed.categorySelection);
    const categoryId = categoryIds[0];
    const part = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].part.create({
        data: {
            title: parsed.title,
            description: parsed.description,
            slug,
            categoryId,
            priceFrom: parsed.priceFrom,
            inStock: parsed.inStock
        }
    });
    await replaceCompatibilities(part.id, carIds);
    await replacePartCategories(part.id, categoryIds);
    await replacePartImages(formData, part.id, parsed.title, parsed.imageUrl, parsed.imageUrls);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/parts");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/catalog");
}
async function updatePartAction(formData) {
    const partId = String(formData.get("partId") ?? "");
    if (!partId) {
        throw new Error("partId is required");
    }
    const parsed = parseCommon(formData);
    const slug = await buildUniquePartSlug(parsed.title, partId);
    const carIds = await resolveCarIds(parsed.compatibleCarModels);
    const categoryIds = await resolveCategoryIds(parsed.categorySelection);
    const categoryId = categoryIds[0];
    const part = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].part.update({
        where: {
            id: partId
        },
        data: {
            title: parsed.title,
            description: parsed.description,
            slug,
            categoryId,
            priceFrom: parsed.priceFrom,
            inStock: parsed.inStock
        }
    });
    await replaceCompatibilities(part.id, carIds);
    await replacePartCategories(part.id, categoryIds);
    await replacePartImages(formData, part.id, parsed.title, parsed.imageUrl, parsed.imageUrls);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/parts");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/catalog");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/part/${part.slug}`);
}
async function deletePartAction(formData) {
    const partId = String(formData.get("partId") ?? "");
    if (!partId) {
        throw new Error("partId is required");
    }
    const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].part.findUnique({
        where: {
            id: partId
        },
        select: {
            slug: true
        }
    });
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].part.delete({
        where: {
            id: partId
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/parts");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/catalog");
    if (existing?.slug) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/part/${existing.slug}`);
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createPartAction,
    updatePartAction,
    deletePartAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createPartAction, "4083067169987d5e9611714c689c691106937cc18e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updatePartAction, "40ad523199ecdb618ae4b51d8e16c7e9496770484c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$5_$40$babel$2b$core$40$7$2e$2_ace9e6b1fee9bd89d608f1baf139bac6$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deletePartAction, "4010ab947cd4556eaf78ba897a09152f9cff66a1d3", null);
}),
"[project]/.next-internal/server/app/admin/parts/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/actions/admin-parts.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$admin$2d$parts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/admin-parts.ts [app-rsc] (ecmascript)");
;
;
;
}),
"[project]/.next-internal/server/app/admin/parts/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/actions/admin-parts.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "4010ab947cd4556eaf78ba897a09152f9cff66a1d3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$admin$2d$parts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deletePartAction"],
    "4083067169987d5e9611714c689c691106937cc18e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$admin$2d$parts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createPartAction"],
    "40ad523199ecdb618ae4b51d8e16c7e9496770484c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$admin$2d$parts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updatePartAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$parts$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$admin$2d$parts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/admin/parts/page/actions.js { ACTIONS_MODULE0 => "[project]/lib/actions/admin-parts.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$admin$2d$parts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/admin-parts.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__987d3f2b._.js.map