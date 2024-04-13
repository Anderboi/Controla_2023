"use client";

import Avatar from "../../common/Avatar";
import Button from "@/components/common/inputs/MyButton";

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";

import { ChevronUp } from "lucide-react";

const UserSidebarBlock = () => {
  const authModal = useAuthModal();

  const { user } = useUser();

  return (
    <section className="h-15 w-full">
      {user ? (
        <div
          className="
          flex 
          w-full 
          items-center 
          justify-center 
          rounded-lg
          bg-secondary-bg-light 
          dark:bg-secondary-bg-dark
          lg:justify-between
          "
        >
          <Avatar
            type="rectangular"
            size={60}
            image={user.user_metadata.avatar_url}
          />
          <div className="hidden w-full items-center justify-between px-4 lg:flex">
            <div className="flex flex-col ">
              <span
                className="
                line-clamp-1
                overflow-hidden
                text-balance
                text-base
                text-primary-text-light
                dark:text-primary-text-dark
                "
              >
                {user.user_metadata.full_name || "User"}
              </span>
              <span
                className="
                text-xs
                text-secondary-text-light
                dark:text-secondary-text-dark
                "
              >
                {user.email}
              </span>
            </div>
            <ChevronUp className="text-secondary-text-light dark:text-secondary-text-dark" />
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
    </section>
  );
};

export default UserSidebarBlock;
