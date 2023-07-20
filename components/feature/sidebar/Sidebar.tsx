import React from "react";
import Link from "next/link";
import ContainerBox from "../../common/ContainerBox";
import Navigation from "./Navigation";
import SidebarMiddleSection from "./SidebarMiddleSection";

import UserSidebarBlock from "./UserSidebarBlock";

import { routes } from "@/lib/navRoutes";
import { MainLogo } from "@/components/common/illustrations/brand/Logo";

const Sidebar = () => {
  
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
        gap-y-4
        "
      >
        <Link href={"/"}>
          <MainLogo
            type="sm"
            className="fill-primary-text-dark w-full text-primary-text-dark w-fill m-auto hidden sm:max-lg:flex"
          />
          <MainLogo
            type="md"
            className="fill-primary-text-dark w-full text-primary-text-dark w-fill m-auto hidden lg:flex"
          />
        </Link>
        <Navigation navLinks={routes} />
      </ContainerBox>
      <SidebarMiddleSection  />
      <UserSidebarBlock />
    </aside>
  );
};

export default Sidebar;
