import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AlphaSchutz Versicherungsberatung | Ihr Partner für alle Versicherungen",
  description:
    "AlphaSchutz bietet unabhängige Versicherungsberatung für Privatpersonen und Unternehmen. Über 25 Jahre Erfahrung – Jetzt kostenlose Beratung vereinbaren.",
  keywords:
    "Versicherung, Beratung, Krankenversicherung, Kfz-Versicherung, Lebensversicherung, Haftpflicht, Düsseldorf",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable} ${cormorant.variable}`}>
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
