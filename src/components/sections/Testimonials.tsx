"use client";
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const reviews = [
  {
    name: "Michelle Quigley",
    date: "3 Months Ago",
    text: "Very impressed and happy with the service for our AC ducts and vents deep clean. They covered furniture with plastic, wore protective gear and did a thorough tidy up. Highly professional group.",
    rating: 5
  },
  {
    name: "Violetta Leonova",
    date: "3 Months Ago",
    text: "We booked a sofa cleaning and were extremely limited on time, but the team did an amazing job. They arrived exactly on time, worked super fast yet very carefully. Respectful and highly recommended!",
    rating: 5
  },
  {
    name: "Zainab Al-Mansoori",
    date: "1 Month Ago",
    text: "Mintrix did an incredible job with our interior fit-out. They were punctual, detailed, and the quality of work is fantastic. The finishes look flawless and they left the property spotless.",
    rating: 5
  }
];

export default function Testimonials() {
  // Explicitly type variants to avoid TypeScript build errors
  const cardVariants: Variants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="relative py-32 md:py-48 bg-heavy-metal overflow-hidden">
      {/* --- Background Architecture --- */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-old-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-8 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24 space-y-6">
          <motion.h2 
            // FIX: Changed 'tracking' to 'letterSpacing' for TypeScript compliance
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.5em" }}
            viewport={{ once: true }}
            className="text-old-gold font-black text-xs uppercase transition-all duration-1000"
          >
            Client Testimonials
          </motion.h2>
          <h3 className="text-ecru-white text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase italic">
            Built on <br /> <span className="text-old-gold">Excellence.</span>
          </h3>
          <div className="w-24 h-1.5 bg-old-gold mx-auto"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-10">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="relative group p-10 md:p-14 bg-white/[0.03] border border-white/10 backdrop-blur-sm flex flex-col justify-between hover:bg-white/[0.05] hover:border-old-gold/40 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-transparent group-hover:border-old-gold/40 transition-all duration-500" />
              <Quote className="absolute top-10 right-10 w-16 h-16 text-white/5 group-hover:text-old-gold/10 transition-colors" />

              <div className="space-y-8 relative z-10">
                <div className="flex gap-1.5">
                  {[...Array(review.rating)].map((_, starIdx) => (
                    <Star key={starIdx} className="w-4 h-4 fill-old-gold text-old-gold" />
                  ))}
                </div>
                
                <p className="text-ecru-white text-xl font-medium leading-relaxed italic opacity-90 group-hover:opacity-100">
                  "{review.text}"
                </p>
              </div>

              <div className="mt-16 flex items-center gap-5 pt-10 border-t border-white/5">
                <div className="w-14 h-14 bg-old-gold rounded-full flex items-center justify-center text-heavy-metal font-black text-2xl shadow-lg shadow-old-gold/20">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="text-ecru-white font-black uppercase text-base tracking-widest">{review.name}</h4>
                  <p className="text-old-gold/60 text-[10px] font-bold uppercase tracking-[0.2em] mt-1">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Unified Google Trust Bar --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-28 flex flex-col items-center p-12 bg-white/[0.02] border border-white/5 rounded-sm"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-ecru-white font-black text-3xl tracking-tighter">Google</span>
            <div className="h-6 w-[1px] bg-white/20 mx-2" />
            <span className="text-old-gold font-black text-4xl">5.0</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-old-gold text-old-gold" />
              ))}
            </div>
            <p className="text-dove-gray text-xs font-bold uppercase tracking-[0.3em]">
              Verified Client Satisfaction (55 Reviews)
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}