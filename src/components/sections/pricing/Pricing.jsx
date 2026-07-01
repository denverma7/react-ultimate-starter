import SectionContainer from "@/components/layout/SectionContainer";
import SectionHeader from "@/components/common/SectionHeader";

import {
  PRICING_SECTION_ID,
  PRICING_BADGE,
  PRICING_TITLE,
  PRICING_DESCRIPTION,
} from "./pricing.constants";

import { pricingPlans } from "./pricing.data";

import PricingBackground from "./components/PricingBackground";
import PricingGrid from "./components/PricingGrid";
import PricingCard from "./components/PricingCard";

export default function Pricing() {
  return (
    <section
      id={PRICING_SECTION_ID}
      className="relative overflow-hidden py-24"
    >
      <PricingBackground />

      <SectionContainer>
        <SectionHeader
          badge={PRICING_BADGE}
          title={PRICING_TITLE}
          description={PRICING_DESCRIPTION}
        />

        <PricingGrid>
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
            />
          ))}
        </PricingGrid>
      </SectionContainer>
    </section>
  );
}