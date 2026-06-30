import { motion } from "framer-motion";
import { cn } from "@/libs";
import { fadeUp, liftHover } from "@/libs/animations";

export default function StatCard({
  value,
  label,
  className,
}) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={liftHover}
      className={cn(
        "rounded-3xl border border-slate-200/80",
        "bg-white/90 backdrop-blur-sm",
        "p-6 text-center",
        "shadow-sm transition-all duration-300",
        "hover:border-blue-200 hover:shadow-xl",
        className
      )}
    >
      <h3 className="text-3xl font-bold text-slate-900">
        {value}
      </h3>

      <p className="mt-2 text-sm text-slate-600">
        {label}
      </p>
    </motion.div>
  );
}