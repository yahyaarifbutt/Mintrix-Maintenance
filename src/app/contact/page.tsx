"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, ShieldCheck, ArrowRight, ChevronDown, Clock, Check, Zap } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// --- SUB-COMPONENT: Custom Elite Select ---
interface CustomSelectProps {
  label: string;
  options: string[];
  value: string;
  onChange: (val: string) => void;
  placeholder: string;
  icon?: React.ReactNode;
}

const CustomSelect = ({ label, options, value, onChange, placeholder, icon }: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="space-y-2 relative" ref={dropdownRef}>
      <label className="text-[10px] font-black uppercase tracking-widest text-old-gold/60">{label}</label>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-white/[0.03] border-b border-white/20 py-4 px-1 flex justify-between items-center cursor-pointer transition-all duration-300 ${isOpen ? 'border-old-gold' : 'hover:border-white/40'}`}
      >
        <div className="flex items-center gap-3">
          {icon && <span className="text-old-gold/50">{icon}</span>}
          <span className={`text-lg font-medium tracking-tight ${!value ? 'text-white/20' : 'text-ecru-white'}`}>
            {value || placeholder}
          </span>
        </div>
        <ChevronDown className={`text-old-gold transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} size={16} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute z-50 left-0 right-0 mt-2 bg-heavy-metal border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.9)] overflow-hidden backdrop-blur-3xl"
          >
            <div className="max-h-[250px] overflow-y-auto">
              {options.map((option) => (
                <div 
                  key={option}
                  onClick={() => { onChange(option); setIsOpen(false); }}
                  className={`px-6 py-4 flex justify-between items-center cursor-pointer transition-colors ${value === option ? 'bg-old-gold text-heavy-metal' : 'hover:bg-white/5'}`}
                >
                  <span className={`text-xs font-black uppercase tracking-widest ${value === option ? '' : 'text-white/60'}`}>
                    {option}
                  </span>
                  {value === option && <Check size={14} />}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
export default function ContactPage() {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const locations = ["Downtown Dubai", "Business Bay", "DIFC / SZ Road", "Palm Jumeirah", "Dubai Marina / JBR"];
  const servicesList = ["HVAC & Cooling", "Electrical Systems", "Plumbing Solutions", "Interior Fit-Out", "Other (Describe in Comment)"];

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main className="bg-heavy-metal text-ecru-white min-h-screen">
      <Navbar />

      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      <div className="fixed inset-0 opacity-[0.05] pointer-events-none z-0" 
           style={{ backgroundImage: 'linear-gradient(#D1AB43 1px, transparent 1px), linear-gradient(90deg, #D1AB43 1px, transparent 1px)', backgroundSize: '100px 100px' }} />

      <section className="relative pt-32 pb-24 px-8 md:px-12 z-10">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-20">
            <motion.h2 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-old-gold font-black text-xs tracking-[0.5em] uppercase mb-6">Concierge Access</motion.h2>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter leading-[0.85]">Elite Support. <br /> <span className="text-old-gold">Immediate</span> Action.</motion.h1>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-5 space-y-12">
              <motion.div {...fadeUp} className="space-y-6 border-l-4 border-old-gold pl-8">
                <p className="text-xl text-dove-gray leading-relaxed font-medium">For our Downtown Dubai clients, we prioritize rapid-response mobilization. Our team is stationed in Business Bay to ensure our <span className="text-ecru-white font-bold underline decoration-old-gold decoration-4 underline-offset-8">90-minute arrival</span> guarantee is met.</p>
                <div className="flex items-center gap-3 text-old-gold/60 text-[10px] font-black uppercase tracking-[0.3em]"><Clock size={14} /> Average Response: 42 Minutes</div>
              </motion.div>

              <div className="space-y-6">
                {[
                  { icon: <Phone size={22} />, label: "Emergency Hotline", value: "+971 50 000 0000" },
                  { icon: <Mail size={22} />, label: "Corporate Inquiries", value: "support@mintrix.ae" },
                  { icon: <MapPin size={22} />, label: "Operations Center", value: "Business Bay, Dubai, UAE" }
                ].map((item, idx) => (
                  <motion.div key={idx} {...fadeUp} className="flex gap-6 p-6 bg-white/[0.02] border border-white/5 hover:border-old-gold/30 transition-all duration-500 group">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-old-gold group-hover:text-heavy-metal transition-all duration-500">{item.icon}</div>
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-widest text-old-gold/60 mb-1">{item.label}</p>
                      <p className="text-xl font-black tracking-tight">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="lg:col-span-7 bg-white/5 backdrop-blur-2xl border border-white/10 p-10 md:p-16 shadow-2xl relative">
              <h3 className="text-3xl font-black uppercase italic mb-12 tracking-tighter">Inquiry Submission</h3>
              <form className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-2 group">
                    <label className="text-[10px] font-black uppercase tracking-widest text-old-gold/60 group-focus-within:text-old-gold transition-colors">Full Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-old-gold transition-all font-medium text-lg placeholder:text-white/10" placeholder="Full Name" required />
                  </div>
                  <div className="space-y-2 group">
                    <label className="text-[10px] font-black uppercase tracking-widest text-old-gold/60 group-focus-within:text-old-gold transition-colors">Contact Number</label>
                    <input type="tel" className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-old-gold transition-all font-medium text-lg placeholder:text-white/10" placeholder="+971 -- --- ----" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  <CustomSelect label="Property Location" options={locations} value={selectedLocation} onChange={setSelectedLocation} placeholder="Select Area" icon={<MapPin size={18} />} />
                  <CustomSelect label="Service Required" options={servicesList} value={selectedService} onChange={setSelectedService} placeholder="Primary Category" icon={<Zap size={18} />} />
                </div>

                <AnimatePresence>
                  {selectedService === "Other (Describe in Comment)" && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="space-y-2 overflow-hidden">
                      <label className="text-[10px] font-black uppercase tracking-widest text-old-gold">Specify Service</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-old-gold transition-all font-medium text-lg" placeholder="e.g. Bespoke Joinery Repair" required />
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="space-y-2 group">
                  <label className="text-[10px] font-black uppercase tracking-widest text-old-gold/60 group-focus-within:text-old-gold transition-colors">Brief Description</label>
                  <textarea rows={3} className="w-full bg-transparent border border-white/20 p-5 mt-2 outline-none focus:border-old-gold transition-all font-medium text-lg resize-none placeholder:text-white/10" placeholder="Please provide technical details or specific issues..." />
                </div>

                <button type="submit" className="w-full bg-old-gold text-heavy-metal py-8 font-black text-xs uppercase tracking-[0.4em] flex items-center justify-center gap-4 group hover:bg-ecru-white transition-all shadow-[0_30px_60px_rgba(209,171,67,0.2)]">
                  Dispatch Team <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}