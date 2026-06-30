import { motion } from "framer-motion";
import { iconHover } from "@/libs/animations";

export default function FeatureIcon({
  icon: Icon,
}) {
  return (
    <motion.div
      whileHover={iconHover}
      transition={{
        duration: 0.2,
      }}
      className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-600 via-blue-600 to-cyan-500 text-white shadow-lg"
    >
      <Icon size={30} />
    </motion.div>
  );
}