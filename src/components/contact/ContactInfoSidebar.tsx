import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { BRAND_DATA } from "@/constants/navigation";

export default function ContactInfoSidebar() {
  const details = [
    { icon: <Phone size={22} />, label: "Emergency Hotline", value: BRAND_DATA.phone },
    { icon: <Mail size={22} />, label: "Corporate Inquiries", value: BRAND_DATA.email },
    { icon: <MapPin size={22} />, label: "Operations Center", value: BRAND_DATA.address },
  ];

  return (
    <div className="lg:col-span-5 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6 border-l-4 border-old-gold pl-8"
      >
        <p className="text-xl text-dove-gray leading-relaxed font-medium">
          For our Downtown Dubai clients, we prioritize rapid-response mobilization.
        </p>

        <div className="flex items-center gap-3 text-old-gold/60 text-[10px] font-black uppercase tracking-[0.3em]">
          <Clock size={14} /> Average Response: 42 Minutes
        </div>
      </motion.div>

      <div className="space-y-6">
        {details.map((item, idx) => (
          <div
            key={idx}
            className="flex gap-6 p-6 bg-white/[0.02] border border-white/5 hover:border-old-gold/30 transition-all duration-500 group"
          >
            <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-old-gold group-hover:text-heavy-metal transition-all duration-500">
              {item.icon}
            </div>

            <div>
              <p className="text-[9px] font-black uppercase tracking-widest text-old-gold/60 mb-1">
                {item.label}
              </p>
              <p className="text-xl font-black tracking-tight">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
