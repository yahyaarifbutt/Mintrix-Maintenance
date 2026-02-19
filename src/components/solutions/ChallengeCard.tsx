import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface Props {
  title: string;
  description: string;
  image: string;
  fix: string;
}

export default function ChallengeCard({ title, description, image, fix }: Props) {
  return (
    <div className="relative group h-[500px] overflow-hidden rounded-sm border border-white/10 hover:border-old-gold/50 transition-all duration-500">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-1000"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-heavy-metal via-heavy-metal/50 to-transparent opacity-90" />

      <div className="absolute inset-0 p-10 flex flex-col justify-end z-20">
        <h4 className="text-3xl font-black uppercase mb-4 italic leading-none">
          {title}
        </h4>

        <p className="text-ecru-white/70 leading-relaxed mb-8 font-medium">
          {description}
        </p>

        <div className="pt-6 border-t border-old-gold/30 flex justify-between items-center">
          <span className="text-old-gold font-black text-[10px] tracking-widest uppercase">
            Our Fix
          </span>
          <span className="text-[11px] font-black uppercase tracking-tighter flex items-center gap-2">
            {fix} <ArrowRight size={14} className="text-old-gold" />
          </span>
        </div>
      </div>
    </div>
  );
}
