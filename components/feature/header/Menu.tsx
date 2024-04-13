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
          flex
          size-12
          items-center
          justify-center
          rounded-full
          transition
          duration-300
          dark:bg-primary-bg-dark
          sm:hidden
          `}
      >
        <MenuIcon />
      </DrawerTrigger>

      <DrawerContent className=" bg-secondary-bg-light p-6 dark:bg-secondary-bg-dark">
        {routes.concat(secondaryRoutes).map((route, index) => (
          <SidebarItem
            key={index}
            className={
              "rounded-md bg-secondary-bg-light px-4 py-2 text-xl dark:bg-secondary-bg-dark"
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
