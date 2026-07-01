import { cn } from "@/libs";

export default function ShowcasePreviewFrame({
  children,
  className,
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200 bg-linear-to-br from-slate-50 to-white p-4 shadow-inner",
        className
      )}
    >
      {children}
    </div>
  );
}