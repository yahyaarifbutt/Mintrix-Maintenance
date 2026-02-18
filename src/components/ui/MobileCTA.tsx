// src/components/ui/MobileCTA.tsx
export default function MobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full grid grid-cols-2 z-50 shadow-[0_-10px_30px_rgba(0,0,0,0.3)] border-t border-old-gold/20">
      <a 
        href="tel:+971500000000" 
        className="bg-heavy-metal text-ecru-white py-5 text-center font-black text-xs tracking-widest uppercase flex flex-col items-center justify-center gap-1 active:bg-black transition-colors"
      >
        <span className="text-[10px] opacity-60">Emergency</span>
        CALL NOW
      </a>
      <a 
        href="https://wa.me/971500000000" 
        className="bg-old-gold text-heavy-metal py-5 text-center font-black text-xs tracking-widest uppercase flex flex-col items-center justify-center gap-1 active:brightness-90 transition-all"
      >
        <span className="text-[10px] opacity-60">90-Min Arrival</span>
        WHATSAPP
      </a>
    </div>
  );
}

