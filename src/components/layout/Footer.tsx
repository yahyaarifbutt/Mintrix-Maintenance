// src/components/layout/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    // Reduced: pt-24 to pt-16 and pb-12 to pb-8
    <footer className="bg-heavy-metal text-ecru-white pt-16 pb-8 px-8 md:px-12 border-t border-old-gold/10">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Changed: mb-24 to mb-16 to pull the bottom bar up */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          
          {/* Brand Column - Tightened space-y-8 to space-y-6 */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative w-10 h-10 bg-white/5 border border-old-gold/10 p-1 rounded-sm">
                <Image src="/mintrix-maintain-logo.png" alt="Logo" fill className="object-contain" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-black uppercase italic tracking-tighter">Mintrix</span>
                <span className="text-old-gold text-[8px] font-bold tracking-[0.4em] uppercase">Maintenance</span>
              </div>
            </Link>
            <p className="text-dove-gray text-base font-medium leading-relaxed max-w-sm">
              Premium property care for Downtown Dubai's elite residences. 90-minute arrival guaranteed.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 border border-white/10 flex items-center justify-center hover:bg-old-gold hover:text-heavy-metal transition-all">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-9 h-9 border border-white/10 flex items-center justify-center hover:bg-old-gold hover:text-heavy-metal transition-all">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links - space-y-8 to space-y-6, link gap to space-y-3 */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-old-gold text-[9px] font-black uppercase tracking-[0.4em]">Navigation</h4>
            <ul className="space-y-3 text-xs font-bold uppercase tracking-widest text-ecru-white/60">
              <li><Link href="/about" className="hover:text-old-gold transition-all">Our Story</Link></li>
              <li><Link href="/solutions" className="hover:text-old-gold transition-all">Case Studies</Link></li>
              <li><Link href="/#services" className="hover:text-old-gold transition-all">Services</Link></li>
              <li><Link href="/#contact" className="hover:text-old-gold transition-all">Contact</Link></li>
            </ul>
          </div>

          {/* Target Audience Solutions */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-old-gold text-[9px] font-black uppercase tracking-[0.4em]">Expertise</h4>
            <ul className="space-y-3 text-xs font-bold uppercase tracking-widest text-ecru-white/60">
              <li className="flex items-center gap-2 group cursor-pointer">
                High-Rise HVAC <ArrowUpRight size={12} className="text-old-gold opacity-0 group-hover:opacity-100 transition-all" />
              </li>
              <li className="flex items-center gap-2 group cursor-pointer">
                Smart Home MEP <ArrowUpRight size={12} className="text-old-gold opacity-0 group-hover:opacity-100 transition-all" />
              </li>
              <li className="flex items-center gap-2 group cursor-pointer">
                Luxury Fit-Outs <ArrowUpRight size={12} className="text-old-gold opacity-0 group-hover:opacity-100 transition-all" />
              </li>
            </ul>
          </div>

          {/* Direct Contact - Tightened vertical spacing */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-old-gold text-[9px] font-black uppercase tracking-[0.4em]">Headquarters</h4>
            <div className="space-y-4 text-xs font-bold uppercase tracking-widest text-ecru-white/60">
              <div className="flex gap-3">
                <MapPin size={16} className="text-old-gold shrink-0" />
                <p>Business Bay, Dubai, UAE <br /> <span className="text-[9px] opacity-40">Operations Center</span></p>
              </div>
              <div className="flex gap-3">
                <Phone size={16} className="text-old-gold shrink-0" />
                <p>+971 50 000 0000</p>
              </div>
              <div className="flex gap-3">
                <Mail size={16} className="text-old-gold shrink-0" />
                <p className="lowercase">support@mintrix.ae</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Reduced pt-12 to pt-8 */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[9px] font-black uppercase tracking-[0.5em] text-white/20">
            © 2026 Mintrix Maintenance Solutions. Licensed & Certified.
          </p>
          <div className="flex gap-8 text-[9px] font-black uppercase tracking-[0.3em] text-white/20">
            <Link href="/privacy" className="hover:text-old-gold transition-all">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-old-gold transition-all">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}