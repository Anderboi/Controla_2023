"use client";

import React from "react";
import Button from "./inputs/Button";
import { MdOutlineAdd } from "react-icons/md";
import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";
import useAuthModal from "@/hooks/useAuthModal";
import { UseUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import ContainerBox from "./ContainerBox";
import { twMerge } from "tailwind-merge";

interface HeaderProps {
  title: string;
  subtitle?: string;
  image?: string;
  className?: string;
  startDate?: string;
  addressDetails?: string;
}

const Header = ({
  title,
  className,
  image,
  subtitle,
  addressDetails,
  startDate,
}: HeaderProps) => {
  const authModal = useAuthModal();
  const { user } = UseUser();
  const router = useRouter();

  const onClick = () => {
    if (!user) {
      return authModal.onOpen();
    }
  };

  return (
    <ContainerBox
      classname={twMerge(
        `
        pb-4 flex  flex-col
        justify-between 
        gap-y-3
        h-fit
        w-full
        items-center`,
        className
      )}
    >
      <div className="flex justify-between w-full">
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
      <div className="flex flex-col w-full">
        <span className="text-2xl font-bold text-left  w-full">{subtitle}</span>
        <span className="text-7xl font-bold text-left w-full">{title}</span>
        <span className="text-sm font-bold text-left text-secondary-text-dark w-full">
          {addressDetails}
        </span>
        <span className="text-xs font-bold text-left text-secondary-text-dark w-full">
          {startDate}
        </span>
      </div>
    </ContainerBox>
  );
};

export default Header;
