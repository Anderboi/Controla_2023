import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import { IconType } from "react-icons";

interface SidebarItemsProps {
  icon: IconType;
  label: string;
  href: string;
  active?: boolean;
}

const SidebarItem = ({
  icon: Icon,
  href,
  label,
  active,
}: SidebarItemsProps) => {

  return (
    <Link
      href={href}
      className={twMerge(
        `
        flex
        flex-row
        h-auto
        items-center
        w-full
        gap-x-4
        py-2
        text-md
        font-bold
        hover:text-primary-text-dark
        text-secondary-text-dark
        transition
        `,
        active && `text-primary-text-dark`
      )}
    >
      <Icon size={24} />
      <p className="truncate w-full">{label}</p>
    </Link>
  );
};

export default SidebarItem;
