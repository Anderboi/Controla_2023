import React from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: IconType;
}

const IconButton = ({ className, onClick, Icon }: IconButtonProps) => {
  return (
    <button
      className={twMerge(
        `
        sm:opacity-0
        transition
        rounded-full
        p-1
        translate
        translate-y-1/4
        ease-in-out
        duration-300
        group-hover:opacity-100
        hover:scale-110
        hover:bg-transparent-bg-dark/20
        `,
        className
      )}
      onClick={onClick}
    >
      <Icon className="hover:text-accent-dark" size={24} />
    </button>
  );
};

export default IconButton;
