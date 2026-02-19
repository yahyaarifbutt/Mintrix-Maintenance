"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ShieldCheck, Settings, CheckCircle2 } from "lucide-react";

export default function ProfessionalStandards() {
  const standards = [
    {
      icon: <Clock size={28} />,
      title: "Rapid Response",
      text: "Guaranteed arrival within 90 minutes across Dubai, backed by real-time dispatch coordination."
    },
    {
      icon: <Settings size={28} />,
      title: "Certified Expertise",
      text: "Specialists across HVAC, MEP, IT systems, and interior fit-outs with enterprise-grade experience."
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Safety & Clean Execution",
      text: "Strict safety protocols, protective equipment, and clean-room discipline on every site."
    },
    {
      icon: <CheckCircle2 size={28} />,
      title: "Ongoing Accountability",
      text: "Post-service verification, performance monitoring, and long-term maintenance continuity."
    }
  ];

  return (
    <section className="relative bg-ecru-white py-32 px-8 md:px-12 border-y border-heavy-metal/5 overflow-hidden">
      
      {/* --- TECHNICAL WATERMARK --- */}
      <div className="absolute top-10 right-10 opacity-[0.03] pointer-events-none hidden lg:block">
        <span className="text-9xl font-black text-heavy-metal uppercase italic leading-none">
          Standard <br /> Operating <br /> Procedure
        </span>
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* --- HEADER ARCHITECTURE --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-3xl">
            <motion.h2 
              initial={{ opacity: 0, letterSpacing: "0.2em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.5em" }}
              viewport={{ once: true }}
              className="text-old-gold font-black text-xs uppercase mb-6"
            >
              Professional Standards
            </motion.h2>
            <h3 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.85] text-heavy-metal">
              Built for <span className="text-old-gold">Reliability.</span> <br />
              Engineered for Scale.
            </h3>
          </div>
          <div className="md:w-1/3 border-l-2 border-old-gold pl-8 pb-2">
            <p className="text-heavy-metal/70 text-lg font-medium leading-relaxed">
              From luxury residences in Downtown to complex commercial infrastructure, our standards ensure precision, safety, and accountability.
            </p>
          </div>
        </div>

        {/* --- BLUEPRINT GRID --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-l border-heavy-metal/10">
          {standards.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-12 bg-white border-r border-b border-heavy-metal/10 hover:bg-heavy-metal transition-all duration-700 relative overflow-hidden"
            >
              {/* Corner Coordinate Marker */}
              <div className="absolute top-4 right-4 text-[9px] font-black text-heavy-metal/20 group-hover:text-old-gold/40 transition-colors uppercase tracking-widest">
                Ref // 0{idx + 1}
              </div>

              {/* Icon Logic */}
              <div className="w-16 h-16 mb-10 flex items-center justify-center bg-heavy-metal text-old-gold group-hover:bg-old-gold group-hover:text-heavy-metal transition-all duration-500 shadow-xl shadow-heavy-metal/10 group-hover:shadow-old-gold/20">
                {item.icon}
              </div>

              <h4 className="text-2xl font-black uppercase tracking-tighter mb-6 text-heavy-metal group-hover:text-ecru-white transition-colors italic">
                {item.title}
              </h4>

              <p className="text-heavy-metal/60 group-hover:text-ecru-white/70 leading-relaxed font-medium text-sm transition-colors">
                {item.text}
              </p>

              {/* Blueprint Line Detail */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-old-gold group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* --- OPERATIONAL FOOTNOTE --- */}
        <div className="mt-16 flex flex-wrap items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-heavy-metal" />
            <span className="text-[10px] font-black uppercase tracking-widest text-heavy-metal">ISO Certified Protocols</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-heavy-metal" />
            <span className="text-[10px] font-black uppercase tracking-widest text-heavy-metal">High-Rise MEP Licensed</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-heavy-metal" />
            <span className="text-[10px] font-black uppercase tracking-widest text-heavy-metal">Enterprise SLA Standards</span>
          </div>
        </div>
      </div>
    </section>
  );
}