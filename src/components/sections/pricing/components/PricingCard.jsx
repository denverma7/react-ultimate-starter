import { motion } from "framer-motion";

import {
  Card,
  CardContent,
} from "@/components/common/card";

import FeatureList from "@/components/common/FeatureList";

import PricingCardHeader from "./PricingCardHeader";
import PricingCardFooter from "./PricingCardFooter";

import {
  fadeUp,
  liftHover,
} from "@/libs/animations";

export default function PricingCard({
  plan,
}) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={liftHover}
    >
      <Card
        className={
          plan.featured
            ? "ring-2 ring-blue-500"
            : ""
        }
      >
        <PricingCardHeader
          plan={plan}
        />

        <CardContent>
          <FeatureList
            items={plan.features}
          />
        </CardContent>

        <PricingCardFooter
          cta={plan.cta}
        />
      </Card>
    </motion.div>
  );
}