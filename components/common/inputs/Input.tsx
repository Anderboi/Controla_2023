import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, disabled, ...props }, ref) => {
    return (
      <input
        type={type}
        disabled={disabled}
        ref={ref}
        {...props}
        className={twMerge(
          `
          flex
          w-full
          rounded-md
          bg-elevated-3-bg-dark
          border
          border-transparent
          p-3
          gap-x-1
          text-sm
          file:border-0
          file:bg-transparent
          file:text-sm
          file:font-medium
          placeholder:text-secondary-text-dark
          disabled:cursor-not-allowed
          disabled:opacity-50
          focus:outline-none
          focus:border-accent-dark`,
          className
        )}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
