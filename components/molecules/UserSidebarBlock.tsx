import React from "react";
import Avatar from "../atoms/Avatar";
import { IoChevronUp } from "react-icons/io5";
import Link from "next/link";
import { supabaseServer } from "../../lib/supabaseServer";

const UserSidebarBlock = async () => {
  const {
    data: { session },
  } = await supabaseServer.auth.getSession();

  return (
    <div className="flex gap-x-3 items-center cursor-pointer justify-center">
      {session ? (
        <>
          <Avatar type="rectangular" size={40} />
          <div className="hidden lg:flex items-center">
            <div className="flex flex-col justify-between flex-1 ">
              <span className="font-bold ">
                {session.user.user_metadata.name}
              </span>
              <div className="leading-5 text-xs text-secondary-text-dark">
                {session.user.email}
              </div>
            </div>
            <IoChevronUp />
          </div>
        </>
      ) : (
        <Link href="/api/signin">Sign In</Link>
      )}
    </div>
  );
};

export default UserSidebarBlock;
