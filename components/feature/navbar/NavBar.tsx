'use client'

import Link from "next/link";
import { routes, secondaryRoutes } from "@/lib/navRoutes";
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const path = usePathname()

  return (
    <nav
      className="
        //fixed
        bottom-0
        left-0
        z-10
        flex

        h-20
        w-full

        justify-around
        bg-secondary-bg-light

        px-10
        py-4
        dark:bg-secondary-bg-dark

        sm:hidden
      "
    >
      {routes.concat(secondaryRoutes).map((route, index) => (
        <Link
          href={route.href}
          key={index}
          className="flex size-8 place-content-center items-center"
        >
          {path === route.href ? route.activeIcon : route.icon}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
