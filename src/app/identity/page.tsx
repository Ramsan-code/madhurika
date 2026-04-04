import Image from "next/image";
import Link from "next/link";

export default function Identity() {
  return (
    <main className="min-h-screen w-full flex flex-col relative">
      <div className="p-4 sm:p-8 pt-24 sm:pt-32">
        <p className="text-[10px] md:text-xs uppercase tracking-widest mb-4 sm:mb-8">// PAGE 03 - IDENTITY</p>
        <h2 className="font-display text-[15vw] sm:text-[14vw] uppercase leading-[0.75] tracking-[-0.05em]">Iden-tity</h2>
      </div>
      <div className="flex flex-col sm:flex-row flex-1 border-t border-[#111111]">
         <div className="w-full sm:w-1/2 p-4 sm:p-8 flex flex-col justify-between h-auto min-h-[50vh]">
           <div className="space-y-6">
             <p className="text-xl sm:text-2xl leading-relaxed">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
             </p>
             <p className="text-sm opacity-70 border-l border-[#111111] pl-4 max-w-sm">
               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
             </p>
           </div>
           
           <div className="flex justify-between mt-12 sm:mt-0 font-sans">
             <Link href="/credentials" className="text-[10px] md:text-xs uppercase tracking-widest hover:line-through inline-flex items-center gap-4 w-max opacity-50">
               <span className="font-display text-lg leading-none">←</span>
               <span>Prev</span>
             </Link>
             <Link href="/capabilities" className="text-[10px] md:text-xs uppercase tracking-widest hover:line-through inline-flex items-center gap-4 w-max">
               <span>Next: Capabilities</span>
               <span className="font-display text-lg leading-none">→</span>
             </Link>
           </div>
         </div>
         <div className="w-full sm:w-1/2 h-[50vh] sm:h-auto min-h-[500px] relative border-t sm:border-t-0 sm:border-l border-[#111111]">
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
