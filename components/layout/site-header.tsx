import Link from "next/link";

import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/config";

export function SiteHeader({ orderWhatsAppPhone }: { orderWhatsAppPhone: string }) {
  return (
    <header className="px-4 py-4 sm:px-6">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center gap-3 rounded-2xl border border-border/60 bg-card/70 px-3 py-3 backdrop-blur sm:px-4">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          Chinalending
        </Link>

        <nav className="ml-auto flex flex-wrap items-center gap-2 text-sm">
          <Link href="/" className="rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-foreground">
            Главная
          </Link>
          <Link href="/catalog" className="rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-foreground">
            Каталог
          </Link>
          <Button asChild size="sm">
            <a
              href={buildWhatsAppLink("Здравствуйте! Нужна помощь с подбором запчастей.", orderWhatsAppPhone)}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
