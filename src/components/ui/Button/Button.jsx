import { forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

const variants = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
  secondary:
    "bg-slate-200 text-slate-900 hover:bg-slate-300 focus:ring-slate-400",
  outline:
    "border border-slate-300 bg-transparent text-slate-900 hover:bg-slate-100 focus:ring-slate-400",
  ghost:
    "bg-transparent text-slate-900 hover:bg-slate-100 focus:ring-slate-400",
  success:
    "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
  danger:
    "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  warning:
    "bg-amber-500 text-white hover:bg-amber-600 focus:ring-amber-500",
};

const sizes = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-base",
  lg: "h-12 px-6 text-lg",
};

const rounded = {
  sm: "rounded",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

const Spinner = () => (
  <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
);

const Button = forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "md",
      radius = "md",
      loading = false,
      disabled = false,
      fullWidth = false,
      leftIcon,
      rightIcon,
      className,
      type = "button",
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        type={type}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        disabled={disabled || loading}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-60",
          variants[variant],
          sizes[size],
          rounded[radius],
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {loading ? (
          <Spinner />
        ) : (
          <>
            {leftIcon}
            {children}
            {rightIcon}
          </>
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;