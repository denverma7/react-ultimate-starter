import { motion } from "framer-motion";
import { cn } from "@/libs/cn";

import FeatureBackground from "./FeatureBackground";
import FeatureIcon from "./FeatureIcon";
import FeatureTitle from "./FeatureTitle";
import FeatureDescription from "./FeatureDescription";
import FeatureLink from "./FeatureLink";
import FeatureBadge from "./FeatureBadge";
import { fadeUp, liftHover } from "@/libs/animations";

export default function FeatureCard({ feature, index }) {
  const { title, description, icon, badge, href, featured } = feature;

  return (
    <motion.article
      variants={fadeUp}
      whileHover={liftHover}
      className={cn(
        "group relative overflow-hidden rounded-3xl",
        "border border-slate-200/80 bg-white/90 backdrop-blur-sm",
        "p-8 shadow-sm transition-all duration-300",
        "hover:border-blue-200 hover:ring-1 hover:ring-blue-200 hover:shadow-2xl",
        featured && "border-2 border-blue-500",
      )}
    >
      <FeatureBackground />

      <div className="relative z-10">
        <FeatureBadge>{badge}</FeatureBadge>

        <FeatureIcon icon={icon} />

        <FeatureTitle>{title}</FeatureTitle>

        <FeatureDescription>{description}</FeatureDescription>

        <FeatureLink href={href}>Learn More</FeatureLink>
      </div>
    </motion.article>
  );
}
