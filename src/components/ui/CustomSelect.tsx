"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';

interface CustomSelectProps {
  label: string;
  options: string[];
  value: string;
  onChange: (val: string) => void;
  placeholder: string;
  icon?: React.ReactNode;
}

export const CustomSelect = ({ label, options, value, onChange, placeholder, icon }: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setIsOpen(false);
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
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
            className="absolute z-50 left-0 right-0 mt-2 bg-heavy-metal border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.9)] overflow-hidden backdrop-blur-3xl"
          >
            <div className="max-h-[250px] overflow-y-auto">
              {options.map((option) => (
                <div 
                  key={option}
                  onClick={() => { onChange(option); setIsOpen(false); }}
                  className={`px-6 py-4 flex justify-between items-center cursor-pointer transition-colors ${value === option ? 'bg-old-gold text-heavy-metal' : 'hover:bg-white/5'}`}
                >
                  <span className={`text-xs font-black uppercase tracking-widest ${value === option ? '' : 'text-white/60'}`}>{option}</span>
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