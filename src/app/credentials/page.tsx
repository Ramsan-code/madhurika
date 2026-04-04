import Image from "next/image";
import Link from "next/link";

export default function Credentials() {
  return (
    <main className="min-h-screen w-full flex flex-col sm:flex-row-reverse relative">
      <div className="w-full sm:w-1/2 p-4 sm:p-8 pt-24 sm:pt-32 flex flex-col justify-between min-h-[70vh]">
         <div>
           <p className="text-[10px] md:text-xs uppercase tracking-widest mb-8">// PAGE 02 - CREDENTIALS</p>
           <div className="flex flex-col gap-8 sm:gap-12">
             <div className="border-b border-[#111111] pb-6 sm:pb-8">
               <h2 className="font-display text-[9vw] sm:text-[6vw] lg:text-[5vw] uppercase leading-[0.8] tracking-[-0.05em] mb-4 hyphens-auto break-words">HND Business <br/> & Mgmt</h2>
               <div className="text-[10px] md:text-xs uppercase tracking-widest flex justify-between gap-4">
                 <span>ESOFT Metro Campus</span>
                 <span className="text-right">Ongoing / Online</span>
               </div>
               <p className="text-sm mt-4 opacity-70 max-w-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
             </div>
             <div className="border-b border-[#111111] pb-6 sm:pb-8">
               <h2 className="font-display text-[9vw] sm:text-[6vw] lg:text-[5vw] uppercase leading-[0.8] tracking-[-0.05em] mb-4 hyphens-auto break-words">Advanced <br/> Level</h2>
               <div className="text-[10px] md:text-xs uppercase tracking-widest flex justify-between gap-4">
                 <span>Commerce</span>
                 <span className="text-right">Total: 487</span>
               </div>
               <p className="text-sm mt-4 opacity-70 max-w-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
             </div>
             <div className="border-b border-[#111111] pb-6 sm:pb-8">
               <h2 className="font-display text-[9vw] sm:text-[6vw] lg:text-[5vw] uppercase leading-[0.8] tracking-[-0.05em] mb-4 hyphens-auto break-words lg:text-nowrap">Google Digital <br/> Marketing</h2>
               <div className="text-[10px] md:text-xs uppercase tracking-widest flex justify-between gap-4">
                 <span>Coursera</span>
                 <span className="text-right">Completed</span>
               </div>
             </div>
           </div>
         </div>
         
         <div className="flex justify-between mt-12 sm:mt-0 mb-8 sm:mb-0">
           <Link href="/" className="text-[10px] md:text-xs uppercase tracking-widest hover:line-through inline-flex items-center gap-4 w-max opacity-50">
             <span className="font-display text-lg leading-none">←</span>
             <span>Prev</span>
           </Link>
           <Link href="/identity" className="text-[10px] md:text-xs uppercase tracking-widest hover:line-through inline-flex items-center gap-4 w-max">
             <span>Next: Identity</span>
             <span className="font-display text-lg leading-none">→</span>
           </Link>
         </div>
      </div>
      <div className="w-full sm:w-1/2 h-[50vh] sm:h-screen min-h-[500px] relative border-t sm:border-t-0 sm:border-r border-[#111111]">
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
