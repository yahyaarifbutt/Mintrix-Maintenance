import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Stats from '@/components/sections/Stats';
import SpecializedServices from '@/components/sections/SpecializedServices';
import ServiceDirectory from '@/components/layout/ServiceDirectory';
import Testimonials from '@/components/sections/Testimonials';
import Experts from '@/components/sections/Experts';
import Footer from '@/components/layout/Footer'; // New Import

export default function Home() {
  return (
    <main className="min-h-screen bg-heavy-metal">
      <Navbar />
      
      {/* 1. Impact Layer: Branding & Promise */}
      <Hero />
      
      {/* 2. Authority Layer: Services & Proof */}
      <Services />
      <Stats />
      
      {/* 3. Expertise Layer: Specialized Projects & Team */}
      <SpecializedServices />
      <Testimonials />
      <Experts />
      
      {/* 4. Navigation Layer: Global Directory & Footer */}
      <ServiceDirectory />
      <Footer /> 
    </main>
  );
}