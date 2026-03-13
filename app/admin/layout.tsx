import Link from "next/link";

import { Badge } from "@/components/ui/badge";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-10">
      <header className="space-y-3">
        <Badge variant="outline">Админ-панель</Badge>
        <h1 className="text-2xl font-semibold sm:text-3xl">Управление Chinalending</h1>
        <nav className="flex flex-wrap gap-2 text-sm">
          <Link href="/admin" className="rounded-lg border border-border/60 px-3 py-1.5 hover:bg-accent">
            Обзор
          </Link>
          <Link href="/admin/parts" className="rounded-lg border border-border/60 px-3 py-1.5 hover:bg-accent">
            Запчасти
          </Link>
          <Link href="/admin/cars" className="rounded-lg border border-border/60 px-3 py-1.5 hover:bg-accent">
            Автомобили
          </Link>
          <Link href="/admin/vin" className="rounded-lg border border-border/60 px-3 py-1.5 hover:bg-accent">
            VIN-коды
          </Link>
          <Link href="/admin/import" className="rounded-lg border border-border/60 px-3 py-1.5 hover:bg-accent">
            Импорт
          </Link>
          <Link href="/admin/ai-import" className="rounded-lg border border-border/60 px-3 py-1.5 hover:bg-accent">
            AI-импорт
          </Link>
        </nav>
      </header>
      {children}
    </div>
  );
}
