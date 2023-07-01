"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-hot-toast";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import ContainerBox from "@/components/common/ContainerBox";
import Navigation from "./Navigation";
import { CgAddR } from "react-icons/cg";
import { TbSettings2 } from "react-icons/tb";
import { BiBell } from "react-icons/bi";
import SidebarItem from "./SidebarItem";
import Button from "@/components/common/inputs/Button";
import useAuthModal from "@/hooks/useAuthModal";
import { UseUser } from "@/hooks/useUser";
import { Project } from "@/types/supabase";
import FavouriteProjectItem from "./FavouriteProjectItem";

export const revalidate = 0;

interface SectionProps {
  favProjects: Project[];
}

const secondaryRoutes = [
  {
    icon: BiBell,
    label: "Уведомления",
    href: "/notifications",
  },
  {
    icon: TbSettings2,
    label: "Настройки",
    href: "/settings",
  },
  // {
  //   icon: GoSignOut,
  //   label: "Выйти",
  //   href: "/auth/signout",
  // },
];

const SidebarMiddleSection = ({ favProjects }: SectionProps) => {
  const authModal = useAuthModal();
  const user = UseUser();
  const router = useRouter();
  const supabaseClient = useSupabaseClient();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    router.refresh();

    if (error) {
      // console.log(error);

      toast.error(error.message);
    } else {
      toast.success("Logged Out");
    }
  };

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
      <span className="hidden lg:flex font-bold text-xs text-secondary-text-dark">
        Избранное
      </span>
      <div
        className="
        flex 
        flex-col 
        gap-y-2 
        overflow-y-scroll 
        h-full 
        w-full 
        no-scrollbar
        overscroll-contain
        "
      >
        {favProjects.map((project) => (
          <FavouriteProjectItem
            key={project.project_id}
            data={project}
            onClick={() => {}}
          />
        ))}
      </div>
      <div className="flex flex-col justify-start align-top">
        <SidebarItem
          icon={CgAddR}
          label="Создать проект"
          href={"/new-project"}
        />
      </div>
      <div className="flex flex-col gap-y-4">
        <Navigation navLinks={secondaryRoutes} />
        <Button mode="ghost" className="py-1" onClick={handleLogout}>
          Sign Out
        </Button>
      </div>
    </ContainerBox>
  );
};

export default SidebarMiddleSection;
