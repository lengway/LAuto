import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { CartFab } from "@/components/cart/cart-fab";
import { CartProvider } from "@/components/cart/cart-provider";
import { SiteHeader } from "@/components/layout/site-header";
import { getPublicSiteSettings } from "@/lib/services/site-settings";
import { AuroraBackground } from "@/components/ui/shadcn-io/aurora-background";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chinalending",
  description:
    "Каталог китайских автозапчастей с VIN-поиском и оформлением заказа через WhatsApp по Казахстану.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getPublicSiteSettings();

  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuroraBackground contentClassName="min-h-screen">
          <CartProvider>
            <SiteHeader orderWhatsAppPhone={settings.orderWhatsAppPhone} />
            <main className="flex-1">{children}</main>
            <CartFab orderWhatsAppPhone={settings.orderWhatsAppPhone} />
          </CartProvider>
        </AuroraBackground>
      </body>
    </html>
  );
}
