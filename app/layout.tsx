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
  description: " ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${interSans.variable} ${lora.variable} font-sans   antialiased`}
      >
        <Header />
        <main className="mx-auto max-w-5xl px-4">{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
