import { cn } from "@/libs/cn";

/**
 * Shared wrapper for all form controls.
 *
 * @param {Object} props
 * @param {string} [props.id]
 * @param {string} [props.label]
 * @param {string} [props.helperText]
 * @param {string} [props.error]
 * @param {boolean} [props.required]
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 */
export default function Field({
  id,
  label,
  helperText,
  error,
  required = false,
  children,
  className,
}) {
  return (
    <div className={cn("w-full space-y-2", className)}>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-semibold text-slate-700"
        >
          {label}

          {required && (
            <span className="ml-1 text-red-500">*</span>
          )}
        </label>
      )}

      {children}

      {error ? (
        <p className="text-sm text-red-600">
          {error}
        </p>
      ) : helperText ? (
        <p className="text-sm text-slate-500">
          {helperText}
        </p>
      ) : null}
    </div>
  );
}