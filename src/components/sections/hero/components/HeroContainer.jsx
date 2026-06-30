import { cn } from "@/libs/cn";

export default function HeroContainer({
  children,
  className,
}) {
  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  );
}