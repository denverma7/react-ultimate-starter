import { forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

const Card = forwardRef(
  (
    {
      children,
      className,
      hover = true,
      bordered = true,
      shadow = "md",
      radius = "lg",
      ...props
    },
    ref
  ) => {
    const shadows = {
      none: "",
      sm: "shadow-sm",
      md: "shadow",
      lg: "shadow-lg",
      xl: "shadow-xl",
    };

    const radiusMap = {
      sm: "rounded",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
    };

    return (
      <motion.div
        ref={ref}
        whileHover={
          hover
            ? { y: -4, scale: 1.01 }
            : undefined
        }
        transition={{ duration: 0.2 }}
        className={cn(
          "bg-white",
          bordered && "border border-slate-200",
          shadows[shadow],
          radiusMap[radius],
          "transition-all",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";

export default Card;