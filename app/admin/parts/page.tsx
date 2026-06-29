import type { Metadata } from "next";
import Image from "next/image";

import { CarModelChipsInput } from "@/components/admin/car-model-chips-input";
import { CategorySelectWithCreate } from "@/components/admin/category-select-with-create";
import { FileUploadInput } from "@/components/admin/file-upload-input";
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
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Управление запчастями | Chinalending",
};

export default async function AdminPartsPage() {
  const [parts, categories, models] = await Promise.all([
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

          <CategorySelectWithCreate categories={categories} />

          <input name="priceFrom" placeholder="Цена" type="number" min={0} className="h-9 rounded-md border border-border/60 bg-background px-3 text-sm" />

          <textarea
            name="imageUrls"
            placeholder="Ссылки на фото (по одной на строку)"
            rows={3}
            className="rounded-md border border-border/60 bg-background px-3 py-2 text-sm sm:col-span-2"
          />

          <textarea
            name="description"
            placeholder="Описание в Markdown (опционально)"
            rows={5}
            className="rounded-md border border-border/60 bg-background px-3 py-2 text-sm sm:col-span-2"
          />

          <select name="inStock" defaultValue="true" className="h-9 rounded-md border border-border/60 bg-background px-3 text-sm">
            <option value="true">В наличии</option>
            <option value="false">Нет в наличии</option>
          </select>

          <CarModelChipsInput
            name="compatibleCarModels"
            options={models.map((model) => model.fullName)}
            placeholder="Введите модель, выберите из подсказок и добавьте"
          />

          <FileUploadInput name="images" multiple className="sm:col-span-2 lg:col-span-3" emptyText="Фото не выбраны" />

          <Button type="submit" className="sm:w-fit">
            Создать
          </Button>
        </form>
      </section>

      <section className="rounded-xl border border-border/60 p-4">
        <h2 className="mb-3 text-lg font-semibold">Таблица запчастей</h2>

        <div data-slot="table-container" className="relative w-full overflow-x-auto">
          <table data-slot="table" className="w-full caption-bottom text-sm">
            <thead data-slot="table-header" className="[&_tr]:border-b">
              <tr data-slot="table-row" className="hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors">
                <th data-slot="table-head" className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap">Название</th>
                <th data-slot="table-head" className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap">Фото</th>
                <th data-slot="table-head" className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap">Категория</th>
                <th data-slot="table-head" className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap">Совместимые модели</th>
                <th data-slot="table-head" className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap">Цена</th>
                <th data-slot="table-head" className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap">Наличие</th>
                <th data-slot="table-head" className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap">Действия</th>
              </tr>
            </thead>
            <tbody data-slot="table-body" className="[&_tr:last-child]:border-0">
              {parts.map((part) => (
                <tr key={part.id} data-slot="table-row" className="hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors">
                  <td data-slot="table-cell" className="p-2 align-middle max-w-52 whitespace-normal wrap-break-word">{part.title}</td>
                  <td data-slot="table-cell" className="p-2 align-middle">
                  {part.imageUrl ? (
                    part.imageUrl.startsWith("/") ? (
                      <Image src={part.imageUrl} alt={part.title} width={40} height={40} className="h-10 w-10 rounded-md object-cover" />
                    ) : (
                      <img src={part.imageUrl} alt={part.title} className="h-10 w-10 rounded-md object-cover" />
                    )
                  ) : (
                    <span className="text-xs text-muted-foreground">Нет</span>
                  )}
                  </td>
                  <td data-slot="table-cell" className="p-2 align-middle">{part.categoryName}</td>
                  <td data-slot="table-cell" className="p-2 align-middle max-w-72 whitespace-normal text-xs text-muted-foreground">
                  {part.compatibleCars.length ? part.compatibleCars.join(", ") : "-"}
                  </td>
                  <td data-slot="table-cell" className="p-2 align-middle">{part.priceFrom ? `${part.priceFrom.toLocaleString()} ₸` : "-"}</td>
                  <td data-slot="table-cell" className="p-2 align-middle">{part.inStock ? "В наличии" : "Нет"}</td>
                  <td data-slot="table-cell" className="p-2 align-middle">
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

                            <CategorySelectWithCreate
                              categories={categories}
                              defaultSelection={[{ id: part.categoryId, name: part.categoryName }]}
                            />

                            <CarModelChipsInput
                              name="compatibleCarModels"
                              defaultValue={part.compatibleCars.join(", ")}
                              options={models.map((model) => model.fullName)}
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
                            </div>

                            <textarea
                              name="description"
                              defaultValue={part.description ?? ""}
                              placeholder="Описание в Markdown (опционально)"
                              rows={6}
                              className="rounded-md border border-border/60 bg-background px-3 py-2 text-sm sm:col-span-2"
                            />

                            <textarea
                              name="imageUrls"
                              defaultValue={part.imageUrls.join("\n")}
                              placeholder="Ссылки на фото (по одной на строку)"
                              rows={4}
                              className="rounded-md border border-border/60 bg-background px-3 py-2 text-sm sm:col-span-2"
                            />

                            <FileUploadInput name="images" multiple className="sm:col-span-2" emptyText="Фото не выбраны" />

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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
