import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { MobileNav } from "@/components/layout/MobileNav";
import { ToastContainer } from "@/components/ui/Toast";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Porto's Donuts Bakery — Fresh Gourmet Donuts in Quetta",
  description: "Quetta's premier artisanal bakery. Order fresh gourmet donuts, Belgian chocolate cakes, French butter croissants & craft beverages with express delivery across Quetta city.",
  keywords: ["Porto's Donuts", "Quetta Bakery", "Donuts Quetta", "Fresh Donuts Quetta", "Cakes Quetta", "Jinnah Town Bakery"],
  authors: [{ name: "Porto's Donuts Bakery Quetta" }],
  openGraph: {
    title: "Porto's Donuts Bakery — Quetta, Pakistan",
    description: "Hand-dipped gourmet donuts, celebration cakes, and daily fresh pastries delivered across Quetta city in 45 minutes.",
    url: "https://portosdonuts.pk",
    siteName: "Porto's Donuts Bakery",
    locale: "en_PK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="min-h-screen flex flex-col antialiased bg-[#FFFDF9] text-[#2C1A0E]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* Client side overlays & interactive stores */}
        <CartDrawer />
        <MobileNav />
        <ToastContainer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
