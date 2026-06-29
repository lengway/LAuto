import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VIN отключен | Chinalending",
};

export default function AdminVinPage() {
  return (
    <div className="rounded-xl border border-border/60 p-4 text-sm text-muted-foreground">
      VIN-паттерны удалены из новой структуры БД. Используйте каталог по схеме: марка → модель → детали.
    </div>
  );
}

/*
import type { Metadata } from "next";

import {
  createVinPatternAction,
  deleteVinPatternAction,
  updateVinPatternAction,
} from "@/lib/actions/admin-vin";
import { listAdminCarOptions, listAdminVinPatterns } from "@/lib/services/admin";
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
  title: "Управление VIN | Chinalending",
};

export default async function AdminVinPage() {
  const [vinPatterns, cars] = await Promise.all([
    listAdminVinPatterns(),
    listAdminCarOptions(),
  ]);

  return (
    <div className="space-y-6">
      <section className="rounded-xl border border-border/60 p-4">
        <h2 className="mb-3 text-lg font-semibold">Добавить VIN-паттерн</h2>

        <form action={createVinPatternAction} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <input
            name="pattern"
            required
            placeholder="Префикс, например LVT"
            className="h-9 rounded-md border border-border/60 bg-background px-3 text-sm uppercase"
          />

          <select
            name="carId"
            required
            className="h-9 rounded-md border border-border/60 bg-background px-3 text-sm"
          >
            <option value="">Выберите автомобиль</option>
            {cars.map((car) => (
              <option key={car.id} value={car.id}>
                {car.fullName}
              </option>
            ))}
          </select>

          <Button type="submit" className="sm:w-fit">
            Добавить
          </Button>
        </form>

        <p className="mt-2 text-xs text-muted-foreground">
          Используйте префиксы от 3 символов и длиннее. При поиске сработает самое длинное совпадение.
        </p>
      </section>

      <section className="rounded-xl border border-border/60 p-4">
        <h2 className="mb-3 text-lg font-semibold">Текущие VIN-паттерны</h2>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Паттерн</TableHead>
              <TableHead>Автомобиль</TableHead>
              <TableHead>Slug авто</TableHead>
              <TableHead>Действия</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {vinPatterns.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="font-medium">{row.pattern}</TableCell>
                <TableCell>{row.carFullName}</TableCell>
                <TableCell className="text-xs text-muted-foreground">{row.carSlug}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <details>
                      <summary className="cursor-pointer rounded-md border border-border/60 px-2 py-1 text-xs">
                        Изменить
                      </summary>
                      <div className="mt-2 w-64 rounded-md border border-border/60 bg-background p-2">
                        <form action={updateVinPatternAction} className="grid gap-2">
                          <input type="hidden" name="id" value={row.id} />
                          <input
                            name="pattern"
                            required
                            defaultValue={row.pattern}
                            className="h-8 rounded-md border border-border/60 bg-background px-2 text-xs uppercase"
                          />
                          <select
                            name="carId"
                            required
                            defaultValue={row.carId}
                            className="h-8 rounded-md border border-border/60 bg-background px-2 text-xs"
                          >
                            {cars.map((car) => (
                              <option key={car.id} value={car.id}>
                                {car.fullName}
                              </option>
                            ))}
                          </select>
                          <Button type="submit" size="sm" variant="outline">
                            Сохранить
                          </Button>
                        </form>
                      </div>
                    </details>

                    <form action={deleteVinPatternAction}>
                      <input type="hidden" name="id" value={row.id} />
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
*/
