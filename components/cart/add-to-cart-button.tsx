"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart/cart-provider";

type AddToCartButtonProps = {
  part: {
    partId: string;
    title: string;
    slug: string;
    oemNumber: string;
    compatibleCars: string[];
    image: string | null;
  };
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
};

export function AddToCartButton({ part, className, size = "sm" }: AddToCartButtonProps) {
  const { addItem } = useCart();

  return (
    <Button
      size={size}
      className={className}
      onClick={() => {
        addItem(part);
      }}
      aria-label={`Добавить ${part.title} в корзину`}
    >
      В корзину
    </Button>
  );
}
