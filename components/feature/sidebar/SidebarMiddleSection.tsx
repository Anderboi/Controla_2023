import FavouriteContent from "./FavouriteContent";
import ContainerBox from "@/components/common/ContainerBox";
import Navigation from "./Navigation";
import { secondaryRoutes } from "@/lib/navRoutes";
import getFavoriteProjects from "@/lib/actions/getFavoriteProjects";

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
        font-semibold
        text-secondary-text-light
        dark:text-tertiary-text-dark 
        lg:flex capitalize
        "
      >
        ИЗБРАННОЕ
      </span>
      <FavouriteContent projects={favoriteProjects} />
      <div className="flex flex-col gap-y-4">
        <Navigation navLinks={secondaryRoutes} />
      </div>
    </ContainerBox>
  );
};

export default SidebarMiddleSection;
