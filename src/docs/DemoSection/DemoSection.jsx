import { cn } from "@/utils/cn";

export default function DemoSection({
  id,
  title,
  description,
  children,
  className,
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-20", className)}
    >
      <h2 className="text-3xl font-bold">
        {title}
      </h2>

      {description && (
        <p className="mt-2 max-w-3xl text-slate-600">
          {description}
        </p>
      )}

      <div className="mt-8">
        {children}
      </div>
    </section>
  );
}