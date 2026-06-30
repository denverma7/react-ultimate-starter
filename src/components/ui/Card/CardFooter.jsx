import { cn } from "@/libs/cn";

export default function CardFooter({
  children,
  className,
}) {
  return (
    <div
      className={cn(
        "border-t border-slate-100 px-6 py-4 flex items-center justify-end gap-3",
        className
      )}
    >
      {children}
    </div>
  );
}