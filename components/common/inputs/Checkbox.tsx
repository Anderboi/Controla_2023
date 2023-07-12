import React from "react";
import { twMerge } from "tailwind-merge";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Checkbox = ({
  className,
  children,
  disabled,
  ...props
}: CheckboxProps) => {
  return (
    <input
      type="checkbox"
      disabled={disabled}
      {...props}
      className={twMerge(
        `
        w-4 
        h-4 
        bg-gray-100 
        border-gray-300
        rounded-xl
        focus:accent-accent-dark
        focus:ring-2
        outline-none
        focus:ring-accent-dark
        dark:bg-gray-700
        dark:border-gray-600
        accent-current
        text-accent-dark
        `,
        className
      )}
    />
  );
};

export default Checkbox;
