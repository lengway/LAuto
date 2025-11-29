import { BrandCar } from "@/components/brands/brand-data";
import { BrandCard } from "@/components/brands/brand-card";

export function BrandCatalog({ cars }: { cars: BrandCar[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {cars.map((car) => (
        <BrandCard key={car.id} car={car} />
      ))}
    </div>
  );
}
