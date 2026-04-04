import type { Metadata } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import AssistiveBall from "@/components/AssistiveBall";
import { VisualEditsMessenger } from "orchids-visual-edits";

const archivoBlack = Archivo_Black({
  weight: "400",
  variable: "--font-archivo",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Madhurika - Portfolio",
  description: "Typographic Brutalism Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivoBlack.variable} ${inter.variable} font-sans antialiased bg-[#F4F4F4] text-[#111111] overflow-x-hidden selection:bg-[#111111] selection:text-[#F4F4F4]`}
      >
        <Navbar />

        {children}
        <AssistiveBall />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
