"use client";

import { IconSearch, IconCar } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type PartsSearchBarProps = {
  query: string;
  vin: string;
  onQueryChange: (value: string) => void;
  onVinChange: (value: string) => void;
};

export function PartsSearchBar({ query, vin, onQueryChange, onVinChange }: PartsSearchBarProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 rounded-xl border border-border/60 bg-card/80 p-4 shadow-sm"
    >
      <div className="flex flex-col gap-3 lg:flex-row">
        <div className="flex flex-1 items-center gap-2 rounded-lg border border-border/60 bg-background/60 px-3">
          <IconSearch className="size-4 text-muted-foreground" />
          <Input
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search by part, system, or symptom"
            className="border-0 bg-transparent shadow-none focus-visible:ring-0"
          />
        </div>
        <div className="flex flex-1 items-center gap-2 rounded-lg border border-border/60 bg-background/60 px-3">
          <IconCar className="size-4 text-muted-foreground" />
          <Input
            value={vin}
            onChange={(event) => onVinChange(event.target.value.toUpperCase())}
            placeholder="VIN (17 characters)"
            maxLength={17}
            className="border-0 bg-transparent uppercase shadow-none focus-visible:ring-0"
          />
        </div>
        <Button type="submit" className="h-11 lg:w-36">
          Match
        </Button>
      </div>
    </form>
  );
}
