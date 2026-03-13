import type { Metadata } from "next";

import {
  createCarAction,
  deleteCarAction,
  updateCarAction,
} from "@/lib/actions/admin-cars";
import {
  listAdminBrandOptions,
  listAdminCars,
} from "@/lib/services/admin";
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
  title: "Управление автомобилями | Chinalending",
};

export default async function AdminCarsPage() {
  const [cars, brands] = await Promise.all([listAdminCars(), listAdminBrandOptions()]);

  return (
    <div className="space-y-6">
      <section className="rounded-xl border border-border/60 p-4">
        <h2 className="mb-3 text-lg font-semibold">Добавить автомобиль</h2>

        <form action={createCarAction} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <input
            name="brandName"
            required
            list="car-brand-options"
            placeholder="Бренд (можно ввести новый)"
            className="h-9 rounded-md border border-border/60 bg-background px-3 text-sm"
          />
          <datalist id="car-brand-options">
            {brands.map((brand) => (
              <option key={brand.id} value={brand.name} />
            ))}
          </datalist>

          <input
            name="model"
            required
            placeholder="Модель"
            className="h-9 rounded-md border border-border/60 bg-background px-3 text-sm"
          />

          <input
            name="generation"
            placeholder="Поколение (необязательно)"
            className="h-9 rounded-md border border-border/60 bg-background px-3 text-sm"
          />

          <input
            name="years"
            placeholder="Годы (например 2021-2026)"
            className="h-9 rounded-md border border-border/60 bg-background px-3 text-sm"
          />

          <Button type="submit" className="sm:w-fit">
            Добавить
          </Button>
        </form>
      </section>

      <section className="rounded-xl border border-border/60 p-4">
        <h2 className="mb-3 text-lg font-semibold">Текущие автомобили</h2>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Бренд</TableHead>
              <TableHead>Модель</TableHead>
              <TableHead>Поколение</TableHead>
              <TableHead>Годы</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead>Действия</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cars.map((car) => (
              <TableRow key={car.id}>
                <TableCell>{car.brandName}</TableCell>
                <TableCell>{car.model}</TableCell>
                <TableCell>{car.generation ?? "-"}</TableCell>
                <TableCell>{car.years ?? "-"}</TableCell>
                <TableCell className="text-xs text-muted-foreground">{car.slug}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <details>
                      <summary className="cursor-pointer rounded-md border border-border/60 px-2 py-1 text-xs">
                        Изменить
                      </summary>
                      <div className="mt-2 w-72 rounded-md border border-border/60 bg-background p-2">
                        <form action={updateCarAction} className="grid gap-2">
                          <input type="hidden" name="carId" value={car.id} />
                          <input
                            name="brandName"
                            required
                            defaultValue={car.brandName}
                            list={`car-brand-options-${car.id}`}
                            className="h-8 rounded-md border border-border/60 bg-background px-2 text-xs"
                          />
                          <datalist id={`car-brand-options-${car.id}`}>
                            {brands.map((brand) => (
                              <option key={brand.id} value={brand.name} />
                            ))}
                          </datalist>
                          <input
                            name="model"
                            required
                            defaultValue={car.model}
                            className="h-8 rounded-md border border-border/60 bg-background px-2 text-xs"
                          />
                          <input
                            name="generation"
                            defaultValue={car.generation ?? ""}
                            className="h-8 rounded-md border border-border/60 bg-background px-2 text-xs"
                          />
                          <input
                            name="years"
                            defaultValue={car.years ?? ""}
                            className="h-8 rounded-md border border-border/60 bg-background px-2 text-xs"
                          />
                          <Button type="submit" size="sm" variant="outline">
                            Сохранить
                          </Button>
                        </form>
                      </div>
                    </details>

                    <form action={deleteCarAction}>
                      <input type="hidden" name="carId" value={car.id} />
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
