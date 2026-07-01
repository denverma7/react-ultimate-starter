import { cn } from "@/libs";

export default function CardContent({
  children,
  className,
}) {
  return (
    <div
      className={cn(
        "p-6",
        className
      )}
    >
      {children}
    </div>
  );
}