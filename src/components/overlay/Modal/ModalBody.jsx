import { cn } from "@/libs/cn";

export default function ModalBody({
  children,
  className,
}) {
  return (
    <div
      className={cn("p-6", className)}
    >
      {children}
    </div>
  );
}