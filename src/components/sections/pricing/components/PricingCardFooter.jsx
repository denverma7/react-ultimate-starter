import { CardFooter } from "@/components/common/card";
import Button from "@/components/common/Button";

export default function PricingCardFooter({
  cta,
}) {
  return (
    <CardFooter>
      <Button
        className="w-full"
        variant="primary"
      >
        {cta}
      </Button>
    </CardFooter>
  );
}