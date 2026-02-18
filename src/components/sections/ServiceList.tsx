// src/components/sections/ServiceList.tsx
const categories = [
  {
    name: "Facility & MEP",
    items: ["AC Repair & Service", "Electrical Service", "Plumbing Service", "Civil & Masonry", "Carpentry & Furniture"]
  },
  {
    name: "IT & System Maintenance",
    items: ["Software Maintenance", "Data Backup", "Virus Protection", "System Upgradation", "Network Troubleshooting"]
  },
  {
    name: "Fit-Out & Specialized",
    items: ["Interior Fit-Out", "Automation", "Appliance Repair", "System Cleaning", "Performance Monitoring"]
  }
];

export default function ServiceList() {
  return (
    // Changed: Increased py-32 md:py-48 and horizontal padding px-8 md:px-12
    <section className="py-32 md:py-48 bg-ecru-white px-8 md:px-12 border-t border-heavy-metal/5">
      
      {/* Changed: Increased max-width to 1440px for a wide, premium feel */}
      <div className="max-w-[1440px] mx-auto">
        
        <div className="mb-24 space-y-4">
          <h2 className="text-heavy-metal text-4xl md:text-6xl font-black italic tracking-tighter uppercase">
            Comprehensive Solutions
          </h2>
          <div className="w-24 h-1.5 bg-old-gold"></div>
          <p className="text-dove-gray text-xl max-w-2xl font-medium leading-relaxed">
            Professional services tailored for luxury residential homes and critical business operations across Dubai.
          </p>
        </div>

        {/* Changed: gap-12 to gap-20 lg:gap-32 to fill the wider container */}
        <div className="grid md:grid-cols-3 gap-20 lg:gap-32">
          {categories.map((cat, idx) => (
            <div key={idx} className="space-y-10 group">
              <div className="space-y-2">
                <h3 className="text-old-gold font-black text-xs tracking-[0.4em] uppercase border-b border-old-gold/20 pb-4 transition-all group-hover:border-old-gold">
                  {cat.name}
                </h3>
              </div>
              
              <ul className="space-y-6">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-heavy-metal group/item cursor-default">
                    <span className="w-2 h-2 bg-old-gold rounded-full opacity-40 group-hover/item:opacity-100 group-hover/item:scale-125 transition-all duration-300"></span>
                    <span className="text-lg font-semibold tracking-tight group-hover/item:translate-x-2 transition-transform duration-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}