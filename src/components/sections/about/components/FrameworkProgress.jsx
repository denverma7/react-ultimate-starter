import { motion } from "framer-motion";
import { frameworkProgress } from "../about.data";

export default function FrameworkProgress() {
  const percentage = Math.round(
    (frameworkProgress.completed / frameworkProgress.total) * 100
  );

  return (
    <div className="border-t border-slate-200 p-6">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-600">
          Framework Progress
        </span>

        <span className="text-sm font-semibold text-blue-600">
          {percentage}%
        </span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-slate-200">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-full rounded-full bg-linear-to-r from-blue-600 to-cyan-500"
        />
      </div>
    </div>
  );
}