export default function PricingPrice({
  price,
}) {
  return (
    <div className="my-6">
      <div className="text-5xl font-bold text-slate-900">
        {price.amount}
      </div>

      <div className="mt-2 text-sm font-medium text-slate-500">
        {price.period}
      </div>
    </div>
  );
}