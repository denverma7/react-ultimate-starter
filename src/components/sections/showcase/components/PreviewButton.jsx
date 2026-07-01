import { motion } from "framer-motion";

export default function PreviewButton({
  children,
}) {
  return (
    <motion.button
      whileHover={{
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        w-full
        rounded-lg
        bg-linear-to-r
        from-indigo-600
        via-blue-600
        to-cyan-500
        py-2
        text-sm
        font-semibold
        text-white
      "
    >
      {children}
    </motion.button>
  );
}