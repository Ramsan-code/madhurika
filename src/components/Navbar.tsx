"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import DualSwipeButton from "./DualSwipeButton";

export default function Navbar() {
  const pathname = usePathname();

  // Define pagination map with both directions
  const pageMap: Record<string, { prev: string; next: string; label: string }> = {
    "/": { prev: "/commitment", next: "/credentials", label: "01 // Intro" },
    "/credentials": { prev: "/", next: "/identity", label: "02 // Education" },
    "/identity": { prev: "/credentials", next: "/capabilities", label: "03 // Skills" },
    "/capabilities": { prev: "/identity", next: "/commitment", label: "04 // Interests" },
    "/commitment": { prev: "/capabilities", next: "/", label: "05 // Social" },
  };

  const currentPage = pageMap[pathname] || pageMap["/"];
  
  return (
    <header className="fixed top-0 left-0 w-full p-4 sm:p-8 flex justify-between items-start z-[100] text-[#111111] text-[10px] md:text-sm uppercase tracking-widest font-medium font-sans">
      <Link href="/" className="flex flex-col opacity-60 hover:opacity-100 transition-opacity group relative z-50">
        <span className="group-hover:tracking-widest transition-all duration-300">Madhurika</span>
        <span className="group-hover:italic transition-all">Portfolio / '26</span>
      </Link>
      
      {/* Brand New Dual-Direction Swipe Button */}
      <div className="absolute top-4 sm:top-7 left-1/2 -translate-x-1/2 w-full max-w-[180px] sm:max-w-[300px]">
        <DualSwipeButton 
          prevHref={currentPage.prev}
          nextHref={currentPage.next}
          className="h-9 sm:h-12 border-[#111111]/10 bg-white/50 backdrop-blur-xl rounded-full shadow-lg"
        />
      </div>

      <div className="flex flex-col text-right relative z-50">
        <span className="opacity-40">{currentPage.label}</span>
        <span className="opacity-60 text-[8px] sm:text-[11px]">Sri Lanka // 79.86E</span>
        <span className="opacity-100 font-bold block mt-1">HND Business & Mgmt</span>
      </div>
    </header>
  );
}
