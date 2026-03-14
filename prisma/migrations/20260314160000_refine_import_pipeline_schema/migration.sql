-- AlterTable
ALTER TABLE "public"."Part"
  ADD COLUMN IF NOT EXISTS "side" TEXT,
  ADD COLUMN IF NOT EXISTS "position" TEXT;

-- AlterTable
ALTER TABLE "public"."RawImportRow"
  RENAME COLUMN "rawTitle" TO "name";

ALTER TABLE "public"."RawImportRow"
  RENAME COLUMN "rawBrand" TO "brand";

ALTER TABLE "public"."RawImportRow"
  RENAME COLUMN "rawOem" TO "oem";

ALTER TABLE "public"."RawImportRow"
  RENAME COLUMN "rawPrice" TO "price";

ALTER TABLE "public"."RawImportRow"
  ADD COLUMN "article" TEXT;

ALTER TABLE "public"."RawImportRow"
  DROP COLUMN "rawModel",
  DROP COLUMN "rawCategory";
