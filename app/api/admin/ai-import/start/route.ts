import { NextResponse } from "next/server";

import { startAiImportJob } from "@/lib/services/ai-import-jobs";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { rawInput?: unknown };
    const rawInput = String(body.rawInput ?? "").trim();

    if (rawInput.length < 10) {
      return NextResponse.json(
        {
          error: "Введите текст с деталями (минимум 10 символов)",
        },
        { status: 400 }
      );
    }

    const job = startAiImportJob(rawInput);

    return NextResponse.json({
      job,
    });
  } catch {
    return NextResponse.json(
      {
        error: "Не удалось запустить импорт",
      },
      { status: 500 }
    );
  }
}
