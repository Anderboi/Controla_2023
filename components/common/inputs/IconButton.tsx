import React from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: IconType;
}

const IconButton = ({
  
  className,
  onClick,
  Icon,
}: IconButtonProps) => {
  
  return (
    <button
      className={twMerge(
        `
        transition
        rounded-full
        hover:bg-transparent-bg-dark/20
        p-1
        translate
        translate-y-1/4
        group-hover:opacity-100
        hover:scale-110
        `,
        className
      )}
      onClick={onClick}
    >
      <Icon className="hover:text-accent-dark" size={25} />
    </button>
  );
};

export default IconButton;
