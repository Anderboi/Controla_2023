"use client";

import React from "react";
import Avatar from "../../common/Avatar";
import Button from "@/components/common/inputs/Button";

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";

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
    <>
      {user ? (
        <div className="flex items-center justify-center rounded-lg lg:justify-between lg:gap-x-3 dark:bg-secondary-bg-dark bg-secondary-bg-light">
          <Avatar
            type="rectangular"
            size={96}
            image={user.user_metadata.avatar_url}
          />
          <div className="hidden content-center items-center justify-start lg:flex py-4">
            <div className=" flex-1  flex-col justify-between  truncate">
              <span className="truncate font-bold text-primary-text-light dark:text-primary-text-dark text-base">
                {user.user_metadata.full_name || "User"}
              </span>
              <div className="text-sm text-secondary-text-light dark:text-secondary-text-dark">
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
    </>
  );
};

export default UserSidebarBlock;
