import { cn } from "@/libs";

export default function CardHeader({
  children,
  className,
}) {
  return (
    <header
      className={cn(
        "border-b border-slate-200 p-6",
        className
      )}
    >
      {children}
    </header>
  );
}