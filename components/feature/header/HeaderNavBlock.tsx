'use client'

import React from 'react'
import { useRouter } from 'next/navigation';
import Button from '@/components/common/inputs/Button';
import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";


const HeaderNavBlock = () => {
    const router = useRouter();
    
  return (
    <div className="flex gap-4">
      <Button
        mode="ghost"
        corner="round"
        className="flex h-10 w-10 items-center justify-center border-none bg-secondary-bg-dark"
        onClick={() => router.back()}
      >
        <IoChevronBackOutline fontSize={24} className="translate-x-[-2px]" />
      </Button>
      <Button
        mode="ghost"
        corner="round"
        className="flex h-10 w-10 items-center justify-center border-none bg-secondary-bg-dark"
        onClick={() => router.forward()}
      >
        <IoChevronForward fontSize={24} className="translate-x-[2px]" />
      </Button>
    </div>
  );
}

export default HeaderNavBlock