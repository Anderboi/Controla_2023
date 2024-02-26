"use client";

import Link from "next/link";

import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";

interface SidebarItemsProps {
  label: string;
  href: string;
  icon: React.ReactNode;
  activeIcon: React.ReactNode;
  isInBurger?: boolean;
  className?: string;
}

const SidebarItem = ({
  icon,
  activeIcon,
  href,
  label,
  isInBurger,
  className,
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
        w-full
        gap-x-4
        min-h-[44px]
        cursor-pointer
        text-[17px]
        font-semibold
        hover:text-primary-text-dark
        transition
        `,
        className,
        route === href
          ? `dark:text-primary-text-dark text-primary-text-light`
          : "dark:text-secondary-text-dark text-secondary-text-light"
      )}
    >
      {route === href ? activeIcon : icon}
      <p
        className={twMerge(
          `truncate w-full`,
          isInBurger ? "flex" : "hidden lg:flex"
        )}
      >
        {label}
      </p>
    </Link>
  );
};

export default SidebarItem;
