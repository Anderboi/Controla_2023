import React from "react";
import IconButton from "./IconButton";
import {IoTrashOutline} from 'react-icons/io5'

interface RemoveButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  handleClick: (e:any) => void;
}

const RemoveButton = ({ handleClick, ...props}: RemoveButtonProps) => {
  const Icon = IoTrashOutline;

  return (
    
      
      <IconButton
        Icon={Icon}
        onClick={handleClick}
        // className={twMerge(isFavourite && "opacity-100 ")}
        {...props}
      />
    
  );
};

export default RemoveButton;
