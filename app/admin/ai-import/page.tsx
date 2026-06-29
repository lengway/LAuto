import type { Metadata } from "next";

import { AiImportForm } from "@/components/admin/ai-import-form";

export const metadata: Metadata = {
  title: "AI-импорт запчастей | Chinalending",
};

export default function AdminAiImportPage() {
  return (
    <div className="space-y-6">
      <section className="space-y-4 rounded-xl border border-border/60 p-4">
        <h2 className="text-lg font-semibold">AI-импорт каталога из сообщения</h2>
        <AiImportForm />
      </section>
    </div>
  );
}
