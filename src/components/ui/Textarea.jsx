import { forwardRef, useId } from "react";
import { cn } from "@/utils/cn";
import Field from "@/components/forms/Field";

const Textarea = forwardRef(
  (
    {
      id,
      label,
      helperText,
      error,
      required = false,
      rows = 5,
      resize = "vertical",
      className,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    return (
      <Field
        id={inputId}
        label={label}
        helperText={helperText}
        error={error}
        required={required}
      >
        <textarea
          ref={ref}
          id={inputId}
          rows={rows}
          aria-invalid={!!error}
          className={cn(
            "w-full rounded-md border border-slate-300 bg-white px-4 py-3",
            "transition-all duration-200",
            "focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none",
            "disabled:cursor-not-allowed disabled:bg-slate-100",
            resize === "none" && "resize-none",
            resize === "vertical" && "resize-y",
            resize === "horizontal" && "resize-x",
            resize === "both" && "resize",
            error &&
              "border-red-500 focus:border-red-500 focus:ring-red-500/20",
            className
          )}
          {...props}
        />
      </Field>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;