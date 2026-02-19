import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import { BRAND_DATA } from '@/constants/navigation';
import { IconBox } from '@/components/ui/IconWrapper';

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-48 bg-heavy-metal text-ecru-white px-8 md:px-12 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-24 lg:gap-32 relative z-10">
        
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-old-gold font-bold tracking-[0.4em] text-xs uppercase border-l-2 border-old-gold pl-4">Get In Touch</h2>
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
              Ready to Secure <br />
              <span className="text-old-gold italic underline decoration-old-gold/20">Your Property?</span>
            </h3>
          </div>
          
          <div className="space-y-8">
            <ContactInfoItem 
              Icon={MapPin} 
              title="Dubai Headquarters" 
              desc={BRAND_DATA.address} 
            />
            <ContactInfoItem 
              Icon={Clock} 
              title="Response Hours" 
              desc="24/7 Emergency Support | 90-Min Arrival" 
            />
          </div>
        </div>

        <div className="bg-white p-10 md:p-16 border-t-4 border-old-gold shadow-2xl">
           {/* Replace with your Form component or chunk later */}
           <p className="text-heavy-metal font-bold">Priority Booking Form</p>
        </div>
      </div>
    </section>
  );
}

function ContactInfoItem({ Icon, title, desc }: { Icon: any, title: string, desc: string }) {
  return (
    <div className="flex items-start gap-6 group">
      <IconBox Icon={Icon} />
      <div className="space-y-1">
        <h4 className="font-black text-xl tracking-tight uppercase group-hover:text-old-gold transition-colors">{title}</h4>
        <p className="text-dove-gray text-base font-medium">{desc}</p>
      </div>
    </div>
  );
}