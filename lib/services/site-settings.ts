import { unstable_noStore as noStore } from "next/cache";

import { prisma } from "@/lib/db";

const SETTINGS_KEY = "main";
const DEFAULT_WHATSAPP_PHONE = "77000000000";

export type PublicSiteSettings = {
  orderWhatsAppPhone: string;
  displayPhones: string[];
  mapIframeHtml: string | null;
};

export type AdminSiteSettings = {
  id: string;
  orderWhatsAppPhone: string;
  mapUrl: string | null;
  phones: Array<{
    id: string;
    phone: string;
    sortOrder: number;
  }>;
};

function normalizeDigits(phone: string): string {
  return phone.replace(/\D+/g, "");
}

export function normalizeWhatsAppPhone(phone: string): string {
  const digits = normalizeDigits(phone);
  return digits || DEFAULT_WHATSAPP_PHONE;
}

function extractIframeSrc(input: string): string | null {
  const match = input.match(/src=["']([^"']+)["']/i);
  return match?.[1]?.trim() || null;
}

function extractYandexMapCode(input: string): string | null {
  const raw = input.trim();
  if (!raw) {
    return null;
  }

  try {
    const parsed = new URL(raw);
    const fromPath = parsed.pathname.match(/\/-\/([^/]+)/);
    if (fromPath?.[1]) {
      return fromPath[1].trim();
    }

    const fromFull = `${parsed.pathname}${parsed.search}${parsed.hash}`.match(/\/-\/([^/?#&]+)/);
    if (fromFull?.[1]) {
      return fromFull[1].trim();
    }
  } catch {
    const fallback = raw.match(/\/-\/([^/?#&]+)/);
    if (fallback?.[1]) {
      return fallback[1].trim();
    }
  }

  return null;
}

function normalizeYandexMapUrl(input: string | null | undefined): string | null {
  const raw = String(input ?? "").trim();
  if (!raw) {
    return null;
  }

  const candidate = raw.includes("<iframe") ? extractIframeSrc(raw) : raw;
  if (!candidate) {
    return null;
  }

  const code = extractYandexMapCode(candidate);
  if (!code) {
    throw new Error("Укажите ссылку Яндекс.Карт в формате .../-/CODE");
  }

  return `https://yandex.kz/maps/ru/-/${code}`;
}

function toYandexWidgetUrl(input: string | null | undefined): string | null {
  const normalizedMapUrl = normalizeYandexMapUrl(input);
  if (!normalizedMapUrl) {
    return null;
  }

  const code = extractYandexMapCode(normalizedMapUrl);
  if (!code) {
    return null;
  }

  return `https://yandex.kz/map-widget/v1/-/${code}`;
}

function buildMapIframeHtml(input: string | null | undefined): string | null {
  const widgetUrl = toYandexWidgetUrl(input);
  if (!widgetUrl) {
    return null;
  }

  return `<div style="width: 100%; max-width: 800px;"><iframe src="${widgetUrl}" width="100%" height="400" frameborder="0"></iframe></div>`;
}

async function ensureSiteSettings() {
  return prisma.siteSettings.upsert({
    where: {
      singletonKey: SETTINGS_KEY,
    },
    update: {},
    create: {
      singletonKey: SETTINGS_KEY,
      orderWhatsAppPhone: DEFAULT_WHATSAPP_PHONE,
    },
    include: {
      contactPhones: {
        orderBy: [{ sortOrder: "asc" }, { createdAt: "asc" }],
      },
    },
  });
}

export async function getPublicSiteSettings(): Promise<PublicSiteSettings> {
  noStore();

  const settings = await ensureSiteSettings();

  return {
    orderWhatsAppPhone: settings.orderWhatsAppPhone || DEFAULT_WHATSAPP_PHONE,
    displayPhones: settings.contactPhones.map((entry) => entry.phone).filter(Boolean),
    mapIframeHtml: buildMapIframeHtml(settings.mapIframeHtml),
  };
}

export async function getAdminSiteSettings(): Promise<AdminSiteSettings> {
  noStore();

  const settings = await ensureSiteSettings();

  let mapUrl: string | null = null;
  try {
    mapUrl = normalizeYandexMapUrl(settings.mapIframeHtml);
  } catch {
    mapUrl = null;
  }

  return {
    id: settings.id,
    orderWhatsAppPhone: settings.orderWhatsAppPhone || DEFAULT_WHATSAPP_PHONE,
    mapUrl,
    phones: settings.contactPhones.map((entry) => ({
      id: entry.id,
      phone: entry.phone,
      sortOrder: entry.sortOrder,
    })),
  };
}

export async function upsertSiteSettings(input: {
  orderWhatsAppPhone: string;
  mapUrl?: string | null;
}) {
  const normalizedPhone = normalizeWhatsAppPhone(input.orderWhatsAppPhone);
  const normalizedMapUrl = normalizeYandexMapUrl(input.mapUrl);

  await prisma.siteSettings.upsert({
    where: {
      singletonKey: SETTINGS_KEY,
    },
    update: {
      orderWhatsAppPhone: normalizedPhone,
      mapIframeHtml: normalizedMapUrl,
    },
    create: {
      singletonKey: SETTINGS_KEY,
      orderWhatsAppPhone: normalizedPhone,
      mapIframeHtml: normalizedMapUrl,
    },
  });
}

export async function addContactPhone(phone: string) {
  const settings = await ensureSiteSettings();
  const normalized = phone.trim();

  if (!normalized) {
    throw new Error("Введите номер телефона");
  }

  const maxSort = settings.contactPhones.reduce((max, entry) => Math.max(max, entry.sortOrder), -1);

  await prisma.contactPhone.create({
    data: {
      settingsId: settings.id,
      phone: normalized,
      sortOrder: maxSort + 1,
    },
  });
}

export async function deleteContactPhone(phoneId: string) {
  await prisma.contactPhone.delete({
    where: {
      id: phoneId,
    },
  });
}

export async function updateContactPhone(phoneId: string, phone: string) {
  const normalized = phone.trim();

  if (!normalized) {
    throw new Error("Введите номер телефона");
  }

  await prisma.contactPhone.update({
    where: {
      id: phoneId,
    },
    data: {
      phone: normalized,
    },
  });
}
