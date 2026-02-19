const values = [
  {
    title: "Our Mission",
    desc: "To provide an uncompromising standard of technical service that ensures zero downtime for your home or business operations."
  },
  {
    title: "The 90-Min Promise",
    desc: "Time is the ultimate luxury. Our strategic locations near Business Bay and Al Quoz allow us to reach any major Dubai hub within our target window."
  },
  {
    title: "Certified Quality",
    desc: "Every Mintrix technician is SOP-trained and certified, ensuring that our work meets the rigorous demands of DEWA and Dubai Municipality."
  }
];

export default function AboutValues() {
  return (
    <section className="py-24 md:py-32 px-8 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-3 gap-16">
          {values.map((v, i) => (
            <div key={i} className="space-y-6">
              <div className="w-12 h-1 bg-old-gold"></div>
              <h3 className="text-heavy-metal text-2xl font-black uppercase italic">{v.title}</h3>
              <p className="text-dove-gray leading-relaxed font-medium">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}