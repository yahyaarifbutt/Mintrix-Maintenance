import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative pt-40 pb-32 px-8 md:px-12 overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 z-0">
        <Image
          src="/downtown-dubai-hero.jpg"
          alt="Downtown Dubai Luxury Properties"
          fill
          className="object-cover grayscale-[30%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-heavy-metal via-heavy-metal/90 to-heavy-metal/60" />
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-[1px] bg-old-gold" />
          <h2 className="text-old-gold font-black text-xs tracking-[0.5em] uppercase">
            Elite Solutions for Downtown Dubai
          </h2>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-black uppercase italic tracking-tighter leading-[0.9] mb-12">
          Protecting <br /> Dubai&apos;s Most <br />
          <span className="text-old-gold">Valuable Assets.</span>
        </h1>

        <p className="text-ecru-white/80 text-2xl max-w-3xl leading-relaxed font-medium border-l-4 border-old-gold pl-8">
          Downtown living demands perfection. We analyze the unique technical
          challenges of high-rise luxury and engineer proactive solutions before
          they impact your lifestyle.
        </p>
      </div>
    </section>
  );
}
