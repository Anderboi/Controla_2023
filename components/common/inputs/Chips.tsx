import React from "react";

interface ChipsProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Chips = ({ children, disabled, ...props }: ChipsProps) => {
  return (
    <button
      className="
      bg-elevated-1-bg-dark
      px-4
      py-2
      rounded-full
      text-secondary-text-dark
      hover:bg-elevated-2-bg-dark
      hover:text-primary-text-dark
      whitespace-nowrap
      w-full
      "
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Chips;
