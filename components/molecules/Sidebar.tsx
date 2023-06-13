"use client";

import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import ContainerBox from "../atoms/ContainerBox";
import SidebarItem from "../atoms/SidebarItem";
import Image from "next/image";
import { BiBell } from "react-icons/bi";
import { RxDashboard, RxAvatar } from "react-icons/rx";
import Avatar from '../atoms/Avatar';

const Sidebar = () => {
  const pathname = usePathname();
  
  const routes = useMemo(
    () => [
      {
        icon: RxDashboard,
        label: "Проекты",
        active: pathname !== "/contacts",
        href: "/",
      },
      {
        icon: RxAvatar,
        label: "Контакты",
        active: pathname === "/contacts",
        href: "/contacts",
      },
      {
        icon: BiBell,
        label: "Уведомления",
        active: pathname === "/notifications",
        href: "/notifications",
      },
      {
        icon: BiBell,
        label: "Настройки",
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
        gap-y-2
        bg-black
        w-[300px]
        p-2
        "
    >
      <ContainerBox
        classname="
        h-fit 
        flex 
        flex-col 
        gap-y-5
        pt-8
        pb-3"
      >
        <Image
          alt="logo"
          src="/controla_logo_light.svg"
          width={300}
          height={40}
        />
        <div className="flex flex-col">
          {routes.map((item) => (
            <SidebarItem
              key={item.label}
              {...item}
            />
          ))}
        </div>
      </ContainerBox>
      <ContainerBox classname="overflow-y-auto h-fill">
        <h3>Избранное</h3>
      </ContainerBox>
      <ContainerBox classname="h-fit">
        <Avatar type="rectangular" image="" />
      </ContainerBox>
    </div>
  );
};

export default Sidebar;
