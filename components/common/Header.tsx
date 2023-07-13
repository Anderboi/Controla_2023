"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/useUser";
import useAuthModal from "@/hooks/useAuthModal";
import useUploadModal from "@/hooks/useUploadModal";
import { twMerge } from "tailwind-merge";

import Button from "./inputs/Button";
import ContainerBox from "./ContainerBox";
import Image from "next/image";

import { MdOutlineAdd } from "react-icons/md";
import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";
import { RiSearchLine } from "react-icons/ri";
import useLoadImage from "@/hooks/useLoadImage";

interface HeaderProps {
  title: string;
  subtitle?: string;
  image?: string | null;
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
  const { user } = useUser();
  const uploadModal = useUploadModal();
  const router = useRouter();

  const coverImage = useLoadImage(image || null, "project");

  const onClick = () => {
    if (!user) {
      return authModal.onOpen();
    }

    //TODO: check for subscription

    return uploadModal.onOpen();
  };
  
  return (
    <ContainerBox
      classname={twMerge(
        `
        relative
        //pb-4
        flex
        flex-col
        justify-between
        h-fit
        w-full
        items-center
        `,
        coverImage &&
          "bg-gradient-to-b from-secondary-text-dark to-elevated-2-bg-dark",
        subtitle ? "gap-y-16" : "gap-y-4",
        className
      )}
    >
      <div className="flex justify-between w-full z-10">
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
        <div className="flex gap-4">
          <Button
            mode="ghost"
            corner="round"
            className="w-10 h-10 flex justify-center items-center border-none"
            onClick={() => router.push("/search")}
          >
            <RiSearchLine fontSize={24} />
          </Button>
          <Button
            mode="ghost"
            corner="round"
            className="w-10 h-10 flex justify-center items-center border-none"
            onClick={onClick}
          >
            <MdOutlineAdd fontSize={24} />
          </Button>
        </div>
      </div>
      <div
        className="
        flex
        flex-col
        w-full
        "
      >
        <span
          className="
          text-xs
          md:text-xl
          text-primary-text-dark/90 
          font-bold 
          text-left  
          w-full
          "
        >
          {subtitle}
        </span>
        <span
          className="
          text-[24px]
          //sm:text-3xl
          md:text-4xl
          lg:text-5xl/[72px]
          xl:text-7xl/[72px]
          font-bold
          text-left
          w-full
          break-words
          line-clamp-2
          md:line-clamp-1
          //break-all
          "
        >
          {title}
        </span>
        <span className="text-sm font-bold text-left text-primary-text-dark/90 w-full">
          {addressDetails}
        </span>
        <span className="text-xs font-bold text-left text-primary-text-dark/90 w-full">
          {startDate && Date.parse(startDate)}
        </span>
      </div>
      {coverImage && (
        <Image
          src={coverImage}
          alt="cover"
          fill
          priority
          className="absolute w-full h-full object-cover mix-blend-overlay z-0"
        />
      )}
    </ContainerBox>
  );
};

export default Header;
