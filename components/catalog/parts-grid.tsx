import type { CatalogPart } from "@/lib/services/catalog";

import { PartCard } from "./part-card";

type PartsGridProps = {
  parts: CatalogPart[];
};

export function PartsGrid({ parts }: PartsGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {parts.map((part) => (
        <PartCard key={part.id} part={part} />
      ))}
    </div>
  );
}
