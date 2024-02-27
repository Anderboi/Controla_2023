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
    <section className="w-full h-[60px]">
      {user ? (
        <div
          className="
          flex 
          items-center 
          justify-center 
          rounded-lg 
          lg:justify-between
          dark:bg-secondary-bg-dark 
          bg-secondary-bg-light
          w-full
          "
        >
          <Avatar
            type="rectangular"
            size={60}
            image={user.user_metadata.avatar_url}
          />
          <div className="hidden lg:flex w-full justify-between items-center px-4">
            <div className="flex flex-col ">
              <span
                className="
                overflow-hidden
                line-clamp-1
                text-primary-text-light
                dark:text-primary-text-dark
                text-base
                text-balance
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
