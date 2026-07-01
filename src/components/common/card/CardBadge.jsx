export default function CardBadge({
  children,
}) {
  return (
    <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
      {children}
    </span>
  );
}