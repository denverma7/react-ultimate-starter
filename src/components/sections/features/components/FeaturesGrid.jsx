import { motion } from "framer-motion";
import { staggerContainer } from "@/libs/animations";

export default function FeaturesGrid({
  children,
}) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
      }}
      className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3"
    >
      {children}
    </motion.div>
  );
}