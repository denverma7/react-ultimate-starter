export default function CardDescription({
  children,
}) {
  return (
    <p className="mt-2 text-sm leading-6 text-slate-600">
      {children}
    </p>
  );
}