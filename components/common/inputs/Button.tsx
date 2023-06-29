import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  mode: "ghost" | "action" | "ghost_accent";
  corner?: "round" | "square";
}

const Button = ({
  className,
  children,
  disabled,
  type = "button",
  mode,
  corner = 'square',
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={twMerge(
        `w-full
      font-semibold
      border
      border-transparent
      py-4
      transition
      `,
        corner === "round" ? "rounded-full" : "rounded-lg",
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
