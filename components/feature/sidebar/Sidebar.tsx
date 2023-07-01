import React from "react";
import ContainerBox from "../../common/ContainerBox";
import Image from "next/image";
import { RxDashboard, RxAvatar } from "react-icons/rx";

import UserSidebarBlock from "./UserSidebarBlock";
import Link from "next/link";
import Navigation from "./Navigation";
import SidebarMiddleSection from "./SidebarMiddleSection";

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
    <aside
      className="
      hidden
      min-h-screen
      sm:flex
      flex-col
      gap-y-2
      bg-black
      w-[90px]
      lg:w-[300px]
      py-2
      pl-2
      "
    >
      <ContainerBox
        classname="
        w-fill
        lg:w-full
        h-fit
        flex
        flex-col
        items-center
        lg:items-start
        gap-y-5"
      >
        <Link href={"/"}>
          <Image
            alt="main logo"
            src="logos/controla_logo_light.svg"
            width={300}
            height={40}
            priority
            className="cursor-pointer hidden lg:flex"
          />
          <Image
            alt="round logo"
            src="logos/c_white.svg"
            width={16}
            height={16}
            className="hidden sm:max-lg:flex"
          />
        </Link>
        <Navigation navLinks={routes} />
      </ContainerBox>
      <SidebarMiddleSection />
      <UserSidebarBlock />
    </aside>
  );
};

export default Sidebar;
