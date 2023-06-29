import React from "react";
import SidebarItem from "./SidebarItem";
import type { IconType } from "react-icons";

export interface NavLink {
  label: string;
  href: string;
  icon: IconType;
}

interface Props {
  navLinks: NavLink[];
}

const Navigation = ({ navLinks }: Props) => {
  return (
    <div className="flex flex-col ">
      {navLinks.map((item) => (
        <SidebarItem key={item.label} {...item} />
      ))}
    </div>
  );
};

export default Navigation;
