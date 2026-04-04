'use client';
import { useRef, useState } from "react";
import Link from "next/link";
import emailjs from '@emailjs/browser';

export default function Commitment() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    // Note: User will need to replace these with their own EmailJS IDs in environment variables later
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
      .then(() => {
        setStatus('success');
        formRef.current?.reset();
      }, () => {
        setStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setStatus('idle'), 5000);
      });
  };

  return (
    <main className="h-dvh w-full flex flex-col sm:flex-row relative overflow-hidden bg-background select-none">

      <div className="w-full sm:w-1/2 p-4 sm:p-6 lg:p-8 pt-10 sm:pt-24 lg:pt-32 flex flex-col justify-between h-[60dvh] sm:h-full overflow-hidden shrink-0 relative z-10 bg-white/10 backdrop-blur-sm">
         <div className="flex-1 flex flex-col justify-center pr-2 no-scrollbar">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold mb-2 sm:mb-4 lg:mb-8 opacity-40 px-0.5">// PAGE 05 - SOCIAL IMPACT</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[6vw] uppercase leading-[0.75] tracking-[-0.05em] mb-4 sm:mb-8 lg:mb-12 px-0.5 group hover:italic transition-all">Social <br/> Impact</h2>
            
            <div className="flex flex-col gap-4 sm:gap-4 lg:gap-6 py-2 lg:py-6">
              <div className="border-t-2 border-[#111111] pt-4">
                <p className="text-[14px] sm:text-lg lg:text-xl font-display uppercase leading-tight mb-2 tracking-tight group-hover:italic transition-all">Values & Vision</p>
                <div className="space-y-4">
                  <p className="text-[9px] sm:text-[10px] lg:text-[13px] opacity-70 leading-relaxed font-sans max-w-lg">
                    My work is driven by two unshakeable pillars: empowering women and environmental sustainability. I believe gender equity and a protected planet build a smarter, more resilient future for global business.
                  </p>
                  <p className="text-[9px] sm:text-[10px] lg:text-[13px] opacity-70 leading-relaxed font-sans max-w-lg hidden sm:block">
                    Through HR Management, I view culture as a platform for equity. My interests in Marketing and Product Management are the tools I use to scale this impact; aligning high-performance with social accountability.
                  </p>
                </div>
              </div>
              <div className="border-t border-[#111111]/30 pt-4">
                 <p className="text-[14px] sm:text-lg lg:text-xl font-display uppercase leading-tight mb-1 tracking-tight">Digital Advocacy</p>
                 <p className="text-[9px] sm:text-[10px] lg:text-[13px] opacity-70 leading-relaxed font-sans max-w-lg">
                  I don’t just consume trends; I actively shape conversations through original content, turning complex social issues into engaging narratives that drive real-world change.
                </p>
              </div>

               <div className="border-t border-[#111111]/30 pt-4 border-b border-[#111111]/30 pb-4">
                  <p className="text-[9px] uppercase font-bold tracking-widest opacity-40 mb-4 font-mono">// CONNECT_ED</p>
                  <div className="flex flex-wrap gap-6 items-center">
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
               </div>
            </div>
         </div>
  
         <div className="flex justify-between items-end mt-2 pb-4 sm:pb-0 shrink-0 relative z-20 pt-4">
            <div className="hidden lg:block text-[9px] uppercase tracking-[0.3em] font-mono opacity-30">
              <p>Loc: Colombo / SL</p>
              <p>Lat: 6.9271 / Lon: 79.8612</p>
            </div>
            <div className="flex items-center gap-8">
              <Link href="/capabilities" className="text-xs md:text-[11px] uppercase tracking-[0.2em] font-black hover:line-through inline-flex items-center gap-4 w-max opacity-40 group">
                <span className="font-display text-2xl leading-none transition-transform group-hover:-translate-x-2">←</span>
                <span>Prev</span>
              </Link>
              <Link href="/" className="text-xs md:text-[11px] uppercase tracking-[0.2em] font-black hover:line-through inline-flex items-center gap-4 w-max group">
                <span>Finish</span>
                <span className="font-display text-2xl leading-none transition-transform group-hover:rotate-180">↺</span>
              </Link>
            </div>
          </div>
       </div>

       {/* Contact Form Section */}
       <div className="w-full sm:w-1/2 h-[40dvh] sm:h-full relative border-t sm:border-t-0 sm:border-l-2 border-[#111111] bg-white p-4 sm:p-8 lg:p-16 xl:p-24 flex flex-col justify-center relative z-10 transition-all duration-700">
         <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-6 max-w-lg w-full mx-auto group/form">
            <div className="space-y-4">
              <div className="flex justify-between items-baseline mb-4">
                <h3 className="font-display text-3xl sm:text-4xl uppercase leading-[0.75] tracking-[-0.05em]">Direct <br/> Message</h3>
                <span className="text-[9px] font-mono opacity-20 group-hover/form:opacity-100 transition-opacity uppercase tracking-widest hidden sm:block">Transmitter Ready</span>
              </div>
              
              <div className="space-y-1 group/input">
                <label className="text-[9px] uppercase font-black tracking-[0.2em] opacity-40 group-focus-within/input:opacity-100 transition-all">01 // Full Name</label>
                <input 
                  type="text" 
                  name="user_name" 
                  required 
                  className="w-full bg-transparent border-b border-zinc-200 focus:border-[#111111] py-2 focus:outline-none transition-all text-xs uppercase tracking-widest font-medium placeholder:opacity-20" 
                  placeholder="IDENTIFY YOURSELF"
                />
              </div>

              <div className="space-y-1 group/input">
                <label className="text-[9px] uppercase font-black tracking-[0.2em] opacity-40 group-focus-within/input:opacity-100 transition-all">02 // Email Address</label>
                <input 
                  type="email" 
                  name="user_email" 
                  required 
                  className="w-full bg-transparent border-b border-zinc-200 focus:border-[#111111] py-2 focus:outline-none transition-all text-xs uppercase tracking-widest font-medium placeholder:opacity-20" 
                  placeholder="RETURN CHANNEL"
                />
              </div>

              <div className="space-y-1 group/input">
                <label className="text-[9px] uppercase font-black tracking-[0.2em] opacity-40 group-focus-within/input:opacity-100 transition-all">03 // Message</label>
                <textarea 
                  name="message" 
                  required 
                  rows={2}
                  className="w-full bg-transparent border-b border-zinc-200 focus:border-[#111111] py-2 focus:outline-none transition-all text-xs uppercase tracking-widest font-medium resize-none placeholder:opacity-20" 
                  placeholder="TRANSMIT YOUR CORE VISION..."
                ></textarea>
              </div>
            </div>

            <div className="relative group/btn mt-2">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#111111] text-white py-4 px-8 uppercase font-black tracking-[0.3em] hover:bg-white hover:text-[#111111] border-2 border-[#111111] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-between items-center relative z-10 text-[10px]"
              >
                <span>{isSubmitting ? 'Transmitting...' : 'Initiate Transmission'}</span>
                <span className="font-display text-xl group-hover/btn:translate-x-2 transition-transform">→</span>
              </button>
            </div>

            <div className="flex flex-col gap-1">
              {status === 'success' && (
                <p className="text-[9px] uppercase font-black text-green-600 tracking-[0.3em] animate-pulse">// DATA TRANSMITTED SUCCESSFULLY.</p>
              )}
              {status === 'error' && (
                <p className="text-[9px] uppercase font-black text-red-600 tracking-[0.3em]">// TRANSMISSION FAILURE.</p>
              )}
            </div>
         </form>
       </div>
    </main>
  );
}
