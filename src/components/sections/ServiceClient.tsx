// src/components/sections/ServiceClient.tsx
"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Clock, ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';
import BackgroundGrid from '@/components/ui/BackgroundGrid';

export default function ServiceClient({ service }: { service: any }) {
  const itemVars: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <>
      {/* --- ELITE HERO --- */}
      <section className="relative bg-heavy-metal py-24 md:py-44 px-8 md:px-12 text-ecru-white overflow-hidden">
        <BackgroundGrid />
        
        <div className="max-w-[1440px] mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-old-gold" />
            <h2 className="text-old-gold font-black text-[10px] tracking-[0.5em] uppercase">
              Operational Specialist // {service.category || "General Maintenance"}
            </h2>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-6xl md:text-9xl font-black uppercase italic text-ecru-white mb-10 tracking-tighter leading-[0.85]">
            {service.title}<span className="text-old-gold">.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl text-dove-gray max-w-3xl font-medium leading-relaxed border-l-4 border-old-gold pl-8">
            {service.description}
          </motion.p>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }} className="mt-16 inline-flex items-center gap-6 bg-white/5 border border-white/10 p-6 backdrop-blur-xl">
            <div className="w-12 h-12 bg-old-gold flex items-center justify-center text-heavy-metal">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-old-gold">Downtown Guarantee</p>
              <p className="text-lg font-black uppercase tracking-tight">90-Minute Response Arrival</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- TECHNICAL BRIEFING --- */}
      <section className="py-24 md:py-32 px-8 md:px-12">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-7 space-y-12">
            <h3 className="text-heavy-metal text-4xl font-black uppercase italic tracking-tighter leading-none">
              Engineering <br /> <span className="text-old-gold">Excellence.</span>
            </h3>
            <div className="text-heavy-metal/80 font-medium text-xl leading-relaxed space-y-8">
              <p>{service.longDescription || "Mintrix provides boutique-grade technical solutions engineered specifically for the vertical infrastructure of Downtown Dubai."}</p>
              <div className="grid md:grid-cols-2 gap-8 pt-8">
                <div className="space-y-4">
                  <ShieldCheck className="text-old-gold" size={32} />
                  <h4 className="font-black uppercase text-sm tracking-widest">Certified Protocols</h4>
                  <p className="text-sm leading-relaxed">Full compliance with UAE high-rise building regulations.</p>
                </div>
                <div className="space-y-4">
                  <Zap className="text-old-gold" size={32} />
                  <h4 className="font-black uppercase text-sm tracking-widest">Rapid Mobilization</h4>
                  <p className="text-sm leading-relaxed">Local dispatch centers ensure zero-latency service.</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div variants={itemVars} initial="initial" whileInView="animate" viewport={{ once: true }} className="lg:col-span-5 bg-white p-12 border border-heavy-metal/5 shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-old-gold" />
            <h3 className="text-heavy-metal font-black uppercase tracking-[0.4em] text-[10px] mb-12 opacity-40">// Technical Specs</h3>
            <ul className="space-y-8">
              {service.features?.map((f: string, i: number) => (
                <li key={i} className="flex items-start gap-6 group">
                  <div className="mt-1.5 w-2 h-2 bg-old-gold rounded-full group-hover:scale-150 transition-transform" />
                  <p className="text-heavy-metal font-black text-xl uppercase tracking-tighter italic">{f}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  );
}