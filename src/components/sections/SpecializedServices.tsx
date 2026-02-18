// src/components/sections/SpecializedServices.tsx
import React from 'react';
import Image from 'next/image';

export default function SpecializedServices() {
  const details = [
    { title: "Interior Fit-Out", desc: "Tailored carpentry, furniture supply, and space enhancement." },
    { title: "MEP Solutions", desc: "Mechanical, Electrical, and Plumbing services for complex infrastructures." },
    { title: "Automation", desc: "Smart system integration for modern homes and offices." }
  ];

  return (
    // Changed: Increased py-32 md:py-48 and px-8 md:px-12 to prevent "shrunken" look
    <section className="bg-ecru-white py-32 md:py-48 px-8 md:px-12 overflow-hidden">
      
      {/* Changed: Increased max-width to 1440px and gap to 24 md:gap-32 */}
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-20 lg:gap-32 items-center">
        
        {/* Visual Side */}
        <div className="w-full lg:w-1/2 relative group">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border-l-[12px] border-old-gold shadow-[30px_30px_60px_-15px_rgba(0,0,0,0.1)]">
            <Image 
              src="/image_feee96.jpg" // Using your actual marketing asset
              alt="Premium Interior Maintenance"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
          </div>
          {/* Decorative Heavy Metal block - repositioned for wider layout */}
          <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-heavy-metal -z-10 hidden xl:block transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
        </div>

        {/* Content Side */}
        <div className="w-full lg:w-1/2 space-y-12 animate-fade-in">
          <div className="space-y-6">
            <h2 className="text-old-gold font-bold tracking-[0.4em] text-xs uppercase">
              Specialized Projects
            </h2>
            <h3 className="text-heavy-metal text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter">
              Expert Fit-Out & <br />
              <span className="italic text-old-gold">MEP Services.</span>
            </h3>
            <p className="text-dove-gray text-xl leading-relaxed max-w-xl font-medium">
              Beyond basic repairs, Mintrix provides end-to-end interior fit-out services tailored to enhance every space. From furniture supply to performance monitoring, we handle the details with absolute precision.
            </p>
          </div>

          <div className="grid gap-8">
            {details.map((item, i) => (
              <div key={i} className="group flex gap-8 p-6 border-b border-dove-gray/10 hover:border-old-gold transition-all duration-300 hover:bg-white/50">
                <span className="text-old-gold font-black text-2xl opacity-40 group-hover:opacity-100 transition-opacity">
                  0{i + 1}
                </span>
                <div>
                  <h4 className="text-heavy-metal font-bold text-xl group-hover:text-old-gold transition-colors mb-2 uppercase tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-dove-gray text-base leading-relaxed group-hover:text-heavy-metal transition-colors">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button className="bg-heavy-metal text-ecru-white px-12 py-5 font-black text-sm uppercase rounded-sm hover:bg-old-gold hover:text-heavy-metal transition-all shadow-xl shadow-heavy-metal/10 hover:-translate-y-1 mt-8">
            VIEW PROJECT PORTFOLIO
          </button>
        </div>
      </div>
    </section>
  );
}