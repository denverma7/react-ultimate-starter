import { cn } from "@/libs/cn";

export default function ModalFooter({
  children,
  className,
}) {
  return (
    <div
      className={cn(
        "flex justify-end gap-3 border-t border-slate-200 p-6",
        className
      )}
    >
      {children}
    </div>
  );
}