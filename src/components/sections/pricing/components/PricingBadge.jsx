import CardBadge from "@/components/common/Card/CardBadge";

export default function PricingBadge({
  children,
}) {
  if (!children) return null;

  return (
    <div className="mb-4">
      <CardBadge>{children}</CardBadge>
    </div>
  );
}