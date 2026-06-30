import { motion } from "framer-motion";
import DashboardMockup from "./DashboardMockup";

export default function HeroImage() {
  return (
    <motion.div
      animate={{
        y: [-10, 10, -10],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative z-20 mx-auto w-full max-w-sm sm:max-w-md lg:max-w-xl"
    >
      <DashboardMockup />
    </motion.div>
  );
}