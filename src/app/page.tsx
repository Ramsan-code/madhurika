import Image from "next/image";
import Link from "next/link";

export default function Intro() {
  return (
    <main className="h-dvh w-full flex flex-col sm:flex-row relative overflow-hidden bg-background">
      <div className="w-full sm:w-1/2 p-4 sm:p-8 pt-12 sm:pt-24 flex flex-col justify-center h-[60dvh] sm:h-full overflow-hidden shrink-0">
        <div>
          <p className="text-[10px] md:text-xs uppercase tracking-widest mb-4 sm:mb-8 opacity-50 px-0.5">// PAGE 01 - INTRO</p>
          <h1 className="font-display text-[10.5vw] sm:text-[7vw] lg:text-[6.8vw] uppercase leading-[0.75] tracking-[-0.06em] flex flex-col relative z-10 w-full">
            <span>Project &</span>
            <span className="sm:ml-2">operations</span>
            <span>manager</span>
          </h1>
        </div>
        <div className="flex flex-col mt-4 sm:mt-12 mb-4 sm:mb-0">
          <p className="text-lg sm:text-2xl lg:text-3xl max-w-xl font-medium opacity-90 mb-6 sm:mb-10 line-clamp-4 sm:line-clamp-none leading-[1.2] tracking-tight">
           Motivated and enthusiastic fresher currently pursuing a Higher National Diploma (HND) in Business
and Management (Hons).Develop professional skills, and contribute positively to NewBorn Cinema success.
          </p>
          <div className="flex flex-wrap gap-4 items-center mb-8 border-t border-[#111111]/10 pt-6">
            <p className="text-[9px] uppercase font-bold tracking-widest opacity-40 w-full mb-1 font-mono">// CONNECT_ED</p>
            <a href="mailto:madhurika573@gmail.com" className="group/icon relative w-10 h-10 flex items-center justify-center transition-all duration-500">
              <div className="absolute inset-0 bg-[#3b82f6] rounded-full scale-75 group-hover/icon:scale-100 group-hover/icon:rotate-12 transition-all duration-500 opacity-20 group-hover/icon:opacity-100"></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 text-[#111111] group-hover/icon:text-white transition-colors"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/madhu-rika-1801aa205/" target="_blank" rel="noopener noreferrer" className="group/icon relative w-10 h-10 flex items-center justify-center transition-all duration-500">
              <div className="absolute inset-0 bg-[#3b82f6] rounded-full scale-75 group-hover/icon:scale-100 group-hover/icon:-rotate-12 transition-all duration-500 opacity-20 group-hover/icon:opacity-100"></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 text-[#111111] group-hover/icon:text-white transition-colors"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" className="group/icon relative w-10 h-10 flex items-center justify-center transition-all duration-500">
              <div className="absolute inset-0 bg-[#3b82f6] rounded-full scale-75 group-hover/icon:scale-100 group-hover/icon:rotate-12 transition-all duration-500 opacity-10 group-hover/icon:opacity-60"></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 text-[#111111]/30 group-hover/icon:text-[#111111] transition-colors"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
          </div>

          <Link href="/credentials" className="text-[11px] md:text-xs uppercase tracking-widest hover:line-through inline-flex items-center gap-4 w-max group mb-8">
            <span>Next: Education</span>
            <span className="font-display text-lg leading-none transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
      <div className="w-full sm:w-1/2 h-[40dvh] sm:h-full relative border-t sm:border-t-0 sm:border-l border-[#111111]/30">
        <Image
          src="/intro_photo.png"
          alt="Introduction"
          fill
          className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
          priority
        />
      </div>
    </main>
  );
}
