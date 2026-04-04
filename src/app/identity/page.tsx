import Image from "next/image";
import Link from "next/link";

export default function Identity() {
  return (
    <main className="h-dvh w-full flex flex-col relative overflow-hidden bg-background">
      <div className="p-4 sm:p-8 pt-12 sm:pt-32 shrink-0">
        <p className="text-[10px] md:text-xs uppercase tracking-widest mb-2 sm:mb-8 opacity-50 px-0.5">// PAGE 03 - Skills</p>
        <h2 className="font-display text-[14vw] sm:text-[10vw] uppercase leading-[0.75] tracking-[-0.05em] mb-2 sm:mb-4">Skills</h2>
      </div>
      <div className="flex flex-col sm:flex-row flex-1 border-t border-[#111111]/30 overflow-hidden">
         <div className="w-full sm:w-1/2 p-4 sm:p-8 flex flex-col justify-between h-[55dvh] sm:h-full overflow-hidden shrink-0 bg-white/50 backdrop-blur-sm">
           <div className="flex-1 flex flex-col justify-center space-y-4 sm:space-y-8 py-4 sm:py-8">
              <div className="space-y-2 sm:space-y-4">
                <p className="text-[9px] sm:text-[10px] uppercase tracking-widest opacity-40">// CORE COMPETENCIES</p>
                <div className="flex flex-wrap gap-x-2 gap-y-1 sm:gap-x-4 sm:gap-y-2">
                  {["Team Coordination", "Time Management", "Risk Management", "Decision Making"].map((s, i) => (
                    <span key={i} className="text-xl sm:text-3xl lg:text-4xl font-display uppercase leading-none tracking-tight hover:italic transition-all cursor-default">
                      {s}{i < 3 ? " / " : ""}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2 sm:space-y-4">
                <p className="text-[9px] sm:text-[10px] uppercase tracking-widest opacity-40">// CREATIVE & DIGITAL</p>
                <div className="flex flex-wrap gap-x-3 gap-y-1 sm:gap-x-4 sm:gap-y-2">
                   {["Social Media", "Content Creatn", "Email Mrktg", "Target Audience"].map((s, i) => (
                    <span key={i} className="text-base sm:text-lg lg:text-xl opacity-80 uppercase leading-none tracking-widest border-b border-[#111111]/10 pb-0.5 whitespace-nowrap">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2 sm:space-y-4">
                <p className="text-[9px] sm:text-[10px] uppercase tracking-widest opacity-40">// SOFT SKILLS</p>
                <p className="text-[11px] sm:text-sm lg:text-base opacity-70 leading-tight sm:leading-relaxed max-w-sm line-clamp-3 sm:line-clamp-none">
                  Trying Creative Ideas, Building Auditions Interaction, Inclusive Thinking Ideas, Social Media Branding, Confidence Prompting, and Timeline Management For NewBorn Cinema.
                </p>
              </div>
           </div>
           
             <div className="flex justify-between pb-4 sm:pb-0 shrink-0 border-t border-[#111111]/10 pt-4">
               <Link href="/credentials" className="text-[10px] md:text-sm uppercase tracking-widest hover:line-through inline-flex items-center gap-4 w-max opacity-50 group">
                 <span className="font-display text-lg leading-none transform group-hover:-translate-x-1 transition-transform">←</span>
                 <span>Prev</span>
               </Link>
               <Link href="/capabilities" className="text-[10px] md:text-sm uppercase tracking-widest hover:line-through inline-flex items-center gap-4 w-max group">
                 <span>Next</span>
                 <span className="font-display text-lg leading-none transform group-hover:translate-x-1 transition-transform">→</span>
               </Link>
             </div>
         </div>
         <div className="w-full sm:w-1/2 h-[45dvh] sm:h-full relative border-t sm:border-t-0 sm:border-l border-[#111111]/30">
          <Image
            src="/about_photo.png"
            alt="Identity"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            priority
          />
         </div>
      </div>
    </main>
  );
}
