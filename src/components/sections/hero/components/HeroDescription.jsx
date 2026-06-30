import { motion } from "framer-motion";

export default function HeroDescription({
  children,
}) {
  return (
    <motion.p
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.35,
        duration: 0.6,
      }}
      className="mx-auto mt-8 max-w-2xl text-center text-lg leading-8 text-slate-600 md:text-xl"
    >
      {children}
    </motion.p>
  );
}