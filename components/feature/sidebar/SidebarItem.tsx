// 'use client'

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { twMerge } from "tailwind-merge";
import type { IconType } from "react-icons";

interface SidebarItemsProps {
  icon: IconType;
  label: string;
  href: string;
}

const SidebarItem = ({
  icon: Icon,
  href,
  label,
}: SidebarItemsProps) => {
  
  // const route = usePathname();
  
  return (
    <Link
      href={href}
      className={twMerge(
        `
        flex
        flex-row
        items-center
        justify-center
        h-auto
        w-full
        gap-x-3
        py-2
        text-md
        font-semibold
        text-secondary-text-dark
        hover:text-primary-text-dark
        transition
        `,
        // route === href ? `text-primary-text-dark` : "text-secondary-text-dark"
      )}
    >
      <Icon size={24} />
      <p className="truncate w-full hidden lg:flex">{label}</p>
    </Link>
  );
};

export default SidebarItem;
