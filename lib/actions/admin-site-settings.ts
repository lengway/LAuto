"use server";

import { revalidatePath } from "next/cache";

import { addContactPhone, deleteContactPhone, updateContactPhone, upsertSiteSettings } from "@/lib/services/site-settings";

function revalidatePublicAndAdminSettings() {
  revalidatePath("/");
  revalidatePath("/catalog");
  revalidatePath("/admin");
  revalidatePath("/admin/settings");
}

export async function updateSiteSettingsAction(formData: FormData) {
  const orderWhatsAppPhone = String(formData.get("orderWhatsAppPhone") ?? "").trim();
  const mapUrl = String(formData.get("mapUrl") ?? "");

  if (!orderWhatsAppPhone) {
    throw new Error("Введите номер WhatsApp для заказов");
  }

  await upsertSiteSettings({
    orderWhatsAppPhone,
    mapUrl,
  });

  revalidatePublicAndAdminSettings();
}

export async function addContactPhoneAction(formData: FormData) {
  const phone = String(formData.get("phone") ?? "").trim();

  if (!phone) {
    throw new Error("Введите номер телефона");
  }

  await addContactPhone(phone);
  revalidatePublicAndAdminSettings();
}

export async function deleteContactPhoneAction(formData: FormData) {
  const phoneId = String(formData.get("phoneId") ?? "").trim();

  if (!phoneId) {
    throw new Error("phoneId is required");
  }

  await deleteContactPhone(phoneId);
  revalidatePublicAndAdminSettings();
}

export async function updateContactPhoneAction(formData: FormData) {
  const phoneId = String(formData.get("phoneId") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();

  if (!phoneId) {
    throw new Error("phoneId is required");
  }

  if (!phone) {
    throw new Error("Введите номер телефона");
  }

  await updateContactPhone(phoneId, phone);
  revalidatePublicAndAdminSettings();
}
