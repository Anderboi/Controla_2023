import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  mode: "ghost" | "action" | "ghost_accent";
  corner?: "round" | "square";
  size?: "small" | "medium" | "large";
}

const Button = ({
  className,
  children,
  disabled,
  type = "button",
  mode,
  size,
  corner = "square",
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={twMerge(
        `
        font-bold
        py-3
        transition
        border
        border-transparent
        `,
        corner === "round"
          ? "rounded-full hover:dark:text-accent-dark text-accent-light"
          : "px-6 rounded-lg",
        mode === "ghost" &&
          `
          bg-transparent
          hover:dark:bg-elevated-2-bg-dark`,
        mode === "action" &&
          `
          border-accent-light
          dark:border-accent-dark
          bg-elevated-2-bg-light
          dark:bg-elevated-2-bg-dark
          text-accent-light
          dark:text-accent-dark
          hover:bg-accent-light/75
          hover:dark:bg-accent-dark/75
          hover:text-black-light
          hover:dark:text-black-dark
          `,
        mode === "ghost_accent" &&
          `dark:border-primary-border-dark 
          hover:dark:bg-transparent-bg-dark/10 
          text-primary-text-light 
          dark:text-primary-text-dark
          `,
        size === "small" && `py-2 px-4 text-sm h-[40px]`,
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
