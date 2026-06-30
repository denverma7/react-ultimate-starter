import { cn } from "@/libs/cn";

const justifyMap = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
};

const alignMap = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
};

export default function Flex({
  children,
  justify = "start",
  align = "center",
  gap = "gap-4",
  wrap = false,
  className,
}) {
  return (
    <div
      className={cn(
        "flex",
        justifyMap[justify],
        alignMap[align],
        gap,
        wrap && "flex-wrap",
        className
      )}
    >
      {children}
    </div>
  );
}