"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { ArrowRight, Move } from "lucide-react";

export default function AssistiveBall() {
  const router = useRouter();
  const pathname = usePathname();
  const [success, setSuccess] = useState(false);
  const ballRef = useRef<HTMLDivElement>(null);

  // Pagination logic
  const pageMap: Record<string, string> = {
    "/": "/credentials",
    "/credentials": "/identity",
    "/identity": "/capabilities",
    "/capabilities": "/commitment",
    "/commitment": "/",
  };

  const nextHref = pageMap[pathname] || "/credentials";

  // Position logic (for draggability/swiping)
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 25, stiffness: 200 });
  const springY = useSpring(y, { damping: 25, stiffness: 200 });

  // Visual cues based on drag
  const opacity = useTransform(x, [0, 100], [0.6, 1]);
  const scale = useTransform(x, [0, 100], [1, 1.2]);
  const dashOffset = useTransform(x, [0, 100], [10, 0]);

  const handleDragEnd = () => {
    const currentX = x.get();
    if (currentX > 100) {
      setSuccess(true);
      setTimeout(() => {
        router.push(nextHref);
        // Reset for next page (with a slight delay to ensure smooth transition)
        setTimeout(() => {
          x.set(0);
          y.set(0);
          setSuccess(false);
        }, 500);
      }, 300);
    } else {
      // Snap back to original floating position
      x.set(0);
      y.set(0);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-[200] pointer-events-none">
      {/* Path indicator */}
      <motion.div 
        style={{ opacity: useTransform(x, [0, 50], [0, 0.4]), scaleX: useTransform(x, [0, 100], [0, 1]) }}
        className="absolute right-full mr-4 top-1/2 -translate-y-1/2 w-32 h-0.5 bg-[#111111] origin-right"
      />

      <motion.div
        ref={ballRef}
        drag
        dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
        onDragEnd={handleDragEnd}
        style={{ x: springX, y: springY, opacity, scale }}
        className={`pointer-events-auto h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-[#111111] shadow-[0_10px_30px_rgba(0,0,0,0.3),inset_0_4px_10px_rgba(255,255,255,0.2)] flex items-center justify-center cursor-grab active:cursor-grabbing border border-white/20 group transition-colors duration-300 ${success ? 'bg-green-600' : ''}`}
      >
        <div className="relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 -m-8 border border-dashed border-[#111111]/30 rounded-full group-hover:border-[#111111]/60"
          />
          <ArrowRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </div>
        
        {/* Tooltip */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded text-[9px] font-black uppercase tracking-widest text-[#111111] shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-[#111111]/10">
          Swipe Right to Next
        </div>
      </motion.div>
    </div>
  );
}
