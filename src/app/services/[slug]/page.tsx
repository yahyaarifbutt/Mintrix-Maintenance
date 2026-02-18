import { services } from '@/lib/services-data';
import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Contact from '@/components/sections/Contact';
import ServiceDirectory from '@/components/layout/ServiceDirectory';

// 1. Make the function async to handle the params Promise
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  
  // 2. Await the params before using them
  const { slug } = await params;
  
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  return (
    <main className="min-h-screen bg-ecru-white">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-heavy-metal py-20 md:py-32 px-8 md:px-12 text-ecru-white relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto relative z-10">
          <h2 className="text-old-gold font-black text-xs tracking-[0.4em] mb-6 uppercase border-l-2 border-old-gold pl-4">
            Professional Solutions
          </h2>
          <h1 className="text-5xl md:text-8xl font-black uppercase italic text-old-gold mb-8 tracking-tighter">
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl text-dove-gray max-w-3xl font-medium leading-relaxed">
            {service.description}
          </p>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-old-gold/5 blur-[160px] pointer-events-none" />
      </section>

      {/* Detailed Content */}
      <section className="py-20 md:py-32 px-8 md:px-12">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-20 items-start">
          
          <div className="space-y-8">
            <h3 className="text-heavy-metal text-3xl font-black uppercase italic tracking-tight">
              Service Overview
            </h3>
            <div className="w-16 h-1 bg-old-gold"></div>
            <div className="text-heavy-metal font-medium text-lg leading-relaxed space-y-6">
              <p>{service.longDescription || "Mintrix provides premium-grade technical solutions tailored to the specific needs of Dubai's luxury residential and commercial sectors."}</p>
            </div>
          </div>

          <div className="bg-white p-10 md:p-16 border border-old-gold/10 shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-old-gold"></div>
            <h3 className="text-heavy-metal font-black uppercase tracking-[0.2em] text-sm mb-10">
              Technical Specifications
            </h3>
            <ul className="space-y-6">
              {/* 3. Use Optional Chaining (?.) to prevent the 'map of undefined' crash */}
              {service.features?.map((f, i) => (
                <li key={i} className="flex items-center gap-4 text-heavy-metal font-bold text-lg group">
                  <span className="w-2 h-2 bg-old-gold rounded-full group-hover:scale-150 transition-transform"></span> 
                  {f}
                </li>
              )) || (
                <li className="text-dove-gray italic">Standard maintenance protocols apply.</li>
              )}
            </ul>
          </div>
        </div>
      </section>

      <Contact />
      <ServiceDirectory />
      
      <footer className="bg-heavy-metal py-12 text-center text-ecru-white/30 text-[10px] tracking-[0.3em] uppercase">
        <p>© 2026 Mintrix Contracting. All rights reserved.</p>
      </footer>
    </main>
  );
}