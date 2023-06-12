import React from "react";
import { twMerge } from "tailwind-merge";

interface ContainerBoxProps {
  children: React.ReactNode;
  classname?: string;
}

const ContainerBox = ({ children, classname }: ContainerBoxProps) => {
  return (
    <div
      className={twMerge(
        `rounded-lg
      h-full
      w-full
      bg-neutral-900`,
        classname
      )}
    >
      {children}
    </div>
  );
};

export default ContainerBox;
