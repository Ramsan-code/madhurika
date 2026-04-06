"use client";

import { motion, useSpring, useMotionValue } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export default function AssistiveBall() {
  const router = useRouter();
  const pathname = usePathname();
  const [success, setSuccess] = useState(false);
  const ballRef = useRef<HTMLDivElement>(null);

  // Pagination logic
  const pageMap: Record<string, string> = {
    "/": "/education",
    "/education": "/skills",
    "/skills": "/interests",
    "/interests": "/social",
    "/social": "/",
  };

  const nextHref = pageMap[pathname] || "/education";

  // Position logic (for draggability/floating)
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 25, stiffness: 200 });
  const springY = useSpring(y, { damping: 25, stiffness: 200 });

  const handleNextPage = () => {
    setSuccess(true);
    // Subtle physical reaction on click
    x.set(20);
    setTimeout(() => {
      router.push(nextHref);
      setTimeout(() => {
        setSuccess(false);
        x.set(0);
      }, 500);
    }, 200);
  };

  return (
    <div className="fixed top-1/2 right-4 sm:right-10 -translate-y-1/2 z-[200]">
      <motion.div
        ref={ballRef}
        drag
        dragConstraints={{ left: -100, right: 100, top: -200, bottom: 200 }}
        onDragEnd={() => {
            // Snap back to side
            x.set(0);
        }}
        onClick={handleNextPage}
        style={{ x: springX, y: springY }}
        className={`relative h-14 w-14 sm:h-20 sm:w-20 rounded-full bg-[#111111] shadow-[0_15px_40px_rgba(0,0,0,0.4),inset_0_4px_12px_rgba(255,255,255,0.25)] flex items-center justify-center cursor-pointer active:scale-95 transition-all duration-300 border border-white/20 group select-none ${success ? 'bg-green-600 scale-110' : 'hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]'}`}
      >
        <div className="relative pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 -m-8 sm:-m-12 border border-dashed border-[#111111]/30 rounded-full group-hover:border-[#111111]/60"
          />
          <ArrowRight className={`w-6 h-6 sm:w-8 sm:h-8 text-white transition-all ${success ? 'translate-x-10 opacity-0' : 'group-hover:translate-x-1'}`} />
        </div>
        
        {/* Click Tooltip */}
        <div className="absolute top-1/2 -left-28 -translate-y-1/2 bg-[#111111] text-white px-3 py-1.5 rounded text-[9px] font-black uppercase tracking-widest shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap -translate-x-2 group-hover:translate-x-0">
          Click for Next
        </div>

        {/* Pulse effect */}
        {!success && (
          <div className="absolute inset-0 rounded-full bg-white/20 animate-ping pointer-events-none" />
        )}
      </motion.div>
    </div>
  );
}
