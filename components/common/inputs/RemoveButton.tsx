'use client'

import React from "react";
import IconButton from "./IconButton";
import {IoTrashOutline} from 'react-icons/io5'
import { useRouter } from 'next/navigation';

interface RemoveButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  handleClick: (e:any) => void;
}

const RemoveButton = ({ handleClick, ...props}: RemoveButtonProps) => {
  const Icon = IoTrashOutline;

  const router = useRouter()

  const remove = (e:any) => {
    e.stopPropagation();
    
    handleClick(event);
    router.refresh();
  };

  return (
    <IconButton
      Icon={Icon}
      onClick={remove}
      // className={twMerge(isFavourite && "opacity-100 ")}
      {...props}
    />
  );
};

export default RemoveButton;
