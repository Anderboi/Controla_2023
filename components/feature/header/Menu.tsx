import { routes, secondaryRoutes } from "@/lib/navRoutes";
import SidebarItem from "../sidebar/SidebarItem";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { MenuIcon } from "lucide-react";

const HeadlessMenu = () => {
  return (
    <Drawer direction="right">
      <DrawerTrigger
        className={`
          sm:hidden
          transition
          duration-300
          dark:bg-primary-bg-dark
          w-[48px]
          h-[48px]
          rounded-full
          flex
          items-center
          justify-center
          `}
      >
        <MenuIcon />
      </DrawerTrigger>

      <DrawerContent className=" bg-secondary-bg-light dark:bg-secondary-bg-dark p-6">
        {routes.concat(secondaryRoutes).map((route, index) => (
          <SidebarItem
            key={index}
            className={
              "text-xl bg-secondary-bg-light dark:bg-secondary-bg-dark px-4 py-2 rounded-md"
            }
            isInBurger
            {...route}
          />
        ))}
      </DrawerContent>
    </Drawer>
  );
};

export default HeadlessMenu;
