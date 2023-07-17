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
        className="w-10 h-10 flex justify-center items-center border-none bg-secondary-bg-dark"
        onClick={() => router.back()}
      >
        <IoChevronBackOutline fontSize={24} />
      </Button>
      <Button
        mode="ghost"
        corner="round"
        className="w-10 h-10 flex justify-center items-center border-none bg-secondary-bg-dark"
        onClick={() => router.forward()}
      >
        <IoChevronForward fontSize={24} />
      </Button>
    </div>
  );
}

export default HeaderNavBlock