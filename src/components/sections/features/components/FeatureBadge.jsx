export default function FeatureBadge({ children }) {
  if (!children) return null;

  return (
    <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
      {children}
    </span>
  );
}