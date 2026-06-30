import { motion } from "framer-motion";

export default function HeroShapes() {
  return (
    <>
      <motion.div
        animate={{
          y: [-12, 12, -12],
          rotate: [0, 12, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute top-20 left-8 h-20 w-20 rounded-3xl bg-blue-500/10"
      />

      <motion.div
        animate={{
          y: [12, -12, 12],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="absolute bottom-20 right-12 h-24 w-24 rounded-full border border-blue-300"
      />

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/2 right-2 h-10 w-10 border-2 border-cyan-400"
      />
    </>
  );
}