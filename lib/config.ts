export const WHATSAPP_PHONE = "77000000000";

function normalizePhone(phone: string): string {
  return phone.replace(/\D+/g, "") || WHATSAPP_PHONE;
}

export function buildWhatsAppLink(text: string, phone: string = WHATSAPP_PHONE) {
  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${normalizePhone(phone)}?text=${encodedText}`;
}
