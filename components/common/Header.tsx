"use client";

import React from "react";
import Button from "./inputs/Button";
import { MdOutlineAdd } from "react-icons/md";
import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";
import useAuthModal from "@/hooks/useAuthModal";
import { UseUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";

const Header = () => {
  const authModal = useAuthModal();
  const { user } = UseUser();
  const router = useRouter();

  const onClick = () => {
    if (!user) {
      return authModal.onOpen();
    }
  };

  return (
    <div className="pb-4 flex justify-between">
      <div className="flex gap-4">
        <Button
          mode="ghost"
          corner="round"
          className="w-10 h-10 flex justify-center items-center border-none"
          onClick={() => router.back()}
        >
          <IoChevronBackOutline fontSize={24} />
        </Button>
        <Button
          mode="ghost"
          corner="round"
          className="w-10 h-10 flex justify-center items-center border-none"
          onClick={() => router.forward()}
        >
          <IoChevronForward fontSize={24} />
        </Button>
      </div>
      <Button
        mode="ghost"
        corner="round"
        className="w-10 h-10 flex justify-center items-center border-none"
        onClick={onClick}
      >
        <MdOutlineAdd fontSize={24} />
      </Button>
    </div>
  );
};

export default Header;
