"use client";

import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import ContainerBox from "./ContainerBox";
import SidebarItem from "./SidebarItem";
import Image from "next/image";
import { BiBell } from "react-icons/bi";
import { RxDashboard, RxAvatar } from "react-icons/rx";

const Sidebar = () => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        icon: RxDashboard,

        label: "Projects",
        active: pathname === "/",
        href: "/",
      },
      {
        icon: RxAvatar,
        label: "Contacts",
        active: pathname === "/contacts",
        href: "/contacts",
      },
      {
        icon: BiBell,
        label: "Notifications",
        active: pathname === "/notifications",
        href: "/notifications",
      },
      {
        icon: BiBell,
        label: "Settings",
        active: pathname === "/settings",
        href: "/settings",
      },
    ],
    []
  );

  return (
    <div
      className="hidden
        md:flex
        flex-col
        gap-y-3
        bg-black
        w-[300px]
        p-3
        "
    >
      <ContainerBox classname="
        h-fit 
        flex 
        flex-col 
        gap-y-5
        pt-8
        pb-3">
        <Image
          alt="logo"
          src="/controla_logo_light.svg"
          width={300}
          height={40}
        />
        <div className="flex flex-col">
          {routes.map((item) => (
            <SidebarItem key={item.label} {...item} />
          ))}
        </div>
      </ContainerBox>
      <ContainerBox classname="overflow-y-auto h-fill">
        <div>dfgdfg</div>
      </ContainerBox>
    </div>
  );
};

export default Sidebar;
