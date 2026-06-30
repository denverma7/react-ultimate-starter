import { motion } from "framer-motion";

import { checklist } from "../about.data";
import { staggerContainer } from "@/libs/animations";

import ChecklistItem from "./ChecklistItem";

export default function AboutChecklist() {
  return (
    <motion.ul
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mt-10 space-y-6"
    >
      {checklist.map((item) => (
        <ChecklistItem
          key={item.id}
          item={item}
        />
      ))}
    </motion.ul>
  );
}