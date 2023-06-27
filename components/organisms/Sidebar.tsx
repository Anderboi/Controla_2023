import React from "react";
import ContainerBox from "../atoms/ContainerBox";
import Image from "next/image";
import { BiBell } from "react-icons/bi";
import { RxDashboard, RxAvatar } from "react-icons/rx";
import UserSidebarBlock from "../molecules/UserSidebarBlock";
import Link from "next/link";
import Navigation from "../molecules/Navigation";

const Sidebar = () => {
  const routes = [
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
  ];

  const secondaryRoutes = [
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
  ];

  return (
    <div
      className="hidden
      sm:flex
      flex-col
      gap-y-2
      bg-black
      w-fit
      lg:w-[300px]
      p-2"
    >
      <ContainerBox
        classname="
        w-[100px]
        lg:w-full
        h-fit
        flex
        flex-col
        gap-y-5"
      >
        <Link href={"/"}>
          <Image
            alt="main logo"
            src="/controla_logo_light.svg"
            width={300}
            height={40}
            className="cursor-pointer hidden lg:flex"
          />
          <Image
            alt="round logo"
            src="/ellipse_round.svg"
            width={56}
            height={56}
            className="hidden sm:flex lg:hidden"
          />
        </Link>
        <Navigation navLinks={routes} />
      </ContainerBox>
      <ContainerBox
        classname="
        overflow-y-auto 
        h-fill 
        w-[100px] 
        lg:w-full
        flex
        flex-col
        justify-between"
      >
        <span className="hidden lg:flex font-bold text-xs text-secondary-text-dark">
          Избранное
        </span>
        <Navigation navLinks={secondaryRoutes} />
        <Link href={'api/auth/signout'}>Sign out</Link>
      </ContainerBox>
      <ContainerBox
        classname="
        h-fit
        w-[100px]
        lg:w-full"
      >
        <UserSidebarBlock />
      </ContainerBox>
    </div>
  );
};

export default Sidebar;
