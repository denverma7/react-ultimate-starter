import { cn } from "@/libs/cn";

export default function DemoPreview({
  children,
  className,
}) {
  return (
    <div
      className={cn(
        "rounded-xl border bg-white p-8 shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}