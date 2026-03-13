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
"[project]/frontend/lib/services/ai-catalog-import.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseCatalogTextWithAi",
    ()=>parseCatalogTextWithAi
]);
function normalizeIssue(input) {
    if (!input || typeof input !== "object") {
        return null;
    }
    const value = input;
    const line = Number(value.line ?? 0);
    const field = String(value.field ?? "").trim();
    const message = String(value.message ?? "").trim();
    if (!Number.isFinite(line) || line <= 0 || !field || !message) {
        return null;
    }
    return {
        line,
        field,
        message
    };
}
function normalizeRow(input) {
    if (!input || typeof input !== "object") {
        return null;
    }
    const value = input;
    const line = Number(value.line ?? 0);
    if (!Number.isFinite(line) || line <= 0) {
        return null;
    }
    const row = {
        line,
        title: String(value.title ?? "").trim(),
        oem: String(value.oem ?? "").trim(),
        brand: String(value.brand ?? "").trim(),
        model: String(value.model ?? "").trim(),
        category: String(value.category ?? "").trim()
    };
    if (value.price !== undefined && value.price !== null && String(value.price).trim() !== "") {
        row.price = typeof value.price === "number" ? value.price : String(value.price).trim();
    }
    if (value.image !== undefined && value.image !== null && String(value.image).trim() !== "") {
        row.image = String(value.image).trim();
    }
    return row;
}
function parseModelJson(raw) {
    try {
        return JSON.parse(raw);
    } catch  {
        const match = raw.match(/\{[\s\S]*\}/);
        if (!match) {
            throw new Error("Модель вернула невалидный JSON");
        }
        return JSON.parse(match[0]);
    }
}
async function parseCatalogTextWithAi(rawInput) {
    const apiKey = process.env.OPENAI_API_KEY?.trim();
    if (!apiKey) {
        throw new Error("OPENAI_API_KEY не задан в окружении");
    }
    const model = process.env.OPENAI_MODEL?.trim() || "gpt-4o-mini";
    const prompt = `
Ты парсер каталога автозапчастей. Тебе дадут сырой текст, где каждая строка может содержать данные детали.

Задача:
1) Преобразовать текст в JSON.
2) Вернуть валидные строки для импорта или ошибки по недостающим полям.

Обязательные поля для каждой детали:
- title
- oem
- brand
- model
- category

Необязательные:
- price
- image

ВАЖНО:
- Всегда указывай line (номер строки исходного сообщения, начиная с 1).
- Если поля не хватает, добавь объект ошибки: { line, field, message }.
- Если есть хотя бы одна ошибка, status = "needs_clarification".
- Если ошибок нет, status = "ok".
- Ответ ТОЛЬКО в JSON-объекте без markdown.

Формат ответа:
{
  "status": "ok" | "needs_clarification",
  "rows": [
    {
      "line": 1,
      "title": "...",
      "oem": "...",
      "brand": "...",
      "model": "...",
      "category": "...",
      "price": "...",
      "image": "..."
    }
  ],
  "errors": [
    {
      "line": 2,
      "field": "oem",
      "message": "Не найден OEM код"
    }
  ],
  "notes": ["..."]
}
`;
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model,
            temperature: 0,
            response_format: {
                type: "json_object"
            },
            messages: [
                {
                    role: "system",
                    content: prompt
                },
                {
                    role: "user",
                    content: rawInput
                }
            ]
        })
    });
    if (!response.ok) {
        const text = await response.text();
        throw new Error(`Ошибка AI API: ${response.status} ${text}`);
    }
    const payload = await response.json();
    const content = payload.choices?.[0]?.message?.content;
    if (!content) {
        throw new Error("AI не вернул содержимое ответа");
    }
    const parsed = parseModelJson(content);
    const rows = Array.isArray(parsed.rows) ? parsed.rows.map((entry)=>normalizeRow(entry)).filter((entry)=>Boolean(entry)) : [];
    const errors = Array.isArray(parsed.errors) ? parsed.errors.map((entry)=>normalizeIssue(entry)).filter((entry)=>Boolean(entry)) : [];
    const notes = Array.isArray(parsed.notes) ? parsed.notes.filter((entry)=>typeof entry === "string") : [];
    const status = parsed.status === "ok" && errors.length === 0 ? "ok" : "needs_clarification";
    return {
        status,
        rows,
        errors,
        notes
    };
}
}),
"[project]/frontend/lib/actions/admin-ai-import.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60c5e33fdd2cbde90ed6f0986967b3961ede0ae0d5":"importPartsFromAiAction"},"",""] */ __turbopack_context__.s([
    "importPartsFromAiAction",
    ()=>importPartsFromAiAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/xlsx/xlsx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/lib/db/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/db/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$services$2f$ai$2d$catalog$2d$import$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/services/ai-catalog-import.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
const formSchema = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    rawInput: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(10)
});
const rowSchema = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    line: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive(),
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
function rowsToCsv(rows) {
    const exportRows = rows.map((row)=>({
            line: row.line,
            title: row.title,
            oem: row.oem,
            brand: row.brand,
            model: row.model,
            category: row.category,
            price: row.price ?? "",
            image: row.image ?? ""
        }));
    const sheet = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["utils"].json_to_sheet(exportRows);
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["utils"].sheet_to_csv(sheet);
}
function parseCsvRows(csv) {
    const workbook = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["read"](csv, {
        type: "string"
    });
    const firstSheetName = workbook.SheetNames[0];
    if (!firstSheetName) {
        return [];
    }
    const worksheet = workbook.Sheets[firstSheetName];
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["utils"].sheet_to_json(worksheet, {
        defval: "",
        raw: false
    });
}
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
    let aiResult;
    try {
        aiResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$services$2f$ai$2d$catalog$2d$import$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseCatalogTextWithAi"])(parsedForm.data.rawInput);
    } catch (error) {
        return {
            status: "error",
            message: error.message
        };
    }
    if (aiResult.status !== "ok") {
        return {
            status: "needs_clarification",
            message: "AI нашел проблемы в данных. Исправьте строки и попробуйте снова.",
            aiResult
        };
    }
    const validatedRows = aiResult.rows.map((row)=>rowSchema.safeParse(row)).filter((entry)=>entry.success).map((entry)=>entry.data);
    if (!validatedRows.length) {
        return {
            status: "needs_clarification",
            message: "AI не вернул валидные строки для импорта.",
            aiResult
        };
    }
    const csv = rowsToCsv(validatedRows);
    const parsedCsvRows = parseCsvRows(csv);
    const importJob = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].importJob.create({
        data: {
            file: `ai-import-${Date.now()}.csv`,
            status: "pending",
            summary: {
                source: "ai",
                totalRows: parsedCsvRows.length,
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
        let createdParts = 0;
        let updatedParts = 0;
        let linkedCompatibilities = 0;
        const errors = [];
        for(let index = 0; index < parsedCsvRows.length; index += 1){
            const row = parsedCsvRows[index];
            const mapped = {
                line: Number(row.line) || index + 1,
                title: String(row.title ?? "").trim(),
                oem: String(row.oem ?? "").trim(),
                brand: String(row.brand ?? "").trim(),
                model: String(row.model ?? "").trim(),
                category: String(row.category ?? "").trim(),
                price: String(row.price ?? "").trim(),
                image: String(row.image ?? "").trim()
            };
            const parsed = rowSchema.safeParse(mapped);
            if (!parsed.success) {
                errors.push(`Строка ${mapped.line}: отсутствуют обязательные поля`);
                continue;
            }
            const data = parsed.data;
            try {
                const brand = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].brand.upsert({
                    where: {
                        slug: slugify(data.brand)
                    },
                    update: {
                        name: data.brand
                    },
                    create: {
                        name: data.brand,
                        slug: slugify(data.brand)
                    }
                });
                const category = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].category.upsert({
                    where: {
                        slug: slugify(data.category)
                    },
                    update: {
                        name: data.category
                    },
                    create: {
                        name: data.category,
                        slug: slugify(data.category)
                    }
                });
                const car = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].car.upsert({
                    where: {
                        slug: slugify(`${data.brand} ${data.model}`)
                    },
                    update: {
                        brandId: brand.id,
                        model: data.model
                    },
                    create: {
                        brandId: brand.id,
                        model: data.model,
                        slug: slugify(`${data.brand} ${data.model}`)
                    }
                });
                const existingPart = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].part.findUnique({
                    where: {
                        oemNumber: data.oem
                    },
                    select: {
                        id: true
                    }
                });
                const part = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].part.upsert({
                    where: {
                        oemNumber: data.oem
                    },
                    update: {
                        title: data.title,
                        slug: slugify(`${data.title} ${data.oem}`),
                        categoryId: category.id,
                        priceFrom: parsePrice(data.price),
                        inStock: true
                    },
                    create: {
                        title: data.title,
                        oemNumber: data.oem,
                        slug: slugify(`${data.title} ${data.oem}`),
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
                            alt: data.title
                        },
                        create: {
                            partId: part.id,
                            url: data.image.trim(),
                            alt: data.title,
                            sortOrder: 0
                        }
                    });
                }
            } catch (error) {
                errors.push(`Строка ${data.line}: ${error.message}`);
            }
        }
        const summary = {
            source: "ai",
            totalRows: parsedCsvRows.length,
            createdParts,
            updatedParts,
            linkedCompatibilities,
            errors,
            aiNotes: aiResult.notes
        };
        await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].importJob.update({
            where: {
                id: importJob.id
            },
            data: {
                status: errors.length ? "failed" : "completed",
                summary
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/import");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/ai-import");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/parts");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/catalog");
        return {
            status: errors.length ? "needs_clarification" : "imported",
            message: errors.length ? "Импорт завершен с ошибками. Проверьте строки в JSON ниже." : "AI-импорт успешно завершен.",
            aiResult,
            importSummary: summary
        };
    } catch (error) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$db$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].importJob.update({
            where: {
                id: importJob.id
            },
            data: {
                status: "failed",
                summary: {
                    source: "ai",
                    fatalError: error.message
                }
            }
        });
        return {
            status: "error",
            message: error.message,
            aiResult
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    importPartsFromAiAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(importPartsFromAiAction, "60c5e33fdd2cbde90ed6f0986967b3961ede0ae0d5", null);
}),
"[project]/frontend/.next-internal/server/app/admin/ai-import/page/actions.js { ACTIONS_MODULE0 => \"[project]/frontend/lib/actions/admin-ai-import.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$actions$2f$admin$2d$ai$2d$import$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/actions/admin-ai-import.ts [app-rsc] (ecmascript)");
;
}),
"[project]/frontend/.next-internal/server/app/admin/ai-import/page/actions.js { ACTIONS_MODULE0 => \"[project]/frontend/lib/actions/admin-ai-import.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "60c5e33fdd2cbde90ed6f0986967b3961ede0ae0d5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$actions$2f$admin$2d$ai$2d$import$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["importPartsFromAiAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$ai$2d$import$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$frontend$2f$lib$2f$actions$2f$admin$2d$ai$2d$import$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/frontend/.next-internal/server/app/admin/ai-import/page/actions.js { ACTIONS_MODULE0 => "[project]/frontend/lib/actions/admin-ai-import.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$actions$2f$admin$2d$ai$2d$import$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/actions/admin-ai-import.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8536887f._.js.map