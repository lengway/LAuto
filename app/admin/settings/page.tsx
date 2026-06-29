import type { Metadata } from "next";

import {
  addContactPhoneAction,
  deleteContactPhoneAction,
  updateContactPhoneAction,
  updateSiteSettingsAction,
} from "@/lib/actions/admin-site-settings";
import { getAdminSiteSettings } from "@/lib/services/site-settings";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Настройки контактов | Chinalending",
};

export default async function AdminSettingsPage() {
  const settings = await getAdminSiteSettings();

  return (
    <div className="space-y-6">
      <section className="rounded-xl border border-border/60 p-4">
        <h2 className="mb-3 text-lg font-semibold">Настройки контактов и карты</h2>

        <form action={updateSiteSettingsAction} className="grid gap-3">
          <label className="text-sm font-medium">Номер WhatsApp для заказа из корзины</label>
          <input
            name="orderWhatsAppPhone"
            required
            defaultValue={settings.orderWhatsAppPhone}
            placeholder="77000000000"
            className="h-9 rounded-md border border-border/60 bg-background px-3 text-sm"
          />

          <label className="text-sm font-medium">Ссылка Яндекс.Карт</label>
          <input
            name="mapUrl"
            defaultValue={settings.mapUrl ?? ""}
            placeholder="https://yandex.kz/maps/ru/-/CPR1a4Pl"
            className="h-9 rounded-md border border-border/60 bg-background px-3 text-sm"
          />
          <p className="text-xs text-muted-foreground">
            Вставляйте только ссылку. iframe на главной формируется автоматически в фиксированном формате.
          </p>

          <Button type="submit" className="w-fit">
            Сохранить настройки
          </Button>
        </form>
      </section>

      <section className="rounded-xl border border-border/60 p-4">
        <h2 className="mb-3 text-lg font-semibold">Телефоны на главной ({settings.phones.length})</h2>

        <form action={addContactPhoneAction} className="mb-4 flex flex-wrap items-center gap-2">
          <input
            name="phone"
            required
            placeholder="+7 (777) 000-00-00"
            className="h-9 min-w-56 rounded-md border border-border/60 bg-background px-3 text-sm"
          />
          <Button type="submit">Добавить номер</Button>
        </form>

        <div className="space-y-2">
          {settings.phones.length ? (
            settings.phones.map((phone, index) => (
              <div key={phone.id} className="flex items-center justify-between rounded-lg border border-border/60 p-3">
                <form action={updateContactPhoneAction} className="flex flex-1 items-center gap-2">
                  <span className="text-sm text-muted-foreground">{index + 1}.</span>
                  <input type="hidden" name="phoneId" value={phone.id} />
                  <input
                    name="phone"
                    defaultValue={phone.phone}
                    className="h-8 min-w-56 rounded-md border border-border/60 bg-background px-2 text-sm"
                  />
                  <Button type="submit" size="sm" variant="outline">
                    Сохранить
                  </Button>
                </form>
                <form action={deleteContactPhoneAction}>
                  <input type="hidden" name="phoneId" value={phone.id} />
                  <Button type="submit" variant="destructive" size="sm">
                    Удалить
                  </Button>
                </form>
              </div>
            ))
          ) : (
            <p className="text-sm text-muted-foreground">Пока нет добавленных номеров.</p>
          )}
        </div>
      </section>
    </div>
  );
}
