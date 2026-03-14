-- CreateEnum
CREATE TYPE "public"."ImportStage" AS ENUM ('raw', 'parsed', 'normalized', 'validated', 'imported', 'failed');

-- CreateTable
CREATE TABLE "public"."RawImportRow" (
    "id" TEXT NOT NULL,
    "jobId" TEXT NOT NULL,
    "line" INTEGER NOT NULL,
    "rawTitle" TEXT,
    "rawBrand" TEXT,
    "rawModel" TEXT,
    "rawCategory" TEXT,
    "rawOem" TEXT,
    "rawPrice" TEXT,
    "rawJson" JSONB,
    "stage" "public"."ImportStage" NOT NULL DEFAULT 'raw',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RawImportRow_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ModelAlias" (
    "id" TEXT NOT NULL,
    "alias" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ModelAlias_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "RawImportRow_jobId_idx" ON "public"."RawImportRow"("jobId");

-- CreateIndex
CREATE INDEX "RawImportRow_jobId_line_idx" ON "public"."RawImportRow"("jobId", "line");

-- CreateIndex
CREATE INDEX "RawImportRow_jobId_stage_idx" ON "public"."RawImportRow"("jobId", "stage");

-- CreateIndex
CREATE UNIQUE INDEX "ModelAlias_alias_key" ON "public"."ModelAlias"("alias");

-- CreateIndex
CREATE INDEX "ModelAlias_alias_idx" ON "public"."ModelAlias"("alias");

-- AddForeignKey
ALTER TABLE "public"."RawImportRow" ADD CONSTRAINT "RawImportRow_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "public"."ImportJob"("id") ON DELETE CASCADE ON UPDATE CASCADE;
