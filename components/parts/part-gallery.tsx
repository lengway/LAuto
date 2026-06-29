"use client";

import { useMemo, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type PartGalleryProps = {
  title: string;
  imageUrls: string[];
};

export function PartGallery({ title, imageUrls }: PartGalleryProps) {
  const images = useMemo(() => Array.from(new Set(imageUrls.filter(Boolean))), [imageUrls]);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images.length) {
    return <div className="min-h-72 rounded-xl border border-border/60 bg-muted/40" />;
  }

  const showArrows = images.length > 1;

  const handlePrev = () => {
    setActiveIndex((value) => (value - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setActiveIndex((value) => (value + 1) % images.length);
  };

  return (
    <div className="space-y-3">
      <Dialog>
        <DialogTrigger asChild>
          <button type="button" className="relative block w-full overflow-hidden rounded-xl border border-border/60 bg-muted/40">
            <img src={images[activeIndex]} alt={title} className="h-72 w-full object-cover sm:h-[26rem]" />
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-5xl p-3 sm:p-4">
          <DialogTitle className="sr-only">{title}</DialogTitle>
          <div className="relative">
            <img src={images[activeIndex]} alt={title} className="max-h-[80vh] w-full rounded-md object-contain" />

            {showArrows ? (
              <>
                <Button
                  type="button"
                  size="icon"
                  variant="secondary"
                  className="absolute top-1/2 left-2 -translate-y-1/2"
                  onClick={handlePrev}
                >
                  ←
                </Button>
                <Button
                  type="button"
                  size="icon"
                  variant="secondary"
                  className="absolute top-1/2 right-2 -translate-y-1/2"
                  onClick={handleNext}
                >
                  →
                </Button>
              </>
            ) : null}
          </div>
        </DialogContent>
      </Dialog>

      {images.length > 1 ? (
        <div className="grid grid-cols-4 gap-2 sm:grid-cols-5">
          {images.map((url, index) => (
            <button
              key={`${url}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`overflow-hidden rounded-md border ${index === activeIndex ? "border-foreground" : "border-border/60"}`}
            >
              <img src={url} alt={`${title} ${index + 1}`} className="h-16 w-full object-cover" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}