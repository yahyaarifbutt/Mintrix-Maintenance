"use client";
import React from 'react';
import Link from "next/link";
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Clock, MapPin } from "lucide-react";


export default function HomeCTA() {
  return (
    <section className="relative bg-ecru-white py-20 md:py-40 px-6 md:px-12 overflow-hidden border-t border-heavy-metal/10">
      
      {/* --- BLUEPRINT BACKGROUND --- */}
      
      
      {/* Soft radial glow to keep center text crisp */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[600px] bg-old-gold/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
          
          {/* --- LEFT: MISSION CRITICAL INFO --- */}
          <div className="space-y-6 md:space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 bg-heavy-metal text-old-gold px-4 py-2 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em]"
            >
              <ShieldCheck size={14} /> Status: Ready for Dispatch
            </motion.div>

            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase italic tracking-tighter leading-[0.9] lg:leading-[0.85] text-heavy-metal">
              Secure Your <br />
              <span className="text-old-gold">Asset Standards.</span>
            </h2>

            <div className="grid grid-cols-2 gap-4 md:gap-8 pt-2 md:pt-4">
              <div className="space-y-1 md:space-y-2 border-l-2 border-old-gold pl-4 md:pl-6">
                <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-heavy-metal/40">Response Time</p>
                <p className="text-base md:text-lg font-black text-heavy-metal">90 Minutes</p>
              </div>
              <div className="space-y-1 md:space-y-2 border-l-2 border-old-gold pl-4 md:pl-6">
                <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-heavy-metal/40">Location HQ</p>
                <p className="text-base md:text-lg font-black text-heavy-metal">Business Bay</p>
              </div>
            </div>
          </div>

          {/* --- RIGHT: THE DECISIVE ACTION --- */}
          <div className="bg-white/40 backdrop-blur-md border border-heavy-metal/5 p-8 md:p-14 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 border-t-4 border-r-4 border-old-gold/20" />
            
            <p className="text-lg md:text-xl text-heavy-metal/70 font-medium leading-relaxed mb-8 md:mb-10">
              Whether you require an emergency repair or a comprehensive technical audit, our specialists provide the precision your property deserves.
            </p>

            <Link
              href="/contact"
              className="relative w-full inline-flex group overflow-hidden bg-heavy-metal text-ecru-white py-6 md:py-8 font-black text-[10px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.5em] transition-all shadow-xl shadow-heavy-metal/20"
            >
              <span className="relative z-10 w-full flex justify-center items-center gap-3 md:gap-4 px-4 text-center">
                Initialize Consultation <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500 shrink-0" />
              </span>
              {/* Premium Fill Animation */}
              <div className="absolute inset-0 bg-old-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            </Link>
            
            <div className="mt-6 md:mt-8 flex items-center justify-center gap-2 md:gap-3 text-heavy-metal/30">
              <Clock size={14} className="shrink-0" />
              <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.1em] md:tracking-[0.2em] text-center">
                Verified 24/7 Availability Across Dubai
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}