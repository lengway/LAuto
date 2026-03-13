import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buildWhatsAppLink } from "@/lib/config";
import { listCatalogCars, listCatalogCategories } from "@/lib/services/catalog";

export default async function HomePage() {
  const [categories, cars] = await Promise.all([
    listCatalogCategories(),
    listCatalogCars(),
  ]);

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
          <p className="text-sm text-muted-foreground sm:text-base">
            Подбор оригинальных и аналоговых деталей для Chery, Geely, Haval, Changan, JAC и других брендов с доставкой по всему Казахстану.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Button asChild size="lg" className="sm:min-w-48">
            <Link href="/catalog">Открыть каталог</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="sm:min-w-48">
            <a
              href={buildWhatsAppLink("Здравствуйте! Нужна помощь с подбором запчастей.")}
              target="_blank"
              rel="noreferrer"
            >
              Написать в WhatsApp
            </a>
          </Button>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Поиск по VIN</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>Введите VIN, получите подходящую модель и список совместимых запчастей.</p>
            <Button asChild variant="outline" size="sm">
              <Link href="/vin-search">Перейти к VIN-поиску</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Как оформить заказ</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>1. Найдите деталь по OEM, бренду или модели</p>
            <p>2. Добавьте нужные позиции в корзину</p>
            <p>3. Отправьте заказ одним сообщением в WhatsApp</p>
          </CardContent>
        </Card>
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
        <h2 className="text-xl font-semibold">Популярные категории</h2>
        <div className="flex flex-wrap gap-2">
          {categories.slice(0, 8).map((category) => (
            <Link key={category.id} href={`/catalog/${category.slug}`}>
              <Badge variant="outline" className="py-1">
                {category.name}
              </Badge>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Популярные модели</h2>
        <div className="flex flex-wrap gap-2">
          {cars.slice(0, 8).map((car) => (
            <Link key={car.id} href={`/car/${car.slug}`}>
              <Badge variant="secondary" className="py-1">
                {car.fullName}
              </Badge>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-border/60 bg-card/80 p-5 sm:p-7">
        <h3 className="text-lg font-semibold">Почему выбирают Chinalending</h3>
        <ul className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
          <li>• Быстрый подбор по VIN и OEM в одном окне</li>
          <li>• Понятный каталог с фильтрами по цене, бренду и наличию</li>
          <li>• Консультация менеджера по совместимости и срокам</li>
          <li>• Заказ без регистрации — сразу через WhatsApp</li>
        </ul>
      </section>

      <section className="rounded-xl border border-border/60 bg-card/80 p-5 text-center sm:p-7">
        <h3 className="text-lg font-semibold">Нужна помощь менеджера прямо сейчас?</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Отправьте VIN и OEM-номера, мы уточним цену, наличие и варианты доставки.
        </p>
        <Button asChild className="mt-4" size="lg">
          <a
            href={buildWhatsAppLink("Здравствуйте! Проверьте, пожалуйста, наличие и цену по моему VIN.")}
            target="_blank"
            rel="noreferrer"
          >
            Связаться в WhatsApp
          </a>
        </Button>
      </section>
    </div>
  );
}
