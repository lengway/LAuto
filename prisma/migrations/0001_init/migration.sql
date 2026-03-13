-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateEnum
CREATE TYPE "public"."ImportJobStatus" AS ENUM ('pending', 'processing', 'completed', 'failed');

-- CreateTable
CREATE TABLE "public"."Brand" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "parentId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Car" (
    "id" TEXT NOT NULL,
    "brandId" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "generation" TEXT,
    "years" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Part" (
    "id" TEXT NOT NULL,
    "oemNumber" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "description" TEXT,
    "priceFrom" INTEGER,
    "inStock" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Part_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PartCompatibility" (
    "id" TEXT NOT NULL,
    "partId" TEXT NOT NULL,
    "carId" TEXT NOT NULL,

    CONSTRAINT "PartCompatibility_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Image" (
    "id" TEXT NOT NULL,
    "partId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "alt" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."VinPattern" (
    "id" TEXT NOT NULL,
    "pattern" TEXT NOT NULL,
    "carId" TEXT NOT NULL,

    CONSTRAINT "VinPattern_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ImportJob" (
    "id" TEXT NOT NULL,
    "file" TEXT NOT NULL,
    "status" "public"."ImportJobStatus" NOT NULL DEFAULT 'pending',
    "summary" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ImportJob_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Brand_name_key" ON "public"."Brand"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Brand_slug_key" ON "public"."Brand"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Category_slug_key" ON "public"."Category"("slug");

-- CreateIndex
CREATE INDEX "Category_parentId_idx" ON "public"."Category"("parentId");

-- CreateIndex
CREATE UNIQUE INDEX "Car_slug_key" ON "public"."Car"("slug");

-- CreateIndex
CREATE INDEX "Car_brandId_idx" ON "public"."Car"("brandId");

-- CreateIndex
CREATE UNIQUE INDEX "Part_oemNumber_key" ON "public"."Part"("oemNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Part_slug_key" ON "public"."Part"("slug");

-- CreateIndex
CREATE INDEX "Part_categoryId_idx" ON "public"."Part"("categoryId");

-- CreateIndex
CREATE INDEX "PartCompatibility_carId_idx" ON "public"."PartCompatibility"("carId");

-- CreateIndex
CREATE INDEX "PartCompatibility_partId_idx" ON "public"."PartCompatibility"("partId");

-- CreateIndex
CREATE UNIQUE INDEX "PartCompatibility_partId_carId_key" ON "public"."PartCompatibility"("partId", "carId");

-- CreateIndex
CREATE INDEX "Image_partId_idx" ON "public"."Image"("partId");

-- CreateIndex
CREATE UNIQUE INDEX "Image_partId_sortOrder_key" ON "public"."Image"("partId", "sortOrder");

-- CreateIndex
CREATE UNIQUE INDEX "VinPattern_pattern_key" ON "public"."VinPattern"("pattern");

-- CreateIndex
CREATE INDEX "VinPattern_carId_idx" ON "public"."VinPattern"("carId");

-- AddForeignKey
ALTER TABLE "public"."Category" ADD CONSTRAINT "Category_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "public"."Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Car" ADD CONSTRAINT "Car_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "public"."Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Part" ADD CONSTRAINT "Part_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "public"."Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PartCompatibility" ADD CONSTRAINT "PartCompatibility_partId_fkey" FOREIGN KEY ("partId") REFERENCES "public"."Part"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PartCompatibility" ADD CONSTRAINT "PartCompatibility_carId_fkey" FOREIGN KEY ("carId") REFERENCES "public"."Car"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Image" ADD CONSTRAINT "Image_partId_fkey" FOREIGN KEY ("partId") REFERENCES "public"."Part"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."VinPattern" ADD CONSTRAINT "VinPattern_carId_fkey" FOREIGN KEY ("carId") REFERENCES "public"."Car"("id") ON DELETE CASCADE ON UPDATE CASCADE;

