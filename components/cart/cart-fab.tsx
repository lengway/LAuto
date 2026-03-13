"use client";

import Link from "next/link";

import { useCart } from "@/components/cart/cart-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { createWhatsAppOrderMessage } from "@/lib/cart";
import { buildWhatsAppLink } from "@/lib/config";

export function CartFab() {
  const { items, totalItems, removeItem, setQuantity, clearCart } = useCart();

  const message = createWhatsAppOrderMessage(items);
  const whatsappHref = buildWhatsAppLink(message);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="lg"
          className="fixed right-4 bottom-4 z-50 rounded-full shadow-lg"
          aria-label="Открыть корзину"
        >
          Корзина <span suppressHydrationWarning>{totalItems > 0 ? `(${totalItems})` : ""}</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="bottom" className="max-h-[85vh] overflow-hidden p-0">
        <SheetHeader className="border-b">
          <SheetTitle>Корзина</SheetTitle>
          <SheetDescription>
            Добавьте запчасти и отправьте заказ через WhatsApp.
          </SheetDescription>
        </SheetHeader>

        <div className="max-h-[58vh] space-y-3 overflow-y-auto p-4">
          {items.length ? (
            items.map((item) => (
              <div key={item.partId} className="space-y-2 rounded-xl border border-border/60 p-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className="text-xs text-muted-foreground">OEM: {item.oemNumber}</p>
                    {item.compatibleCars.length ? (
                      <p className="text-xs text-muted-foreground">{item.compatibleCars.join(", ")}</p>
                    ) : null}
                    <Link href={`/part/${item.slug}`} className="text-xs underline underline-offset-4">
                      Открыть страницу запчасти
                    </Link>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => removeItem(item.partId)}>
                    Удалить
                  </Button>
                </div>

                <div className="flex items-center gap-2">
                  <Badge variant="outline">Кол-во: {item.quantity}</Badge>
                  <Button size="sm" variant="outline" onClick={() => setQuantity(item.partId, item.quantity - 1)}>
                    -
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => setQuantity(item.partId, item.quantity + 1)}>
                    +
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-xl border border-dashed border-border/70 p-6 text-sm text-muted-foreground">
              Корзина пуста. Добавьте запчасти из каталога или карточки товара.
            </div>
          )}
        </div>

        <SheetFooter className="border-t bg-background/95">
          <div className="flex w-full flex-col gap-2 sm:flex-row">
            <Button variant="outline" onClick={clearCart} className="sm:flex-1" disabled={!items.length}>
              Очистить корзину
            </Button>
            <Button asChild className="sm:flex-1" disabled={!items.length}>
              <a href={whatsappHref} target="_blank" rel="noreferrer">
                Отправить заказ в WhatsApp
              </a>
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
