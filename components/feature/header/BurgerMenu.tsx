import React, { useState } from "react";
import Button from "@/components/common/inputs/Button";

import { routes, secondaryRoutes } from "@/lib/navRoutes";
import SidebarItem from "../sidebar/SidebarItem";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex sm:hidden">
      <Button
        mode="ghost"
        corner="round"
        className="flex h-10 w-10 items-center justify-center border-none bg-secondary-bg-dark z-10"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </Button>

      {isOpen && (
        <div
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
          className="
          origin-top-right
          absolute
          right-0
          top-[100%]
          focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800
          
          shadow-lg
          focus:outline-none
          mt-2
          flex
          flex-col
          rounded-lg
          //border
          //border-primary-border-dark
          bg-elevated-1-bg-dark
          px-6
          py-3
          //transition-all
          z-20
          "
        >
          {routes.map((item, index) => (
            <SidebarItem
              isInBurger
              key={index}
              {...item}
              icon={item.icon}
              activeIcon={item.activeIcon}
            />
          ))}
          {secondaryRoutes.map((item, index) => (
            <SidebarItem
              isInBurger
              key={index}
              {...item}
              icon={item.icon}
              activeIcon={item.activeIcon}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
