type AiImportIssue = {
  line: number;
  field: string;
  message: string;
};

type AiImportRow = {
  line: number;
  title: string;
  oem?: string;
  brand: string;
  model: string;
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
  knownModels?: string[];
};

type OpenAiJson = {
  status?: unknown;
  rows?: unknown;
  errors?: unknown;
  notes?: unknown;
};

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

  const row: AiImportRow = {
    line,
    title: String(value.title ?? "").trim(),
    brand: String(value.brand ?? "").trim(),
    model: String(value.model ?? "").trim(),
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
  const apiKey = process.env.OPENAI_API_KEY?.trim();

  if (!apiKey) {
    throw new Error("OPENAI_API_KEY не задан в окружении");
  }

  const model = process.env.OPENAI_MODEL?.trim() || "gpt-4o-mini";
  const knownModels = (context?.knownModels ?? []).filter(Boolean).slice(0, 400);
  const knownModelsBlock = knownModels.length
    ? `\nСправочник существующих моделей из БД (используй как контекст для поля model):\n${knownModels
        .map((entry) => `- ${entry}`)
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

---

# FINAL STEP

Return clean rows ready for database import.
${knownModelsBlock ? `

Known models from database (use as optional disambiguation context):
${knownModelsBlock}` : ""}
`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
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
  });

  if (!response.ok) {
    const text = await response.text();
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

  return {
    status,
    rows,
    errors,
    notes,
  };
}
