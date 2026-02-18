// src/components/layout/ServiceDirectory.tsx
import Link from 'next/link';
import { services } from '@/lib/services-data';

export default function ServiceDirectory() {
  return (
    <div className="bg-heavy-metal py-16 border-t border-old-gold/10">
      <div className="max-w-[1440px] mx-auto px-8 md:px-12">
        <p className="text-old-gold font-black text-[10px] tracking-[0.4em] mb-8 uppercase opacity-80">
          Quick Service Directory
        </p>
        
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          {services.map((s, i) => (
            <div key={s.slug} className="flex items-center gap-x-8">
              {/* Changed: <span> to <Link> for SEO and navigation */}
              <Link 
                href={`/services/${s.slug}`}
                className="text-dove-gray text-xs font-semibold hover:text-old-gold transition-all duration-300"
              >
                {s.title}
              </Link>
              {i !== services.length - 1 && (
                <span className="w-1 h-1 bg-old-gold/30 rounded-full"></span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}