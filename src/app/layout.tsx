// eslint-disable-next-line @typescript-eslint/no-require-imports
require("dotenv").config();
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = localFont({
  src: "./fonts/Montserrat.ttf",
  variable: "--font-montserrat",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Portfolio de Ruan Tiago",
  description: "Portfolio de Ruan Tiago",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${montserrat.variable} antialiased`}>{children}</body>
    </html>
  );
}
