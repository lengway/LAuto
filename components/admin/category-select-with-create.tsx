"use client";

import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";

type CategoryOption = {
  id: string;
  name: string;
};

type CategorySelectWithCreateProps = {
  categories: CategoryOption[];
  selectionName?: string;
  defaultSelection?: Array<{ id: string; name: string }>;
  selectPlaceholder?: string;
  className?: string;
};

export function CategorySelectWithCreate({
  categories,
  selectionName = "categorySelection",
  defaultSelection = [],
  selectPlaceholder = "Выберите категорию",
  className,
}: CategorySelectWithCreateProps) {
  type SelectedItem = {
    id: string;
    name: string;
    isNew: boolean;
  };

  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<SelectedItem[]>(() =>
    defaultSelection.map((item) => ({
      id: item.id,
      name: item.name,
      isNew: false,
    }))
  );
  const [isOpen, setIsOpen] = useState(false);

  const normalizedQuery = query.trim().toLowerCase();
  const selectedKeySet = useMemo(
    () => new Set(selected.map((item) => `${item.isNew ? "new" : "existing"}:${item.id || item.name.toLowerCase()}`)),
    [selected]
  );

  const filtered = useMemo(() => {
    if (!normalizedQuery) {
      return categories
        .filter((category) => !selected.some((item) => !item.isNew && item.id === category.id))
        .slice(0, 8);
    }

    return categories
      .filter(
        (category) =>
          category.name.toLowerCase().includes(normalizedQuery) &&
          !selected.some((item) => !item.isNew && item.id === category.id)
      )
      .slice(0, 8);
  }, [categories, normalizedQuery, selected]);

  const hasExact = useMemo(() => {
    if (!normalizedQuery) {
      return false;
    }

    return categories.some((category) => category.name.toLowerCase() === normalizedQuery);
  }, [categories, normalizedQuery]);

  return (
    <div className={className}>
      <input type="hidden" name={selectionName} value={JSON.stringify(selected)} />

      <div className="relative">
        <div className="flex h-9 items-center rounded-md border border-border/60 bg-background pl-3 pr-2 text-sm">
          <input
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            onBlur={() => {
              setTimeout(() => setIsOpen(false), 120);
            }}
            placeholder={selectPlaceholder}
            className="h-full flex-1 bg-transparent outline-none"
          />

          {selected.length ? (
            <div className="ml-2 flex max-w-[70%] items-center gap-1 overflow-x-auto">
              {selected.map((item) => (
                <Badge key={`${item.isNew ? "new" : "existing"}:${item.id || item.name}`} variant={item.isNew ? "secondary" : "outline"} className="shrink-0 gap-1">
                  <span className="max-w-36 truncate">{item.name}</span>
                  <button
                    type="button"
                    onClick={() => {
                      setSelected((prev) => prev.filter((entry) => !(entry.id === item.id && entry.name === item.name && entry.isNew === item.isNew)));
                    }}
                    className="text-xs"
                    aria-label="Убрать категорию"
                  >
                    ×
                  </button>
                </Badge>
              ))}
            </div>
          ) : null}
        </div>

        {isOpen && (filtered.length > 0 || (!!normalizedQuery && !hasExact)) ? (
          <div className="absolute z-20 mt-1 max-h-52 w-full overflow-y-auto rounded-md border border-border/60 bg-popover p-1 shadow-sm">
            {filtered.map((category) => (
              <button
                key={category.id}
                type="button"
                className="flex w-full items-center rounded-sm px-2 py-1.5 text-left text-sm hover:bg-accent"
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => {
                  const candidate: SelectedItem = {
                    id: category.id,
                    name: category.name,
                    isNew: false,
                  };
                  const key = `existing:${candidate.id}`;

                  if (!selectedKeySet.has(key)) {
                    setSelected((prev) => [...prev, candidate]);
                  }
                  setQuery("");
                  setIsOpen(false);
                }}
              >
                {category.name}
              </button>
            ))}

            {!!normalizedQuery && !hasExact ? (
              <button
                type="button"
                className="flex w-full items-center rounded-sm px-2 py-1.5 text-left text-sm hover:bg-accent"
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => {
                  const candidate: SelectedItem = {
                    id: "",
                    name: query.trim(),
                    isNew: true,
                  };
                  const key = `new:${candidate.name.toLowerCase()}`;

                  if (!selectedKeySet.has(key)) {
                    setSelected((prev) => [...prev, candidate]);
                  }
                  setQuery("");
                  setIsOpen(false);
                }}
              >
                Создать "{query.trim()}"
              </button>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
