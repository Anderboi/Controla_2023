import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  type?: "filled" | "outlined";
  children?: React.ReactNode | string | number;
  illustration?: React.ReactNode | string | number;
  actionIcon?: React.ReactNode | string | number;
  className?: string;
}

const GallaryDataCard = ({
  size,
  onClick,
  illustration,
  children,
  actionIcon,
  type,
  className,
}: Props) => {
  return (
    <div
      onClick={onClick}
      className={twMerge(
        `
        sm:border
        border-solid
        dark:border-primary-border-dark
      
        sm:dark:hover:bg-elevated-1-bg-dark
        
        sm:rounded-lg 
        py-2
        sm:px-4

        flex
        sm:flex-col
        gap-4
        items-center
        sm:items-end
        justify-between

        cursor-pointer
        `,
        size === "sm" &&
          `
          sm:h-28
          sm:w-24
          text-secondary-text-light
          dark:text-secondary-text-dark
          `,
        size === "md" &&
          `
          sm:h-[240px]
          sm:min-w-[160px]
          `,
        type === "outlined" &&
          `
          bg-transparent 
          border-dashed 
          dark:border-primary-border-dark 
          sm:border
          `,
        className
      )}
    >
      <div
        className={twMerge(`
          text-sm 
          font-bold 
          dark:text-secondary-text-dark
          min-w-9 
          //max-sm:border-2 
          dark:border-secondary-text-dark 
          rounded-md 
          p-1 
          h-full
          `,
          size === "md" && `sm:text-5xl`
        )}
      >
        {illustration}
      </div>

      <div
        className={twMerge(
          `
          flex
          flex-col
          max-sm:flex-1
          w-16
          text-xs
          
          sm:items-end
          sm:text-right
          `,
          size === "md" && `text-sm`
        )}
      >
        {children}
      </div>
      <div
        className={twMerge(
          `
          w-fit 
          sm:hidden 
          text-secondary-text-light 
          dark:text-secondary-text-dark
          `
        )}
      >
        {actionIcon}
      </div>
    </div>
  );
};

export default GallaryDataCard;
