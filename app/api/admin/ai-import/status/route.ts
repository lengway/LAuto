import { NextResponse } from "next/server";

import { getAiImportJobSnapshot } from "@/lib/services/ai-import-jobs";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const jobId = String(searchParams.get("jobId") ?? "").trim();

  if (!jobId) {
    return NextResponse.json(
      {
        error: "jobId is required",
      },
      { status: 400 }
    );
  }

  const job = getAiImportJobSnapshot(jobId);
  if (!job) {
    return NextResponse.json(
      {
        error: "Job not found",
      },
      { status: 404 }
    );
  }

  return NextResponse.json({ job });
}
