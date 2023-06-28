"use client";

import React from "react";
import Avatar from "../../common/Avatar";
import { IoChevronUp } from "react-icons/io5";
import useAuthModal from "@/hooks/useAuthModal";
import { UseUser } from "@/hooks/useUser";

const UserSidebarBlock = async () => {
  const authModal = useAuthModal();

  const { user } = UseUser();


  return (
    <div className="flex gap-x-3 items-center cursor-pointer justify-center">
      {user ? (
        <>
          <Avatar type="rectangular" size={40} />
          <div className="hidden lg:flex items-center">
            <div className="flex flex-col justify-between flex-1 ">
              <span className="font-bold ">
                {/* {user}  */}
                </span>
              <div className="leading-5 text-xs text-secondary-text-dark">
                {/* {user} */}
              </div>
            </div>
            <IoChevronUp />
          </div>
        </>
      ) : (
        <button onClick={authModal.onOpen}>Sign In</button>
      )}
    </div>
  );
};

export default UserSidebarBlock;
