// src/components/layout/Navbar.tsx
"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Phone, ShieldCheck, Zap } from 'lucide-react';
import { services } from '@/lib/services-data';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const serviceCategories = [
    { title: "Facility & MEP", icon: <Zap size={14} /> },
    { title: "IT & Systems", icon: <ShieldCheck size={14} /> },
    { title: "Interior & Fit-Out", icon: <Image src="/mintrix-maintain-logo.png" alt="" width={14} height={14} className="grayscale brightness-200" /> }
  ];

  return (
    <>
      <div className="fixed top-0 z-[60] w-full h-1 bg-gradient-to-r from-old-gold via-old-gold/50 to-old-gold" />

      <nav className="sticky top-0 z-50 w-full bg-heavy-metal/90 backdrop-blur-xl border-b border-white/5 px-8 md:px-12 py-4">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center">
          
          <Link href="/" className="flex items-center gap-5 group" aria-label="Mintrix Maintenance Home">
            <div className="relative w-12 h-12 overflow-hidden rounded-sm border border-old-gold/20 bg-white/5 p-1.5 transition-all group-hover:border-old-gold/50">
              <Image 
                src="/mintrix-maintain-logo.png" 
                alt="Mintrix Maintenance Logo" 
                fill
                className="object-contain group-hover:scale-110 transition-transform duration-700"
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-ecru-white font-black text-2xl tracking-tighter uppercase italic">Mintrix</span>
              <span className="text-old-gold text-[9px] font-black tracking-[0.4em] uppercase mt-1">Maintenance</span>
            </div>
          </Link>

          <div className="hidden lg:flex gap-12 items-center text-ecru-white/60 font-black text-[10px] tracking-[0.25em] uppercase">
            
            <div 
              className="relative cursor-pointer group py-4"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <div className="flex items-center gap-2 group-hover:text-old-gold transition-colors duration-300">
                Services <ChevronDown className={`w-3 transition-transform duration-500 ${isDropdownOpen ? 'rotate-180 text-old-gold' : ''}`} />
              </div>

              {isDropdownOpen && (
                <div className="absolute top-full -left-64 w-[850px] bg-heavy-metal/98 backdrop-blur-3xl border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.9)] p-12 grid grid-cols-3 gap-12 animate-fade-in origin-top">
                  {serviceCategories.map((cat, idx) => (
                    <div key={idx} className="space-y-6">
                      <div className="flex items-center gap-3 border-b border-old-gold/10 pb-4">
                        <span className="text-old-gold opacity-50">{cat.icon}</span>
                        <h4 className="text-old-gold text-[9px] font-black tracking-[0.3em] uppercase opacity-60">
                          {cat.title}
                        </h4>
                      </div>
                      <ul className="space-y-3">
                        {services
                          .filter((s) => s.category === cat.title)
                          .map((service) => (
                            <li key={service.slug}>
                              <Link 
                                href={`/services/${service.slug}`} 
                                className="text-ecru-white/50 hover:text-ecru-white hover:translate-x-2 transition-all block normal-case font-bold text-[15px] tracking-tight"
                              >
                                {service.title}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link href="/solutions" className="hover:text-old-gold transition-colors relative group">Solutions</Link>
            <Link href="/about" className="hover:text-old-gold transition-colors relative group">About Us</Link>
            
            <div className="h-4 w-[1px] bg-white/10" />

            <a href="tel:+971500000000" className="flex items-center gap-3 text-old-gold font-bold hover:brightness-125 transition-all" aria-label="Call Mintrix Maintenance Emergency Hotline">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-old-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-old-gold"></span>
              </div>
              <span className="text-[12px] tracking-widest">+971 50 000 0000</span>
            </a>
          </div>

          {/* --- SEO OPTIMIZED CTA --- */}
          <Link href="/contact" aria-label="Request Luxury Maintenance Service in Dubai">
            <button 
              className="relative group overflow-hidden bg-old-gold text-heavy-metal px-10 py-4 text-[10px] font-black rounded-sm shadow-2xl shadow-old-gold/10 uppercase tracking-[0.3em] transition-all"
              title="Book Maintenance Service"
            >
              {/* Human-facing text */}
              <span className="relative z-10">VIP Access</span>
              
              {/* SEO-facing hidden text for crawlers */}
              <span className="sr-only">Request Dubai Maintenance Service</span>
              
              <div className="absolute inset-0 bg-ecru-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
}