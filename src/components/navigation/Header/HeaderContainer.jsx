import { cn } from "@/libs/cn";

export default function HeaderContainer({
  children,
  className,
}) {
  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  );
}