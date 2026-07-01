import { motion } from "framer-motion";

export default function PreviewStat({
  label,
  value,
}) {
  return (
    <motion.div
      whileHover={{
        y: -3,
      }}
      className="
        rounded-xl
        bg-slate-50
        p-3
      "
    >
      <div className="text-xs text-slate-500">
        {label}
      </div>

      <div className="mt-1 text-lg font-bold">
        {value}
      </div>
    </motion.div>
  );
}