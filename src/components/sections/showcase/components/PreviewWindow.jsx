import { motion } from "framer-motion";

export default function PreviewWindow({
  children,
}) {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        overflow-hidden
        rounded-2xl
        border
        border-slate-200/80
        bg-white
        shadow-sm
      "
    >
      {children}
    </motion.div>
  );
}