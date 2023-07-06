import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";
import { IoMdClose } from "react-icons/io";


interface ChipsProps {
  // extends React.ButtonHTMLAttributes<HTMLButtonElement>
  children: string | React.ReactNode;
  // href: string;
  onClick?: () => void;
  onClose?: () => void;
  isActive?: boolean;
  type?: "sm" | "md" | "lg";
  className?: string;
  hasRightIcon?: boolean;
}

const Chips = ({
  children,
  onClick,
  onClose,
  type,
  isActive,
  hasRightIcon,
  className,
  ...props
}: ChipsProps) => {
  return (
    <div
      onClick={onClick}
      className={twMerge(
        `
        flex
        items-center
        gap-4
        bg-transparent-bg-dark/10
        px-4
        py-1
        rounded-full
        text-secondary-text-dark
        hover:bg-elevated-3-bg-dark
        hover:text-primary-text-dark
        whitespace-nowrap
        border
        border-transparent
        w-fit
        h-fit
        cursor-pointer
        text-base
        `,
        isActive &&
          "border-primary-text-dark text-primary-bg-dark bg-primary-text-dark font-bold",
        type === "sm" && "text-xs",
        type === "md" && "",
        type === "lg" && "text-lg",
        className
      )}
      {...props}
    >
      {children}
      {hasRightIcon && <IoMdClose onClick={onClose}/>}
    </div>
  );
};

export default Chips;
