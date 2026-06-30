import { motion } from "framer-motion";

export default function HeroTitle({
  first,
  second,
}) {
  return (
    <motion.h1
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.2,
        duration: 0.6,
      }}
      className="mt-8 text-center text-5xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-7xl"
    >
      {first}

      <span className="mt-2 block bg-linear-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
        {second}
      </span>
    </motion.h1>
  );
}