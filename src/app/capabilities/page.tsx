import Link from "next/link";
import Image from "next/image";

export default function Capabilities() {
  return (
    <main className="h-dvh w-full flex flex-col relative pt-12 sm:pt-24 lg:pt-32 overflow-hidden bg-background select-none">

       <div className="p-4 sm:p-8 flex flex-col flex-1 justify-between overflow-hidden relative z-10">
            <div className="flex-1 flex flex-col justify-center min-h-0">
                <div className="mb-4 sm:mb-8 border-b-2 border-[#111111] pb-2 sm:pb-4 group">
                  <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-40 mb-1">// PAGE 04</p>
                  <h2 className="font-display text-[12vw] sm:text-[9vw] uppercase leading-[0.75] tracking-[-0.05em] group-hover:italic transition-all">Interests</h2>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 border-l border-[#111111]/30">
                  {[
                    { title: "Psycho thrilling movies", desc: "Cinematic depth and complex psychological film arcs.", img: "/interests/thriller.png" },
                    { title: "Photography", desc: "Minimalist analog perspectives and street photography.", img: "/interests/photography.png" },
                    { title: " Hobbies in hand crafts ", desc: "The tangible process of hand crafts and sculpture.", img: "/interests/crafts.png" },
                    { title: "Reading Books", desc: "Curated reading lists focused on world philosophy.", img: "/interests/reading.png" },
                    { title: "Intrest in world news", desc: "Continuous monitoring of world affairs and trends.", img: "/interests/news.png" },
                    { title: "New Skillsets", desc: "The perpetual cycle of technological acquisition.", img: "/interests/learning.png" }
                  ].map((interest, index) => (
                     <div key={index} className="flex flex-col border-r border-b border-[#111111]/30 p-2 sm:p-6 lg:p-8 group hover:bg-[#111111] transition-all duration-700 cursor-crosshair h-full min-h-[120px] sm:min-h-[160px] lg:min-h-[200px] overflow-hidden">
                       <div className="flex justify-between items-start mb-1 sm:mb-4">
                         <span className="text-[9px] font-mono opacity-30 group-hover:opacity-100 group-hover:text-white transition-all">0{index + 1}</span>
                         <div className="w-full h-20 sm:h-36 lg:h-48 relative overflow-hidden grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:-rotate-2 transition-all duration-700 border-2 border-[#111111]/10 bg-zinc-200 group-hover:shadow-[8px_8px_0px_white]">
                           <Image 
                              src={interest.img} 
                              alt={interest.title} 
                              fill 
                              className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:sepia group-hover:hue-rotate-[200deg] group-hover:contrast-125" 
                           />
                         </div>
                       </div>
                       
                       <div className="mt-auto transition-transform duration-500 group-hover:translate-x-1">
                         <h3 className="font-display text-[10px] sm:text-lg lg:text-xl uppercase leading-none tracking-tight mb-1 group-hover:text-white group-hover:italic transition-all duration-500 whitespace-nowrap overflow-hidden text-ellipsis">{interest.title}</h3>
                         <p className="text-[7px] md:text-[10px] opacity-50 group-hover:opacity-80 group-hover:text-white line-clamp-1 leading-none sm:leading-relaxed">
                           {interest.desc}
                         </p>
                       </div>
                     </div>
                  ))}
                </div>
            </div>
 
              <div className="flex justify-between pb-4 sm:pb-0 shrink-0 relative z-20 pt-6 border-t-2 border-[#111111]">
                <Link href="/identity" className="text-xs md:text-[11px] uppercase tracking-[0.2em] font-black hover:line-through inline-flex items-center gap-6 w-max opacity-40 group">
                  <span className="font-display text-2xl leading-none transition-transform group-hover:-translate-x-2">←</span>
                  <span>Skills / 03</span>
                </Link>
                <Link href="/commitment" className="text-xs md:text-[11px] uppercase tracking-[0.2em] font-black hover:line-through inline-flex items-center gap-6 w-max group">
                  <span>Social/ 05</span>
                  <span className="font-display text-2xl leading-none transition-transform group-hover:translate-x-2">→</span>
                </Link>
              </div>
        </div>
     </main>
  );
}
