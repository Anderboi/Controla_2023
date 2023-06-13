import React from 'react'
import Avatar from '../atoms/Avatar'
import { IoChevronUp } from "react-icons/io5";

const UserSidebarBlock = () => {
  return (
    <div className="flex gap-x-3 items-center cursor-pointer">
      <Avatar type="rectangular" size={40} />
      <div className="flex flex-col justify-between flex-1">
        <span className='font-bold'>User Name</span>
        <div className="leading-5 text-xs text-secondary-text-dark">
          UserEmail@mail.com
        </div>
      </div>
      <IoChevronUp />
    </div>
  );
}

export default UserSidebarBlock