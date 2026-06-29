"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Badge } from "@/components/ui/badge";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { href: "/admin/brands", label: "Марки" },
    { href: "/admin/models", label: "Модели" },
    { href: "/admin/parts", label: "Запчасти" },
    { href: "/admin/ai-import", label: "AI-импорт" },
    { href: "/admin/settings", label: "Контакты" },
  ];

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-10">
      <header className="space-y-3">
        <Badge variant="outline">Админ-панель</Badge>
        <h1 className="text-2xl font-semibold sm:text-3xl">Управление Chinalending</h1>
        <nav className="flex flex-wrap gap-2 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg border px-3 py-1.5 ${pathname?.startsWith(item.href) ? "border-primary/60 bg-accent" : "border-border/60 hover:bg-accent"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
      {children}
    </div>
  );
}
