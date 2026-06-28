import { cn } from "@/utils/cn";

const variants = {
  h1: "text-5xl font-bold",
  h2: "text-4xl font-bold",
  h3: "text-3xl font-semibold",
  h4: "text-2xl font-semibold",
  body: "text-base",
  small: "text-sm",
};

export default function Typography({
  as: Component = "p",
  variant = "body",
  children,
  className,
}) {
  return (
    <Component
      className={cn(
        variants[variant],
        className
      )}
    >
      {children}
    </Component>
  );
}