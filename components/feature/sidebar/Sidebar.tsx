import React from "react";
import ContainerBox from "../../common/ContainerBox";
import Image from "next/image";
import { BiBell } from "react-icons/bi";
import { RxDashboard, RxAvatar } from "react-icons/rx";
import { GoSignOut } from "react-icons/go";
import { TbSettings2 } from "react-icons/tb";
import UserSidebarBlock from "./UserSidebarBlock";
import Link from "next/link";
import Navigation from "./Navigation";

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
      icon: TbSettings2,
      label: "Настройки",
      href: "/settings",
    },
    {
      icon: GoSignOut,
      label: "Выйти",
      href: "/auth/signout",
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
            priority
            className="cursor-pointer hidden lg:flex"
          />
          <Image
            alt="round logo"
            src="/ellipse_round.svg"
            width={56}
            height={56}
            className="hidden sm:max-lg:flex"
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
        <Link href={"/new-project"}>Новый проект</Link>
        <Navigation navLinks={secondaryRoutes} />
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
