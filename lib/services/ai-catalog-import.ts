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
Ты парсер каталога автозапчастей. Тебе дадут сырой текст, где каждая строка может содержать данные детали.

Задача:
1) Преобразовать текст в JSON.
2) Вернуть валидные строки для импорта или ошибки по недостающим полям.

Обязательные поля для каждой детали:
- title
- brand
- model
- category

Необязательные:
- oem
- price
- image

ВАЖНО:
- Всегда указывай line (номер строки исходного сообщения, начиная с 1).
- category может быть новой, если такой категории нет в базе — это не ошибка.
- Определи model из текста строки, учитывая справочник моделей из БД.
- Если в строке нет точной модели, ставь model = "-" и НЕ добавляй ошибку по model.
- Если поля не хватает, добавь объект ошибки: { line, field, message }.
- Если есть хотя бы одна ошибка, status = "needs_clarification".
- Если ошибок нет, status = "ok".
- Ответ ТОЛЬКО в JSON-объекте без markdown.

${knownModelsBlock}

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
