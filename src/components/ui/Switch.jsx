import { forwardRef, useId } from "react";
import { cn } from "@/libs/cn";

const Switch = forwardRef(
  (
    {
      id,
      label,
      helperText,
      className,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const switchId = id || generatedId;

    return (
      <label
        htmlFor={switchId}
        className="flex cursor-pointer items-center justify-between gap-4"
      >
        <div>
          {label && (
            <p className="font-medium">
              {label}
            </p>
          )}

          {helperText && (
            <p className="text-sm text-slate-500">
              {helperText}
            </p>
          )}
        </div>

        <div className="relative">
          <input
            ref={ref}
            id={switchId}
            type="checkbox"
            className="peer sr-only"
            {...props}
          />

          <div
            className={cn(
              "h-6 w-11 rounded-full bg-slate-300 transition-all",
              "peer-checked:bg-blue-600",
              className
            )}
          />

          <div
            className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-all
                       peer-checked:left-6"
          />
        </div>
      </label>
    );
  }
);

Switch.displayName = "Switch";

export default Switch;