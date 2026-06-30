import { motion } from "framer-motion";

export default function HeroGlow() {
  return (
    <>
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute -top-10 right-12 h-72 w-72 rounded-full bg-blue-300/30 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-6 h-60 w-60 rounded-full bg-cyan-300/20 blur-3xl"
      />
    </>
  );
}