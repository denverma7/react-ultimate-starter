import { cn } from "@/libs";

export default function CardFooter({
  children,
  className,
}) {
  return (
    <footer
      className={cn(
        "border-t border-slate-200 bg-slate-50 p-4",
        className
      )}
    >
      {children}
    </footer>
  );
}