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
        `
        font-bold
        py-3
        transition
        border
        border-transparent
        `,
        corner === "round"
          ? "rounded-full hover:text-accent-dark"
          : "px-6 rounded-lg",
        mode === "ghost" &&
          `
          bg-elevated-1-bg-dark
          hover:bg-elevated-2-bg-dark`,
        mode === "action" &&
          `
          border-accent-dark
          bg-elevated-2-bg-dark
          text-accent-dark
          hover:bg-accent-dark/75
          hover:text-black-dark
          `,

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
