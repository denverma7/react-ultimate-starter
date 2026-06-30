import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutHeader({
  title,
  description,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl"
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2">
        <Sparkles
          size={16}
          className="text-blue-600"
        />

        <span className="text-sm font-semibold text-blue-700">
          About
        </span>
      </div>

      <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
        {title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        {description}
      </p>
    </motion.div>
  );
}