import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    title: "Venta de Flores - Flores Frescas y Hermosas",
    description: "Compra flores frescas y hermosas online. Encuentra girasoles, rosas y más para regalar en ocasiones especiales.",
    keywords: "flores, venta de flores, flores frescas, girasoles, rosas, ramo de flores, flores para regalar",
    openGraph: {
        title: "Venta de Flores - Flores Frescas y Hermosas",
        description: "Compra flores frescas y hermosas online. Encuentra girasoles, rosas y más para regalar en ocasiones especiales.",
        url: "https://www.tutiendadeflores.com", // URL de tu sitio web
        siteName: "Tu Tienda de Flores",
        images: [
            {
                url: "/imgs/Adorno para carro.jpeg", // Imagen representativa del sitio
                width: 800,
                height: 600,
                alt: "Flores frescas y hermosas"
            },
        ],
        locale: "es_ES",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        site: "@TuTiendaDeFlores",
        title: "Venta de Flores - Flores Frescas y Hermosas",
        description: "Compra flores frescas y hermosas online. Encuentra girasoles, rosas y más para regalar en ocasiones especiales.",
    },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
