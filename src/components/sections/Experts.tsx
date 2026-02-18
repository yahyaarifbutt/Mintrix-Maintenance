// src/components/sections/Experts.tsx
"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin, Award, ShieldCheck } from 'lucide-react';
const team = [
  {
    name: "Alwyn Stephen Serrao",
    role: "Managing Director",
    image: "/team_1.jpg", // Use high-quality professional portraits
    bio: "Driving the vision of maintenance excellence across the UAE's most iconic infrastructures.",
    specialization: "Strategic Operations"
  },
  {
    name: "Mace Scott",
    role: "Chief Technical Officer",
    image: "/team_2.jpg",
    bio: "15+ years overseeing complex MEP and IT system integrations for elite commercial assets.",
    specialization: "Technical Engineering"
  },
  {
    name: "Jennifer Walt",
    role: "Operations Manager",
    image: "/team_3.jpg",
    bio: "Ensuring our 90-minute arrival promise is met through rigorous logistics management.",
    specialization: "Logistics & Quality"
  }
];

export default function Experts() {
  return (
    <section className="py-24 md:py-32 bg-heavy-metal overflow-hidden relative">
      {/* Decorative Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-old-gold/[0.02] -skew-x-12 transform origin-top" />
      
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-6 max-w-2xl">
            <h2 className="text-old-gold font-black text-xs tracking-[0.4em] uppercase border-l-2 border-old-gold pl-4">
              Our Experts
            </h2>
            <h3 className="text-ecru-white text-5xl md:text-7xl font-black leading-tight tracking-tighter uppercase italic">
              Safety & <span className="text-old-gold">Reliability.</span>
            </h3>
            <p className="text-dove-gray text-xl font-medium leading-relaxed">
              We respect your time and guarantee prompt, reliable services to ensure that your repairs and installations are done on schedule by industry veterans.
            </p>
          </div>
          <div className="hidden lg:block">
             <Award className="w-24 h-24 text-old-gold opacity-20" />
          </div>
        </div>

        {/* Experts Grid */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {team.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              {/* Image Container with Gold Frame Logic */}
              <div className="relative aspect-[4/5] mb-8 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <div className="absolute inset-0 border-[12px] border-white/5 z-20 pointer-events-none group-hover:border-old-gold/20 transition-colors" />
                <Image 
                  src={member.image} 
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                {/* Social Overlay */}
                <div className="absolute bottom-6 right-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="#" className="bg-old-gold p-3 block text-heavy-metal hover:bg-ecru-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content Block */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <h4 className="text-ecru-white font-black text-2xl tracking-tight uppercase group-hover:text-old-gold transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-old-gold font-black text-[10px] tracking-[0.3em] uppercase">
                    {member.role}
                  </p>
                </div>
                <p className="text-dove-gray text-base leading-relaxed line-clamp-2">
                  {member.bio}
                </p>
                <div className="pt-4 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-old-gold/40" />
                  <span className="text-[10px] text-old-gold/60 font-bold uppercase tracking-widest">
                    Expertise: {member.specialization}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}