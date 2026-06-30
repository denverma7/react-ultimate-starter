import { cn } from "@/libs/cn";

const columns = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-2 lg:grid-cols-4",
};

export default function Grid({
  children,
  cols = 2,
  gap = "gap-6",
  className,
}) {
  return (
    <div
      className={cn(
        "grid",
        columns[cols],
        gap,
        className
      )}
    >
      {children}
    </div>
  );
}