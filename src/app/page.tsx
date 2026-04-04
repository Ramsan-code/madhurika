import Image from "next/image";
import Link from "next/link";

export default function Intro() {
  return (
    <main className="h-dvh w-full flex flex-col sm:flex-row relative overflow-hidden bg-background">
      <div className="w-full sm:w-1/2 p-4 sm:p-8 pt-12 sm:pt-32 flex flex-col justify-between h-[60dvh] sm:h-full overflow-hidden shrink-0">
        <div>
          <p className="text-[10px] md:text-xs uppercase tracking-widest mb-4 sm:mb-8 opacity-50 px-0.5">// PAGE 01 - INTRO</p>
          <h1 className="font-display text-[10.5vw] sm:text-[7vw] lg:text-[6.8vw] uppercase leading-[0.75] tracking-[-0.06em] flex flex-col relative z-10 w-full">
            <span>Project &</span>
            <span className="sm:ml-2">operations</span>
            <span>manager</span>
          </h1>
        </div>
        <div className="flex flex-col mt-4 sm:mt-0 mb-4 sm:mb-0">
          <p className="text-base sm:text-lg max-w-lg opacity-70 mb-4 sm:mb-8 line-clamp-4 sm:line-clamp-none leading-[1.3]">
           Motivated and enthusiastic fresher currently pursuing a Higher National Diploma (HND) in Business
and Management (Hons).Develop professional skills, and contribute positively to NewBorn Cinema success.
          </p>
          <Link href="/credentials" className="text-[11px] md:text-xs uppercase tracking-widest hover:line-through inline-flex items-center gap-4 w-max group">
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
