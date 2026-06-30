import { cn } from "@/libs/cn";

const gaps = {
  xs: "gap-2",
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
  xl: "gap-12",
};

export default function Stack({
  children,
  gap = "md",
  className,
}) {
  return (
    <div
      className={cn(
        "flex flex-col",
        gaps[gap],
        className
      )}
    >
      {children}
    </div>
  );
}