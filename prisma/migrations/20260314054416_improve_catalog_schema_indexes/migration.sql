/*
  Warnings:

  - You are about to alter the column `priceFrom` on the `Part` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(10,2)`.
  - A unique constraint covering the columns `[brandId,slug]` on the table `Car` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "public"."Car_slug_key";

-- DropIndex
DROP INDEX "public"."Part_oemNumber_key";

-- DropIndex
DROP INDEX "public"."VinPattern_pattern_key";

-- AlterTable
ALTER TABLE "public"."ImportJob" ADD COLUMN     "rowsFailed" INTEGER,
ADD COLUMN     "rowsSuccess" INTEGER,
ADD COLUMN     "rowsTotal" INTEGER;

-- AlterTable
ALTER TABLE "public"."Part" ADD COLUMN     "isVisible" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "oemNumber" DROP NOT NULL,
ALTER COLUMN "priceFrom" SET DATA TYPE DECIMAL(10,2);

-- CreateIndex
CREATE UNIQUE INDEX "Car_brandId_slug_key" ON "public"."Car"("brandId", "slug");

-- CreateIndex
CREATE INDEX "Category_slug_idx" ON "public"."Category"("slug");

-- CreateIndex
CREATE INDEX "Part_oemNumber_idx" ON "public"."Part"("oemNumber");

-- CreateIndex
CREATE INDEX "Part_title_idx" ON "public"."Part"("title");

-- CreateIndex
CREATE INDEX "VinPattern_pattern_idx" ON "public"."VinPattern"("pattern");
