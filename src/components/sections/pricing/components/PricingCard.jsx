import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/common/card";

import { cn } from "@/libs";

import FeatureList from "@/components/common/FeatureList";

import PricingCardHeader from "./PricingCardHeader";
import PricingCardFooter from "./PricingCardFooter";

import { fadeUp, liftHover } from "@/libs/animations";

export default function PricingCard({ plan }) {
  return (
    <motion.div variants={fadeUp} whileHover={liftHover}>
      <Card
        className={cn(
          "h-full",
          plan.featured && ["border-blue-500", "shadow-xl", "scale-[1.02]"],
        )}
      >
        <PricingCardHeader plan={plan} />

        <CardContent className="flex-1">
          <FeatureList items={plan.features} />
        </CardContent>

        <PricingCardFooter cta={plan.cta} />
      </Card>
    </motion.div>
  );
}
