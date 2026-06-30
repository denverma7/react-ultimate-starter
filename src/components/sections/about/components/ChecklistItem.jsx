import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { fadeUp } from "@/libs/animations";

export default function ChecklistItem({
  item,
}) {
  const Icon = item.icon;

  return (
    <motion.li
      variants={fadeUp}
      className="flex items-start gap-4"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
        <Icon size={22} />
      </div>

      <div className="flex-1">
        <h4 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
          {item.title}

          <CheckCircle2
            size={16}
            className="text-emerald-500"
          />
        </h4>
      </div>
    </motion.li>
  );
}