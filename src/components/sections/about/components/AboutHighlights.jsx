import { motion } from "framer-motion";

import { highlights } from "../about.data";

import StatCard from "@/components/common/StatCard";
import { staggerContainer } from "@/libs/animations";

export default function AboutHighlights() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
    >
      {highlights.map((item) => (
        <StatCard
          key={item.id}
          value={item.value}
          label={item.label}
        />
      ))}
    </motion.div>
  );
}