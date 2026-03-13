import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PartsGrid } from "@/components/catalog/parts-grid";
import { Badge } from "@/components/ui/badge";
import { buildWhatsAppLink } from "@/lib/config";
import { getCarBySlug, listCatalogParts } from "@/lib/services/catalog";

type CarPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: CarPageProps): Promise<Metadata> {
  const { slug } = await params;
  const car = await getCarBySlug(slug);

  if (!car) {
    return {
      title: "Автомобиль не найден | Chinalending",
    };
  }

  return {
    title: `${car.fullName} — каталог запчастей | Chinalending`,
    description: `Совместимые запчасти для ${car.fullName}. Заказ через WhatsApp с доставкой по Казахстану.`,
  };
}

export default async function CarPage({ params }: CarPageProps) {
  const { slug } = await params;

  const [car, parts] = await Promise.all([getCarBySlug(slug), listCatalogParts({ carSlug: slug })]);

  if (!car) {
    notFound();
  }

  const message = [
    "Здравствуйте.",
    "",
    `Мне нужны совместимые запчасти для: ${car.fullName}.`,
    "Помогите подобрать доступные варианты.",
  ].join("\n");

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-10">
      <div className="space-y-3">
        <Link href="/catalog" className="text-sm text-muted-foreground hover:text-foreground">
          ← Назад в каталог
        </Link>
        <h1 className="text-2xl font-semibold sm:text-3xl">{car.fullName}</h1>
        <div className="flex items-center gap-2">
          <Badge variant="outline">Бренд: {car.brandName}</Badge>
          <Badge variant="secondary">{parts.length} совместимых запчастей</Badge>
        </div>
      </div>

      <div className="rounded-xl border border-border/60 bg-card/70 p-4 text-sm text-muted-foreground">
        VIN-поиск может привести на эту страницу. Если вашей модификации нет в списке, отправьте VIN в WhatsApp.
        <a href={buildWhatsAppLink(message)} target="_blank" rel="noreferrer" className="ml-1 underline underline-offset-4">
          Написать в WhatsApp
        </a>
      </div>

      {parts.length ? (
        <PartsGrid parts={parts} />
      ) : (
        <div className="rounded-xl border border-dashed border-border/70 p-8 text-center text-sm text-muted-foreground">
          Совместимые запчасти пока не добавлены.
        </div>
      )}
    </div>
  );
}
