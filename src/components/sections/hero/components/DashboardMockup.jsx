import { motion } from "framer-motion";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import DashboardContent from "./DashboardContent";

export default function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full overflow-hidden rounded-3xl border border-white/50 bg-white/80 shadow-2xl backdrop-blur-xl"
    >
      <DashboardHeader />

      <div className="flex min-height: 500px;">
        <DashboardSidebar />
        <DashboardContent />
      </div>
    </motion.div>
  );
}