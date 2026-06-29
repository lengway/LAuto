export type CartItem = {
  partId: string;
  title: string;
  slug: string;
  compatibleCars: string[];
  image: string | null;
  quantity: number;
};

export const CART_STORAGE_KEY = "chinalending-cart:v1";

export function createWhatsAppOrderMessage(items: CartItem[]): string {
  const lines: string[] = [
    "Здравствуйте.",
    "",
    "Меня интересуют следующие запчасти:",
    "",
  ];

  items.forEach((item, index) => {
    lines.push(`${index + 1}. ${item.title} × ${item.quantity}`);

    if (item.compatibleCars.length) {
      lines.push(`Совместимость: ${item.compatibleCars.join(", ")}`);
    }

    lines.push("");
  });

  lines.push("Пожалуйста, подтвердите цену и наличие.");

  return lines.join("\n");
}
