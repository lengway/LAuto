"use client";

import { useId, useState } from "react";

import { Button } from "@/components/ui/button";

type FileUploadInputProps = {
  name: string;
  accept?: string;
  className?: string;
  buttonLabel?: string;
  emptyText?: string;
  multiple?: boolean;
};

export function FileUploadInput({
  name,
  accept = "image/*",
  className,
  buttonLabel = "Выбрать файл",
  emptyText = "Файл не выбран",
  multiple = false,
}: FileUploadInputProps) {
  const inputId = useId();
  const [fileLabel, setFileLabel] = useState("");

  return (
    <div className={className}>
      <input
        id={inputId}
        type="file"
        name={name}
        accept={accept}
        multiple={multiple}
        className="hidden"
        onChange={(event) => {
          const files = Array.from(event.target.files ?? []);

          if (!files.length) {
            setFileLabel("");
            return;
          }

          if (files.length === 1) {
            setFileLabel(files[0]!.name);
            return;
          }

          setFileLabel(`Выбрано файлов: ${files.length}`);
        }}
      />

      <div className="flex h-9 items-center gap-2 rounded-md border border-border/60 bg-background px-2">
        <Button asChild type="button" size="sm" variant="outline" className="h-7 px-2 text-xs">
          <label htmlFor={inputId} className="cursor-pointer">
            {buttonLabel}
          </label>
        </Button>
        <span className="truncate text-xs text-muted-foreground">{fileLabel || emptyText}</span>
      </div>
    </div>
  );
}
