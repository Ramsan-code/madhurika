import Image from "next/image";
import Link from "next/link";

export default function Intro() {
  return (
    <main className="min-h-screen w-full flex flex-col sm:flex-row relative">
      <div className="w-full sm:w-1/2 p-4 sm:p-8 pt-24 sm:pt-32 flex flex-col justify-between h-auto sm:h-screen min-h-[70vh]">
        <div>
          <p className="text-[10px] md:text-xs uppercase tracking-widest mb-8">// PAGE 01 - INTRO</p>
          <h1 className="font-display text-[15vw] sm:text-[10vw] uppercase leading-[0.75] tracking-[-0.06em] flex flex-col">
            <span>The</span>
            <span className="ml-[10%]">Aloof</span>
            <span>Edition</span>
          </h1>
        </div>
        <div className="flex flex-col mt-12 sm:mt-0 mb-8 sm:mb-0">
          <p className="text-sm sm:text-base max-w-sm opacity-70 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <Link href="/credentials" className="text-[10px] md:text-xs uppercase tracking-widest hover:line-through inline-flex items-center gap-4 w-max">
            <span>Next: Credentials</span>
            <span className="font-display text-lg leading-none">→</span>
          </Link>
        </div>
      </div>
      <div className="w-full sm:w-1/2 h-[50vh] sm:h-screen min-h-[500px] relative border-t sm:border-t-0 sm:border-l border-[#111111]">
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
