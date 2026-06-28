import { forwardRef, useId, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { cn } from "@/utils/cn";
import Field from "../Field";

const sizes = {
  sm: "h-9 text-sm px-3",
  md: "h-11 text-base px-4",
  lg: "h-12 text-lg px-5",
};

const radius = {
  sm: "rounded",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

const Input = forwardRef(
  (
    {
      id,
      type = "text",
      label,
      placeholder,
      helperText,
      error,
      required = false,
      disabled = false,
      readOnly = false,
      leftIcon,
      rightIcon,
      size = "md",
      rounded = "md",
      className,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    const [showPassword, setShowPassword] =
      useState(false);

    const inputType =
      type === "password"
        ? showPassword
          ? "text"
          : "password"
        : type;

    return (
      <Field
        id={inputId}
        label={label}
        helperText={helperText}
        error={error}
        required={required}
      >
        <div className="relative">
          {leftIcon && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2">
              {leftIcon}
            </span>
          )}

          <input
            ref={ref}
            id={inputId}
            type={inputType}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            aria-invalid={!!error}
            aria-describedby={
              error
                ? `${inputId}-error`
                : helperText
                ? `${inputId}-helper`
                : undefined
            }
            className={cn(
              "w-full border bg-white transition-all outline-none",
              "border-slate-300",
              "focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
              "disabled:cursor-not-allowed disabled:bg-slate-100 disabled:opacity-60",
              leftIcon && "pl-10",
              (rightIcon || type === "password") &&
                "pr-10",
              sizes[size],
              radius[rounded],
              error &&
                "border-red-500 focus:border-red-500 focus:ring-red-500/20",
              className
            )}
            {...props}
          />

          {type === "password" ? (
            <button
              type="button"
              onClick={() =>
                setShowPassword((prev) => !prev)
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          ) : (
            rightIcon && (
              <span className="absolute right-3 top-1/2 -translate-y-1/2">
                {rightIcon}
              </span>
            )
          )}
        </div>
      </Field>
    );
  }
);

Input.displayName = "Input";

export default Input;