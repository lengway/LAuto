import type { Metadata } from "next";

import {
  createModelAction,
  deleteModelAction,
  updateModelAction,
} from "@/lib/actions/admin-models";
import { FileUploadInput } from "@/components/admin/file-upload-input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  listAdminBrandOptions,
  listAdminModels,
} from "@/lib/services/admin";

export const metadata: Metadata = {
  title: "Модели | Админка Chinalending",
};

export default async function AdminModelsPage() {
  const [models, brands] = await Promise.all([
    listAdminModels(),
    listAdminBrandOptions(),
  ]);

  return (
    <div className="space-y-6">
      <section className="rounded-xl border border-border/60 p-4">
        <h2 className="mb-3 text-lg font-semibold">Добавить модель</h2>

        <form action={createModelAction} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <select
            name="brandId"
            required
            defaultValue=""
            className="h-9 rounded-md border border-border/60 bg-background px-3 text-sm"
          >
            <option value="" disabled>
              Выберите марку
            </option>
            {brands.map((brand) => (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            ))}
          </select>
          <input
            name="model"
            required
            placeholder="Название модели"
            className="h-9 rounded-md border border-border/60 bg-background px-3 text-sm"
          />
          <input
            name="imageUrl"
            placeholder="Image URL (опционально)"
            className="h-9 rounded-md border border-border/60 bg-background px-3 text-sm"
          />
          <FileUploadInput name="image" />
          <input
            name="description"
            placeholder="Описание (опционально)"
            className="h-9 rounded-md border border-border/60 bg-background px-3 text-sm"
          />
          <Button type="submit" className="sm:w-fit">
            Создать
          </Button>
        </form>
      </section>

      <section className="rounded-xl border border-border/60 p-4">
        <h2 className="mb-3 text-lg font-semibold">Список моделей</h2>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Марка</TableHead>
              <TableHead>Модель</TableHead>
              <TableHead>Описание</TableHead>
              <TableHead>Image URL</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead>Действия</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {models.map((model) => (
              <TableRow key={model.id}>
                <TableCell>{model.brandName}</TableCell>
                <TableCell>{model.model}</TableCell>
                <TableCell className="max-w-72 whitespace-normal text-xs text-muted-foreground">
                  {model.description || "-"}
                </TableCell>
                <TableCell className="max-w-72 truncate text-xs text-muted-foreground">
                  {model.imageUrl || "-"}
                </TableCell>
                <TableCell className="text-xs text-muted-foreground">{model.slug}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <details>
                      <summary className="cursor-pointer rounded-md border border-border/60 px-2 py-1 text-xs">
                        Изменить
                      </summary>
                      <div className="mt-2 w-80 rounded-md border border-border/60 bg-background p-2">
                        <form action={updateModelAction} className="grid gap-2">
                          <input type="hidden" name="modelId" value={model.id} />
                          <select
                            name="brandId"
                            required
                            defaultValue={model.brandId}
                            className="h-8 rounded-md border border-border/60 bg-background px-2 text-xs"
                          >
                            {brands.map((brand) => (
                              <option key={brand.id} value={brand.id}>
                                {brand.name}
                              </option>
                            ))}
                          </select>
                          <input
                            name="model"
                            required
                            defaultValue={model.model}
                            className="h-8 rounded-md border border-border/60 bg-background px-2 text-xs"
                          />
                          <input
                            name="imageUrl"
                            defaultValue={model.imageUrl ?? ""}
                            placeholder="Image URL"
                            className="h-8 rounded-md border border-border/60 bg-background px-2 text-xs"
                          />
                          <FileUploadInput name="image" />
                          <input
                            name="description"
                            defaultValue={model.description ?? ""}
                            placeholder="Описание"
                            className="h-8 rounded-md border border-border/60 bg-background px-2 text-xs"
                          />
                          <Button type="submit" size="sm" variant="outline">
                            Сохранить
                          </Button>
                        </form>
                      </div>
                    </details>

                    <form action={deleteModelAction}>
                      <input type="hidden" name="modelId" value={model.id} />
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
