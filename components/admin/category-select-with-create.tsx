"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

type CategoryOption = {
  id: string;
  name: string;
};

type CategorySelectWithCreateProps = {
  categories: CategoryOption[];
  categoryIdName?: string;
  newCategoryName?: string;
  defaultCategoryId?: string;
  selectPlaceholder?: string;
  newCategoryPlaceholder?: string;
  className?: string;
};

export function CategorySelectWithCreate({
  categories,
  categoryIdName = "categoryId",
  newCategoryName = "newCategoryName",
  defaultCategoryId = "",
  selectPlaceholder = "Выберите категорию",
  newCategoryPlaceholder = "Новая категория",
  className,
}: CategorySelectWithCreateProps) {
  const [isCreatingNew, setIsCreatingNew] = useState(false);

  return (
    <div className={className}>
      <div className="flex gap-2">
        <select
          name={categoryIdName}
          defaultValue={defaultCategoryId}
          required={!isCreatingNew}
          disabled={isCreatingNew}
          className="h-9 flex-1 rounded-md border border-border/60 bg-background px-3 text-sm"
        >
          <option value="">{selectPlaceholder}</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => setIsCreatingNew((value) => !value)}
          className="h-9"
        >
          {isCreatingNew ? "Отмена" : "Новая категория"}
        </Button>
      </div>

      {isCreatingNew ? (
        <input
          name={newCategoryName}
          required
          placeholder={newCategoryPlaceholder}
          className="mt-2 h-9 w-full rounded-md border border-border/60 bg-background px-3 text-sm"
        />
      ) : (
        <input type="hidden" name={newCategoryName} value="" />
      )}
    </div>
  );
}
