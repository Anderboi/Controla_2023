import React from "react";
import FavouriteContent from "./FavouriteContent";
import ContainerBox from "@/components/common/ContainerBox";
import Navigation from "./Navigation";
import { secondaryRoutes } from "@/lib/navRoutes";
import getFavoriteProjects from '@/actions/getFavoriteProjects';
import ThemeSwitcher from './ThemeSwitcher';


export const revalidate = 0;

const SidebarMiddleSection = async () => {
const favoriteProjects = await getFavoriteProjects();

  return (
    <ContainerBox
      className="
        flex
        h-full
        flex-col
        justify-between
        gap-y-2
        overflow-y-auto
        sm:max-lg:!p-2
        lg:w-full
        "
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
      <FavouriteContent projects={favoriteProjects} />
      <div className="flex flex-col gap-y-4">
        <Navigation navLinks={secondaryRoutes} />
      </div>
      <ThemeSwitcher/>
      
    </ContainerBox>
  );
};

export default SidebarMiddleSection;
