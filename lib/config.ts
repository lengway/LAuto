export const WHATSAPP_PHONE = "77000000000";

export function buildWhatsAppLink(text: string) {
  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodedText}`;
}
