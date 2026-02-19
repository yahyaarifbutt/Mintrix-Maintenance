// src/components/sections/Stats.tsx
"use client";
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate, Variants } from 'framer-motion';
import BackgroundGrid from '@/components/ui/BackgroundGrid';
import { Activity, ShieldCheck, Users, Target } from 'lucide-react';

function Counter({ value, duration = 2.5 }: { value: string, duration?: number }) {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, { duration, ease: [0.16, 1, 0.3, 1] });
      return () => controls.stop();
    }
  }, [isInView, count, numericValue, duration]);

  return (
    <span ref={nodeRef}>
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
}

const statsData = [
  { label: "Completed Projects", value: "650+", icon: <Target size={14} />, desc: "Luxury Residences" },
  { label: "Elite Clients", value: "12k+", icon: <Users size={14} />, desc: "Verified Downtown" },
  { label: "Issues Resolved", value: "24k+", icon: <Activity size={14} />, desc: "90m Avg Response" },
  { label: "Certified Leads", value: "85", icon: <ShieldCheck size={14} />, desc: "MEP & IT Experts" }
];

export default function Stats() {
  const containerVars: Variants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  return (
    <section className="relative py-32 md:py-56 bg-heavy-metal overflow-hidden border-y border-white/5">
      <BackgroundGrid />
      
      {/* Decorative Focal Point */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-old-gold/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-8 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 items-end">
          
          {/* --- LEFT: The Narrative --- */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <motion.h2 
                initial={{ opacity: 0, letterSpacing: "0.2em" }}
                whileInView={{ opacity: 1, letterSpacing: "0.5em" }}
                viewport={{ once: true }}
                className="text-old-gold font-black text-[10px] tracking-[0.5em] uppercase mb-6"
              >
                Performance Metrics
              </motion.h2>
              <h3 className="text-5xl md:text-8xl font-black leading-[0.85] tracking-tighter uppercase italic text-ecru-white">
                Proven <br /> <span className="text-old-gold">Reliability</span> <br /> at Scale.
              </h3>
            </div>
            
            <div className="max-w-md border-l-2 border-old-gold/30 pl-8">
              <p className="text-dove-gray text-xl font-medium leading-relaxed">
                From high-rise mechanical audits in Business Bay to luxury fit-out continuity for private estates.
              </p>
            </div>
          </div>

          {/* --- RIGHT: The Data Grid --- */}
          <motion.div 
            variants={containerVars}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 border-t border-l border-white/10"
          >
            {statsData.map((stat, index) => (
              <div 
                key={index} 
                className="relative group p-12 border-r border-b border-white/10 hover:bg-white/[0.02] transition-all duration-700 overflow-hidden"
              >
                {/* Node Identifier */}
                <div className="absolute top-4 right-4 flex items-center gap-2 opacity-20 group-hover:opacity-100 group-hover:text-old-gold transition-all">
                  <span className="text-[9px] font-black uppercase tracking-widest">Unit_0{index + 1}</span>
                  {stat.icon}
                </div>

                <div className="relative z-10">
                  <span className="block text-7xl md:text-9xl font-black text-old-gold mb-4 tracking-tighter italic leading-none drop-shadow-2xl">
                    <Counter value={stat.value} />
                  </span>
                  
                  <div className="space-y-1">
                    <span className="block text-[11px] font-black tracking-[0.3em] text-ecru-white uppercase">
                      {stat.label}
                    </span>
                    <span className="block text-[9px] font-bold tracking-[0.1em] text-dove-gray uppercase italic">
                      // {stat.desc}
                    </span>
                  </div>
                </div>

                {/* Progress Underline Accent */}
                <div className="absolute bottom-0 left-0 h-[2px] bg-old-gold w-0 group-hover:w-full transition-all duration-1000 ease-out" />
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}