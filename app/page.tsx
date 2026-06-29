import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buildWhatsAppLink } from "@/lib/config";
import { listCatalogCars } from "@/lib/services/catalog";
import { getPublicSiteSettings } from "@/lib/services/site-settings";

export default async function HomePage() {
  const [cars, settings] = await Promise.all([listCatalogCars(), getPublicSiteSettings()]);

  const randomCars = [...cars]
    .sort(() => Math.random() - 0.5)
    .slice(0, 6);

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-10">
      <section className="space-y-5 rounded-2xl border border-primary/20 bg-linear-to-br from-primary/5 via-background to-background p-5 sm:p-8">
        <Badge variant="outline" className="w-fit uppercase tracking-wider">
          Chinalending
        </Badge>
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Каталог запчастей для китайских авто с быстрым подбором по VIN
          </h1>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Button asChild size="lg" className="sm:min-w-48">
            <Link href="/catalog">Открыть каталог</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="sm:min-w-48">
            <a
              href={buildWhatsAppLink("Здравствуйте! Нужна помощь с подбором запчастей.", settings.orderWhatsAppPhone)}
              target="_blank"
              rel="noreferrer"
            >
              Написать в WhatsApp
            </a>
          </Button>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">OEM и аналоги</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Подбираем оригинальные номера и качественные замены по вашему бюджету.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Проверка совместимости</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Учитываем поколение, модификацию и год выпуска по VIN и каталожным данным.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Оперативная логистика</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Отправка по городам Казахстана, прозрачные сроки и сопровождение заказа.
          </CardContent>
        </Card>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Популярные модели</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {randomCars.map((car) => (
            <Link
              key={car.id}
              href={`/catalog?brand=${encodeURIComponent(car.brandSlug)}&car=${encodeURIComponent(car.slug)}`}
            >
              <Card className="h-full border-border/60 bg-card/90 transition-colors hover:border-primary/60">
                <CardHeader>
                  <CardTitle className="text-base">{car.fullName}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex h-24 items-center justify-center rounded-lg border border-dashed border-border/70 bg-muted/40 text-xs text-muted-foreground">
                    PNG модели: /public/placeholders/models/{car.slug}.png
                  </div>
                  <p className="text-xs text-muted-foreground">Нажмите, чтобы открыть детали</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-border/60 bg-card/80 p-5 text-center sm:p-7">
        <h3 className="text-lg font-semibold">Нужна помощь менеджера прямо сейчас?</h3>
        <Button asChild className="mt-4" size="lg">
          <a
            href={buildWhatsAppLink("Здравствуйте! Проверьте, пожалуйста, наличие и цену по моему VIN.", settings.orderWhatsAppPhone)}
            target="_blank"
            rel="noreferrer"
          >
            Связаться в WhatsApp
          </a>
        </Button>
      </section>

      <section className="grid gap-4 rounded-xl border border-border/60 bg-card/80 p-5 sm:grid-cols-2 sm:p-7">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Контакты</h3>
          {settings.displayPhones.length ? (
            settings.displayPhones.map((phone, index) => (
              <p key={`${phone}-${index}`} className="text-sm text-muted-foreground">
                {phone}
              </p>
            ))
          ) : (
            <p className="text-sm text-muted-foreground">—</p>
          )}
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Карта</h3>
          {settings.mapIframeHtml ? (
            <div
              className="overflow-hidden rounded-lg border border-border/70 [&_iframe]:h-64 [&_iframe]:w-full [&_iframe]:border-0"
              dangerouslySetInnerHTML={{ __html: settings.mapIframeHtml }}
            />
          ) : (
            <div className="min-h-40 rounded-lg border border-dashed border-border/70" />
          )}
        </div>
      </section>
    </div>
  );
}
