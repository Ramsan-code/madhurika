"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface DualSwipeButtonProps {
  prevHref: string;
  nextHref: string;
  className?: string;
}

export default function DualSwipeButton({ prevHref, nextHref, className = "" }: DualSwipeButtonProps) {
  const router = useRouter();
  const [direction, setDirection] = useState<'none' | 'left' | 'right'>('none');
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  
  const [dragRange, setDragRange] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        // Range from center to edge
        setDragRange((containerRef.current.offsetWidth / 2) - 30);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const leftOpacity = useTransform(x, [-dragRange, -dragRange * 0.2, 0], [1, 0.4, 0.1]);
  const rightOpacity = useTransform(x, [0, dragRange * 0.2, dragRange], [0.1, 0.4, 1]);
  const handleColor = useTransform(x, [-dragRange, 0, dragRange], ["#111111", "#111111", "#111111"]);

  const handleDragEnd = () => {
    const currentX = x.get();
    if (currentX <= -dragRange + 10) {
      setDirection('left');
      setTimeout(() => router.push(prevHref), 300);
    } else if (currentX >= dragRange - 10) {
      setDirection('right');
      setTimeout(() => router.push(nextHref), 300);
    } else {
      x.set(0);
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`relative h-10 w-full max-w-[280px] bg-[#111111]/5 border border-[#111111]/10 rounded-full flex items-center justify-center p-1 overflow-hidden ${className}`}
    >
      {/* Left indicator */}
      <motion.div style={{ opacity: leftOpacity }} className="absolute left-4 flex items-center gap-2 pointer-events-none text-[8px] font-black uppercase">
        <ArrowLeft className="w-3 h-3" />
        <span className="hidden sm:inline">PREV</span>
      </motion.div>

      {/* Right indicator */}
      <motion.div style={{ opacity: rightOpacity }} className="absolute right-4 flex items-center gap-2 pointer-events-none text-[8px] font-black uppercase">
        <span className="hidden sm:inline">NEXT</span>
        <ArrowRight className="w-3 h-3" />
      </motion.div>

      <motion.div
        drag="x"
        dragConstraints={{ left: -dragRange, right: dragRange }}
        dragElastic={0.1}
        dragMomentum={false}
        onDragEnd={handleDragEnd}
        style={{ x, backgroundColor: handleColor }}
        className="z-10 h-8 w-8 rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing shadow-md"
      >
        <div className="flex gap-0.5">
           <div className="w-0.5 h-3 bg-white/30 rounded-full" />
           <div className="w-0.5 h-3 bg-white/30 rounded-full" />
        </div>
      </motion.div>

      {/* Progress Bars */}
      <motion.div 
        style={{ width: useTransform(x, [-dragRange, 0], [dragRange, 0]), right: '50%' }}
        className="absolute h-8 bg-[#111111]/5 rounded-full"
      />
      <motion.div 
        style={{ width: useTransform(x, [0, dragRange], [0, dragRange]), left: '50%' }}
        className="absolute h-8 bg-[#111111]/5 rounded-full"
      />
    </div>
  );
}
