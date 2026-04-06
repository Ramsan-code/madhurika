import Image from "next/image";
import Link from "next/link";

export default function Credentials() {
  return (
    <main className="h-dvh w-full flex flex-col sm:flex-row-reverse relative overflow-hidden bg-background">

      <div className="w-full sm:w-1/2 p-4 sm:p-8 pt-12 sm:pt-24 lg:pt-32 flex flex-col justify-between h-[60dvh] sm:h-full overflow-hidden shrink-0 relative z-10 bg-white/10 backdrop-blur-sm sm:backdrop-blur-none">
         <div className="flex-1 flex flex-col justify-center max-w-xl mx-auto sm:mx-0 w-full px-0.5">
            <div className="mb-4 sm:mb-10 border-b-2 border-[#111111] pb-2 sm:pb-4 group">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold opacity-40 mb-1 opacity-50 px-0.5 tracking-tighter sm:tracking-[0.2em]">// PAGE 02</p>
              <h2 className="font-display text-[12vw] sm:text-[7.5vw] uppercase leading-[0.8] tracking-[-0.07em] group-hover:italic transition-all">Education</h2>
            </div>

            <div className="flex flex-col gap-3 sm:gap-6 lg:gap-8 overflow-hidden">
              <div className="border-b border-[#111111]/30 pb-2 sm:pb-4">
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl uppercase leading-[0.85] tracking-tight mb-1">B.Tech & Business <br className="lg:hidden"/> Management HND</h3>
                <div className="text-[9px] sm:text-[11px] uppercase tracking-widest flex justify-between gap-4 opacity-60">
                  <span>ESOFT Campus</span>
                  <span className="font-black">Ongoing</span>
                </div>
              </div>
              <div className="border-b border-[#111111]/30 pb-2 sm:pb-4">
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl uppercase leading-[0.85] tracking-tight mb-1">Advanced <br className="lg:hidden"/> Level</h3>
                <div className="text-[9px] sm:text-[11px] uppercase tracking-widest flex justify-between gap-4 opacity-60">
                  <span>Commerce</span>
                  <span className="font-black text-right">Total: 487</span>
                </div>
              </div>
              <div className="border-b border-[#111111]/30 pb-2 sm:pb-4">
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl uppercase leading-[0.85] tracking-tight mb-1">Google Digital <br className="lg:hidden"/> Marketing</h3>
                <div className="text-[9px] sm:text-[11px] uppercase tracking-widest flex justify-between gap-4 opacity-60">
                  <span>Coursera Platform</span>
                  <span className="font-black text-right">Completed</span>
                </div>
              </div>
            </div>
         </div>
         
            <div className="flex justify-between pb-4 sm:pb-0 shrink-0 relative z-20 pt-6">
              <Link href="/" className="text-xs md:text-[11px] uppercase tracking-[0.2em] font-black hover:line-through inline-flex items-center gap-4 w-max opacity-40 group">
                <span className="font-display text-2xl leading-none transition-transform group-hover:-translate-x-2">←</span>
                <span>Prev</span>
              </Link>
              <Link href="/identity" className="text-xs md:text-[11px] uppercase tracking-[0.2em] font-black hover:line-through inline-flex items-center gap-4 w-max group">
                <span>Next: Skills</span>
                <span className="font-display text-2xl leading-none transition-transform group-hover:translate-x-2">→</span>
              </Link>
            </div>
       </div>
       <div className="w-full sm:w-1/2 h-[45dvh] sm:h-full relative border-t sm:border-t-0 sm:border-r border-[#111111]">
         <Image
           src="/education_photo.png"
           alt="Credentials"
           fill
           className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
           priority
         />
       </div>
     </main>
  );
}
