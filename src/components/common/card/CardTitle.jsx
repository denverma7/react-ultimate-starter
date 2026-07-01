export default function CardTitle({
  children,
}) {
  return (
    <h3 className="text-xl font-bold text-slate-900">
      {children}
    </h3>
  );
}