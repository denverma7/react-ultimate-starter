import { forwardRef } from "react";
import { cn } from "@/utils/cn";

const SectionContainer = forwardRef(
  (
    {
      children,
      className = "",
      as: Component = "div",
      fluid = false,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "w-full mx-auto px-4 sm:px-6 lg:px-8",
          fluid ? "max-w-full" : "max-w-7xl",
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

SectionContainer.displayName = "SectionContainer";

export default SectionContainer;