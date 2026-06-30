import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroScrollIndicator() {
  return (
    <motion.div
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        duration: 1.8,
        repeat: Infinity,
      }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
    >
      <ChevronDown
        size={32}
        className="text-slate-400"
      />
    </motion.div>
  );
}