import { forwardRef, useId } from "react";
import { Check } from "lucide-react";

import { cn } from "@/utils/cn";

const Checkbox = forwardRef(
  (
    {
      id,
      label,
      helperText,
      error,
      className,
      disabled = false,
      required = false,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    return (
      <div className="w-full">
        <label
          htmlFor={inputId}
          className={cn(
            "flex cursor-pointer items-start gap-3",
            disabled && "cursor-not-allowed opacity-60"
          )}
        >
          <div className="relative mt-0.5">
            <input
              ref={ref}
              id={inputId}
              type="checkbox"
              disabled={disabled}
              required={required}
              className="peer sr-only"
              {...props}
            />

            <div
              className={cn(
                "flex h-5 w-5 items-center justify-center rounded border transition-all",
                "border-slate-300 bg-white",
                "peer-checked:border-blue-600 peer-checked:bg-blue-600",
                "peer-focus:ring-2 peer-focus:ring-blue-500/20",
                error && "border-red-500",
                className
              )}
            >
              <Check
                size={14}
                className="scale-0 text-white transition-transform peer-checked:scale-100"
              />
            </div>
          </div>

          <div className="flex-1">
            {label && (
              <p className="font-medium text-slate-800">
                {label}
              </p>
            )}

            {helperText && !error && (
              <p className="mt-1 text-sm text-slate-500">
                {helperText}
              </p>
            )}

            {error && (
              <p className="mt-1 text-sm text-red-600">
                {error}
              </p>
            )}
          </div>
        </label>
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;