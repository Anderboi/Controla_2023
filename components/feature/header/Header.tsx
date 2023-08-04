"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import useLoadImage from "@/hooks/useLoadImage";

import ContainerBox from "../../common/ContainerBox";
import Image from "next/image";

import HeaderNavBlock from "./HeaderNavBlock";
import BurgerMenu from "./BurgerMenu";
import HeadlessMenu from './Menu';

interface HeaderProps {
  title: string;
  subtitle?: string;
  image?: string | null;
  className?: string;
  startDate?: string;
  addressDetails?: string;
  adjustableButton?: React.ReactNode;
}

const Header = ({
  title,
  className,
  image,
  subtitle,
  addressDetails,
  startDate,
  adjustableButton,
}: HeaderProps) => {
  const coverImage = useLoadImage(image || null, "project");

  return (
    <ContainerBox
      className={twMerge(
        `
        relative
        flex
        flex-col
        justify-between
        h-fit
        w-full
        items-center
        `,
        coverImage &&
          `
          relative
          bg-gradient-to-b
          from-secondary-text-dark
          to-elevated-2-bg-dark
          //h-[330px]
          //top-[-250px]
          //sticky
          `,
        !coverImage && subtitle && `bg-gradient-to-b from-accent-dark/50`,
        subtitle ? "gap-y-16" : "gap-y-2 sm:gap-y-4",
        className
      )}
    >
      <div
        className="
        //h-[80px]
        //top-0
        //sticky
        flex
        w-full
        justify-between
      "
      >
        {/*//? left button block */}
        <HeaderNavBlock />

        {/*//? right button block */}
        <div className="flex //gap-4 sm:hidden z-30">
          {adjustableButton}
          <HeadlessMenu />
          {/* <BurgerMenu /> */}
        </div>
      </div>
      <div
        className="
        flex
        w-full
        flex-col
        "
      >
        <span
          className="
          text-left
          text-xs 
          font-bold 
          text-primary-text-dark/90  
          md:text-xl
          "
        >
          {subtitle}
        </span>
        <span
          className="
            //break-all
            line-clamp-2
            break-words
            text-left
            text-[24px]
            font-bold
            tracking-tighter
            sm:text-[5vw]/[5vw]
            md:line-clamp-2
          "
        >
          {title}
        </span>
        <span
          className="
            text-left 
            text-sm 
            font-bold 
            text-primary-text-dark/90
        "
        >
          {addressDetails}
        </span>
        <span
          className="
            text-left 
            text-xs 
            font-bold 
            text-primary-text-dark/90
          "
        >
          {startDate && Date.parse(startDate)}
        </span>
      </div>
      {coverImage && (
        <Image
          src={coverImage}
          alt="cover"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          className="
            absolute
            z-0
            h-full
            w-full
            rounded-lg
            object-cover
            mix-blend-overlay
          "
        />
      )}
    </ContainerBox>
  );
};

export default Header;
