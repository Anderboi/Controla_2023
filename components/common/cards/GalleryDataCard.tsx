import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
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
  className,
}: Props) => {
  return (
    <div
      onClick={onClick}
      className={twMerge(
          `
          sm:rounded-lg 
          bg-elevated-1-bg-dark
          sm:hover:bg-elevated-2-bg-dark
          py-4
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
          text-secondary-text-dark
          `,
        size === "md" &&
          `
          sm:h-[180px]
          sm:min-w-[160px]
          `,
        className
      )}
    >
      <div
        className={twMerge(
          `text-3xl text-secondary-text-dark/50`,
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
          sm:items-end
          w-16
          text-xs
          `,
          size === "md" && `text-sm`
        )}
      >
        {children}
      </div>
      <div className={twMerge(`w-fit sm:hidden`)}>{actionIcon}</div>
    </div>
  );
};

export default GallaryDataCard;
