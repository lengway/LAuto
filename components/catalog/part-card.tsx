import Image from "next/image";
import Link from "next/link";

import { AddToCartButton } from "@/components/cart/add-to-cart-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { CatalogPart } from "@/lib/services/catalog";

type PartCardProps = {
  part: CatalogPart;
};

export function PartCard({ part }: PartCardProps) {
  return (
    <Card className="overflow-hidden border-border/60 bg-card/90 shadow-sm">
      <div className="relative h-36 w-full bg-muted/40">
        {part.imageUrl ? (
          <Image
            src={part.imageUrl}
            alt={part.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        ) : null}
      </div>

      <CardHeader className="space-y-2 pb-2">
        <div className="flex items-center justify-between gap-2 text-xs">
          <Badge variant="secondary" className="uppercase tracking-wide">
            {part.category.name}
          </Badge>
          <Badge variant={part.inStock ? "outline" : "destructive"}>
            {part.inStock ? "В наличии" : "Нет в наличии"}
          </Badge>
        </div>

        <CardTitle className="line-clamp-2 text-base">{part.title}</CardTitle>

        <p className="text-xs text-muted-foreground">OEM: {part.oemNumber}</p>
      </CardHeader>

      <CardContent className="space-y-2 text-xs text-muted-foreground">
        <p className="line-clamp-2">
          {part.compatibleCars.length
            ? part.compatibleCars.map((car) => car.fullName).join(", ")
            : "Совместимость уточнит менеджер"}
        </p>
        {part.priceFrom ? <p className="font-medium text-foreground">От {part.priceFrom.toLocaleString()} ₸</p> : null}
      </CardContent>

      <CardFooter className="grid grid-cols-2 gap-2">
        <Button asChild variant="outline" size="sm" className="w-full">
          <Link href={`/part/${part.slug}`}>Открыть</Link>
        </Button>
        <AddToCartButton
          size="sm"
          className="w-full"
          part={{
            partId: part.id,
            title: part.title,
            slug: part.slug,
            oemNumber: part.oemNumber,
            compatibleCars: part.compatibleCars.map((car) => car.fullName),
            image: part.imageUrl,
          }}
        />
      </CardFooter>
    </Card>
  );
}
