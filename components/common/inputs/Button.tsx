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
        font-bold
        py-3
        transition
        `,
        corner === "round" ? "rounded-full hover:text-accent-dark" : "rounded-lg",
        mode === "ghost" &&
          `
          bg-transparent-bg-dark/10
          hover:bg-transparent-bg-dark/20`,
        mode === "action" &&
          `
          bg-accent-dark
          text-primary-bg-dark 
          hover:bg-accent-dark/75`,
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
