// src/components/sections/Services.tsx
import { services } from '@/lib/services-data';
import Link from 'next/link';

export default function Services() {
  return (
    // Standardized padding (py-20) to prevent the "shrunken" or "too-low" look
    <section id="services" className="py-20 bg-ecru-white transition-all">
      
      <div className="max-w-[1440px] mx-auto px-8 md:px-12">
        
        {/* Tightened margins (mb-16) for a better flow */}
        <div className="text-center mb-16">
          <h2 className="text-heavy-metal text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase italic">
            Our Expertise
          </h2>
          <div className="w-24 h-1.5 bg-old-gold mx-auto"></div>
          <p className="text-dove-gray mt-6 font-medium tracking-widest text-[10px] uppercase">
            Comprehensive Maintenance Solutions for Dubai's Elite Properties
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link 
              key={index} 
              href={`/services/${service.slug}`}
              className="group p-10 bg-white border border-dove-gray/5 hover:border-old-gold transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(209,171,67,0.1)] flex flex-col justify-between min-h-[350px] relative overflow-hidden"
            >
              <div>
                {/* Decorative element that expands on card hover */}
                <div className="w-8 h-[2px] bg-old-gold/30 mb-6 group-hover:w-full transition-all duration-500"></div>
                
                <h3 className="text-heavy-metal font-bold text-2xl mb-4 group-hover:text-old-gold transition-colors leading-tight">
                  {service.title}
                </h3>
                <p className="text-dove-gray text-base leading-relaxed mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
                  {service.description}
                </p>
              </div>

              <div className="mt-auto flex justify-between items-end">
                <span className="text-[10px] font-black tracking-[0.25em] text-dove-gray uppercase border-b-2 border-old-gold/20 group-hover:border-old-gold pb-1 transition-all">
                  {service.category}
                </span>
                
                {/* Visual cue for the link */}
                <span className="text-old-gold font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  LEARN MORE +
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}