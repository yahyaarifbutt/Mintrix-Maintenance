import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { SOLUTIONS_DATA } from '@/constants/navigation';

interface SolutionProps {
  project: typeof SOLUTIONS_DATA[0];
}

export const SolutionCard = ({ project }: SolutionProps) => (
  <div className="group relative bg-white/5 border border-white/10 overflow-hidden rounded-sm transition-all duration-500 hover:border-old-gold/50">
    <div className="relative h-80 w-full overflow-hidden">
      <Image 
        src={project.image} 
        alt={project.title} 
        fill 
        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
      />
      <div className="absolute top-4 left-4 bg-heavy-metal/80 backdrop-blur-md px-3 py-1 border border-old-gold/20">
        <span className="text-old-gold text-[9px] font-black uppercase tracking-widest">{project.category}</span>
      </div>
    </div>
    
    <div className="p-8 space-y-4">
      <p className="text-old-gold/60 text-[10px] font-black uppercase tracking-[0.2em]">{project.client}</p>
      <h3 className="text-2xl font-black uppercase italic tracking-tighter leading-none group-hover:text-old-gold transition-colors">
        {project.title}
      </h3>
      <p className="text-dove-gray text-sm leading-relaxed line-clamp-2 font-medium">
        {project.description}
      </p>
      
      <div className="pt-4 flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span key={tag} className="text-[9px] border border-white/10 px-2 py-1 text-white/40 font-bold uppercase">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);