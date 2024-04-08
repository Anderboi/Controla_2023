'use client'

import Link from "next/link";
import { routes, secondaryRoutes } from "@/lib/navRoutes";

const NavBar = () => {
  // const scrollDirection = useScrollingEffect()
  // const navClass = scrollDirection === 'up' ? '' : 'opacity-25 duration-500'
  
  // const {
  //   isHomeActive,
  //   isContactsActive,
  //   isNotificationsActive,
  //   isSettingsActive,
  // } = useNavigation()

  return (
    <nav
      className="
        fixed
        bottom-0
        left-0
        w-full

        bg-secondary-bg-light
        dark:bg-secondary-bg-dark

        flex
        justify-around

        py-4
        px-[40px]
        z-10

        sm:hidden
      "
    >
      {routes.concat(secondaryRoutes).map((route, index) => (
        <Link
          href={route.href}
          key={index}
          className="w-8 h-8 flex place-content-center items-center"
        >
          {route.icon}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
