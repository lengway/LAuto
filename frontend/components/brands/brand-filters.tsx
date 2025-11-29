"use client";

import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

const countries = ["Japan", "Germany", "USA", "South Korea", "Sweden", "Italy"];

const brandHierarchy = {
  Toyota: {
    country: "Japan",
    models: {
      "Land Cruiser": ["Legend V", "GR Sport"],
      "Camry": ["XV70", "Hybrid"],
    },
  },
  BMW: {
    country: "Germany",
    models: {
      X5: ["xDrive40i", "M60i"],
      "i5": ["eDrive40", "M60"],
    },
  },
  Ford: {
    country: "USA",
    models: {
      Mustang: ["Dark Horse", "GT"],
      Bronco: ["Badlands", "Raptor"],
    },
  },
};

export function BrandFilters() {
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [brand, setBrand] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [trim, setTrim] = useState<string>("");
  const [yearFrom, setYearFrom] = useState("2015");
  const [yearTo, setYearTo] = useState("2024");

  const models = useMemo(() => {
    if (!brand) return [];
    return Object.keys(brandHierarchy[brand as keyof typeof brandHierarchy]?.models || {});
  }, [brand]);

  const trims = useMemo(() => {
    if (!brand || !model) return [];
    const selectedBrand = brandHierarchy[brand as keyof typeof brandHierarchy];
    return selectedBrand?.models[model as keyof typeof selectedBrand.models] || [];
  }, [brand, model]);

  const toggleCountry = (value: string) => {
    setSelectedCountries((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const resetFilters = () => {
    setSelectedCountries([]);
    setBrand("");
    setModel("");
    setTrim("");
    setYearFrom("2015");
    setYearTo("2024");
  };

  return (
    <aside className="space-y-4">
      <Card>
        <CardHeader className="flex items-center justify-between space-y-0">
          <div>
            <CardTitle className="text-lg">Filters</CardTitle>
            <p className="text-sm text-muted-foreground">Refine catalog matches</p>
          </div>
          <Badge variant="outline">Beta</Badge>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <Label>Country of origin</Label>
            <div className="space-y-2 rounded-lg border border-border/60 p-3">
              {countries.map((country) => (
                <label key={country} className="flex items-center gap-2 text-sm">
                  <Checkbox
                    checked={selectedCountries.includes(country)}
                    onCheckedChange={() => toggleCountry(country)}
                    id={`country-${country}`}
                  />
                  <span>{country}</span>
                </label>
              ))}
            </div>
          </div>
          <Separator />
          <div className="space-y-3">
            <Label>Brand</Label>
            <Select
              value={brand}
              onValueChange={(value) => {
                setBrand(value);
                setModel("");
                setTrim("");
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select brand" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(brandHierarchy).map((brandName) => (
                  <SelectItem key={brandName} value={brandName}>
                    {brandName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-3">
            <Label>Model</Label>
            <Select
              value={model}
              onValueChange={(value) => {
                setModel(value);
                setTrim("");
              }}
              disabled={!models.length}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select model" />
              </SelectTrigger>
              <SelectContent>
                {models.map((modelName) => (
                  <SelectItem key={modelName} value={modelName}>
                    {modelName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-3">
            <Label>Trim</Label>
            <Select value={trim} onValueChange={setTrim} disabled={!trims.length}>
              <SelectTrigger>
                <SelectValue placeholder="Select trim" />
              </SelectTrigger>
              <SelectContent>
                {trims.map((trimName) => (
                  <SelectItem key={trimName} value={trimName}>
                    {trimName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Separator />
          <div className="space-y-3">
            <Label>Production year</Label>
            <div className="flex items-center gap-3">
              <Input
                type="number"
                min={1990}
                max={yearTo}
                value={yearFrom}
                onChange={(event) => setYearFrom(event.target.value)}
                className="h-11"
              />
              <span className="text-sm text-muted-foreground">to</span>
              <Input
                type="number"
                min={yearFrom}
                max={2025}
                value={yearTo}
                onChange={(event) => setYearTo(event.target.value)}
                className="h-11"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Button className="flex-1" size="sm" variant="secondary">
              Apply
            </Button>
            <Button className="flex-1" size="sm" variant="ghost" onClick={resetFilters}>
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
}
