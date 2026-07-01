export default function PricingGrid({
  children,
}) {
  return (
    <div
      className="
        grid
        gap-8
        lg:grid-cols-3
        items-stretch
      "
    >
      {children}
    </div>
  );
}
