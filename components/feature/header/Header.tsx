"use client";

import { twMerge } from "tailwind-merge";
import useLoadImage from "@/hooks/useLoadImage";

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
        p-4
        pt-12
        md:pt-4
        relative
        flex
        flex-col
        gap-6
        justify-between
        h-fit
        w-full
        items-center
        
        max-sm:!rounded-t-none
        `,
        // coverImage &&
        //   `
        //   relative
        //   bg-gradient-to-b
        //   from-secondary-text-light
        //   dark:from-secondary-text-dark
        //   dark:to-elevated-2-bg-dark
        //   `,
        // !coverImage &&
        //   subtitle &&
        //   `bg-gradient-to-b from-accent-light/50 dark:from-accent-dark/50`,
        // subtitle ? "gap-y-16" : "gap-y-2 sm:gap-y-4",
        className
      )}
    >
      <div
        className="
          flex
          w-full
          justify-between
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
            max-sm:hidden
          "
        />
      )}
    </ContainerBox>
  );
};

export default Header;
