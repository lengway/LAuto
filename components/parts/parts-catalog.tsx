import { PartsGrid } from "./parts-grid";
import { PartItem } from "./part-data";

type PartsCatalogProps = {
  parts: PartItem[];
};

export function PartsCatalog({ parts }: PartsCatalogProps) {
  return <PartsGrid parts={parts} />;
}
