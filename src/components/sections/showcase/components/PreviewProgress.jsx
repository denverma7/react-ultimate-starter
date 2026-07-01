import { motion } from "framer-motion";

export default function PreviewProgress({
  value = 70,
}) {
  return (
    <div className="h-2 rounded-full bg-slate-200">
      <motion.div
        initial={{
          width: 0,
        }}
        whileInView={{
          width: `${value}%`,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
        }}
        className="
          h-2
          rounded-full
          bg-linear-to-r
          from-indigo-600
          via-blue-600
          to-cyan-500
        "
      />
    </div>
  );
}