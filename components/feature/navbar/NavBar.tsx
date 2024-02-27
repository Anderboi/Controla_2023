import Link from "next/link";
import { routes, secondaryRoutes } from "@/lib/navRoutes";

const NavBar = () => {
  return (
    <nav className="fixed bottom-[0] left-[0] w-full bg-secondary-bg-light dark:bg-secondary-bg-dark flex justify-around p-4 sm:hidden">
      {routes.concat(secondaryRoutes).map((route, index) => (
        <Link href={route.href} key={index}>
          {route.icon}
        </Link>
      ))}
      
    </nav>
  );
};

export default NavBar;
