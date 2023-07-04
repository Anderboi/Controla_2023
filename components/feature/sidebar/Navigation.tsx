import React from "react";
import SidebarItem from "./SidebarItem";

export interface NavLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

interface Props {
  navLinks: NavLink[];
}

const Navigation = ({ navLinks }: Props) => {
  return (
    <nav className="flex flex-col">
      {navLinks.map((item) => (
        <SidebarItem key={item.label} {...item} >{item.icon}</SidebarItem>
      ))}
    </nav>
  );
};

export default Navigation;
