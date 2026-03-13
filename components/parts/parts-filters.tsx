"use client";

import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const categories = [
  "Engine",
  "Fuel System",
  "Suspension",
  "Brakes",
  "Drivetrain",
  "Lighting",
  "Interior",
  "Wheels & Tires",
  "Exhaust",
];

const brands = [
  "Toyota",
  "BMW",
  "Mercedes-Benz",
  "Audi",
  "Land Rover",
  "Volvo",
  "Ford",
  "Honda",
  "Lexus",
];

export type PartsFilterState = {
  categories: string[];
  brands: string[];
  minOffers: number;
};

export const defaultPartsFilters: PartsFilterState = {
  categories: [],
  brands: [],
  minOffers: 0,
};

type PartsFiltersProps = {
  value: PartsFilterState;
  onChange: (filters: PartsFilterState) => void;
  onReset: () => void;
};

export function PartsFilters({ value, onChange, onReset }: PartsFiltersProps) {
  const toggleValue = (type: "categories" | "brands", item: string) => {
    const exists = value[type].includes(item);
    const nextItems = exists ? value[type].filter((entry) => entry !== item) : [...value[type], item];
    onChange({ ...value, [type]: nextItems });
  };

  const handleSlider = (val: number[]) => {
    onChange({ ...value, minOffers: val[0] });
  };

  return (
    <Card className="border-border/60 bg-card/80 shadow-sm">
      <CardHeader className="flex items-center justify-between space-y-0">
        <div>
          <CardTitle className="text-lg">Filters</CardTitle>
          <p className="text-sm text-muted-foreground">Refine compatible inventory</p>
        </div>
        <Badge variant="outline">Live</Badge>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <Label>Part categories</Label>
          <div className="space-y-2 rounded-lg border border-border/60 p-3">
            {categories.map((category) => (
              <label key={category} className="flex items-center gap-2 text-sm">
                <Checkbox
                  checked={value.categories.includes(category)}
                  onCheckedChange={() => toggleValue("categories", category)}
                />
                <span>{category}</span>
              </label>
            ))}
          </div>
        </div>

        <Separator />

        <div className="space-y-3">
          <Label>Preferred brands</Label>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {brands.map((brand) => (
              <label key={brand} className="flex items-center gap-2">
                <Checkbox
                  checked={value.brands.includes(brand)}
                  onCheckedChange={() => toggleValue("brands", brand)}
                />
                <span className="truncate">{brand}</span>
              </label>
            ))}
          </div>
        </div>

        <Separator />

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label>Supplier depth</Label>
            <span className="text-xs text-muted-foreground">
              {value.minOffers ? `Min ${value.minOffers} offers` : "Any"}
            </span>
          </div>
          <Slider value={[value.minOffers]} onValueChange={handleSlider} min={0} max={25} step={1} />
        </div>

        <button
          type="button"
          onClick={onReset}
          className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          Reset filters
        </button>
      </CardContent>
    </Card>
  );
}
