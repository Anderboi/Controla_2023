"use client";

import React from "react";
import Avatar from "../../common/Avatar";
import Button from "@/components/common/inputs/Button";
// import { toast } from "react-hot-toast";

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
// import { useRouter } from "next/navigation";
// import { useSupabaseClient } from "@supabase/auth-helpers-react";

import { IoChevronUp } from "react-icons/io5";
import ContainerBox from "@/components/common/ContainerBox";

const UserSidebarBlock = () => {
  const authModal = useAuthModal();
  // const router = useRouter();

  // const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  // const handleLogout = async () => {
  //   const { error } = await supabaseClient.auth.signOut();
  //   router.refresh();

  //   if (error) {
  //     // console.log(error);

  //     toast.error(error.message);
  //   } else {
  //     toast.success("Logged Out");
  //   }
  // };

  return (
    <ContainerBox
      classname="
        h-fit
        w-fill
        lg:w-full"
    >
      {user ? (
        <div className="flex h-fit w-full items-center justify-center lg:justify-between lg:gap-x-3">
          <Avatar
            type="rectangular"
            size={40}
            image={user.user_metadata.avatar_url}
          />
          <div className="hidden w-full content-center items-center justify-between lg:flex">
            <div className=" flex-1 flex-col justify-between ">
              <span className="line-clamp-1 font-bold">
                {user.user_metadata.full_name || "User"}
              </span>
              <div className="text-xs leading-5 text-secondary-text-dark">
                {user.email}
              </div>
            </div>
            <IoChevronUp />
          </div>
        </div>
      ) : (
        <div className="flex w-full justify-between gap-4">
          <Button
            className="w-full"
            mode="ghost_accent"
            onClick={authModal.onOpen}
          >
            Sign In
          </Button>
        </div>
      )}
    </ContainerBox>
  );
};

export default UserSidebarBlock;
