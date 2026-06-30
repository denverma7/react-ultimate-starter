import { motion } from "framer-motion";

export default function HeroStatItem({
  icon: Icon,
  value,
  label,
}) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.03,
      }}
      transition={{
        duration: 0.25,
      }}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="inline-flex rounded-xl bg-blue-50 p-3">
        <Icon
          size={24}
          className="text-blue-600"
        />
      </div>

      <h3 className="mt-5 text-3xl font-bold text-slate-900">
        {value}
      </h3>

      <p className="mt-2 text-slate-500">
        {label}
      </p>
    </motion.div>
  );
}