"use client";

import React from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Button from "@/components/common/inputs/Button";
import FavouriteContent from "./FavouriteContent";
import ContainerBox from "@/components/common/ContainerBox";
import Navigation from "./Navigation";
import { Database } from "@/types/supabase";
import { secondaryRoutes } from "@/lib/navRoutes";
import { useUser } from "@/hooks/useUser";

export const revalidate = 0;

interface SectionProps {
  favProjects: Database["public"]["Tables"]["projects"]["Row"][];
}

const SidebarMiddleSection = ({ favProjects }: SectionProps) => {
  const router = useRouter();
  const supabaseClient = useSupabaseClient();
  const user = useUser();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    // router.refresh();
    router.push("/");

    if (error) {
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

      <div className="flex flex-col gap-y-4">
        <Navigation navLinks={secondaryRoutes} />
        {user.user && (
          <Button mode="ghost" className="py-1" onClick={handleLogout}>
            Sign Out
          </Button>
        )}
      </div>
    </ContainerBox>
  );
};

export default SidebarMiddleSection;
