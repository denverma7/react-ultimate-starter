import { motion } from "framer-motion";

export default function PreviewBadge({
  children,
}) {
  return (
    <motion.span
      whileHover={{
        scale: 1.05,
      }}
      className="
        rounded-full
        bg-blue-100
        px-3
        py-1
        text-xs
        font-semibold
        text-blue-700
      "
    >
      {children}
    </motion.span>
  );
}