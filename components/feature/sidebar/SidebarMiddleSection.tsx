import React from "react";
import FavouriteContent from "./FavouriteContent";
import ContainerBox from "@/components/common/ContainerBox";
import Navigation from "./Navigation";
import { secondaryRoutes } from "@/lib/navRoutes";
import getFavouriteProjects from '@/actions/getFavouriteProjects';

export const revalidate = 0;

const SidebarMiddleSection = async () => {
const favouriteProjects = await getFavouriteProjects();

  return (
    <ContainerBox
      classname="
        overflow-y-auto
        h-full
        w-fill
        lg:w-full
        flex
        flex-col
        justify-between
        gap-y-2"
    >
      <span
        className="
        hidden
        text-xs
        font-bold
        text-secondary-text-dark
        lg:flex
        "
      >
        Избранное
      </span>
      <FavouriteContent projects={favouriteProjects} />
      <div className="flex flex-col gap-y-4">
        <Navigation navLinks={secondaryRoutes} />
      </div>
    </ContainerBox>
  );
};

export default SidebarMiddleSection;
