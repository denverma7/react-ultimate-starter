import { motion } from "framer-motion";
import { cn } from "@/libs";
import { fadeUp, liftHover } from "@/libs/animations";

import ShowcasePreview from "./ShowcasePreview";
import ShowcasePreviewFrame from "./ShowcasePreviewFrame";
import CardContent from "@/components/common/card/CardContent";

export default function ShowcaseCard({ item }) {
  const { title, description, icon: Icon, preview } = item;

  return (
    <motion.article
      variants={fadeUp}
      whileHover={liftHover}
      className={cn(
        "group rounded-3xl",
        "border border-slate-200/80",
        "bg-white/90 backdrop-blur-sm",
        "overflow-hidden",
        "shadow-sm",
        "transition-all duration-300",
        "hover:border-blue-200",
        "hover:ring-1 hover:ring-blue-200",
        "hover:shadow-2xl",
      )}
    >
      <div className="border-b border-slate-200 p-6">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-600 via-blue-600 to-cyan-500 text-white">
          <Icon size={22} />
        </div>

        <h3 className="text-xl font-bold text-slate-900">{title}</h3>

        <p className="mt-2 text-slate-600">{description}</p>
      </div>

      {/* <div className="bg-slate-50 p-6">
        <ShowcasePreview type={preview} />
      </div> */}
      <CardContent>
        <ShowcasePreviewFrame>
          <ShowcasePreview type={preview} />
        </ShowcasePreviewFrame>
      </CardContent>
    </motion.article>
  );
}
