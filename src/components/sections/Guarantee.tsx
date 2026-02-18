// src/components/sections/Guarantee.tsx
import { Timer, Zap, ShieldCheck } from 'lucide-react';

export default function Guarantee() {
  const features = [
    {
      icon: <Timer className="w-10 h-10 text-old-gold" />,
      title: "90-Min Target Arrival",
      desc: "Our rapid response team is strategically located across Dubai to reach your property fast."
    },
    {
      icon: <Zap className="w-10 h-10 text-old-gold" />,
      title: "50% Waiver Policy",
      desc: "Total transparency: If we arrive after 100 minutes, 50% of your service charge is waived."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-old-gold" />,
      title: "Certified Experts",
      desc: "SOP-based execution ensures minimal disruption to your home or business operations."
    }
  ];

  return (
    // Changed: Increased vertical padding (py-24 md:py-32) and horizontal padding (px-8 md:px-12)
    <section className="bg-heavy-metal py-24 md:py-32 px-8 md:px-12 relative overflow-hidden">
      
      {/* Background Accent - subtle gold line at the top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-old-gold/40 to-transparent" />

      {/* Changed: Increased max-width to [1440px] to match the new site width */}
      <div className="max-w-[1440px] mx-auto border border-old-gold/10 bg-white/[0.02] p-12 md:p-20 rounded-sm relative shadow-2xl">
        
        {/* Subtle decorative corners */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-old-gold/30" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-old-gold/30" />

        {/* Changed: Increased gap to 16 md:gap-24 for a more expansive feel */}
        <div className="grid md:grid-cols-3 gap-16 md:gap-24">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-6 group">
              <div className="p-5 bg-old-gold/5 rounded-full border border-old-gold/10 group-hover:scale-110 transition-transform duration-500">
                {f.icon}
              </div>
              <div className="space-y-3">
                <h3 className="text-ecru-white font-black text-xl tracking-tight uppercase group-hover:text-old-gold transition-colors">
                  {f.title}
                </h3>
                <p className="text-dove-gray text-base leading-relaxed max-w-xs font-medium">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}