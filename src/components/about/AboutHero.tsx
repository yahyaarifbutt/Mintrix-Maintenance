import Image from 'next/image';

export default function AboutHero() {
  return (
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
            src="/p_team.jpg" 
            alt="Mintrix Professional Team"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-old-gold/5 blur-[160px] pointer-events-none" />
    </section>
  );
}