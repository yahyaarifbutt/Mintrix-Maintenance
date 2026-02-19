import { motion } from "framer-motion";

export default function ContactHeader() {
  return (
    <div className="mb-20">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-old-gold font-black text-xs tracking-[0.5em] uppercase mb-6"
      >
        Concierge Access
      </motion.h2>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter leading-[0.85]"
      >
        Elite Support. <br />
        <span className="text-old-gold">Immediate</span> Action.
      </motion.h1>
    </div>
  );
}
