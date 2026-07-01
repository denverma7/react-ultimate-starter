import {
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/common/card";

import PricingPrice from "./PricingPrice";
import PricingBadge from "./PricingBadge";

export default function PricingCardHeader({
  plan,
}) {
  return (
    <CardHeader>
      <PricingBadge>
        {plan.badge}
      </PricingBadge>

      <CardTitle>
        {plan.name}
      </CardTitle>

      <PricingPrice
        price={plan.price}
      />

      <CardDescription>
        {plan.description}
      </CardDescription>
    </CardHeader>
  );
}