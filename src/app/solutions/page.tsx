"use client";
import React from 'react';
import Image from 'next/image';
import { CheckCircle2, ArrowRight, Star, Clock, ShieldCheck } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const CaseStudies = [
  {
    title: "The Burj Residences: AC Critical Failure",
    location: "Downtown Dubai",
    image: "/ac.jpg", 
    problem: "A 4-bedroom penthouse experienced total cooling loss during a July heatwave, risking damage to bespoke joinery and art collections.",
    solution: "Our rapid-response team arrived in 35 minutes. Diagnosed a complex VFD compressor fault and executed an emergency bypass while sourcing OEM parts internally.",
    result: "Ambient temperature restored within 90 minutes. Asset damage prevented. Client signed an annual preventive contract immediately.",
    stats: { time: "90 Mins", savings: "$25k+", status: "Resolved" }
  },
  {
    title: "Emaar Square: Data Center Cooling & Power",
    location: "Corporate Tower 2",
    image: "/data-c.jpg", 
    problem: "Recurring micro-surges and inefficient cooling in the server room were causing critical operational downtime for a multinational tenant.",
    solution: "Conducted a full thermal imaging audit of electrical panels. Installed industrial-grade voltage stabilizers and re-balanced HVAC airflow for high-density server racks.",
    result: "Zero downtime in 8 months since intervention. Server room operating temperature lowered by 18%.",
    stats: { time: "48 Hrs", savings: "100% Uptime", status: "Optimized" }
  }
];

export default function SolutionsPage() {
  return (
    <main className="bg-heavy-metal text-ecru-white min-h-screen">
      <Navbar />

      {/* --- SECTION 1: DARK HERO (The Hook) --- */}
      <section className="relative pt-40 pb-32 px-8 md:px-12 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/downtown-dubai-hero.jpg" 
            alt="Downtown Dubai Luxury Properties" 
            fill 
            className="object-cover grayscale-[30%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-heavy-metal via-heavy-metal/90 to-heavy-metal/60" />
        </div>

        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-old-gold"></div>
            <h2 className="text-old-gold font-black text-xs tracking-[0.5em] uppercase">
              Elite Solutions for Downtown Dubai
            </h2>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-black uppercase italic tracking-tighter leading-[0.9] mb-12 drop-shadow-2xl">
            Protecting <br /> Dubai's Most <br /> <span className="text-old-gold">Valuable Assets.</span>
          </h1>
          <p className="text-ecru-white/80 text-2xl max-w-3xl leading-relaxed font-medium border-l-4 border-old-gold pl-8">
            Downtown living demands perfection. We analyze the unique technical challenges of high-rise luxury and engineer proactive solutions before they impact your lifestyle.
          </p>
        </div>
      </section>

      {/* --- SECTION 2: DARK TEXTURED GRID (The Challenges) --- */}
      {/* Applying the Blueprint and Carbon textures here specifically */}
      <section className="relative py-32 px-8 md:px-12 overflow-hidden">
        {/* Localized textures for this section only */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#D1AB43 1px, transparent 1px), linear-gradient(90deg, #D1AB43 1px, transparent 1px)', backgroundSize: '100px 100px' }} />

        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="text-center mb-20">
              <h3 className="text-4xl font-black uppercase tracking-tighter mb-4 italic">The Downtown Challenge</h3>
              <p className="text-dove-gray text-lg max-w-2xl mx-auto">We specialize in the specific technical demands of luxury high-rise infrastructure.</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-10">
              {/* Card 1: HVAC */}
              <div className="relative group h-[500px] overflow-hidden rounded-sm border border-white/10 hover:border-old-gold/50 transition-all duration-500">
                  <Image src="/ac.jpg" alt="Luxury HVAC" fill className="object-cover group-hover:scale-110 transition-transform duration-1000"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-heavy-metal via-heavy-metal/50 to-transparent opacity-90" />
                  <div className="absolute inset-0 p-10 flex flex-col justify-end z-20">
                      <h4 className="text-3xl font-black uppercase mb-4 italic leading-none">High-Rise HVAC Precision</h4>
                      <p className="text-ecru-white/70 leading-relaxed mb-8 font-medium">
                          Combating pressure imbalances and rapid cooling loss typical in glass-facade towers.
                      </p>
                      <div className="pt-6 border-t border-old-gold/30 flex justify-between items-center">
                          <span className="text-old-gold font-black text-[10px] tracking-widest uppercase">Our Fix</span>
                          <span className="text-[11px] font-black uppercase tracking-tighter flex items-center gap-2">Laser Calibration <ArrowRight size={14} className="text-old-gold"/></span>
                      </div>
                  </div>
              </div>

              {/* Card 2: Electrical */}
              <div className="relative group h-[500px] overflow-hidden rounded-sm border border-white/10 hover:border-old-gold/50 transition-all duration-500">
                  <Image src="/data-c.jpg" alt="Smart Electrical" fill className="object-cover group-hover:scale-110 transition-transform duration-1000"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-heavy-metal via-heavy-metal/50 to-transparent opacity-90" />
                  <div className="absolute inset-0 p-10 flex flex-col justify-end z-20">
                      <h4 className="text-3xl font-black uppercase mb-4 italic leading-none">Smart Load Management</h4>
                      <p className="text-ecru-white/70 leading-relaxed mb-8 font-medium">
                          Supporting high-consumption automation and server stacks without circuit trips.
                      </p>
                      <div className="pt-6 border-t border-old-gold/30 flex justify-between items-center">
                          <span className="text-old-gold font-black text-[10px] tracking-widest uppercase">Our Fix</span>
                          <span className="text-[11px] font-black uppercase tracking-tighter flex items-center gap-2">Phase Balancing <ArrowRight size={14} className="text-old-gold"/></span>
                      </div>
                  </div>
              </div>

              {/* Card 3: Finishes */}
              <div className="relative group h-[500px] overflow-hidden rounded-sm border border-white/10 hover:border-old-gold/50 transition-all duration-500">
                  <Image src="/ac.jpg" alt="Luxury Finishes" fill className="object-cover group-hover:scale-110 transition-transform duration-1000"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-heavy-metal via-heavy-metal/50 to-transparent opacity-90" />
                  <div className="absolute inset-0 p-10 flex flex-col justify-end z-20">
                      <h4 className="text-3xl font-black uppercase mb-4 italic leading-none">Artisan Repair Protocols</h4>
                      <p className="text-ecru-white/70 leading-relaxed mb-8 font-medium">
                          Executing complex repairs without compromising delicate wallpapers or bespoke joinery.
                      </p>
                      <div className="pt-6 border-t border-old-gold/30 flex justify-between items-center">
                          <span className="text-old-gold font-black text-[10px] tracking-widest uppercase">Our Fix</span>
                          <span className="text-[11px] font-black uppercase tracking-tighter flex items-center gap-2">Clean-Room Prep <ArrowRight size={14} className="text-old-gold"/></span>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: LIGHT MAGAZINE (The Proof) --- */}
      <section className="py-32 bg-ecru-white text-heavy-metal px-8 md:px-12 border-y border-heavy-metal/5">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-end mb-24">
              <div>
                <h2 className="text-old-gold font-black text-xs tracking-[0.5em] uppercase mb-4">Proven Results</h2>
                <h3 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none text-heavy-metal">
                    Case <span className="text-old-gold">Studies.</span>
                </h3>
              </div>
              <p className="text-dove-gray text-lg font-medium max-w-lg pb-2 border-b-2 border-old-gold/40">Real-world examples of how we handle critical failures in premier Downtown properties.</p>
          </div>

          <div className="space-y-32">
            {CaseStudies.map((study, i) => (
              <div key={i} className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:rtl' : ''}`}>
                
                {/* Image Side */}
                <div className={`relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl group ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="absolute top-8 left-8 z-20 bg-heavy-metal/90 backdrop-blur-md text-old-gold px-6 py-3 flex items-center gap-3 rounded-sm">
                        <Star size={14} className="fill-old-gold"/>
                        <span className="text-[10px] font-black tracking-[0.2em] uppercase">{study.location}</span>
                    </div>
                    <Image src={study.image} alt={study.title} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                </div>

                {/* Content Side */}
                <div className={`${i % 2 === 1 ? 'lg:ltr text-left' : 'text-left'}`}>
                  <span className="text-old-gold/20 font-black text-8xl leading-none -ml-4 select-none">0{i + 1}</span>
                  <h4 className="text-3xl md:text-5xl font-black uppercase mt-2 mb-10 leading-tight italic tracking-tighter">{study.title}</h4>
                  
                  <div className="space-y-10 relative">
                    <div className="absolute left-[19px] top-2 bottom-2 w-[1px] bg-old-gold/30 h-full -z-10"></div>

                    <div className="flex gap-8 relative">
                        <div className="w-10 h-10 rounded-full bg-heavy-metal border-2 border-old-gold flex items-center justify-center shrink-0 relative z-10 shadow-lg shadow-old-gold/20">
                            <span className="text-old-gold text-lg font-black italic">P</span>
                        </div>
                        <div>
                            <p className="font-black uppercase text-[10px] tracking-[0.3em] text-heavy-metal/40 mb-2">The Problem</p>
                            <p className="text-lg font-medium leading-relaxed text-heavy-metal/90">{study.problem}</p>
                        </div>
                    </div>

                    <div className="flex gap-8 relative">
                        <div className="w-10 h-10 rounded-full bg-old-gold border-2 border-heavy-metal flex items-center justify-center shrink-0 relative z-10">
                            <span className="text-heavy-metal text-lg font-black italic">S</span>
                        </div>
                        <div>
                            <p className="font-black uppercase text-[10px] tracking-[0.3em] text-old-gold mb-2">The Solution</p>
                            <p className="text-lg font-bold leading-relaxed italic text-heavy-metal">{study.solution}</p>
                        </div>
                    </div>

                    <div className="flex gap-8 relative">
                         <div className="w-10 h-10 rounded-full bg-green-600/10 border-2 border-green-600/30 flex items-center justify-center shrink-0 relative z-10">
                            <CheckCircle2 size={18} className="text-green-600"/>
                        </div>
                        <div>
                             <p className="font-black uppercase text-[10px] tracking-[0.3em] text-green-600 mb-2">The Result</p>
                            <p className="text-lg font-medium leading-relaxed text-heavy-metal/70">{study.result}</p>
                        </div>
                    </div>
                  </div>

                  {/* Dark Stats Box for high contrast against light background */}
                  <div className="mt-12 grid grid-cols-3 gap-4 bg-heavy-metal p-6 rounded-sm text-ecru-white shadow-xl">
                        <div className="text-center">
                            <p className="text-2xl font-black text-old-gold">{study.stats.time}</p>
                            <p className="text-[9px] uppercase tracking-widest opacity-60">Resolution</p>
                        </div>
                        <div className="text-center border-x border-white/10">
                            <p className="text-2xl font-black text-old-gold">{study.stats.savings}</p>
                            <p className="text-[9px] uppercase tracking-widest opacity-60">Protected</p>
                        </div>
                        <div className="text-center">
                            <p className="text-xl font-black uppercase">{study.stats.status}</p>
                            <p className="text-[9px] uppercase tracking-widest opacity-60">Status</p>
                        </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: DARK CLOSING (The Action) --- */}
       <section className="py-32 bg-heavy-metal px-8 md:px-12 text-center relative overflow-hidden">
            <div className="max-w-3xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter mb-8 text-ecru-white leading-[0.85]">
                    Elite Care for <br /> <span className="text-old-gold">Downtown Dubai.</span>
                </h2>
                <p className="text-xl text-dove-gray mb-12 leading-relaxed">
                    Preventive audits are the standard for premium property maintenance. Protect your investment with Mintrix today.
                </p>
                <button className="bg-old-gold text-heavy-metal px-16 py-6 font-black text-xs uppercase tracking-[0.4em] transition-all hover:bg-ecru-white shadow-2xl shadow-old-gold/20 hover:scale-105 active:scale-95">
                    Dispatch Audit Team
                </button>
            </div>
       </section>
      
      <Footer />
    </main>
  );
}