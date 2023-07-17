import React, { useState } from "react";
import Button from "@/components/common/inputs/Button";

import { routes, secondaryRoutes } from "@/lib/navRoutes";
import SidebarItem from "../sidebar/SidebarItem";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <Button
        mode="ghost"
        corner="round"
        className="w-10 h-10 flex justify-center items-center border-none bg-secondary-bg-dark"
        onClick={() => {setIsOpen(!isOpen)}}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </Button>

      {isOpen && (
        <ul
          className="
        absolute
        right-0
        border
        border-primary-border-dark
        bg-elevated-1-bg-dark
        rounded-lg
        flex
        flex-col
        px-4
        py-2
        z-50
        mt-1
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
        </ul>
      )}
    </div>
  );
};

export default BurgerMenu;
