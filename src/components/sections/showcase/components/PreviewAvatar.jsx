import { motion } from "framer-motion";

export default function PreviewAvatar() {
  return (
    <div className="relative">
      <motion.div
        whileHover={{
          scale: 1.08,
        }}
        className="
          h-14
          w-14
          rounded-full
          bg-linear-to-br
          from-indigo-600
          via-blue-600
          to-cyan-500
        "
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-0
          right-0
          h-3
          w-3
          rounded-full
          bg-emerald-500
        "
      />
    </div>
  );
}