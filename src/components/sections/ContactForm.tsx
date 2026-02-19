"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Zap, ArrowRight } from 'lucide-react';
import { CustomSelect } from '@/components/ui/CustomSelect';

const LOCATIONS = ["Downtown Dubai", "Business Bay", "DIFC / SZ Road", "Palm Jumeirah", "Dubai Marina / JBR"];
const SERVICES_LIST = ["HVAC & Cooling", "Electrical Systems", "Plumbing Solutions", "Interior Fit-Out", "Other"];

export default function ContactForm() {
  const [location, setLocation] = useState("");
  const [service, setService] = useState("");

  return (
    <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="lg:col-span-7 bg-white/5 backdrop-blur-2xl border border-white/10 p-10 md:p-16 shadow-2xl relative">
      <h3 className="text-3xl font-black uppercase italic mb-12 tracking-tighter">Inquiry Submission</h3>
      <form className="space-y-10">
        <div className="grid md:grid-cols-2 gap-10">
          <FormInput label="Full Name" placeholder="Full Name" type="text" />
          <FormInput label="Contact Number" placeholder="+971 -- --- ----" type="tel" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <CustomSelect label="Property Location" options={LOCATIONS} value={location} onChange={setLocation} placeholder="Select Area" icon={<MapPin size={18} />} />
          <CustomSelect label="Service Required" options={SERVICES_LIST} value={service} onChange={setService} placeholder="Primary Category" icon={<Zap size={18} />} />
        </div>

        <div className="space-y-2 group">
          <label className="text-[10px] font-black uppercase tracking-widest text-old-gold/60">Brief Description</label>
          <textarea rows={3} className="w-full bg-transparent border border-white/20 p-5 mt-2 outline-none focus:border-old-gold transition-all font-medium text-lg resize-none" placeholder="Please provide details..." />
        </div>

        <button type="submit" className="w-full bg-old-gold text-heavy-metal py-8 font-black text-xs uppercase tracking-[0.4em] flex items-center justify-center gap-4 group hover:bg-ecru-white transition-all">
          Dispatch Team <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
        </button>
      </form>
    </motion.div>
  );
}

function FormInput({ label, ...props }: { label: string; [key: string]: any }) {
  return (
    <div className="space-y-2 group">
      <label className="text-[10px] font-black uppercase tracking-widest text-old-gold/60 group-focus-within:text-old-gold transition-colors">{label}</label>
      <input {...props} className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-old-gold transition-all font-medium text-lg" />
    </div>
  );
}