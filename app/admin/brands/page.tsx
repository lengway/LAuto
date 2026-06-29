import type { Metadata } from "next";

import {
  createBrandAction,
  deleteBrandAction,
  updateBrandAction,
} from "@/lib/actions/admin-brands";
import { FileUploadInput } from "@/components/admin/file-upload-input";
import { listAdminBrands } from "@/lib/services/admin";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const metadata: Metadata = {
  title: "Марки | Админка Chinalending",
};

export default async function AdminBrandsPage() {
  const brands = await listAdminBrands();

  return (
    <div className="space-y-6">
      <section className="rounded-xl border border-border/60 p-4">
        <h2 className="mb-3 text-lg font-semibold">Добавить марку</h2>

        <form action={createBrandAction} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <input
            name="name"
            required
            placeholder="Название марки"
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
            className="h-9 rounded-md border border-border/60 bg-background px-3 text-sm sm:col-span-2"
          />
          <Button type="submit" className="sm:w-fit">
            Создать
          </Button>
        </form>
      </section>

      <section className="rounded-xl border border-border/60 p-4">
        <h2 className="mb-3 text-lg font-semibold">Список марок</h2>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Марка</TableHead>
              <TableHead>Описание</TableHead>
              <TableHead>Image URL</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead>Действия</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {brands.map((brand) => (
              <TableRow key={brand.id}>
                <TableCell>{brand.name}</TableCell>
                <TableCell className="max-w-72 whitespace-normal text-xs text-muted-foreground">
                  {brand.description || "-"}
                </TableCell>
                <TableCell className="max-w-72 truncate text-xs text-muted-foreground">
                  {brand.imageUrl || "-"}
                </TableCell>
                <TableCell className="text-xs text-muted-foreground">{brand.slug}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <details>
                      <summary className="cursor-pointer rounded-md border border-border/60 px-2 py-1 text-xs">
                        Изменить
                      </summary>
                      <div className="mt-2 w-80 rounded-md border border-border/60 bg-background p-2">
                        <form action={updateBrandAction} className="grid gap-2">
                          <input type="hidden" name="brandId" value={brand.id} />
                          <input
                            name="name"
                            required
                            defaultValue={brand.name}
                            className="h-8 rounded-md border border-border/60 bg-background px-2 text-xs"
                          />
                          <input
                            name="imageUrl"
                            defaultValue={brand.imageUrl ?? ""}
                            placeholder="Image URL"
                            className="h-8 rounded-md border border-border/60 bg-background px-2 text-xs"
                          />
                          <FileUploadInput name="image" />
                          <input
                            name="description"
                            defaultValue={brand.description ?? ""}
                            placeholder="Описание"
                            className="h-8 rounded-md border border-border/60 bg-background px-2 text-xs"
                          />
                          <Button type="submit" size="sm" variant="outline">
                            Сохранить
                          </Button>
                        </form>
                      </div>
                    </details>

                    <form action={deleteBrandAction}>
                      <input type="hidden" name="brandId" value={brand.id} />
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
