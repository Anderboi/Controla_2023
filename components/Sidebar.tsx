"use client";

import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import ContainerBox from "./ContainerBox";
import SidebarItem from "./SidebarItem";
import Image from "next/image";
import { RxDashboard, RxAvatar } from "react-icons/rx";

const Sidebar = () => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        icon: <RxDashboard className="w-6 h-6" />,

        label: "Projects",
        active: pathname !== "/contacts",
        href: "/",
      },
      {
        icon: <RxAvatar className="w-6 h-6" />,
        label: "Contacts",
        active: pathname === "/contacts",
        href: "/contacts",
      },
    ],
    []
  );

  return (
    <div
      className="hidden
        md:flex
        flex-col
        gap-y-2
        bg-black
        w-[300px]
        p-2
        "
    >
      <ContainerBox classname="h-fit pt-6 px-5 pb-4 flex flex-col gap-y-6">
        <Image
          alt="logo"
          src="/controla_logo_light.svg"
          width={300}
          height={40}
        />
        <div className="flex flex-col gap-y-1">
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
