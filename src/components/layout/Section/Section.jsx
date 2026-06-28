import { cn } from "@/utils/cn";

const spacing = {
  sm: "py-10",
  md: "py-16",
  lg: "py-24",
  xl: "py-32",
};

export default function Section({
  children,
  spacingY = "lg",
  className,
}) {
  return (
    <section
      className={cn(
        spacing[spacingY],
        className
      )}
    >
      {children}
    </section>
  );
}