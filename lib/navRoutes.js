import { Users, LayoutDashboard, BookOpen, Bell, Bolt } from "lucide-react";

export const routes = [
  {
    icon: (
      <LayoutDashboard
        size={28}
        className="text-secondary-text-light dark:text-secondary-text-dark"
      />
    ),
    activeIcon: (
      <LayoutDashboard
        className="text-primary-text-light dark:text-primary-text-dark"
        size={28}
      />
    ),
    label: "Проекты",
    href: "/projects",
  },
  {
    icon: (
      <Users
        size={28}
        className="text-secondary-text-light dark:text-secondary-text-dark"
      />
    ),
    activeIcon: (
      <Users
        size={28}
        className="text-primary-text-light dark:text-primary-text-dark"
      />
    ),
    label: "Контакты",
    href: "/contacts",
  },
  {
    icon: (
      <BookOpen
        size={28}
        className="text-secondary-text-light dark:text-secondary-text-dark"
      />
    ),
    activeIcon: (
      <BookOpen
        size={28}
        className="text-primary-text-light dark:text-primary-text-dark"
      />
    ),
    label: "База данных",
    href: "/database",
  },
];

export const secondaryRoutes = [
  {
    icon: (
      <Bell
        size={28}
        className="text-secondary-text-light dark:text-secondary-text-dark"
      />
    ),
    activeIcon: (
      <Bell
        size={28}
        className="text-primary-text-light dark:text-primary-text-dark"
      />
    ),
    label: "Уведомления",
    href: "/notifications",
  },
  {
    icon: (
      <Bolt
        size={28}
        className="text-secondary-text-light dark:text-secondary-text-dark"
      />
    ),
    activeIcon: (
      <Bolt
        size={28}
        className="text-primary-text-light dark:text-primary-text-dark"
      />
    ),
    label: "Настройки",
    href: "/settings",
  },
];
