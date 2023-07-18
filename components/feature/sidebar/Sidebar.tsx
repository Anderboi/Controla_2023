import React from "react";
import Image from "next/image";
import Link from "next/link";
import ContainerBox from "../../common/ContainerBox";
import Navigation from "./Navigation";
import SidebarMiddleSection from "./SidebarMiddleSection";

import UserSidebarBlock from "./UserSidebarBlock";
import getFavouriteProjects from "@/actions/getFavouriteProjects";

import {routes} from '@/lib/navRoutes'

export const revalidate = 0;

const Sidebar = async () => {
  const favouriteProjects = await getFavouriteProjects();

  return (
    <aside
      className="
      bg-black
      hidden
      min-h-screen
      w-[90px]
      flex-col
      gap-y-2
      py-2
      pl-2
      sm:flex
      lg:w-[300px]
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
            className="hidden cursor-pointer lg:flex"
          />
          <Image
            alt="round logo"
            src="logos/c_white.svg"
            width={24}
            height={24}
            className="hidden cursor-pointer sm:max-lg:flex"
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
