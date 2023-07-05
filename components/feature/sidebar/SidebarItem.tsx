'use client'

import React from "react";
import Link from "next/link";

import { twMerge } from "tailwind-merge";
import { usePathname } from 'next/navigation';

interface SidebarItemsProps {
  label: string;
  href: string;
  children: React.ReactNode;
}

const SidebarItem = ({
  children,
  href,
  label,
}: SidebarItemsProps) => {
  const route = usePathname();

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
        gap-x-4
        py-2
        text-md
        font-semibold
        text-secondary-text-dark
        hover:text-primary-text-dark
        transition
        `,
        route === href ? `text-primary-text-dark` : "text-secondary-text-dark"
      )}
    >
      {children}
      {/* <Icon size={24} /> */}
      <p className="truncate w-full hidden lg:flex">{label}</p>
    </Link>
  );
};

export default SidebarItem;
