import Image from "next/image";
import Link from "next/link";

export default function Commitment() {
  return (
    <main className="h-dvh w-full flex flex-col sm:flex-row relative overflow-hidden bg-background">
      <div className="w-full sm:w-1/2 p-4 sm:p-8 pt-12 sm:pt-32 flex flex-col justify-between h-[65dvh] sm:h-full overflow-hidden shrink-0">
         <div className="flex-1 flex flex-col overflow-y-auto pr-2">
            <p className="text-[10px] md:text-xs uppercase tracking-widest mb-4 sm:mb-8 opacity-50 px-0.5">// PAGE 05 - COMMITMENT</p>
            <h2 className="font-display text-5xl sm:text-7xl uppercase leading-[0.75] tracking-[-0.05em] mb-6 sm:mb-12 px-0.5">Social <br/> Impact</h2>
            
            <div className="flex flex-col gap-4 sm:gap-8 flex-1 justify-center pb-4 sm:pb-8">
              <div className="border-t border-[#111111]/30 pt-2 sm:pt-4">
                <p className="text-[10px] md:text-xs uppercase tracking-widest mb-1 flex justify-between px-0.5"><span>Global Initiative</span> <span>2024</span></p>
                <p className="text-xs sm:text-sm opacity-70 max-w-sm hidden sm:block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
              <div className="border-t border-[#111111]/30 pt-2 sm:pt-4">
                <p className="text-[10px] md:text-xs uppercase tracking-widest mb-1 flex justify-between px-0.5"><span>Local Empower</span> <span>2023</span></p>
                <p className="text-xs sm:text-sm opacity-70 max-w-sm hidden sm:block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
            </div>
 
            {/* Contact Info */}
            <div className="border-t border-[#111111]/30 pt-4 mt-2 pb-4 sm:pb-0">
               <h3 className="font-display text-3xl sm:text-4xl uppercase leading-[0.75] tracking-[-0.05em] mb-4 px-0.5">Engage</h3>
               <div className="grid grid-cols-2 gap-4 text-xs md:text-sm uppercase tracking-widest">
                 <div className="px-0.5">
                   <p className="opacity-50 mb-1 text-[10px]">Email</p>
                   <a href="mailto:madhurika573@gmail.com" className="hover:line-through font-bold">madhurika573@gmail.com</a>
                 </div>
                 <div className="px-0.5">
                   <p className="opacity-50 mb-1 text-[10px]">Network</p>
                   <div className="flex gap-4 font-bold">
                     <a href="#" className="hover:line-through">LinkedIn</a>
                     <a href="#" className="hover:line-through">Insta</a>
                   </div>
                 </div>
               </div>
            </div>
         </div>
 
         <div className="flex justify-between mt-4 sm:mt-0 pb-4 sm:pb-0 shrink-0">
            <Link href="/capabilities" className="text-xs md:text-sm uppercase tracking-widest hover:line-through inline-flex items-center gap-4 w-max opacity-50 group">
              <span className="font-display text-lg leading-none transform group-hover:-translate-x-1 transition-transform">←</span>
              <span>Prev</span>
            </Link>
            <Link href="/" className="text-xs md:text-sm uppercase tracking-widest hover:line-through inline-flex items-center gap-4 w-max group">
              <span>Back to Start</span>
              <span className="font-display text-lg leading-none transform group-hover:rotate-180 transition-transform">↺</span>
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
