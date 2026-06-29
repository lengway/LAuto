type AiImportIssue = {
  line: number;
  field: string;
  message: string;
};

export type AiImportRow = {
  line: number;
  title: string;
  oem?: string;
  brand: string;
  model: string;
  models: string[];
  category: string;
  price?: string | number;
  image?: string;
};

export type AiCatalogImportResult = {
  status: "ok" | "needs_clarification";
  rows: AiImportRow[];
  errors: AiImportIssue[];
  notes: string[];
};

type AiCatalogParseContext = {
  knownBrands?: string[];
  knownModels?: string[];
  knownBrandModels?: Array<{
    brand: string;
    model: string;
  }>;
  signal?: AbortSignal;
};

type OpenAiJson = {
  status?: unknown;
  rows?: unknown;
  errors?: unknown;
  notes?: unknown;
};

function logAiImport(message: string, meta?: Record<string, unknown>) {
  const prefix = `[ai-import][${new Date().toISOString()}] ${message}`;

  if (meta) {
    console.info(prefix, meta);
    return;
  }

  console.info(prefix);
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function parseFetchError(error: unknown): {
  message: string;
  isAbort: boolean;
  causeMessage?: string;
  causeCode?: string;
  errorName?: string;
} {
  const message = error instanceof Error ? error.message : "Неизвестная ошибка fetch";
  const isAbort = error instanceof Error && error.name === "AbortError";

  let causeMessage: string | undefined;
  let causeCode: string | undefined;
  if (error instanceof Error && "cause" in error) {
    const cause = (error as Error & { cause?: unknown }).cause;
    if (cause && typeof cause === "object") {
      const value = cause as Record<string, unknown>;
      causeMessage = typeof value.message === "string" ? value.message : undefined;
      causeCode = typeof value.code === "string" ? value.code : undefined;
    }
  }

  return {
    message,
    isAbort,
    causeMessage,
    causeCode,
    errorName: error instanceof Error ? error.name : undefined,
  };
}

function isPlaceholderValue(input: unknown): boolean {
  const normalized = String(input ?? "")
    .trim()
    .toLowerCase();

  return normalized === "-" || normalized === "—" || normalized === "n/a" || normalized === "na";
}

function normalizeIssue(input: unknown): AiImportIssue | null {
  if (!input || typeof input !== "object") {
    return null;
  }

  const value = input as Record<string, unknown>;
  const line = Number(value.line ?? 0);
  const field = String(value.field ?? "").trim();
  const message = String(value.message ?? "").trim();

  if (!Number.isFinite(line) || line <= 0 || !field || !message) {
    return null;
  }

  return {
    line,
    field,
    message,
  };
}

function normalizeRow(input: unknown): AiImportRow | null {
  if (!input || typeof input !== "object") {
    return null;
  }

  const value = input as Record<string, unknown>;
  const line = Number(value.line ?? 0);

  if (!Number.isFinite(line) || line <= 0) {
    return null;
  }

  const modelFromString = String(value.model ?? "").trim();
  const modelListFromArray = Array.isArray(value.models)
    ? value.models
        .map((entry) => String(entry ?? "").trim())
        .filter(Boolean)
    : [];
  const normalizedModels = Array.from(new Set(modelListFromArray.length ? modelListFromArray : [modelFromString].filter(Boolean)));

  const row: AiImportRow = {
    line,
    title: String(value.title ?? "").trim(),
    brand: String(value.brand ?? "").trim(),
    model: modelFromString || normalizedModels[0] || "",
    models: normalizedModels,
    category: String(value.category ?? "").trim(),
  };

  if (value.oem !== undefined && value.oem !== null && String(value.oem).trim() !== "" && !isPlaceholderValue(value.oem)) {
    row.oem = String(value.oem).trim();
  }

  if (value.price !== undefined && value.price !== null && String(value.price).trim() !== "") {
    row.price = typeof value.price === "number" ? value.price : String(value.price).trim();
  }

  if (value.image !== undefined && value.image !== null && String(value.image).trim() !== "" && !isPlaceholderValue(value.image)) {
    row.image = String(value.image).trim();
  }

  return row;
}

function parseModelJson(raw: string): OpenAiJson {
  try {
    return JSON.parse(raw) as OpenAiJson;
  } catch {
    const match = raw.match(/\{[\s\S]*\}/);
    if (!match) {
      throw new Error("Модель вернула невалидный JSON");
    }

    return JSON.parse(match[0]) as OpenAiJson;
  }
}

export async function parseCatalogTextWithAi(
  rawInput: string,
  context?: AiCatalogParseContext
): Promise<AiCatalogImportResult> {
  logAiImport("Запуск AI-парсинга", {
    inputLength: rawInput.length,
  });

  const apiKey = process.env.OPENAI_API_KEY?.trim();
  if (!apiKey) {
    throw new Error("OPENAI_API_KEY не задан в окружении");
  }

  const model = process.env.OPENAI_MODEL?.trim() || "gpt-4o-mini";
  logAiImport("Подготовлен контекст для AI", {
    model,
    knownBrands: context?.knownBrands?.length ?? 0,
    knownModels: context?.knownModels?.length ?? 0,
    knownBrandModels: context?.knownBrandModels?.length ?? 0,
  });

  const knownBrands = (context?.knownBrands ?? []).filter(Boolean).slice(0, 300);
  const knownModels = (context?.knownModels ?? []).filter(Boolean).slice(0, 400);
  const knownBrandModels = (context?.knownBrandModels ?? [])
    .filter((entry) => entry.brand?.trim() && entry.model?.trim())
    .slice(0, 700);
  const knownBrandsBlock = knownBrands.length
    ? `\nСправочник существующих марок из БД:\n${knownBrands.map((entry) => `- ${entry}`).join("\n")}\n`
    : "";
  const knownModelsBlock = knownModels.length
    ? `\nСправочник существующих моделей из БД (используй как контекст для поля model):\n${knownModels
        .map((entry) => `- ${entry}`)
        .join("\n")}\n`
    : "";
  const knownBrandModelsBlock = knownBrandModels.length
    ? `\nСправочник пар бренд→модель из БД:\n${knownBrandModels
        .map((entry) => `- ${entry.brand} -> ${entry.model}`)
        .join("\n")}\n`
    : "";

  const prompt = `
You are an automotive catalog data normalization engine.

Your job is to transform raw auto parts lists into structured catalog data suitable for database import.

The input may contain:

* inconsistent brands
* missing categories
* duplicated rows
* scientific notation OEM codes
* missing models
* incorrect brand values such as "Китай"

You must normalize, validate, and structure the data.

Return ONLY JSON.

Before returning the final answer, you MUST self-validate JSON syntax.
If JSON is invalid, fix it and validate again.

JSON validity checklist:
* all keys and string values use double quotes
* no trailing commas
* all arrays and objects are properly closed
* no markdown, comments, or extra text outside the JSON object
* output must be directly parseable by JSON.parse

---

# OUTPUT FORMAT

Return the following structure:

{
"status": "ok",
"rows": [],
"errors": [],
"notes": []
}

---

# ROW STRUCTURE

Each row must contain:

{
"line": number,
"title": string,
"brand": string,
"model": string,
"models": string[],
"category": string,
"oem": string|null,
"price": number|null
}

Rules:

* price must be a number
* oem must be a string or null
* category must never be "-"
* brand must be normalized
* model must not be "-"
* models must contain at least one model name

---

# BRAND NORMALIZATION

If brand is "Китай", infer the brand from the model.

Brand mapping rules:

Tiggo → Chery
Arrizo → Chery

CS → Changan
Alsvin → Changan
UNI → Changan

Coolray → Geely
Atlas → Geely

F7 → Haval
H6 → Haval

J7 → JAC
JS → JAC

If brand cannot be determined, move the row to errors.

---

# CATEGORY DETECTION

Infer category from part name.

Examples:

Амортизатор → подвеска
Стойка стабилизатора → подвеска
Втулка стабилизатора → подвеска

Бампер → кузов
Балка бампера → кузов
Дверь → кузов
Крыло → кузов

Датчик → электроника
Датчик кислорода → электроника

Фильтр → двигатель

Бачок → система охлаждения

If category cannot be inferred, set:

"category": "прочее"

---

# OEM VALIDATION

If OEM value appears like scientific notation:

Example:
9,908E+16

Then treat it as invalid and set:

"oem": null

OEM must always be returned as a string.

---

# PRICE NORMALIZATION

Convert price strings to numbers.

Example:

"11830" → 11830

If price is missing:

price = null

---

# DUPLICATE HANDLING

Remove duplicates using this rule:

(title + brand + model + oem)

If duplicate rows exist, keep only the first.

---

# INVALID ROWS

Move rows to "errors" if:

* brand cannot be determined
* model is "-"
* title is empty

Error format:

{
"line": number,
"field": "brand|model|title|oem",
"message": "description"
}

---

# IMPORTANT RULES

Never invent OEM numbers.

Never output scientific notation.

Never output brand = "Китай".

Never output category = "-".

Use provided DB context (brands/models) as primary reference for normalization.

If a part fits multiple models, return all of them in "models" array.

If model is unknown in DB but clearly present in input, keep it as a new model candidate.

---

# FINAL STEP

Return clean rows ready for database import.
${knownBrandsBlock || knownModelsBlock || knownBrandModelsBlock ? `

Known entities from database (use as optional disambiguation context):
${knownBrandsBlock}${knownModelsBlock}${knownBrandModelsBlock}` : ""}
`;

  let response: Response | null = null;
  const maxAttempts = Number(process.env.OPENAI_FETCH_RETRIES ?? 1);
  const retryDelayMs = Number(process.env.OPENAI_FETCH_RETRY_DELAY_MS ?? 2000);
  let lastFetchError: ReturnType<typeof parseFetchError> | null = null;

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      logAiImport("Отправка запроса в OpenAI API", {
        hasExternalAbortSignal: Boolean(context?.signal),
        attempt,
        maxAttempts,
      });

      response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model,
          temperature: 0,
          response_format: { type: "json_object" },
          messages: [
            {
              role: "system",
              content: prompt,
            },
            {
              role: "user",
              content: rawInput,
            },
          ],
        }),
        signal: context?.signal,
      });

      break;
    } catch (error) {
      const parsedError = parseFetchError(error);
      lastFetchError = parsedError;

      logAiImport("Ошибка вызова OpenAI API", {
        ...parsedError,
        attempt,
        maxAttempts,
      });

      if (parsedError.isAbort) {
        throw new Error("Импорт остановлен пользователем");
      }

      if (attempt < maxAttempts) {
        await wait(retryDelayMs * attempt);
        continue;
      }

      throw new Error(`Ошибка AI API (fetch failed): ${parsedError.message}`);
    }
  }

  if (!response) {
    const fallbackMessage = lastFetchError?.message ?? "Не удалось получить ответ от AI API";
    throw new Error(`Ошибка AI API (fetch failed): ${fallbackMessage}`);
  }

  logAiImport("Получен ответ AI API", {
    status: response.status,
    ok: response.ok,
  });

  if (!response.ok) {
    const text = await response.text();
    logAiImport("AI API вернул ошибку", {
      status: response.status,
      bodyPreview: text.slice(0, 2000),
    });
    throw new Error(`Ошибка AI API: ${response.status} ${text}`);
  }

  const payload = (await response.json()) as {
    choices?: Array<{
      message?: {
        content?: string;
      };
    }>;
  };

  const content = payload.choices?.[0]?.message?.content;
  if (!content) {
    logAiImport("Пустой content от OpenAI", {
      hasChoices: Boolean(payload.choices?.length),
    });
    throw new Error("AI не вернул содержимое ответа");
  }

  const parsed = parseModelJson(content);

  const rows = Array.isArray(parsed.rows)
    ? parsed.rows.map((entry) => normalizeRow(entry)).filter((entry): entry is AiImportRow => Boolean(entry))
    : [];

  const rawErrors = Array.isArray(parsed.errors)
    ? parsed.errors.map((entry) => normalizeIssue(entry)).filter((entry): entry is AiImportIssue => Boolean(entry))
    : [];

  const rowByLine = new Map<number, AiImportRow>(rows.map((row) => [row.line, row]));
  const errors = rawErrors.filter((error) => {
    const row = rowByLine.get(error.line);
    if (!row) {
      return true;
    }

    if (error.field === "title" && row.title.trim()) {
      return false;
    }

    if (error.field === "brand" && row.brand.trim()) {
      return false;
    }

    if (error.field === "model" && row.model.trim()) {
      return false;
    }

    if (error.field === "category" && row.category.trim()) {
      return false;
    }

    if (error.field === "oem" && String(row.oem ?? "").trim()) {
      return false;
    }

    return true;
  });

  const notes = Array.isArray(parsed.notes)
    ? parsed.notes.filter((entry): entry is string => typeof entry === "string")
    : [];

  const hasRows = rows.length > 0;
  const status = errors.length === 0 && hasRows ? "ok" : "needs_clarification";

  logAiImport("AI-парсинг завершен", {
    status,
    rows: rows.length,
    errors: errors.length,
    notes: notes.length,
  });

  return {
    status,
    rows,
    errors,
    notes,
  };
}
