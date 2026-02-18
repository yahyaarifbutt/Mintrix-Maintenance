// src/components/sections/Stats.tsx
"use client";
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

function Counter({ value, duration = 2 }: { value: string, duration?: number }) {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, { duration, ease: "easeOut" });
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
  { label: "Finished Projects", value: "650+" },
  { label: "Happy Customers", value: "12k+" },
  { label: "Issues Solved", value: "24k+" },
  { label: "Expert Technicians", value: "85" }
];

export default function Stats() {
  return (
    <section className="relative py-32 md:py-48 bg-heavy-metal overflow-hidden">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')]"></div>
      </div>
      
      {/* Decorative Gold Glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-old-gold/10 blur-[120px] rounded-full"></div>

      <div className="max-w-[1440px] mx-auto px-8 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-center">
          
          <div className="w-full lg:w-2/5 space-y-8">
            <h2 className="text-old-gold font-black text-xs tracking-[0.5em] uppercase border-l-2 border-old-gold pl-4">
              Our Success
            </h2>
            <h3 className="text-ecru-white text-5xl md:text-7xl font-black leading-tight tracking-tighter uppercase italic">
              Proven <br /> <span className="text-old-gold">Reliability</span> at Scale.
            </h3>
            <p className="text-dove-gray text-xl font-medium leading-relaxed max-w-md">
              From skyscrapers in Business Bay to private estates, we deliver 24/7 maintenance precision.
            </p>
          </div>

          <div className="w-full lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {statsData.map((stat, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group p-12 bg-white/5 border border-ecru-white/10 hover:border-old-gold/50 backdrop-blur-sm transition-all duration-500 overflow-hidden"
              >
                {/* Subtle Hover Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-old-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-lg" />
                
                <div className="relative z-10">
                  <span className="block text-6xl md:text-8xl font-black text-old-gold mb-2 tracking-tighter">
                    <Counter value={stat.value} />
                  </span>
                  <span className="text-xs font-black tracking-[0.3em] text-ecru-white uppercase opacity-50 group-hover:opacity-100 transition-opacity">
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}