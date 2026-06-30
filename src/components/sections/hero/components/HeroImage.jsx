import { MonitorSmartphone } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <motion.div
      animate={{
        y: [-12, 12, -12],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
      }}
      className="relative z-20 w-full max-w-md"
    >
      <div className="rounded-3xl border border-white/40 bg-white/80 p-8 shadow-2xl backdrop-blur-xl">

        <div className="flex items-center gap-3">

          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>

        </div>

        <div className="mt-10 flex justify-center">

          <MonitorSmartphone
            size={150}
            className="text-blue-600"
          />

        </div>

        <div className="mt-10 space-y-3">

          <div className="h-4 rounded bg-slate-200" />

          <div className="h-4 w-5/6 rounded bg-slate-200" />

          <div className="h-4 w-3/4 rounded bg-slate-200" />

        </div>

      </div>
    </motion.div>
  );
}