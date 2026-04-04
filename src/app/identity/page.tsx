import Image from "next/image";
import Link from "next/link";

export default function Identity() {
  return (
    <main className="h-dvh w-full flex flex-col relative overflow-hidden bg-background">
      <div className="p-4 sm:p-8 pt-12 sm:pt-32 shrink-0">
        <p className="text-[10px] md:text-xs uppercase tracking-widest mb-2 sm:mb-8 opacity-50 px-0.5">// PAGE 03 - IDENTITY</p>
        <h2 className="font-display text-[10vw] sm:text-[7vw] uppercase leading-[0.75] tracking-[-0.05em] mb-4">Iden-tity</h2>
      </div>
      <div className="flex flex-col sm:flex-row flex-1 border-t border-[#111111]/30 overflow-hidden">
         <div className="w-full sm:w-1/2 p-4 sm:p-8 flex flex-col justify-between h-[50dvh] sm:h-full overflow-y-auto shrink-0">
           <div className="space-y-4 sm:space-y-6 flex-1 flex flex-col justify-center">
             <p className="text-xl sm:text-2xl lg:text-3xl leading-[1.1] sm:leading-relaxed px-0.5">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
             </p>
             <p className="text-xs sm:text-sm opacity-70 border-l border-[#111111] pl-4 max-w-sm hidden sm:block">
               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
             </p>
           </div>
           
           <div className="flex justify-between mt-4 sm:mt-0 font-sans pb-4 sm:pb-0 shrink-0">
             <Link href="/credentials" className="text-xs md:text-sm uppercase tracking-widest hover:line-through inline-flex items-center gap-4 w-max opacity-50 group">
               <span className="font-display text-lg leading-none transform group-hover:-translate-x-1 transition-transform">←</span>
               <span>Prev</span>
             </Link>
             <Link href="/capabilities" className="text-xs md:text-sm uppercase tracking-widest hover:line-through inline-flex items-center gap-4 w-max group">
               <span>Next: Capabilities</span>
               <span className="font-display text-lg leading-none transform group-hover:translate-x-1 transition-transform">→</span>
             </Link>
           </div>
         </div>
         <div className="w-full sm:w-1/2 h-[50dvh] sm:h-full relative border-t sm:border-t-0 sm:border-l border-[#111111]/30">
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
