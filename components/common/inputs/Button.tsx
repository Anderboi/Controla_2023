import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  mode: "ghost" | "action" | "ghost_accent";
}

const Button = ({
  className,
  children,
  disabled,
  type = "button",
  mode,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={twMerge(
        `w-full
      rounded-lg
      font-semibold
      border
      border-transparent
      py-4
      transition
      `,
        mode === "ghost" &&
          `bg-opacity-0 
          border-primary-border-dark 
          hover:bg-primary-bg-light/20`,
        mode === "action" &&
          `bg-accent-light 
          text-primary-bg-dark 
          hover:bg-accent-light/75`,
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
