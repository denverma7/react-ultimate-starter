import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function StatCard({
  title,
  value,
  growth,
  icon: Icon,
  color = "bg-blue-500",
}) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        transition: { duration: 0.2 },
      }}
      className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
    >
      <div className="mb-4 flex items-center justify-between">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl text-white ${color}`}
        >
          <Icon size={18} />
        </div>

        <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
          <ArrowUpRight size={14} />
          {growth}
        </span>
      </div>

      <p className="text-sm text-slate-500">{title}</p>

      <h4 className="mt-1 text-2xl font-bold text-slate-900">
        {value}
      </h4>
    </motion.div>
  );
}