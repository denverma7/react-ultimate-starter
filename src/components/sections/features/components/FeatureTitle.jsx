export default function FeatureTitle({
  children,
}) {
  return (
    <h3 className="mt-8 text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
      {children}
    </h3>
  );
}