import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Импорт запчастей | Chinalending",
};

export default function AdminImportPage() {
  return (
    <div className="space-y-6">
      <section className="space-y-4 rounded-xl border border-border/60 p-4">
        <h2 className="text-lg font-semibold">Импорт запчастей</h2>
        <p className="text-sm text-muted-foreground">
          Импорт из файлов отключен в упрощенной версии каталога.
        </p>
        <p className="text-sm text-muted-foreground">
          Наполняйте каталог через админ-разделы “Автомобили” и “Запчасти”.
        </p>
      </section>
    </div>
  );
}
