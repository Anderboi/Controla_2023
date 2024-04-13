"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { ChevronLeft } from "lucide-react";
import { Button } from '@/components/ui/button';

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
        size={'icon'}
        variant={'secondary'}
        className="
          dark:bg-transparent
          "
        onClick={() => router.back()}
      >
        <ChevronLeft fontSize={24} className="translate-x-[-2px]" />
      </Button>
    </div>
  );
};

export default HeaderNavBlock;
