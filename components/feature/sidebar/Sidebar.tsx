import React from "react";
import ContainerBox from "../../common/ContainerBox";
import Image from "next/image";
import { RxDashboard, RxAvatar } from "react-icons/rx";

import UserSidebarBlock from "./UserSidebarBlock";
import Link from "next/link";
import Navigation from "./Navigation";
import SidebarMiddleSection from "./SidebarMiddleSection";
import getProjects from "@/actions/getProjects";

export const revalidate = 0;

const Sidebar = async () => {
  const favouriteProjects = await getProjects();

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
        gap-y-7
        "
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
            width={24}
            height={24}
            className="hidden sm:max-lg:flex"
          />
        </Link>
        <Navigation navLinks={routes} />
      </ContainerBox>
      <SidebarMiddleSection favProjects={favouriteProjects} />
      <UserSidebarBlock />
    </aside>
  );
};

export default Sidebar;
