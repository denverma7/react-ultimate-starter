import { cn } from "@/libs";

export default function Card({
  children,
  className,
}) {
  return (
    <article
      className={cn(
        "overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 backdrop-blur-sm shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-xl",
        className
      )}
    >
      {children}
    </article>
  );
}