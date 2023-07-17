"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import useLoadImage from "@/hooks/useLoadImage";

import Button from "../../common/inputs/Button";
import ContainerBox from "../../common/ContainerBox";
import Image from "next/image";

import AddProjectButton from "./AddProjectButton";
import HeaderNavBlock from './HeaderNavBlock';
import BurgerMenu from './BurgerMenu';

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
  const coverImage = useLoadImage(image || null, "project");

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
        //h-[240px]
        
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
        subtitle ? "gap-y-16" : "gap-y-4",
        className
      )}
    >
      <div
        className="
        flex 
        justify-between 
        w-full 
        z-10 
        //h-[80px] 
        //top-0
        //sticky 
      "
      >
        {/*//? left button block */}
        <HeaderNavBlock/>
        
        {/*//? right button block */}
        <div className="flex gap-4">
          <AddProjectButton />
          <BurgerMenu/>
          
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
        <span
          className="
            text-sm 
            font-bold 
            text-left 
            text-primary-text-dark/90 
            w-full
        "
        >
          {addressDetails}
        </span>
        <span
          className="
            text-xs 
            font-bold 
            text-left 
            text-primary-text-dark/90 
            w-full
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
          priority
          className="
            absolute
            w-full
            h-full
            object-cover
            mix-blend-overlay
            rounded-lg
            z-0
          "
        />
      )}
    </ContainerBox>
  );
};

export default Header;
