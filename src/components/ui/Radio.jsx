import { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Radio = forwardRef(
  (
    {
      label,
      helperText,
      error,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <label
        className={cn(
          "flex cursor-pointer items-start gap-3",
          className
        )}
      >
        <input
          ref={ref}
          type="radio"
          className="mt-1 h-4 w-4 accent-blue-600"
          {...props}
        />

        <div>
          {label && (
            <p className="font-medium">
              {label}
            </p>
          )}

          {helperText && !error && (
            <p className="text-sm text-slate-500">
              {helperText}
            </p>
          )}

          {error && (
            <p className="text-sm text-red-600">
              {error}
            </p>
          )}
        </div>
      </label>
    );
  }
);

Radio.displayName = "Radio";

export default Radio;