"use client";

import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type CarModelChipsInputProps = {
  name: string;
  options: string[];
  defaultValue?: string;
  placeholder?: string;
  className?: string;
};

function parseInitialValue(value: string | undefined): string[] {
  if (!value) {
    return [];
  }

  return Array.from(
    new Set(
      value
        .split(",")
        .map((entry) => entry.trim())
        .filter(Boolean)
    )
  );
}

export function CarModelChipsInput({
  name,
  options,
  defaultValue,
  placeholder,
  className,
}: CarModelChipsInputProps) {
  const [selected, setSelected] = useState<string[]>(() => parseInitialValue(defaultValue));
  const [query, setQuery] = useState("");

  const normalizedSelected = useMemo(
    () => new Set(selected.map((entry) => entry.toLowerCase())),
    [selected]
  );

  const suggestions = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return [];
    }

    return options
      .filter((option) => {
        const normalized = option.toLowerCase();
        return normalized.includes(normalizedQuery) && !normalizedSelected.has(normalized);
      })
      .slice(0, 8);
  }, [options, query, normalizedSelected]);

  function addValue(rawValue: string) {
    const value = rawValue.trim();
    if (!value) {
      return;
    }

    const key = value.toLowerCase();
    if (normalizedSelected.has(key)) {
      setQuery("");
      return;
    }

    setSelected((prev) => [...prev, value]);
    setQuery("");
  }

  function removeValue(value: string) {
    const target = value.toLowerCase();
    setSelected((prev) => prev.filter((entry) => entry.toLowerCase() !== target));
  }

  return (
    <div className={`min-w-0 space-y-2 sm:col-span-2 lg:col-span-3 ${className ?? ""}`}>
      <input type="hidden" name={name} value={selected.join(", ")} />

      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === ",") {
            event.preventDefault();
            addValue(query);
          }
        }}
        placeholder={placeholder}
        className="h-9 w-full rounded-md border border-border/60 bg-background px-3 text-sm"
      />

      {suggestions.length ? (
        <div className="max-h-36 overflow-y-auto rounded-md border border-border/60 bg-background p-2">
          <div className="flex flex-wrap gap-1">
          {suggestions.map((suggestion) => (
            <Button
              key={suggestion}
              type="button"
              size="sm"
              variant="outline"
              className="h-auto max-w-full px-2 py-1 text-left text-xs whitespace-normal wrap-break-word"
              onClick={() => addValue(suggestion)}
            >
              {suggestion}
            </Button>
          ))}
          </div>
        </div>
      ) : null}

      {selected.length ? (
        <div className="flex flex-wrap gap-2 overflow-hidden">
          {selected.map((value) => (
            <Badge key={value} variant="secondary" className="max-w-full gap-2 py-1">
              <span className="max-w-full whitespace-normal wrap-break-word">{value}</span>
              <button type="button" onClick={() => removeValue(value)} className="text-xs">
                ×
              </button>
            </Badge>
          ))}
        </div>
      ) : null}
    </div>
  );
}
