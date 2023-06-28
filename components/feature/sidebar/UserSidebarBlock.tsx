"use client";

import React from "react";
import Avatar from "../../common/Avatar";
import { IoChevronUp } from "react-icons/io5";
import useAuthModal from "@/hooks/useAuthModal";
import { UseUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const UserSidebarBlock = async () => {
  // const authModal = useAuthModal();

  // const { user } = UseUser();
  // const router = useRouter();

  // const supabaseClient = useSupabaseClient();

  // const handleLogout = async () => {
  //   const { error } = await supabaseClient.auth.signOut();
  //   // router.refresh();

  //   if (error) {
  //     console.log("error");

      //  toast.error(error.message);
    // }
  // };

  return (
    <div className="flex gap-x-3 items-center cursor-pointer justify-center">
      {/* {user ? ( */}
      <>
        <Avatar type="rectangular" size={40} />
        <div className="hidden lg:flex items-center">
          <div className="flex flex-col justify-between flex-1 ">
            <span className="font-bold ">{/* {user}  */}</span>
            <div className="leading-5 text-xs text-secondary-text-dark">
              {/* {user} */}
            </div>
          </div>
          
          <IoChevronUp />
        </div>
      </>
      {/* ) : (
        <div className='flex justify-between'>
          <button onClick={authModal.onOpen} type="button">
            Sign In
          </button>
          <button onClick={handleLogout} type="button">
            Sign Out
          </button>
        </div>
      )} */}
    </div>
  );
};

export default UserSidebarBlock;
