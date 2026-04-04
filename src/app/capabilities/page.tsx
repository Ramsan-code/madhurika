import Link from "next/link";

export default function Capabilities() {
  return (
    <main className="h-dvh w-full flex flex-col relative pt-12 sm:pt-24 lg:pt-32 overflow-hidden bg-background">
       <div className="p-4 sm:p-8 flex flex-col flex-1 justify-between overflow-hidden">
            <div className="flex-1 flex flex-col justify-center overflow-y-auto pr-2">
                <p className="text-[10px] md:text-xs uppercase tracking-widest mb-4 sm:mb-6 opacity-50 shrink-0 px-0.5">// PAGE 04 - CAPABILITIES</p>
                <div className="grid grid-cols-2 gap-x-4 sm:gap-x-12 gap-y-4 sm:gap-y-8 lg:gap-y-12">
                  {[
                    "Team Coord", "Time Mgmt", "Creativity", "Social Media", 
                    "Content Creatn", "Email Mrktg", "Risk Mgmt", "Problem Solving"
                  ].map((skill, index) => (
                     <div key={index} className="flex flex-col border-t border-[#111111]/30 pt-2 sm:pt-4 w-full">
                       <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl uppercase leading-[0.85] tracking-[-0.04em] mb-1 sm:mb-2 break-words">{skill}</h3>
                       <p className="text-[11px] md:text-xs opacity-70 max-w-sm hidden lg:block line-clamp-1">Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                     </div>
                  ))}
                </div>
            </div>
 
            <div className="flex justify-between mt-4 sm:mt-6 font-sans pb-4 sm:pb-0 shrink-0">
              <Link href="/identity" className="text-xs md:text-sm uppercase tracking-widest hover:line-through inline-flex items-center gap-4 w-max opacity-50 group">
                <span className="font-display text-lg leading-none transform group-hover:-translate-x-1 transition-transform">←</span>
                <span>Prev</span>
              </Link>
              <Link href="/commitment" className="text-xs md:text-sm uppercase tracking-widest hover:line-through inline-flex items-center gap-4 w-max group">
                <span>Next: Commitment</span>
                <span className="font-display text-lg leading-none transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
        </div>
     </main>
  );
}
