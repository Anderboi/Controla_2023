"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/common/inputs/MyButton";
import { ChevronLeft } from "lucide-react";

/**
 * React component called HeaderNavBlock.
 * It renders a button with a ChevronLeft icon and handles the
 * onClick event by navigating back using the router.
 * The button has some conditional styling based on the screen size.
 *
 * @return {JSX.Element} The rendered HeaderNavBlock component
 */
const HeaderNavBlock = () => {
  const router = useRouter();

  return (
    <div className="z-10 flex gap-4">
      <Button
        mode="ghost"
        corner="round"
        className="
          flex 
          transition
          duration-300
          sm:dark:bg-primary-bg-dark
          sm:w-[48px]
          sm:h-[48px]
          rounded-full
          items-center 
          justify-center 
          border-none
          text-secondary-text-light
          dark:text-secondary-text-dark
          "
        onClick={() => router.back()}
      >
        <ChevronLeft fontSize={24} className="translate-x-[-2px]" />
      </Button>
    </div>
  );
};

export default HeaderNavBlock;
