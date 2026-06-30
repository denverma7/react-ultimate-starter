import { cn } from "@/libs/cn";

export default function CardBody({
  children,
  className,
}) {
  return (
    <div
      className={cn("px-6 py-4", className)}
    >
      {children}
    </div>
  );
}