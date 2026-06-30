import { cn } from "@/libs/cn";

export default function CardHeader({
  children,
  className,
}) {
  return (
    <div
      className={cn(
        "border-b border-slate-100 px-6 py-4",
        className
      )}
    >
      {children}
    </div>
  );
}