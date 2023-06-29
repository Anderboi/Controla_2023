"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import ContainerBox from "@/components/common/ContainerBox";
import Navigation from "./Navigation";
import { GoSignOut } from "react-icons/go";
import { TbSettings2 } from "react-icons/tb";
import { BiBell } from "react-icons/bi";
import Link from "next/link";
import SidebarItem from "./SidebarItem";
import Button from "@/components/common/inputs/Button";

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

const SidebarMiddleSection = () => {
  const router = useRouter();
  const supabaseClient = useSupabaseClient();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    router.refresh();

    if (error) {
      console.log("error");

      //  toast.error(error.message);
    }
  };

  return (
    <ContainerBox
      classname="
        overflow-y-auto 
        h-fill 
        w-[100px] 
        lg:w-full
        flex
        flex-col
        justify-between
        gap-y-2"
    >
      <span className="hidden lg:flex font-bold text-xs text-secondary-text-dark">
        Избранное
      </span>
      <div className="flex flex-col justify-start align-top h-full">
        <SidebarItem
          icon={GoSignOut}
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
