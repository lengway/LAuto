import type { Metadata } from "next";
import Image from "next/image";

import { CarModelChipsInput } from "@/components/admin/car-model-chips-input";
import { CategorySelectWithCreate } from "@/components/admin/category-select-with-create";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  createPartAction,
  deletePartAction,
  updatePartAction,
} from "@/lib/actions/admin-parts";
import {
  listAdminCarOptions,
  listAdminCategoryOptions,
  listAdminParts,
} from "@/lib/services/admin";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Управление запчастями | Chinalending",
};

export default async function AdminPartsPage() {
  const [parts, categories, cars] = await Promise.all([
    listAdminParts(),
    listAdminCategoryOptions(),
    listAdminCarOptions(),
  ]);

  return (
    <div className="space-y-6">
      <section className="rounded-xl border border-border/60 p-4">
        <h2 className="mb-3 text-lg font-semibold">Добавить запчасть</h2>

        <form action={createPartAction} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <input name="title" required placeholder="Название" className="h-9 rounded-md border border-border/60 bg-background px-3 text-sm" />
          <input name="oemNumber" required placeholder="OEM номер" className="h-9 rounded-md border border-border/60 bg-background px-3 text-sm" />

          <CategorySelectWithCreate categories={categories} />

          <input name="priceFrom" placeholder="Цена от" type="number" min={0} className="h-9 rounded-md border border-border/60 bg-background px-3 text-sm" />

          <select name="inStock" defaultValue="true" className="h-9 rounded-md border border-border/60 bg-background px-3 text-sm">
            <option value="true">В наличии</option>
            <option value="false">Нет в наличии</option>
          </select>

          <CarModelChipsInput
            name="compatibleCarModels"
            options={cars.map((car) => car.fullName)}
            placeholder="Введите модель, выберите из подсказок и добавьте"
          />

          <input
            type="file"
            name="image"
            accept="image/*"
            className="h-9 rounded-md border border-border/60 bg-background px-3 text-sm sm:col-span-2 lg:col-span-3"
          />

          <Button type="submit" className="sm:w-fit">
            Создать
          </Button>
        </form>

        <p className="mt-2 text-xs text-muted-foreground">
          Начните вводить модель, выберите из подсказок и она добавится чипом. Несколько моделей можно добавить подряд.
        </p>
      </section>

      <section className="rounded-xl border border-border/60 p-4">
        <h2 className="mb-3 text-lg font-semibold">Таблица запчастей</h2>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Название</TableHead>
              <TableHead>OEM</TableHead>
              <TableHead>Фото</TableHead>
              <TableHead>Категория</TableHead>
              <TableHead>Совместимые авто</TableHead>
              <TableHead>Цена</TableHead>
              <TableHead>Наличие</TableHead>
              <TableHead>Действия</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {parts.map((part) => (
              <TableRow key={part.id}>
                <TableCell>{part.title}</TableCell>
                <TableCell>{part.oemNumber}</TableCell>
                <TableCell>
                  {part.imageUrl ? (
                    part.imageUrl.startsWith("/") ? (
                      <Image src={part.imageUrl} alt={part.title} width={40} height={40} className="h-10 w-10 rounded-md object-cover" />
                    ) : (
                      <img src={part.imageUrl} alt={part.title} className="h-10 w-10 rounded-md object-cover" />
                    )
                  ) : (
                    <span className="text-xs text-muted-foreground">Нет</span>
                  )}
                </TableCell>
                <TableCell>{part.categoryName}</TableCell>
                <TableCell className="max-w-72 whitespace-normal text-xs text-muted-foreground">
                  {part.compatibleCars.length ? part.compatibleCars.join(", ") : "-"}
                </TableCell>
                <TableCell>{part.priceFrom ? `${part.priceFrom.toLocaleString()} ₸` : "-"}</TableCell>
                <TableCell>{part.inStock ? "В наличии" : "Нет"}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" variant="outline">
                          Изменить
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>Редактирование запчасти</DialogTitle>
                          <DialogDescription>
                            Обновите данные, при необходимости добавьте новую фотографию.
                          </DialogDescription>
                        </DialogHeader>

                        <form action={updatePartAction} className="grid gap-3 sm:grid-cols-2">
                          <input type="hidden" name="partId" value={part.id} />
                          <input
                            name="title"
                            defaultValue={part.title}
                            required
                            className="h-9 rounded-md border border-border/60 bg-background px-3 text-sm sm:col-span-2"
                          />
                          <input
                            name="oemNumber"
                            defaultValue={part.oemNumber}
                            required
                            className="h-9 rounded-md border border-border/60 bg-background px-3 text-sm"
                          />
                          <CategorySelectWithCreate categories={categories} defaultCategoryId={part.categoryId} />
                          <CarModelChipsInput
                            name="compatibleCarModels"
                            defaultValue={part.compatibleCars.join(", ")}
                            options={cars.map((car) => car.fullName)}
                            placeholder="Добавьте совместимые модели"
                            className="sm:col-span-2"
                          />

                          <div className="grid gap-3 sm:col-span-2 sm:grid-cols-3">
                            <input
                              type="number"
                              name="priceFrom"
                              min={0}
                              defaultValue={part.priceFrom ?? ""}
                              placeholder="Цена"
                              className="h-9 rounded-md border border-border/60 bg-background px-3 text-sm"
                            />
                            <select
                              name="inStock"
                              defaultValue={part.inStock ? "true" : "false"}
                              className="h-9 rounded-md border border-border/60 bg-background px-3 text-sm"
                            >
                              <option value="true">В наличии</option>
                              <option value="false">Нет в наличии</option>
                            </select>
                            <div className="flex h-9 items-center gap-2 rounded-md border border-border/60 px-2">
                              {part.imageUrl ? (
                                part.imageUrl.startsWith("/") ? (
                                  <Image src={part.imageUrl} alt={part.title} width={28} height={28} className="h-7 w-7 rounded object-cover" />
                                ) : (
                                  <img src={part.imageUrl} alt={part.title} className="h-7 w-7 rounded object-cover" />
                                )
                              ) : (
                                <span className="text-xs text-muted-foreground">Без фото</span>
                              )}
                              <span className="truncate text-xs text-muted-foreground">Миниатюра</span>
                            </div>
                          </div>

                          <input
                            type="file"
                            name="image"
                            accept="image/*"
                            className="h-9 rounded-md border border-border/60 bg-background px-3 text-sm sm:col-span-2"
                          />

                          <Button type="submit" size="sm" className="w-fit sm:col-span-2">
                            Сохранить
                          </Button>
                        </form>
                      </DialogContent>
                    </Dialog>

                    <form action={deletePartAction}>
                      <input type="hidden" name="partId" value={part.id} />
                      <Button type="submit" size="sm" variant="destructive">
                        Удалить
                      </Button>
                    </form>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </div>
  );
}
