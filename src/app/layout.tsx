import type { Metadata } from "next";
import { Inter, Archivo_Black } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "MADHURIKA",
  description: "Editorial Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${archivoBlack.variable} antialiased`}>
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
