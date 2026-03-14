# Project Plan

## Prisma Schema Improvements (2026-03-14)

- [x] Made `Part.oemNumber` optional and removed global uniqueness.
- [x] Added `@@index([oemNumber])` on `Part` for faster OEM lookups.
- [x] Converted `Part.priceFrom` from `Int?` to `Decimal? @db.Decimal(10, 2)`.
- [x] Added `Part.isVisible Boolean @default(true)` for soft visibility control.
- [x] Added `@@index([title])` on `Part` to improve catalog search performance.
- [x] Changed `Car.slug` from global unique to composite uniqueness per brand via `@@unique([brandId, slug])`.
- [x] Changed `VinPattern.pattern` from globally unique to indexed with `@@index([pattern])`.
- [x] Added import tracking fields on `ImportJob`: `rowsTotal`, `rowsSuccess`, `rowsFailed`.
- [x] Ensured indexing requirements are present:
  - `PartCompatibility`: `@@index([carId])`, `@@index([partId])`
  - `Category`: `@@index([slug])`
  - `VinPattern`: `@@index([pattern])`

## Migration

- Applied migration: `20260314054416_improve_catalog_schema_indexes`
- File: `prisma/migrations/20260314054416_improve_catalog_schema_indexes/migration.sql`

## Database Improvements

These updates are incremental and preserve existing relations while improving key operational areas:

- **Scalability**: selective indexes reduce scan-heavy catalog queries and VIN pattern lookups.
- **Data correctness**: OEM numbers are no longer globally constrained, matching real-world catalog behavior.
- **Pricing fidelity**: decimal pricing prevents integer-only limitations.
- **Catalog operations**: visibility flag supports hiding inactive parts without destructive deletes.
- **Import reliability**: row-level counters support progress and outcome reporting in admin workflows.
- **SEO/readability consistency**: slug uniqueness is now scoped to brand where model slugs naturally overlap.

## Ingestion Pipeline Architecture

The catalog import flow is now staged and resilient for large files:

1. **RawImportRow**
  - Every uploaded Excel/CSV row is persisted first in `RawImportRow` with `stage=raw`.
  - Raw fields are stored (`rawTitle`, `rawBrand`, `rawModel`, `rawCategory`, `rawOem`, `rawPrice`) plus `rawJson`.

2. **Rule Parsing**
  - Deterministic parser extracts OEM (`[A-Z0-9-]{6,}`), numeric price, and normalized title whitespace.
  - Category rules run before AI:
    - `амортизатор → suspension`
    - `бампер|дверь → body`
    - `датчик → electronics`
    - `бачок → cooling`
  - Brand rules run before AI:
    - `Tiggo → Chery`
    - `CS|Alsvin → Changan`
    - `Coolray → Geely`
    - `JS|J7 → JAC`
  - Model alias mapping from `ModelAlias` is applied before normalization.

3. **AI Normalization**
  - Rows are sent in batches of **max 20**.
  - AI is restricted to normalize only: `title`, `brand`, `model`, `category`, `confidence`.
  - AI never invents OEM, prices, or compatibility.

4. **Validation**
  - Rules: `brand` exists, `model` exists, `title` is non-empty.
  - Invalid rows move to `stage=failed`; valid rows move to `stage=validated`.

5. **Deduplication**
  - Before insert/update, duplicate key is resolved by `(title + brand + model + oem)`.
  - Existing catalog rows are updated instead of inserting duplicates.

6. **Catalog Insert**
  - Only `validated` rows are imported into catalog entities (`Brand`, `Car`, `Part`, `PartCompatibility`).
  - Successfully imported rows move to `stage=imported`.

7. **ImportJob Metrics**
  - `ImportJob` now tracks `rowsTotal`, `rowsSuccess`, `rowsFailed`.
  - Summary JSON contains stage counters and row-level errors.
