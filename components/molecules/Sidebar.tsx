"use client";

import React, { useMemo } from "react";
import ContainerBox from "../atoms/ContainerBox";
import SidebarItem from "../atoms/SidebarItem";
import Image from "next/image";
import { BiBell } from "react-icons/bi";
import { RxDashboard, RxAvatar } from "react-icons/rx";
import UserSidebarBlock from "./UserSidebarBlock";
import Link from "next/link";

const Sidebar = () => {

  const routes = useMemo(
    () => [
      {
        icon: RxDashboard,
        label: "Проекты",
        href: "/projects",
      },
      {
        icon: RxAvatar,
        label: "Контакты",
        href: "/contacts",
      },
      {
        icon: BiBell,
        label: "Уведомления",
        href: "/notifications",
      },
      {
        icon: BiBell,
        label: "Настройки",
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
        pb-3
        px-5
        "
      >
        <Link href={"/"}>
          <Image
            alt="logo"
            src="/controla_logo_light.svg"
            width={300}
            height={40}
            className="cursor-pointer"
          />
        </Link>
        <div className="flex flex-col">
          {routes.map((item) => (
            <SidebarItem key={item.label} {...item} />
          ))}
        </div>
      </ContainerBox>
      <ContainerBox
        classname="overflow-y-auto h-fill px-5
        py-3"
      >
        <h3>Избранное</h3>
      </ContainerBox>
      <ContainerBox
        classname="h-fit px-5
        py-3"
      >
        <UserSidebarBlock />
      </ContainerBox>
    </div>
  );
};

export default Sidebar;
