import { forwardRef } from "react";
import { cn } from "@/libs";

const variants = {
  primary:
    "bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 text-white hover:shadow-lg",

  secondary:
    "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50",

  ghost:
    "text-slate-700 hover:bg-slate-100",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-base",
};

const Button = forwardRef(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      type = "button",
      disabled = false,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300",
          "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;