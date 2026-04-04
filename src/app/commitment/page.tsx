import Image from "next/image";
import Link from "next/link";

export default function Commitment() {
  return (
    <main className="min-h-screen w-full flex flex-col sm:flex-row relative">
      <div className="w-full sm:w-1/2 p-4 sm:p-8 pt-24 sm:pt-32 flex flex-col justify-between h-auto sm:h-screen min-h-[70vh]">
         <div>
           <p className="text-[10px] md:text-xs uppercase tracking-widest mb-8">// PAGE 05 - COMMITMENT</p>
           <h2 className="font-display text-[14vw] sm:text-[8vw] uppercase leading-[0.75] tracking-[-0.05em] mb-12">Social <br/> Impact</h2>
           
           <div className="flex flex-col gap-8 flex-1 justify-end pb-8">
             <div className="border-t border-[#111111] pt-4">
               <p className="text-[10px] md:text-xs uppercase tracking-widest mb-2 flex justify-between"><span>Global Initiative</span> <span>2024</span></p>
               <p className="text-sm opacity-70 max-w-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
             </div>
             <div className="border-t border-[#111111] pt-4">
               <p className="text-[10px] md:text-xs uppercase tracking-widest mb-2 flex justify-between"><span>Local Empower</span> <span>2023</span></p>
               <p className="text-sm opacity-70 max-w-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
             </div>
           </div>

           {/* Contact Info at bottom of commitment */}
           <div className="border-t border-[#111111] pt-8 mt-4 pb-8 sm:pb-0">
              <h3 className="font-display text-[8vw] sm:text-[4vw] uppercase leading-[0.75] tracking-[-0.05em] mb-6">Engage</h3>
              <div className="grid grid-cols-2 gap-8 text-[10px] md:text-xs uppercase tracking-widest">
                <div>
                  <p className="opacity-50 mb-2">Email</p>
                  <a href="mailto:madhurika573@gmail.com" className="hover:line-through font-bold">madhurika573@gmail.com</a>
                </div>
                <div>
                  <p className="opacity-50 mb-2">Network</p>
                  <div className="flex flex-col gap-1 font-bold">
                    <a href="#" className="hover:line-through">LinkedIn</a>
                    <a href="#" className="hover:line-through">Instagram</a>
                  </div>
                </div>
              </div>
           </div>
         </div>

         <div className="flex justify-between mt-12 sm:mt-0 mb-8 sm:mb-0">
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
      <div className="w-full sm:w-1/2 h-[50vh] sm:h-screen min-h-[500px] relative border-t sm:border-t-0 sm:border-l border-[#111111]">
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
