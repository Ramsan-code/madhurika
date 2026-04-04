import type { Metadata } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import "./globals.css";
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
        {/* Persistent Header */}
        <header className="fixed top-0 left-0 w-full p-4 sm:p-8 flex justify-between items-start z-50 text-[#111111] text-[10px] md:text-sm uppercase tracking-widest font-medium font-sans pointer-events-none">
          <div className="flex flex-col opacity-60">
            <span>Madhurika</span>
            <span>Portfolio / '26</span>
          </div>
          <div className="flex flex-col text-right">
            <span className="opacity-60">Sri Lanka</span>
            <span className="opacity-100 font-bold">HND Business & Mgmt</span>
          </div>
        </header>

        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
