"use client";

import React from "react";
import IconButton from "./IconButton";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";

interface RemoveButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  handleClick: (e: any) => void;
}

const RemoveButton = ({ handleClick, ...props }: RemoveButtonProps) => {
  const router = useRouter();

  const remove = (e: any) => {
    e.stopPropagation();

    handleClick(e);
    router.refresh();
  };

  return (
    <IconButton
      onClick={remove}
      className="sm:opacity-0 opacity-100"
      {...props}
    >
      <Trash2 />
    </IconButton>
  );
};

export default RemoveButton;
