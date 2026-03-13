import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AddToCartButton } from "@/components/cart/add-to-cart-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/config";
import { getPartBySlug } from "@/lib/services/catalog";

type PartPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: PartPageProps): Promise<Metadata> {
  const { slug } = await params;
  const part = await getPartBySlug(slug);

  if (!part) {
    return {
      title: "Запчасть не найдена | Chinalending",
    };
  }

  const primaryCar = part.compatibleCars[0]?.fullName ?? "китайские автомобили";

  return {
    title: `${part.title} ${primaryCar} — купить в Казахстане`,
    description: `OEM ${part.oemNumber}. Совместимость: ${part.compatibleCars.map((car) => car.fullName).join(", ") || "уточняйте у менеджера"}. Заказ через WhatsApp с доставкой по Казахстану.`,
  };
}

export default async function PartPage({ params }: PartPageProps) {
  const { slug } = await params;
  const part = await getPartBySlug(slug);

  if (!part) {
    notFound();
  }

  const message = [
    "Здравствуйте.",
    "",
    "Меня интересует следующая запчасть:",
    `${part.title}`,
    `OEM: ${part.oemNumber}`,
    part.compatibleCars.length
      ? `Совместимость: ${part.compatibleCars.map((car) => car.fullName).join(", ")}`
      : "",
    "",
    "Пожалуйста, подтвердите цену и наличие.",
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-10">
      <Link href="/catalog" className="text-sm text-muted-foreground hover:text-foreground">
        ← Назад в каталог
      </Link>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="relative min-h-72 overflow-hidden rounded-xl border border-border/60 bg-muted/40">
          {part.imageUrl ? (
            <Image src={part.imageUrl} alt={part.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          ) : null}
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Badge variant="secondary">{part.category.name}</Badge>
            <Badge variant={part.inStock ? "outline" : "destructive"}>{part.inStock ? "В наличии" : "Нет в наличии"}</Badge>
          </div>

          <h1 className="text-2xl font-semibold sm:text-3xl">{part.title}</h1>
          <p className="text-sm text-muted-foreground">OEM: {part.oemNumber}</p>

          {part.description ? <p className="text-sm text-muted-foreground">{part.description}</p> : null}

          {part.priceFrom ? <p className="text-lg font-semibold">От {part.priceFrom.toLocaleString()} ₸</p> : null}

          <div className="space-y-2 rounded-xl border border-border/60 p-4">
            <p className="text-sm font-medium">Совместимые автомобили</p>
            <div className="flex flex-wrap gap-2">
              {part.compatibleCars.length ? (
                part.compatibleCars.map((car) => (
                  <Link key={car.slug} href={`/car/${car.slug}`}>
                    <Badge variant="outline">{car.fullName}</Badge>
                  </Link>
                ))
              ) : (
                <span className="text-sm text-muted-foreground">Уточните совместимость у менеджера по VIN.</span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <AddToCartButton
              size="lg"
              className="sm:min-w-44"
              part={{
                partId: part.id,
                title: part.title,
                slug: part.slug,
                oemNumber: part.oemNumber,
                compatibleCars: part.compatibleCars.map((car) => car.fullName),
                image: part.imageUrl,
              }}
            />
            <Button size="lg" variant="outline" asChild>
              <a href={buildWhatsAppLink(message)} target="_blank" rel="noreferrer">
                Отправить в WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
