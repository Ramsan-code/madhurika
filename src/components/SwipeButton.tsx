"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";

interface SwipeButtonProps {
  href: string;
  label?: string;
  className?: string;
}

export default function SwipeButton({ href, label = "Slide to Continue", className = "" }: SwipeButtonProps) {
  const router = useRouter();
  const [success, setSuccess] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  
  // Calculate the drag range based on container width
  const [dragWidth, setDragWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setDragWidth(containerRef.current.offsetWidth - 60);
      }
    };
    
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const opacity = useTransform(x, [0, dragWidth * 0.5], [1, 0]);
  const scale = useTransform(x, [0, dragWidth], [1, 1.1]);
  const color = useTransform(x, [0, dragWidth], ["rgba(17, 17, 17, 0.4)", "rgba(17, 17, 17, 1)"]);

  const handleDragEnd = () => {
    if (x.get() >= dragWidth - 10) {
      setSuccess(true);
      setTimeout(() => {
        router.push(href);
      }, 300);
    } else {
      // Snap back
      x.set(0);
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`relative h-14 w-full max-w-[300px] bg-[#111111]/5 border border-[#111111]/10 rounded-full flex items-center p-1.5 overflow-hidden transition-all duration-300 ${success ? 'bg-green-500/10 border-green-500/30' : ''} ${className}`}
    >
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-black opacity-40 select-none">
          {label}
        </span>
      </motion.div>

      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: dragWidth }}
        dragElastic={0}
        dragMomentum={false}
        onDragEnd={handleDragEnd}
        style={{ x }}
        className="z-10 h-11 w-11 bg-[#111111] rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing shadow-[4px_4px_0px_rgba(0,0,0,0.2)]"
      >
        <motion.div style={{ scale }}>
          <ArrowRight className={`w-5 h-5 ${success ? 'text-green-500' : 'text-white'}`} />
        </motion.div>
      </motion.div>

      {/* Progress shadow bar */}
      <motion.div 
        style={{ width: x }}
        className="absolute left-1.5 h-11 bg-[#111111]/10 rounded-full"
      />
    </div>
  );
}
