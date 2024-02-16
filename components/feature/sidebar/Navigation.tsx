import SidebarItem from "./SidebarItem";

export interface NavLink {
  label: string;
  href: string;
  icon: React.ReactNode;
  activeIcon?: React.ReactNode;
}

interface Props {
  navLinks: NavLink[];
}

const Navigation = ({ navLinks }: Props) => {
  return (
    <nav className="flex flex-col">
      {navLinks.map((item, index) => (
        <SidebarItem
          key={index}
          {...item}
          icon={item.icon}
          activeIcon={item.activeIcon}
        />
      ))}
    </nav>
  );
};

export default Navigation;
