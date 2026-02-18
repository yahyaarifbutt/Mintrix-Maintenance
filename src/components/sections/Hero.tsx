// src/components/sections/Hero.tsx
"use client";
import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion'; // Added Variants import
import { ShieldCheck, Zap, Clock, Star } from 'lucide-react';

export default function Hero() {
  // Explicitly typing the variants as 'Variants' resolves the easing array mismatch
  const itemVars: Variants = {
    initial: { y: 30, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.8, 
        // Using a type assertion (as [number, number, number, number]) 
        // ensures TypeScript accepts the cubic-bezier array
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number] 
      } 
    }
  };

  return (
    <section className="relative bg-heavy-metal text-ecru-white min-h-[90vh] flex items-center pt-32 pb-32 px-8 md:px-12 overflow-hidden">
      
      {/* 1. LAYER: Background Depth */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-old-gold/10 to-transparent blur-[180px] pointer-events-none" />

      {/* 2. LAYER: Branding Watermark */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none select-none z-0 opacity-[0.01]">
        <span className="text-[20rem] md:text-[40rem] font-black uppercase italic tracking-tighter">MINTRIX</span>
      </div>

      <div className="max-w-[1440px] mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* --- LEFT SIDE: Content --- */}
          <motion.div 
            initial="initial"
            animate="animate"
            className="relative z-20"
          >
            <motion.div variants={itemVars} className="inline-flex items-center gap-4 bg-old-gold/10 border border-old-gold/20 px-4 py-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-old-gold animate-pulse" />
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-old-gold">
                Available 24/7 Across Dubai
              </span>
            </motion.div>

            <h1 className="text-6xl md:text-7xl lg:text-[8.5rem] font-black leading-[0.9] tracking-tighter uppercase italic flex flex-col">
              <motion.span variants={itemVars} className="block text-ecru-white">Premium</motion.span>
              <motion.span variants={itemVars} className="text-old-gold block">Maintenance.</motion.span>
              <motion.span variants={itemVars} className="block text-ecru-white">Zero Hassle.</motion.span>
            </h1>

            <motion.div variants={itemVars} className="mt-10 max-w-xl border-l-4 border-old-gold pl-8">
              <p className="text-lg md:text-xl text-dove-gray font-medium leading-relaxed">
                Expert maintenance for luxury homes and buildings. 
                Arrival within <span className="text-ecru-white font-bold underline decoration-old-gold decoration-4 underline-offset-4">90 minutes</span> or we waive 50% of the charge.
              </p>
            </motion.div>
            
            <motion.div variants={itemVars} className="mt-12 flex flex-wrap gap-8 items-center">
              <button className="bg-old-gold text-heavy-metal px-12 py-6 font-black text-xs uppercase tracking-[0.25em] transition-all hover:bg-white shadow-xl">
                Book a Service
              </button>
              
              <div className="flex items-center gap-5 border-l border-white/10 pl-8">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-heavy-metal bg-dove-gray shadow-xl" />
                  ))}
                </div>
                <div className="text-[10px] font-black uppercase tracking-tighter">
                  <p className="text-ecru-white">Trusted by 12k+</p>
                  <p className="text-old-gold flex items-center gap-1">Elite Dubai <Star size={8} className="fill-old-gold" /></p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* --- RIGHT SIDE: Image --- */}
          <div className="relative mt-16 lg:mt-0 lg:-mt-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="relative z-10 aspect-[3/4] rounded-sm overflow-hidden border border-white/10 shadow-3xl"
            >
              <Image 
                src="/hero-image.jpg" 
                alt="Mintrix Professional Maintenance Team" 
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-heavy-metal via-transparent to-transparent opacity-60" />
            </motion.div>

            <div className="absolute -bottom-10 -left-10 z-30 bg-heavy-metal border-t-4 border-old-gold p-10 shadow-2xl min-w-[200px]">
              <div className="text-center">
                <span className="block text-8xl font-black text-old-gold leading-none tracking-tighter">90</span>
                <span className="block text-[11px] font-black tracking-[0.4em] text-ecru-white mt-4 uppercase">Minutes</span>
                <p className="text-[9px] font-bold text-dove-gray mt-2 uppercase tracking-widest opacity-60">Target Arrival</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}