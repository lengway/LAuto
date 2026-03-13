"use client";

import { useState } from "react";
import { IconSearch } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function BrandSearchBar() {
  const [query, setQuery] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: wire up to server actions / search params
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 rounded-xl border border-border/60 bg-card/80 p-4 shadow-sm sm:flex-row"
    >
      <div className="flex-1">
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by brand, model, or trim"
          className="h-12"
        />
      </div>
      <Button type="submit" className="h-12 gap-2">
        <IconSearch className="size-4" />
        Search
      </Button>
    </form>
  );
}
