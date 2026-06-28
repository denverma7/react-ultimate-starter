import { cn } from "@/utils/cn";

export default function ModalHeader({
  children,
  className,
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-between border-b border-slate-200 p-6",
        className
      )}
    >
      {children}
    </div>
  );
}