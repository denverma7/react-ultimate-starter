export default function ShowcaseGrid({
  children,
}) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {children}
    </div>
  );
}