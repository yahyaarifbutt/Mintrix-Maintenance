// src/components/sections/Contact.tsx
import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    // Changed: Increased vertical padding (py-32 md:py-48) and side padding (px-8 md:px-12)
    <section id="contact" className="py-32 md:py-48 bg-heavy-metal text-ecru-white px-8 md:px-12 relative overflow-hidden">
      
      {/* Subtle Background Accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-old-gold/20 to-transparent" />

      {/* Changed: Increased max-width to 1440px and gap to 24 md:gap-32 */}
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-24 lg:gap-32 relative z-10">
        
        {/* Contact Info Side */}
        <div className="space-y-12 animate-fade-in">
          <div>
            <h2 className="text-old-gold font-bold tracking-[0.4em] text-xs mb-6 uppercase">
              Get In Touch
            </h2>
            <h3 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter">
              Ready to Secure <br />
              <span className="italic text-old-gold underline decoration-old-gold/20">Your Property?</span>
            </h3>
            <p className="text-dove-gray text-xl mt-8 max-w-lg leading-relaxed font-medium">
              Join the elite residences and businesses in Dubai that trust Mintrix for 24/7 maintenance excellence.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-old-gold/5 border border-old-gold/20 rounded-sm group-hover:bg-old-gold/10 transition-colors">
                <MapPin className="text-old-gold w-7 h-7" />
              </div>
              <div>
                <h4 className="font-black text-xl tracking-tight mb-1 uppercase">Dubai Headquarters</h4>
                <p className="text-dove-gray text-base font-medium">Business Bay / Al Quoz Area, Dubai, UAE</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-old-gold/5 border border-old-gold/20 rounded-sm group-hover:bg-old-gold/10 transition-colors">
                <Clock className="text-old-gold w-7 h-7" />
              </div>
              <div>
                <h4 className="font-black text-xl tracking-tight mb-1 uppercase">Response Hours</h4>
                <p className="text-dove-gray text-base font-medium">24/7 Emergency Support | 90-Min Target Arrival</p>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Form Side */}
        <div className="bg-white p-10 md:p-16 rounded-sm shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] relative border-t-4 border-old-gold">
          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-heavy-metal font-black text-[10px] uppercase tracking-widest ml-1">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full p-5 bg-ecru-white border-b-2 border-transparent focus:border-old-gold outline-none text-heavy-metal font-medium transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-heavy-metal font-black text-[10px] uppercase tracking-widest ml-1">Phone Number</label>
                <input type="tel" placeholder="+971 -- --- ----" className="w-full p-5 bg-ecru-white border-b-2 border-transparent focus:border-old-gold outline-none text-heavy-metal font-medium transition-all" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-heavy-metal font-black text-[10px] uppercase tracking-widest ml-1">Service Required</label>
              <select className="w-full p-5 bg-ecru-white border-b-2 border-transparent focus:border-old-gold outline-none text-heavy-metal font-medium transition-all appearance-none cursor-pointer">
                <option>Select Service</option>
                <option>AC & HVAC Maintenance</option>
                <option>IT & Software Support</option>
                <option>Interior Fit-Out</option>
                <option>Emergency MEP Repair</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-heavy-metal font-black text-[10px] uppercase tracking-widest ml-1">Additional Details</label>
              <textarea placeholder="Tell us about your property needs..." rows={4} className="w-full p-5 bg-ecru-white border-b-2 border-transparent focus:border-old-gold outline-none text-heavy-metal font-medium transition-all resize-none"></textarea>
            </div>

            <button className="w-full bg-heavy-metal text-old-gold py-5 font-black text-sm uppercase tracking-[0.2em] hover:bg-old-gold hover:text-heavy-metal transition-all shadow-xl hover:-translate-y-1">
              Request Priority Booking
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}