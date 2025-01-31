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
    title: "Venta de Flores Eternas - Flores Frescas y Hermosas",
    description: "Compra flores eternas, frescas y hermosas online. Encuentra girasoles, rosas y más para regalar en ocasiones especiales.",
    keywords: "flores eternas, venta de flores, flores frescas, girasoles, rosas, ramo de flores, flores para regalar",
    openGraph: {
        title: "Venta de Flores Eternas - Flores Frescas y Hermosas",
        description: "Compra flores eternas, frescas y hermosas online. Encuentra girasoles, rosas y más para regalar en ocasiones especiales.",
        url: "https://details-izamar.vercel.app", // URL de tu sitio web
        siteName: "Tu Tienda de Flores Eternas",
        images: [
            {
                url: "/imgs/Ramo con girasol.jpeg", // Imagen representativa del sitio
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
        title: "Venta de Flores Eternas - Flores Frescas y Hermosas",
        description: "Compra flores eternas, frescas y hermosas online. Encuentra girasoles, rosas y más para regalar en ocasiones especiales.",
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
    <div className=" sticky  top-0 h-14 z-20 bg-white flex  items-center  text-purple-800   px-4  py-4 ">
        <header className=" md:mx-52  flex flex-row center gap-3">
            <div className=" flex flex-col justify-center items-center gap-1">
                <div className="w-4 h-0.5 bg-purple-700"/>
                <div className="w-4 h-0.5 bg-purple-700"/>
                <div className="w-4 h-0.5 bg-purple-700"/>
            </div>
            <div className=" text-sm font-bold">
                LITTLES DETAILS IZAMAR
            </div>
        </header>
    </div>
        {children}
    </body>
    </html>
);
}
