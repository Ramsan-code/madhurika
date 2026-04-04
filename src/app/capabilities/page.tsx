import Link from "next/link";

export default function Capabilities() {
  return (
    <main className="min-h-screen w-full flex flex-col relative pt-24 sm:pt-32">
       <div className="p-4 sm:p-8 flex flex-col flex-1 justify-between">
           <div>
               <p className="text-[10px] md:text-xs uppercase tracking-widest mb-8">// PAGE 04 - CAPABILITIES</p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 sm:gap-y-16">
                 {[
                   "Team Coord", "Time Mgmt", "Creativity", "Social Media", 
                   "Content Creatn", "Email Mrktg", "Risk Mgmt", "Problem Solving"
                 ].map((skill, index) => (
                    <div key={index} className="flex flex-col border-t border-[#111111] pt-6 sm:pt-8 w-full">
                      <h3 className="font-display text-[12vw] sm:text-[6vw] uppercase leading-[0.8] tracking-[-0.04em] mb-4">{skill}</h3>
                      <p className="text-[10px] md:text-xs opacity-70 max-w-sm">Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    </div>
                 ))}
               </div>
           </div>

           <div className="flex justify-between mt-16 sm:mt-8 font-sans pb-8">
             <Link href="/identity" className="text-[10px] md:text-xs uppercase tracking-widest hover:line-through inline-flex items-center gap-4 w-max opacity-50">
               <span className="font-display text-lg leading-none">←</span>
               <span>Prev</span>
             </Link>
             <Link href="/commitment" className="text-[10px] md:text-xs uppercase tracking-widest hover:line-through inline-flex items-center gap-4 w-max">
               <span>Next: Commitment</span>
               <span className="font-display text-lg leading-none">→</span>
             </Link>
           </div>
       </div>
    </main>
  );
}
