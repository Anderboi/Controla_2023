import React from "react";
import { twMerge } from "tailwind-merge";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // icon: React.ReactElement;
}

const IconButton = ({ className, onClick, children: icon }: IconButtonProps) => {
  return (
    <button
      className={twMerge(
        `
        transition
        rounded-lg
        p-2
        sm:p-1
        translate
        translate-y-1/4
        ease-in-out
        duration-300
        group-hover:opacity-100
        hover:scale-110

        max-sm:border
        hover:bg-transparent-bg-dark/20

        //bg-primary-bg-light
        //dark:bg-primary-bg-dark
        `,
        className
      )}
      onClick={onClick}
    >{icon}
      {/* <Icon
        className="text-primary-text-light dark:text-primary-text-dark"
        size={20}
      /> */}
    </button>
  );
};

export default IconButton;
