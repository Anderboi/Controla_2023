import React from "react";
import ContainerBox from "../../common/ContainerBox";
import Image from "next/image";
import { RxDashboard, RxAvatar } from "react-icons/rx";

import UserSidebarBlock from "./UserSidebarBlock";
import Link from "next/link";
import Navigation from "./Navigation";
import SidebarMiddleSection from './SidebarMiddleSection';

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
      <SidebarMiddleSection/>
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
