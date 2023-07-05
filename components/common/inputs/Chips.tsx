"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";

interface ChipsProps {
  // extends React.ButtonHTMLAttributes<HTMLButtonElement>
  children: string;
  href: string;
}

const Chips = ({ children, href, ...props }: ChipsProps) => {
  const route = usePathname();
  const exactRoute = route.split("/")[route.split("/").length - 1];

  return (
    <Link
      href={href}
      className={twMerge(
        `
        bg-elevated-2-bg-dark
        px-4
        py-2
        rounded-full
        text-secondary-text-dark
        hover:bg-elevated-3-bg-dark
        hover:text-primary-text-dark
        whitespace-nowrap
        border
        border-transparent
        w-full
        h-fit
        `,
        exactRoute === href &&
          "border-primary-text-dark text-primary-bg-dark bg-primary-text-dark font-bold"
      )}
      // disabled={disabled}
      {...props}
    >
      {children}
    </Link>
  );
};

export default Chips;
