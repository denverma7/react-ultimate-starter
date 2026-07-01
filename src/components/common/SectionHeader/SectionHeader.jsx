import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { cn } from "@/libs";

export default function SectionHeader({
  badge,
  title,
  description,
  icon: Icon = Sparkles,
  align = "center",
  className,
}) {
  const centered = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        "max-w-3xl",
        centered ? "mx-auto text-center" : "",
        className
      )}
    >
      <div
        className={cn(
          "inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2",
          centered && "justify-center"
        )}
      >
        <Icon
          size={16}
          className="text-blue-600"
        />

        <span className="text-sm font-semibold text-blue-700">
          {badge}
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