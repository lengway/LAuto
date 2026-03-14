module.exports = [
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/lib/db/prisma.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/lib/db/index.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db/prisma.ts [app-rsc] (ecmascript)");
;
}),
"[project]/lib/services/import-pipeline.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ingestCatalogRawText",
    ()=>ingestCatalogRawText,
    "ingestCatalogUpload",
    ()=>ingestCatalogUpload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/xlsx/xlsx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/db/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db/prisma.ts [app-rsc] (ecmascript)");
;
;
const OEM_REGEX = /[A-Z0-9-]{6,}/g;
const MAX_AI_BATCH_SIZE = 20;
const UPDATE_BATCH_SIZE = 100;
const CREATE_BATCH_SIZE = 500;
const CHUNK_PARALLELISM = Math.min(10, Math.max(1, Number(process.env.IMPORT_CHUNK_PARALLELISM ?? 4) || 4));
const SUPPORTED_BRANDS = [
    "Changan",
    "Chery",
    "Geely",
    "JAC",
    "Haval",
    "Jetour",
    "Omoda",
    "Jaecoo"
];
const SUPPORTED_MODELS = [
    "Tiggo 2",
    "Tiggo 4",
    "Tiggo 7",
    "Tiggo 8",
    "CS35",
    "CS55",
    "Coolray",
    "Okavango",
    "Uni V",
    "Uni K",
    "Alsvin"
];
const BRAND_KEY_MAP = new Map(SUPPORTED_BRANDS.map((entry)=>[
        normalizeAliasKey(entry),
        entry
    ]));
const MODEL_KEY_MAP = new Map(SUPPORTED_MODELS.map((entry)=>[
        normalizeAliasKey(entry),
        entry
    ]));
const categoryRules = [
    {
        pattern: /амортизатор|стойка стабилизатора|втулка стабилизатора/iu,
        category: "suspension"
    },
    {
        pattern: /бампер|балка бампера|дверь|крыло/iu,
        category: "body"
    },
    {
        pattern: /датчик/iu,
        category: "electronics"
    },
    {
        pattern: /фильтр/iu,
        category: "engine"
    },
    {
        pattern: /бачок/iu,
        category: "cooling"
    }
];
const sideRules = [
    {
        pattern: /\bлев(ый|ая|ое|ые|ого|ому|ую|ом|ыми)?\b/iu,
        side: "left"
    },
    {
        pattern: /\bправ(ый|ая|ое|ые|ого|ому|ую|ом|ыми)?\b/iu,
        side: "right"
    }
];
const positionRules = [
    {
        pattern: /\bпередн(ий|яя|ее|ие|его|ему|юю|ем|ими)?\b/iu,
        position: "front"
    },
    {
        pattern: /\bзадн(ий|яя|ее|ие|его|ему|юю|ем|ими)?\b/iu,
        position: "rear"
    },
    {
        pattern: /\bверхн(ий|яя|ее|ие|его|ему|юю|ем|ими)?\b/iu,
        position: "upper"
    },
    {
        pattern: /\bнижн(ий|яя|ее|ие|его|ему|юю|ем|ими)?\b/iu,
        position: "lower"
    }
];
function slugify(value) {
    return value.toLowerCase().trim().replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-+|-+$/g, "");
}
function normalizeWhitespace(value) {
    return value.replace(/\s+/g, " ").trim();
}
function normalizeAliasKey(value) {
    return normalizeWhitespace(value).toLowerCase().replace(/[\s_-]+/g, "");
}
function getCell(record, keys) {
    for (const key of keys){
        const rawValue = record[key];
        if (rawValue !== undefined && rawValue !== null && String(rawValue).trim() !== "") {
            return normalizeWhitespace(String(rawValue));
        }
    }
    return "";
}
function parsePrice(input) {
    if (input === undefined || input === null || String(input).trim() === "") {
        return null;
    }
    const normalized = String(input).replace(/\s+/g, "").replace(/[^\d,.-]/g, "").replace(",", ".").trim();
    if (!normalized) {
        return null;
    }
    const numeric = Number(normalized);
    if (!Number.isFinite(numeric) || numeric < 0) {
        return null;
    }
    return Math.round(numeric * 100) / 100;
}
function extractOemCode(input) {
    const normalized = input.toUpperCase();
    const match = normalized.match(OEM_REGEX);
    if (!match?.length) {
        return null;
    }
    return match[0] ?? null;
}
function inferCategory(input) {
    const normalized = normalizeWhitespace(input).toLowerCase();
    for (const rule of categoryRules){
        if (rule.pattern.test(normalized)) {
            return rule.category;
        }
    }
    return normalized || "other";
}
function normalizeKnownBrand(input) {
    return BRAND_KEY_MAP.get(normalizeAliasKey(input)) ?? "";
}
function inferBrandFromText(input) {
    const key = normalizeAliasKey(input);
    for (const [brandKey, brand] of BRAND_KEY_MAP.entries()){
        if (brandKey && key.includes(brandKey)) {
            return brand;
        }
    }
    return "";
}
function inferModelFromText(input) {
    const key = normalizeAliasKey(input);
    const matches = SUPPORTED_MODELS.filter((model)=>key.includes(normalizeAliasKey(model)));
    if (!matches.length) {
        return "";
    }
    return matches.sort((left, right)=>right.length - left.length)[0] ?? "";
}
function inferSide(input) {
    for (const rule of sideRules){
        if (rule.pattern.test(input)) {
            return rule.side;
        }
    }
    return null;
}
function inferPosition(input) {
    for (const rule of positionRules){
        if (rule.pattern.test(input)) {
            return rule.position;
        }
    }
    return null;
}
function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function cleanTitleGuess(rawName, brandGuess, modelGuess) {
    let value = rawName;
    if (brandGuess) {
        value = value.replace(new RegExp(escapeRegExp(brandGuess), "giu"), " ");
    }
    if (modelGuess) {
        value = value.replace(new RegExp(escapeRegExp(modelGuess), "giu"), " ");
    }
    for (const rule of sideRules){
        value = value.replace(rule.pattern, " ");
    }
    for (const rule of positionRules){
        value = value.replace(rule.pattern, " ");
    }
    value = value.replace(/[(),]+/g, " ");
    value = normalizeWhitespace(value);
    return value || rawName;
}
function chunk(items, size) {
    if (size <= 0) {
        return [
            items
        ];
    }
    const batches = [];
    for(let index = 0; index < items.length; index += size){
        batches.push(items.slice(index, index + size));
    }
    return batches;
}
async function mapWithConcurrency(items, concurrency, worker) {
    if (!items.length) {
        return [];
    }
    const safeConcurrency = Math.max(1, Math.min(concurrency, items.length));
    const output = new Array(items.length);
    let cursor = 0;
    const runWorker = async ()=>{
        while(true){
            const current = cursor;
            cursor += 1;
            if (current >= items.length) {
                return;
            }
            output[current] = await worker(items[current], current);
        }
    };
    await Promise.all(Array.from({
        length: safeConcurrency
    }, ()=>runWorker()));
    return output;
}
function parseAiResponse(raw) {
    try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
            return {
                rows: parsed
            };
        }
        return parsed;
    } catch  {
        const jsonArrayMatch = raw.match(/\[[\s\S]*\]/);
        if (jsonArrayMatch) {
            return {
                rows: JSON.parse(jsonArrayMatch[0])
            };
        }
        const jsonObjectMatch = raw.match(/\{[\s\S]*\}/);
        if (!jsonObjectMatch) {
            throw new Error("AI returned invalid JSON");
        }
        return JSON.parse(jsonObjectMatch[0]);
    }
}
function toAiItem(input) {
    if (!input || typeof input !== "object") {
        return null;
    }
    const row = input;
    const line = Number(row.line ?? 0);
    const title = normalizeWhitespace(String(row.title ?? ""));
    const brand = normalizeWhitespace(String(row.brand ?? ""));
    const model = normalizeWhitespace(String(row.model ?? ""));
    const category = normalizeWhitespace(String(row.category ?? ""));
    if (!Number.isInteger(line) || line <= 0) {
        return null;
    }
    return {
        line,
        title,
        brand,
        model,
        category
    };
}
function toRawSeedRowsFromSheet(records) {
    return records.map((raw, index)=>({
            line: index + 2,
            article: getCell(raw, [
                "article",
                "Article",
                "артикул",
                "Артикул"
            ]),
            oem: getCell(raw, [
                "oem",
                "OEM",
                "oemNumber",
                "OEM Number",
                "ОЕМ"
            ]),
            name: getCell(raw, [
                "name",
                "Name",
                "title",
                "Title",
                "Наименование"
            ]),
            brand: getCell(raw, [
                "brand",
                "Brand",
                "Бренд"
            ]),
            price: getCell(raw, [
                "price",
                "Price",
                "priceFrom",
                "Price From",
                "Цена"
            ]),
            rawJson: toInputJsonValue(raw)
        }));
}
function toRawSeedRowsFromText(rawInput) {
    return rawInput.split(/\r?\n/g).map((line)=>normalizeWhitespace(line)).filter(Boolean).map((line, index)=>({
            line: index + 1,
            article: "",
            oem: "",
            name: line,
            brand: "",
            price: "",
            rawJson: toInputJsonValue({
                rawLine: line
            })
        }));
}
function toInputJsonValue(input) {
    return JSON.parse(JSON.stringify(input ?? null));
}
function parseDeterministically(row) {
    const article = normalizeWhitespace(String(row.article ?? "")) || null;
    const name = normalizeWhitespace(String(row.name ?? ""));
    const rawBrand = normalizeWhitespace(String(row.brand ?? ""));
    const oemFromField = extractOemCode(String(row.oem ?? ""));
    const oemFromArticle = extractOemCode(String(row.article ?? ""));
    const oemFromName = extractOemCode(name);
    const oem = oemFromField ?? oemFromArticle ?? oemFromName;
    const brandGuess = normalizeKnownBrand(rawBrand) || inferBrandFromText(`${name} ${rawBrand}`);
    const modelGuess = inferModelFromText(`${name} ${rawBrand}`);
    const side = inferSide(name);
    const position = inferPosition(name);
    const titleGuess = cleanTitleGuess(name, brandGuess, modelGuess);
    const price = parsePrice(row.price ?? undefined);
    return {
        id: row.id,
        line: row.line,
        article,
        titleGuess,
        brandGuess,
        modelGuess,
        side,
        position,
        oem,
        price
    };
}
async function updateRowsInBatches(operations) {
    for (const batch of chunk(operations, UPDATE_BATCH_SIZE)){
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction(batch);
    }
}
function mergeRawJson(rawJson, patch) {
    if (!rawJson || typeof rawJson !== "object" || Array.isArray(rawJson)) {
        return toInputJsonValue(patch);
    }
    return toInputJsonValue({
        ...rawJson,
        ...patch
    });
}
async function normalizeWithAiBatch(rows) {
    const apiKey = process.env.OPENAI_API_KEY?.trim();
    if (!apiKey || rows.length === 0) {
        return new Map();
    }
    const model = process.env.OPENAI_MODEL?.trim() || "gpt-4o-mini";
    const payloadRows = rows.map((row)=>({
            line: row.line,
            title_guess: row.titleGuess,
            brand_guess: row.brandGuess,
            model_guess: row.modelGuess
        }));
    const prompt = `You normalize automotive parts rows.\n\nRules:\n- Return strict JSON array only.\n- Each item must be {"line":number,"title":string,"brand":string,"model":string,"category":string}.\n- Normalize only title, brand, model, category.\n- Keep line unchanged.\n- Never invent OEM, article, price, side, position, or any extra fields.\n- If uncertain, keep original guess values.\n- No markdown and no explanations.`;
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model,
            temperature: 0,
            messages: [
                {
                    role: "system",
                    content: prompt
                },
                {
                    role: "user",
                    content: JSON.stringify(payloadRows)
                }
            ]
        })
    });
    if (!response.ok) {
        throw new Error(`AI API error: ${response.status}`);
    }
    const result = await response.json();
    const content = result.choices?.[0]?.message?.content;
    if (!content) {
        throw new Error("AI normalization returned empty content");
    }
    const parsed = parseAiResponse(content);
    const rowsArray = Array.isArray(parsed.rows) ? parsed.rows : [];
    const map = new Map();
    for (const candidate of rowsArray){
        const normalized = toAiItem(candidate);
        if (!normalized) {
            continue;
        }
        map.set(normalized.line, normalized);
    }
    return map;
}
async function normalizeRowsWithAi(parsedRows, errors) {
    const batches = chunk(parsedRows, MAX_AI_BATCH_SIZE);
    const normalizedChunks = await mapWithConcurrency(batches, CHUNK_PARALLELISM, async (batch)=>{
        try {
            const aiMap = await normalizeWithAiBatch(batch);
            return batch.map((row)=>{
                const aiValue = aiMap.get(row.line);
                const fallbackTitle = row.titleGuess;
                return {
                    ...row,
                    title: normalizeWhitespace(aiValue?.title || fallbackTitle),
                    brand: normalizeWhitespace(aiValue?.brand || row.brandGuess),
                    model: normalizeWhitespace(aiValue?.model || row.modelGuess),
                    category: normalizeWhitespace(aiValue?.category || inferCategory(fallbackTitle) || "other")
                };
            });
        } catch (error) {
            errors.push(`AI batch normalization failed: ${error.message}`);
            return batch.map((row)=>({
                    ...row,
                    title: row.titleGuess,
                    brand: row.brandGuess,
                    model: row.modelGuess,
                    category: inferCategory(row.titleGuess)
                }));
        }
    });
    return normalizedChunks.flat();
}
async function ensureUniquePartSlug(baseSlug) {
    const fallbackBase = baseSlug || `part-${Date.now()}`;
    let candidate = fallbackBase;
    let suffix = 1;
    while(true){
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].part.findUnique({
            where: {
                slug: candidate
            },
            select: {
                id: true
            }
        });
        if (!existing) {
            return candidate;
        }
        candidate = `${fallbackBase}-${suffix}`;
        suffix += 1;
    }
}
async function importValidatedRow(row) {
    const normalizedBrand = normalizeKnownBrand(row.brand) || normalizeWhitespace(row.brand);
    const normalizedModel = MODEL_KEY_MAP.get(normalizeAliasKey(row.model)) ?? normalizeWhitespace(row.model);
    const normalizedTitle = normalizeWhitespace(row.title);
    const normalizedCategory = normalizeWhitespace(row.category || "other");
    const brand = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].brand.upsert({
        where: {
            slug: slugify(normalizedBrand)
        },
        update: {
            name: normalizedBrand
        },
        create: {
            name: normalizedBrand,
            slug: slugify(normalizedBrand)
        }
    });
    const category = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].category.upsert({
        where: {
            slug: slugify(normalizedCategory)
        },
        update: {
            name: normalizedCategory
        },
        create: {
            name: normalizedCategory,
            slug: slugify(normalizedCategory)
        }
    });
    const carSlug = slugify(`${normalizedBrand} ${normalizedModel}`);
    const car = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].car.upsert({
        where: {
            brandId_slug: {
                brandId: brand.id,
                slug: carSlug
            }
        },
        update: {
            model: normalizedModel,
            brandId: brand.id
        },
        create: {
            brandId: brand.id,
            model: normalizedModel,
            slug: carSlug
        }
    });
    const existingPart = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].part.findFirst({
        where: {
            title: normalizedTitle,
            oemNumber: row.oem,
            compatibilities: {
                some: {
                    carId: car.id
                }
            }
        },
        select: {
            id: true,
            slug: true
        }
    });
    const partSlugBase = slugify(`${normalizedTitle} ${row.oem ?? normalizedModel}`);
    const partSlug = existingPart?.slug ?? await ensureUniquePartSlug(partSlugBase);
    const part = existingPart ? await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].part.update({
        where: {
            id: existingPart.id
        },
        data: {
            title: normalizedTitle,
            categoryId: category.id,
            oemNumber: row.oem,
            priceFrom: row.price,
            side: row.side,
            position: row.position,
            slug: partSlug,
            inStock: true
        }
    }) : await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].part.create({
        data: {
            title: normalizedTitle,
            categoryId: category.id,
            oemNumber: row.oem,
            priceFrom: row.price,
            side: row.side,
            position: row.position,
            slug: partSlug,
            inStock: true
        }
    });
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].partCompatibility.createMany({
        data: [
            {
                partId: part.id,
                carId: car.id
            }
        ],
        skipDuplicates: true
    });
}
async function runCatalogIngestion(seedRows, fileName, source) {
    const rowsTotal = seedRows.length;
    const importJob = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].importJob.create({
        data: {
            file: fileName,
            status: "pending",
            rowsTotal,
            rowsSuccess: 0,
            rowsFailed: 0,
            summary: {
                source,
                rowsTotal,
                rowsParsed: 0,
                rowsNormalized: 0,
                rowsImported: 0,
                rowsSuccess: 0,
                rowsFailed: 0,
                stageCounts: {
                    raw: rowsTotal,
                    parsed: 0,
                    normalized: 0,
                    validated: 0,
                    imported: 0,
                    failed: 0
                },
                errors: []
            }
        }
    });
    const errors = [];
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].importJob.update({
            where: {
                id: importJob.id
            },
            data: {
                status: "processing"
            }
        });
        for (const batch of chunk(seedRows, CREATE_BATCH_SIZE)){
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].rawImportRow.createMany({
                data: batch.map((row)=>({
                        jobId: importJob.id,
                        line: row.line,
                        article: row.article,
                        oem: row.oem,
                        name: row.name,
                        brand: row.brand,
                        price: row.price,
                        rawJson: row.rawJson,
                        stage: "raw"
                    }))
            });
        }
        const rawRows = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].rawImportRow.findMany({
            where: {
                jobId: importJob.id
            },
            orderBy: {
                line: "asc"
            },
            select: {
                id: true,
                line: true,
                article: true,
                oem: true,
                name: true,
                brand: true,
                price: true,
                rawJson: true
            }
        });
        const parsedRows = rawRows.map((row)=>parseDeterministically(row));
        const parsedById = new Map(parsedRows.map((row)=>[
                row.id,
                row
            ]));
        const rawJsonById = new Map(rawRows.map((row)=>[
                row.id,
                row.rawJson
            ]));
        await updateRowsInBatches(rawRows.map((row)=>{
            const mergedJson = mergeRawJson(row.rawJson, {
                parsed: {
                    line: parsedById.get(row.id)?.line,
                    title_guess: parsedById.get(row.id)?.titleGuess,
                    brand_guess: parsedById.get(row.id)?.brandGuess,
                    model_guess: parsedById.get(row.id)?.modelGuess,
                    side: parsedById.get(row.id)?.side,
                    position: parsedById.get(row.id)?.position
                }
            });
            rawJsonById.set(row.id, mergedJson);
            return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].rawImportRow.update({
                where: {
                    id: row.id
                },
                data: {
                    stage: "parsed",
                    rawJson: mergedJson
                }
            });
        }));
        const normalizedRows = await normalizeRowsWithAi(parsedRows, errors);
        await updateRowsInBatches(normalizedRows.map((row)=>{
            const mergedJson = mergeRawJson(rawJsonById.get(row.id), {
                normalized: {
                    line: row.line,
                    title: row.title,
                    brand: row.brand,
                    model: row.model,
                    category: row.category,
                    side: row.side,
                    position: row.position
                }
            });
            rawJsonById.set(row.id, mergedJson);
            return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].rawImportRow.update({
                where: {
                    id: row.id
                },
                data: {
                    stage: "normalized",
                    rawJson: mergedJson
                }
            });
        }));
        const validatedRows = [];
        await updateRowsInBatches(normalizedRows.map((row)=>{
            const rowErrors = [];
            if (!row.title) {
                rowErrors.push("title must not be empty");
            }
            if (!row.brand) {
                rowErrors.push("brand must exist");
            }
            if (row.brand && !BRAND_KEY_MAP.has(normalizeAliasKey(row.brand))) {
                rowErrors.push("brand not in dictionary");
            }
            if (!row.model) {
                rowErrors.push("model must exist");
            }
            if (row.model && !MODEL_KEY_MAP.has(normalizeAliasKey(row.model))) {
                rowErrors.push("model not in dictionary");
            }
            if (rowErrors.length) {
                errors.push(`Line ${row.line}: ${rowErrors.join(", ")}`);
                const mergedJson = mergeRawJson(rawJsonById.get(row.id), {
                    validationErrors: rowErrors
                });
                rawJsonById.set(row.id, mergedJson);
                return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].rawImportRow.update({
                    where: {
                        id: row.id
                    },
                    data: {
                        stage: "failed",
                        rawJson: mergedJson
                    }
                });
            }
            validatedRows.push(row);
            return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].rawImportRow.update({
                where: {
                    id: row.id
                },
                data: {
                    stage: "validated"
                }
            });
        }));
        const dedupedRows = [];
        const seenKeys = new Set();
        await updateRowsInBatches(validatedRows.map((row)=>{
            const key = [
                row.title,
                row.brand,
                row.model,
                row.oem ?? ""
            ].map((entry)=>normalizeAliasKey(entry)).join("|");
            if (seenKeys.has(key)) {
                const reason = "duplicate by title + brand + model + oem";
                errors.push(`Line ${row.line}: ${reason}`);
                const mergedJson = mergeRawJson(rawJsonById.get(row.id), {
                    deduplicationError: reason
                });
                rawJsonById.set(row.id, mergedJson);
                return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].rawImportRow.update({
                    where: {
                        id: row.id
                    },
                    data: {
                        stage: "failed",
                        rawJson: mergedJson
                    }
                });
            }
            seenKeys.add(key);
            dedupedRows.push(row);
            return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].rawImportRow.update({
                where: {
                    id: row.id
                },
                data: {
                    stage: "validated"
                }
            });
        }));
        let imported = 0;
        for (const row of dedupedRows){
            try {
                await importValidatedRow(row);
                imported += 1;
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].rawImportRow.update({
                    where: {
                        id: row.id
                    },
                    data: {
                        stage: "imported"
                    }
                });
            } catch (error) {
                errors.push(`Line ${row.line}: ${error.message}`);
                const mergedJson = mergeRawJson(rawJsonById.get(row.id), {
                    importError: error.message
                });
                rawJsonById.set(row.id, mergedJson);
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].rawImportRow.update({
                    where: {
                        id: row.id
                    },
                    data: {
                        stage: "failed",
                        rawJson: mergedJson
                    }
                });
            }
        }
        const rowsSuccess = imported;
        const rowsFailed = rowsTotal - rowsSuccess;
        const stageCounts = {
            raw: rowsTotal,
            parsed: parsedRows.length,
            normalized: normalizedRows.length,
            validated: validatedRows.length,
            imported: rowsSuccess,
            failed: rowsFailed
        };
        const summary = {
            source,
            rowsTotal,
            rowsParsed: parsedRows.length,
            rowsNormalized: normalizedRows.length,
            rowsImported: rowsSuccess,
            rowsSuccess,
            rowsFailed,
            stageCounts,
            errors
        };
        const status = rowsFailed > 0 ? "failed" : "completed";
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].importJob.update({
            where: {
                id: importJob.id
            },
            data: {
                status,
                rowsTotal,
                rowsSuccess,
                rowsFailed,
                summary
            }
        });
        return {
            jobId: importJob.id,
            status,
            summary
        };
    } catch (error) {
        const summary = {
            source,
            rowsTotal,
            rowsParsed: 0,
            rowsNormalized: 0,
            rowsImported: 0,
            rowsSuccess: 0,
            rowsFailed: rowsTotal,
            stageCounts: {
                raw: rowsTotal,
                parsed: 0,
                normalized: 0,
                validated: 0,
                imported: 0,
                failed: rowsTotal
            },
            errors: [
                ...errors,
                `Fatal error: ${error.message}`
            ]
        };
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].importJob.update({
            where: {
                id: importJob.id
            },
            data: {
                status: "failed",
                rowsTotal,
                rowsSuccess: 0,
                rowsFailed: rowsTotal,
                summary
            }
        });
        throw error;
    }
}
async function ingestCatalogUpload(file) {
    const arrayBuffer = await file.arrayBuffer();
    const workbook = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["read"](arrayBuffer, {
        type: "array"
    });
    const firstSheetName = workbook.SheetNames[0];
    if (!firstSheetName) {
        throw new Error("No readable sheet found in uploaded file");
    }
    const worksheet = workbook.Sheets[firstSheetName];
    const records = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["utils"].sheet_to_json(worksheet, {
        defval: "",
        raw: false
    });
    const seedRows = toRawSeedRowsFromSheet(records);
    return runCatalogIngestion(seedRows, file.name || `upload-${Date.now()}.csv`, "upload");
}
async function ingestCatalogRawText(rawInput) {
    const seedRows = toRawSeedRowsFromText(rawInput);
    if (!seedRows.length) {
        throw new Error("No rows found in input text");
    }
    return runCatalogIngestion(seedRows, `ai-import-${Date.now()}.txt`, "ai");
}
}),
"[project]/lib/actions/admin-ai-import.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60ba1169f2f45461ab8ae027201b6b9cd9c2d889d1":"importPartsFromAiAction"},"",""] */ __turbopack_context__.s([
    "importPartsFromAiAction",
    ()=>importPartsFromAiAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$import$2d$pipeline$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/import-pipeline.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
const formSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    rawInput: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(10)
});
async function importPartsFromAiAction(_prevState, formData) {
    const parsedForm = formSchema.safeParse({
        rawInput: String(formData.get("rawInput") ?? "")
    });
    if (!parsedForm.success) {
        return {
            status: "error",
            message: "Введите текст с деталями (минимум 10 символов)"
        };
    }
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$import$2d$pipeline$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ingestCatalogRawText"])(parsedForm.data.rawInput);
        const hasFailedRows = result.summary.rowsFailed > 0;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/import");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/ai-import");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/parts");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/catalog");
        return {
            status: hasFailedRows ? "needs_clarification" : "imported",
            message: hasFailedRows ? "Импорт завершен с ошибками в отдельных строках. Проверьте итог ниже." : "AI-импорт успешно завершен.",
            aiResult: {
                stageCounts: result.summary.stageCounts
            },
            importSummary: result.summary
        };
    } catch (error) {
        return {
            status: "error",
            message: error.message
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    importPartsFromAiAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(importPartsFromAiAction, "60ba1169f2f45461ab8ae027201b6b9cd9c2d889d1", null);
}),
"[project]/.next-internal/server/app/admin/ai-import/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/actions/admin-ai-import.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$admin$2d$ai$2d$import$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/admin-ai-import.ts [app-rsc] (ecmascript)");
;
}),
"[project]/.next-internal/server/app/admin/ai-import/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/actions/admin-ai-import.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "60ba1169f2f45461ab8ae027201b6b9cd9c2d889d1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$admin$2d$ai$2d$import$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["importPartsFromAiAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$ai$2d$import$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$admin$2d$ai$2d$import$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/admin/ai-import/page/actions.js { ACTIONS_MODULE0 => "[project]/lib/actions/admin-ai-import.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$admin$2d$ai$2d$import$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/admin-ai-import.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f2d2be60._.js.map