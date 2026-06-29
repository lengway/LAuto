import { NextResponse } from "next/server";

import { stopAiImportJob } from "@/lib/services/ai-import-jobs";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { jobId?: unknown };
    const jobId = String(body.jobId ?? "").trim();

    if (!jobId) {
      return NextResponse.json(
        {
          error: "jobId is required",
        },
        { status: 400 }
      );
    }

    const job = stopAiImportJob(jobId);
    if (!job) {
      return NextResponse.json(
        {
          error: "Job not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({ job });
  } catch {
    return NextResponse.json(
      {
        error: "Не удалось остановить импорт",
      },
      { status: 500 }
    );
  }
}
