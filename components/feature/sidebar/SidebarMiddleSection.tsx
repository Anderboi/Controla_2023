"use client";

import React from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import useAuthModal from "@/hooks/useAuthModal";
import SidebarItem from "./SidebarItem";
import Button from "@/components/common/inputs/Button";
import FavouriteContent from "./FavouriteContent";
import ContainerBox from "@/components/common/ContainerBox";
import Navigation from "./Navigation";
import { CgAddR } from "react-icons/cg";
import { TbSettings2 } from "react-icons/tb";
import { BiBell } from "react-icons/bi";
import { Database } from "@/types/supabase";

export const revalidate = 0;

interface SectionProps {
  favProjects: Database["public"]["Tables"]["projects"]["Row"][];
}

const secondaryRoutes = [
  {
    icon: <BiBell size={25}/>,
    label: "Уведомления",
    href: "/notifications",
  },
  {
    icon: <TbSettings2 size={25}/>,
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
  const router = useRouter();
  const supabaseClient = useSupabaseClient();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    // router.refresh();
    router.push('/')

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
      <span
        className="
        hidden
        lg:flex
        font-bold
        text-xs
        text-secondary-text-dark
        "
      >
        Избранное
      </span>

      <FavouriteContent projects={favProjects} />

      <div
        className="
        flex
        flex-col
        justify-start
        align-top
      "
      >
        <SidebarItem label="Создать проект" href={"/new-project"}>
          <CgAddR size={25}/>
        </SidebarItem>
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
