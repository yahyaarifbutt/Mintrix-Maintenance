import { LucideIcon } from 'lucide-react';

export const IconBox = ({ Icon }: { Icon: LucideIcon }) => (
  <div className="p-4 bg-old-gold/5 border border-old-gold/20 rounded-sm group-hover:bg-old-gold/10 transition-colors">
    <Icon className="text-old-gold w-7 h-7" />
  </div>
);