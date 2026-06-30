import { motion } from "framer-motion";

const chartData = [48, 72, 55, 94, 66, 118, 90];

export default function DashboardChart() {
  return (
    <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h4 className="font-semibold text-slate-900">
            Performance
          </h4>

          <p className="text-sm text-slate-500">
            Last 7 days
          </p>
        </div>

        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
          +18%
        </span>
      </div>

      <div className="flex h-32 sm:h-40 items-end justify-between gap-2">
        {chartData.map((height, index) => (
          <motion.div
            key={index}
            initial={{
              height: 0,
            }}
            animate={{
              height,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
            }}
            className="flex-1 rounded-t-xl bg-linear-to-t from-blue-600 via-blue-500 to-cyan-400"
          />
        ))}
      </div>

      <div className="mt-4 flex justify-between text-xs text-slate-400">
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
        <span>Sun</span>
      </div>
    </section>
  );
}