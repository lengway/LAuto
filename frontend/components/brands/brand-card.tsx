import Image from "next/image";
import { IconFlag } from "@tabler/icons-react";

import { BrandCar } from "@/components/brands/brand-data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function BrandCard({ car }: { car: BrandCar }) {
  return (
    <Card className="overflow-hidden border-border/50 bg-card/90 shadow-md transition-shadow hover:shadow-lg">
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={car.image}
          alt={`${car.name} ${car.model}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <CardHeader className="pb-2">
        <Badge variant="secondary" className="w-fit uppercase tracking-wide">
          {car.name}
        </Badge>
        <CardTitle className="text-xl">
          {car.model}
          <span className="ml-2 text-base font-normal text-muted-foreground">
            {car.trim}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between text-sm text-muted-foreground">
        <div>
          <p>{car.year}</p>
          <p className="flex items-center gap-1">
            <IconFlag className="size-3.5" />
            {car.country}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">Trim</p>
          <p className="font-medium text-foreground">{car.trim}</p>
        </div>
      </CardContent>
    </Card>
  );
}
