import { forwardRef, useId } from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/utils/cn";
import Field from "@/components/forms/Field";

/**
 * Reusable Select Component
 *
 * @param {Object} props
 * @param {string} props.label
 * @param {Array<{label:string,value:string}>} props.options
 * @param {string} props.placeholder
 * @param {string} props.error
 * @param {string} props.helperText
 * @param {boolean} props.required
 * @param {boolean} props.disabled
 * @param {string} props.className
 */
const Select = forwardRef(
  (
    {
      id,
      label,
      options = [],
      placeholder = "Select an option",
      helperText,
      error,
      required = false,
      disabled = false,
      className,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const selectId = id || generatedId;

    return (
      <Field
        id={selectId}
        label={label}
        helperText={helperText}
        error={error}
        required={required}
      >
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            disabled={disabled}
            aria-invalid={!!error}
            className={cn(
              "w-full appearance-none rounded-md border border-slate-300 bg-white px-4 py-3 pr-10",
              "transition-all duration-200",
              "focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none",
              "disabled:cursor-not-allowed disabled:bg-slate-100 disabled:opacity-60",
              error &&
                "border-red-500 focus:border-red-500 focus:ring-red-500/20",
              className
            )}
            {...props}
          >
            <option value="">
              {placeholder}
            </option>

            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>

          <ChevronDown
            size={18}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
          />
        </div>
      </Field>
    );
  }
);

Select.displayName = "Select";

export default Select;