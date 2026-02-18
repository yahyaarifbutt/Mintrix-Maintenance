// src/app/about/page.tsx
import Navbar from '@/components/layout/Navbar';
import ServiceDirectory from '@/components/layout/ServiceDirectory';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-ecru-white">
      <Navbar />

      {/* Hero Section - The Story */}
      <section className="py-24 md:py-32 px-8 md:px-12 bg-heavy-metal text-ecru-white relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="space-y-8">
            <h2 className="text-old-gold font-black text-xs tracking-[0.4em] uppercase border-l-2 border-old-gold pl-4">
              Our Legacy
            </h2>
            <h1 className="text-5xl md:text-8xl font-black leading-[1.05] tracking-tighter uppercase italic">
              Redefining <br /> <span className="text-old-gold">Reliability</span> in Dubai.
            </h1>
            <p className="text-xl text-dove-gray max-w-xl leading-relaxed font-medium">
              Mintrix Contracting was born from a simple observation: Dubai’s luxury properties deserve maintenance that matches their stature. We don't just fix problems; we preserve value.
            </p>
          </div>
          <div className="relative aspect-video lg:aspect-square rounded-sm overflow-hidden border border-old-gold/20 shadow-2xl">
            <Image 
              src="/image_fd985e.jpg" 
              alt="Mintrix Professional Team"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-old-gold/5 blur-[160px] pointer-events-none" />
      </section>

      {/* Mission & Values */}
      <section className="py-24 md:py-32 px-8 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="space-y-6">
              <div className="w-12 h-1 bg-old-gold"></div>
              <h3 className="text-heavy-metal text-2xl font-black uppercase italic">Our Mission</h3>
              <p className="text-dove-gray leading-relaxed font-medium">
                To provide an uncompromising standard of technical service that ensures zero downtime for your home or business operations.
              </p>
            </div>
            <div className="space-y-6">
              <div className="w-12 h-1 bg-old-gold"></div>
              <h3 className="text-heavy-metal text-2xl font-black uppercase italic">The 90-Min Promise</h3>
              <p className="text-dove-gray leading-relaxed font-medium">
                Time is the ultimate luxury. Our strategic locations near Business Bay and Al Quoz allow us to reach any major Dubai hub within our target window.
              </p>
            </div>
            <div className="space-y-6">
              <div className="w-12 h-1 bg-old-gold"></div>
              <h3 className="text-heavy-metal text-2xl font-black uppercase italic">Certified Quality</h3>
              <p className="text-dove-gray leading-relaxed font-medium">
                Every Mintrix technician is SOP-trained and certified, ensuring that our work meets the rigorous demands of DEWA and Dubai Municipality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Bar */}
      <section className="bg-old-gold py-16 px-8 text-center">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-heavy-metal text-3xl md:text-5xl font-black tracking-tighter uppercase mb-8">
            Experience the Mintrix Standard.
          </h2>
          <button className="bg-heavy-metal text-ecru-white px-12 py-5 font-black text-sm uppercase tracking-widest hover:bg-white hover:text-heavy-metal transition-all shadow-xl">
            Download Company Profile
          </button>
        </div>
      </section>

      <ServiceDirectory />
      
      <footer className="bg-heavy-metal py-12 text-center text-ecru-white/30 text-[10px] tracking-[0.3em] uppercase">
        <p>© 2026 Mintrix Contracting. All rights reserved.</p>
      </footer>
    </main>
  );
}