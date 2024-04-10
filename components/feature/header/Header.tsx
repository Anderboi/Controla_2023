"use client";

import { twMerge } from "tailwind-merge";

import ContainerBox from "../../common/ContainerBox";
import Image from "next/image";

import HeaderNavBlock from "./HeaderNavBlock";

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
  subtitle,
  addressDetails,
  startDate,
  adjustableButton,
}: HeaderProps) => {

  return (
    <ContainerBox
      className={twMerge(
        `
        p-4
        pt-12
        md:pt-4
        //relative
        flex
        flex-col
        gap-6
        justify-between
        h-fit
        w-full
        items-center

        //sticky
        //top-[-92px]
        //z-20

        max-sm:!rounded-t-none
        `,
        className
      )}
    >
      <div
        className="
          flex
          w-full
          justify-between

          //sticky
          //top-3
          //z-10
          "
      >
        {/*//? left button block */}
        <HeaderNavBlock />
        {/*//? right button block */}
        {adjustableButton}
      </div>
      <section
        className="
        flex
        w-full
        flex-col
        //max-sm:hidden
        "
      >
        <span
          className="
          text-left
          text-xs
          text-primary-text-light/90
          dark:text-primary-text-dark/90
          md:text-base
          "
        >
          {subtitle}
        </span>
        <span
          className="
            text-balance
            text-left
            text-[24px]
            font-bold
            tracking-tighter
            sm:text-[5vw]/[5vw]
            md:line-clamp-2
            text-primary-text-light
            dark:text-primary-text-dark
            "
        >
          {title}
        </span>
        <span
          className="
            text-left
            text-sm
            text-primary-text-light
            dark:text-primary-text-dark
        "
        >
          {addressDetails}
        </span>
        <span
          className="
            text-left
            text-xs
            font-bold
            text-primary-text-light
            dark:text-primary-text-dark
          "
        >
          {startDate && Date.parse(startDate)}
        </span>
      </section>
    </ContainerBox>
  );
};

export default Header;
