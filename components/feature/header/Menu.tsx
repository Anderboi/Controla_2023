import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { routes, secondaryRoutes } from '@/lib/navRoutes';
import SidebarItem from '../sidebar/SidebarItem';

const HeadlessMenu = () => {
  return (
    <Menu>
      <Menu.Button
        className={`
          relative
          flex
          h-10
          w-10
          items-center
          justify-center
          border-none
          bg-secondary-bg-dark
          `}
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
      </Menu.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items
          className={`
            absolute
            right-0
            top-12
            flex
            flex-col
            rounded-lg
            bg-elevated-1-bg-dark
            px-4
            py-2
            `}
        >
          {routes.map((route, index) => (
            <Menu.Item key={index}>
              {({ active }) => (
                <SidebarItem
                  // className={`${
                  //   active && "text-accent-dark bg-secondary-bg-dark"
                  // } px-4 py-2 rounded-md`}
                  isInBurger
                  {...route}
                />
              )}
            </Menu.Item>
          ))}
          {secondaryRoutes.map((route, index) => (
            <Menu.Item key={index}>
              {({ active }) => (
                <SidebarItem
                  // className={`${
                  //   active && "text-accent-dark bg-secondary-bg-dark"
                  // } px-4 py-2 rounded-md`}
                  isInBurger
                  {...route}
                />
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default HeadlessMenu;
