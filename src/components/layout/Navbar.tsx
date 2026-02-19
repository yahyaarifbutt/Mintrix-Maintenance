"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Phone, ShieldCheck, Zap } from 'lucide-react';
import { services } from '@/lib/services-data';
import { NAV_LINKS, SERVICE_CATEGORIES, BRAND_DATA } from '@/constants/navigation';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for a professional transparent-to-solid transition
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Accent: The "Gold Standard" line */}
      <div className="fixed top-0 z-[70] w-full h-[3px] bg-gradient-to-r from-old-gold via-old-gold/20 to-old-gold" />

      <nav 
        className={`fixed top-0 left-0 w-full z-[60] transition-all duration-500 px-8 md:px-12 
        ${scrolled ? 'py-4 bg-heavy-metal/95 backdrop-blur-2xl border-b border-old-gold/10' : 'py-8 bg-transparent'}`}
      >
        <div className="max-w-[1536px] mx-auto flex justify-between items-center">
          
          <LogoSection />

          {/* --- MAIN NAVIGATION --- */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-10 text-ecru-white font-black text-[13px] tracking-[0.2em] uppercase">
              
              {/* Dropdown Services */}
              <div 
                className="relative cursor-pointer group py-2"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <div className={`flex items-center gap-2 transition-colors duration-300 ${isDropdownOpen ? 'text-old-gold' : 'hover:text-old-gold'}`}>
                  Services <ChevronDown className={`w-4 h-4 transition-transform duration-500 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </div>
                {isDropdownOpen && <ServiceMegaMenu />}
              </div>

              {NAV_LINKS.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="hover:text-old-gold transition-all duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-old-gold transition-all duration-500 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Vertical Separator */}
            <div className="h-6 w-[1px] bg-white/10 mx-4" />

            {/* Support Hotline */}
            <Hotline link={BRAND_DATA.phone} />
            
            {/* VIP CTA */}
            <VipCTA />
          </div>

          {/* Mobile Menu Placeholder - can be expanded */}
          <div className="lg:hidden">
             <div className="w-8 h-[2px] bg-old-gold mb-2"></div>
             <div className="w-8 h-[2px] bg-old-gold"></div>
          </div>
        </div>
      </nav>
    </>
  );
}

/* --- REFINED SUB-COMPONENTS --- */

function LogoSection() {
  return (
    <Link href="/" className="flex items-center gap-5 group" aria-label="Mintrix Home">
      <div className="relative w-14 h-14 overflow-hidden rounded-sm border border-old-gold/20 bg-white/5 p-2 transition-all group-hover:border-old-gold">
        <Image 
          src={BRAND_DATA.logo} 
          alt="Mintrix Logo" 
          fill 
          className="object-contain group-hover:scale-110 transition-transform duration-700" 
          priority 
        />
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-ecru-white font-black text-3xl tracking-tighter uppercase italic leading-none group-hover:text-old-gold transition-colors">
          {BRAND_DATA.name}
        </span>
        <span className="text-old-gold text-[10px] font-black tracking-[0.4em] uppercase mt-2 opacity-80">
          {BRAND_DATA.type}
        </span>
      </div>
    </Link>
  );
}

function Hotline({ link }: { link: string }) {
  return (
    <a 
      href={`tel:${link.replace(/\s/g, '')}`} 
      className="flex items-center gap-4 text-ecru-white hover:text-old-gold transition-all"
    >
      <div className="flex flex-col items-end">
        <span className="text-[9px] font-black text-old-gold uppercase tracking-[0.2em] mb-1">Emergency Dispatch</span>
        <div className="flex items-center gap-3">
          <div className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-old-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-old-gold"></span>
          </div>
          <span className="text-[16px] font-black tracking-tight">{link}</span>
        </div>
      </div>
    </a>
  );
}

function VipCTA() {
  return (
    <Link href="/contact" className="ml-6">
      <button 
        className="relative group overflow-hidden bg-old-gold text-heavy-metal px-10 py-5 text-[12px] font-black rounded-sm uppercase tracking-[0.2em] shadow-xl shadow-old-gold/20 flex items-center gap-3"
      >
        <span className="relative z-10 flex items-center gap-3">
          Schedule Technical Audit <ShieldCheck size={18} className="group-hover:rotate-12 transition-transform duration-300" />
        </span>
        <div className="absolute inset-0 bg-ecru-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
      </button>
    </Link>
  );
}

function ServiceMegaMenu() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className="absolute top-full -left-64 w-[1000px] bg-heavy-metal/98 backdrop-blur-3xl border border-white/10 p-16 grid grid-cols-3 gap-16 shadow-[0_50px_100px_rgba(0,0,0,0.9)]"
    >
      {/* Background Tech Watermark */}
      <div className="absolute top-0 right-0 opacity-[0.02] p-10 pointer-events-none">
         <Zap size={200} className="text-old-gold" />
      </div>

      {SERVICE_CATEGORIES.map((cat, idx) => (
        <div key={idx} className="relative z-10 space-y-10">
          <div className="flex items-center gap-5 border-b border-old-gold/20 pb-6">
            <span className="text-old-gold">
              {cat.icon === 'logo' ? <Image src={BRAND_DATA.logo} alt="" width={20} height={20} className="grayscale brightness-200" /> : <cat.icon size={20} />}
            </span>
            <h4 className="text-old-gold text-[11px] font-black tracking-[0.5em] uppercase leading-none">{cat.title}</h4>
          </div>
          <ul className="space-y-5">
            {services.filter((s) => s.category === cat.title).map((service) => (
              <li key={service.slug}>
                <Link 
                  href={`/services/${service.slug}`} 
                  className="text-ecru-white/50 hover:text-old-gold hover:translate-x-3 transition-all block font-black text-[18px] italic uppercase tracking-tighter leading-none"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </motion.div>
  );
}