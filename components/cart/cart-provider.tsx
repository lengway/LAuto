"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { CART_STORAGE_KEY, type CartItem } from "@/lib/cart";

type AddItemInput = Omit<CartItem, "quantity"> & {
  quantity?: number;
};

type CartContextValue = {
  items: CartItem[];
  totalItems: number;
  addItem: (item: AddItemInput) => void;
  removeItem: (partId: string) => void;
  setQuantity: (partId: string, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

function mergeItem(existing: CartItem, incoming: AddItemInput): CartItem {
  return {
    ...existing,
    title: incoming.title,
    slug: incoming.slug,
    oemNumber: incoming.oemNumber,
    compatibleCars: incoming.compatibleCars,
    image: incoming.image,
    quantity: existing.quantity + (incoming.quantity ?? 1),
  };
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    try {
      const raw = window.localStorage.getItem(CART_STORAGE_KEY);
      if (!raw) {
        return [];
      }

      const parsed = JSON.parse(raw) as CartItem[];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const value = useMemo<CartContextValue>(() => {
    return {
      items,
      totalItems: items.reduce((sum, item) => sum + item.quantity, 0),
      addItem: (incoming) => {
        setItems((prev) => {
          const existing = prev.find((item) => item.partId === incoming.partId);

          if (!existing) {
            return [
              ...prev,
              {
                ...incoming,
                quantity: incoming.quantity ?? 1,
              },
            ];
          }

          return prev.map((item) =>
            item.partId === incoming.partId ? mergeItem(item, incoming) : item
          );
        });
      },
      removeItem: (partId) => {
        setItems((prev) => prev.filter((item) => item.partId !== partId));
      },
      setQuantity: (partId, quantity) => {
        setItems((prev) => {
          if (quantity <= 0) {
            return prev.filter((item) => item.partId !== partId);
          }

          return prev.map((item) =>
            item.partId === partId
              ? {
                  ...item,
                  quantity,
                }
              : item
          );
        });
      },
      clearCart: () => {
        setItems([]);
      },
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
