import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import Header from "./header";
import "./globals.css";

const interSans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Juan Gaig Relaciones Inmobiliarias",
  description:
    "uan Gaig es corredor inmobiliario matriculado (CUCICBA 8752) y abogado (CPACF), especializado en operaciones y sucesiones inmobiliarias en la ciudad de Buenos Aires. Con más de 15 años de experiencia, brinda asesoramiento integral en la venta, alquiler y tasación de propiedades, combinando conocimiento legal, estrategia comercial y análisis del mercado.",
  icons: {
    icon: "https://juangaig.com/assets/favicon.jpeg",
  },
  generator: "marianoarias.soy",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://juangaig.com",
    title: "Juan Gaig Relaciones Inmobiliarias",
    description:
      "uan Gaig es corredor inmobiliario matriculado (CUCICBA 8752) y abogado (CPACF), especializado en operaciones y sucesiones inmobiliarias en la ciudad de Buenos Aires. Con más de 15 años de experiencia, brinda asesoramiento integral en la venta, alquiler y tasación de propiedades, combinando conocimiento legal, estrategia comercial y análisis del mercado.",
    images: [
      {
        url: "https://juangaig.com/images/JG-web-05.webp",
        width: 1200,
        height: 630,
        alt: "Juan Gaig Relaciones Inmobiliarias",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${interSans.variable} ${lora.variable} font-sans antialiased`}
      >
        <Header />
        <main className="mx-auto max-w-5xl px-4">{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
