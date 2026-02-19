import Image from "next/image";
import { CheckCircle2, Star } from "lucide-react";

interface CaseStudy {
  title: string;
  location: string;
  image: string;
  problem: string;
  solution: string;
  result: string;
  stats: {
    time: string;
    savings: string;
    status: string;
  };
}

interface Props {
  study: CaseStudy;
  index: number;
}

export default function CaseStudyItem({ study, index }: Props) {
  const isReversed = index % 2 === 1;

  return (
    <div
      className={`grid lg:grid-cols-2 gap-16 items-center ${
        isReversed ? "lg:rtl" : ""
      }`}
    >
      {/* Image Side */}
      <div
        className={`relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl group ${
          isReversed ? "lg:order-2" : ""
        }`}
      >
        <div className="absolute top-8 left-8 z-20 bg-heavy-metal/90 backdrop-blur-md text-old-gold px-6 py-3 flex items-center gap-3 rounded-sm">
          <Star size={14} className="fill-old-gold" />
          <span className="text-[10px] font-black tracking-[0.2em] uppercase">
            {study.location}
          </span>
        </div>

        <Image
          src={study.image}
          alt={study.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-1000"
        />
      </div>

      {/* Content Side */}
      <div className={isReversed ? "lg:ltr text-left" : "text-left"}>
        <span className="text-old-gold/20 font-black text-8xl leading-none -ml-4 select-none">
          0{index + 1}
        </span>

        <h4 className="text-3xl md:text-5xl font-black uppercase mt-2 mb-10 leading-tight italic tracking-tighter">
          {study.title}
        </h4>

        <div className="space-y-10 relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-[1px] bg-old-gold/30 h-full -z-10" />

          {/* Problem */}
          <div className="flex gap-8 relative">
            <div className="w-10 h-10 rounded-full bg-heavy-metal border-2 border-old-gold flex items-center justify-center shrink-0 relative z-10 shadow-lg shadow-old-gold/20">
              <span className="text-old-gold text-lg font-black italic">P</span>
            </div>
            <div>
              <p className="font-black uppercase text-[10px] tracking-[0.3em] text-heavy-metal/40 mb-2">
                The Problem
              </p>
              <p className="text-lg font-medium leading-relaxed text-heavy-metal/90">
                {study.problem}
              </p>
            </div>
          </div>

          {/* Solution */}
          <div className="flex gap-8 relative">
            <div className="w-10 h-10 rounded-full bg-old-gold border-2 border-heavy-metal flex items-center justify-center shrink-0 relative z-10">
              <span className="text-heavy-metal text-lg font-black italic">
                S
              </span>
            </div>
            <div>
              <p className="font-black uppercase text-[10px] tracking-[0.3em] text-old-gold mb-2">
                The Solution
              </p>
              <p className="text-lg font-bold leading-relaxed italic text-heavy-metal">
                {study.solution}
              </p>
            </div>
          </div>

          {/* Result */}
          <div className="flex gap-8 relative">
            <div className="w-10 h-10 rounded-full bg-green-600/10 border-2 border-green-600/30 flex items-center justify-center shrink-0 relative z-10">
              <CheckCircle2 size={18} className="text-green-600" />
            </div>
            <div>
              <p className="font-black uppercase text-[10px] tracking-[0.3em] text-green-600 mb-2">
                The Result
              </p>
              <p className="text-lg font-medium leading-relaxed text-heavy-metal/70">
                {study.result}
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-3 gap-4 bg-heavy-metal p-6 rounded-sm text-ecru-white shadow-xl">
          <div className="text-center">
            <p className="text-2xl font-black text-old-gold">
              {study.stats.time}
            </p>
            <p className="text-[9px] uppercase tracking-widest opacity-60">
              Resolution
            </p>
          </div>

          <div className="text-center border-x border-white/10">
            <p className="text-2xl font-black text-old-gold">
              {study.stats.savings}
            </p>
            <p className="text-[9px] uppercase tracking-widest opacity-60">
              Protected
            </p>
          </div>

          <div className="text-center">
            <p className="text-xl font-black uppercase">
              {study.stats.status}
            </p>
            <p className="text-[9px] uppercase tracking-widest opacity-60">
              Status
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
