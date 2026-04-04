import Image from "next/image";
import Link from "next/link";

export default function Credentials() {
  return (
    <main className="h-dvh w-full flex flex-col sm:flex-row-reverse relative overflow-hidden bg-background">
      <div className="w-full sm:w-1/2 p-4 sm:p-8 pt-16 sm:pt-32 flex flex-col justify-between h-[55dvh] sm:h-full overflow-hidden shrink-0">
         <div className="flex-1 flex flex-col justify-center max-w-xl mx-auto sm:mx-0 w-full">
            <p className="text-[9px] md:text-xs uppercase tracking-widest mb-4 sm:mb-8 opacity-50">// PAGE 02 - CREDENTIALS</p>
            <div className="flex flex-col gap-4 sm:gap-12">
              <div className="border-b border-[#111111]/30 pb-3 sm:pb-8">
                <h2 className="font-display text-[6vw] sm:text-[4vw] lg:text-[4vw] uppercase leading-[0.85] tracking-[-0.05em] mb-1 sm:mb-4 hyphens-auto break-words lg:text-nowrap">HND Business <br/> & Mgmt</h2>
                <div className="text-[9px] md:text-xs uppercase tracking-widest flex justify-between gap-4 opacity-80">
                  <span>ESOFT Campus</span>
                  <span className="text-right">Ongoing</span>
                </div>
              </div>
              <div className="border-b border-[#111111]/30 pb-3 sm:pb-8">
                <h2 className="font-display text-[6vw] sm:text-[4vw] lg:text-[4vw] uppercase leading-[0.85] tracking-[-0.05em] mb-1 sm:mb-4 hyphens-auto break-words lg:text-nowrap">Advanced <br/> Level</h2>
                <div className="text-[9px] md:text-xs uppercase tracking-widest flex justify-between gap-4 opacity-80">
                  <span>Commerce</span>
                  <span className="text-right">Total: 487</span>
                </div>
              </div>
              <div className="border-b border-[#111111]/30 pb-3 sm:pb-8">
                <h2 className="font-display text-[7vw] sm:text-[6vw] lg:text-[5vw] uppercase leading-[0.85] tracking-[-0.05em] mb-1 sm:mb-4 hyphens-auto break-words lg:text-nowrap">Google Digital <br/> Marketing</h2>
                <div className="text-[9px] md:text-xs uppercase tracking-widest flex justify-between gap-4 opacity-80">
                  <span>Coursera</span>
                  <span className="text-right">Completed</span>
                </div>
              </div>
            </div>
         </div>
         
         <div className="flex justify-between mt-4 sm:mt-0 pb-4 sm:pb-0">
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
