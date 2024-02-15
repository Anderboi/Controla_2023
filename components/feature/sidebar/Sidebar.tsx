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
        hidden
        min-h-screen
        w-[90px]
        flex-col
        gap-y-2
        bg-primary-bg-light
        dark:bg-primary-bg-dark
        py-2
        pl-2
        sm:flex
        lg:w-[300px]
        "
    >
      <ContainerBox
        className="
        flex
        h-fit
        w-full
        flex-col
        items-center
        gap-y-4
        lg:w-full
        lg:items-start
        "
      >
        <Link href={"/"}>
          <MainLogo
            type="sm"
            className="m-auto hidden w-full fill-primary-text-light dark:fill-primary-text-dark text-primary-text-light dark:text-primary-text-dark sm:max-lg:flex"
          />
          <MainLogo
            type="md"
            className="m-auto hidden w-full fill-primary-text-light dark:fill-primary-text-dark text-primary-text-light dark:text-primary-text-dark lg:flex"
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
