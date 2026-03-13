import Image from "next/image";
import { IconGauge, IconLayersIntersect } from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PartItem } from "./part-data";

type PartsGridProps = {
  parts: PartItem[];
};

export function PartsGrid({ parts }: PartsGridProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {parts.map((part) => (
        <Card key={part.id} className="overflow-hidden border-border/50 bg-card/90 shadow-md transition-shadow hover:shadow-lg">
          <div className="relative h-40 w-full overflow-hidden">
            <Image
              src={part.image}
              alt={part.name}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <CardHeader className="space-y-2 pb-2">
            <div className="flex items-center justify-between text-xs uppercase tracking-wider text-muted-foreground">
              <span>{part.brand}</span>
              <span>{part.model}</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="uppercase tracking-wide">
                {part.category}
              </Badge>
              <Badge variant="outline">{part.offers} offers</Badge>
            </div>
            <CardTitle className="text-xl">{part.name}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p className="flex items-center gap-2">
              <IconGauge className="size-4" />
              {part.vin}
            </p>
            <p className="flex items-center gap-2 text-xs uppercase tracking-wide">
              <IconLayersIntersect className="size-4" /> OEM verified • Ready to ship
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
