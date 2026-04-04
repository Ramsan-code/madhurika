import Image from "next/image";
import Link from "next/link";

export default function Commitment() {
  return (
    <main className="h-dvh w-full flex flex-col sm:flex-row relative overflow-hidden bg-background">
      <div className="w-full sm:w-1/2 p-4 sm:p-8 pt-16 sm:pt-32 flex flex-col justify-between h-[65dvh] sm:h-full overflow-hidden shrink-0">
         <div className="flex-1 flex flex-col">
            <p className="text-[9px] md:text-xs uppercase tracking-widest mb-4 sm:mb-8 opacity-50">// PAGE 05 - COMMITMENT</p>
            <h2 className="font-display text-[12vw] sm:text-[8vw] uppercase leading-[0.75] tracking-[-0.05em] mb-6 sm:mb-12">Social <br/> Impact</h2>
            
            <div className="flex flex-col gap-4 sm:gap-8 flex-1 justify-center pb-4 sm:pb-8">
              <div className="border-t border-[#111111]/30 pt-2 sm:pt-4">
                <p className="text-[9px] md:text-xs uppercase tracking-widest mb-1 flex justify-between"><span>Global Initiative</span> <span>2024</span></p>
                <p className="text-[11px] sm:text-sm opacity-70 max-w-sm hidden sm:block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
              <div className="border-t border-[#111111]/30 pt-2 sm:pt-4">
                <p className="text-[9px] md:text-xs uppercase tracking-widest mb-1 flex justify-between"><span>Local Empower</span> <span>2023</span></p>
                <p className="text-[11px] sm:text-sm opacity-70 max-w-sm hidden sm:block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
            </div>
 
            {/* Contact Info */}
            <div className="border-t border-[#111111]/30 pt-4 mt-2 pb-4 sm:pb-0">
               <h3 className="font-display text-[6vw] sm:text-[4vw] uppercase leading-[0.75] tracking-[-0.05em] mb-4">Engage</h3>
               <div className="grid grid-cols-2 gap-4 text-[9px] md:text-xs uppercase tracking-widest">
                 <div>
                   <p className="opacity-50 mb-1">Email</p>
                   <a href="mailto:madhurika573@gmail.com" className="hover:line-through font-bold">madhurika573@gmail.com</a>
                 </div>
                 <div>
                   <p className="opacity-50 mb-1">Network</p>
                   <div className="flex gap-4 font-bold">
                     <a href="#" className="hover:line-through">LinkedIn</a>
                     <a href="#" className="hover:line-through">Insta</a>
                   </div>
                 </div>
               </div>
            </div>
         </div>
 
         <div className="flex justify-between mt-4 sm:mt-0 pb-4 sm:pb-0">
            <Link href="/capabilities" className="text-[10px] md:text-xs uppercase tracking-widest hover:line-through inline-flex items-center gap-4 w-max opacity-50">
              <span className="font-display text-lg leading-none">←</span>
              <span>Prev</span>
            </Link>
            <Link href="/" className="text-[10px] md:text-xs uppercase tracking-widest hover:line-through inline-flex items-center gap-4 w-max">
              <span>Back to Start</span>
              <span className="font-display text-lg leading-none">↺</span>
            </Link>
          </div>
       </div>
       <div className="w-full sm:w-1/2 h-[35dvh] sm:h-full relative border-t sm:border-t-0 sm:border-l border-[#111111]/30">
         <Image
           src="/volunteering_photo.png"
           alt="Commitment"
           fill
           className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
           priority
         />
       </div>
     </main>
  );
}
