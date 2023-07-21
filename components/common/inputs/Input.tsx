import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, disabled, label, ...props }, ref) => {
    return (
      <div>
        {label && (
          <label htmlFor="area" className="text-xs ">
            {label}
          </label>
        )}
        <input
          type={type}
          disabled={disabled}
          ref={ref}
          {...props}
          className={twMerge(
            `
            inline-flex
            w-full
            rounded-md
            items-center 
            justify-center
            leading-none
            outline-none

            bg-elevated-3-bg-dark
            border
            border-transparent
            px-4
            py-2
            gap-x-1
            text-base
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
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
