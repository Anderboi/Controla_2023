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
        `
        rounded-lg
        h-full
        w-full
        bg-secondary-bg-dark
        
        `,
        classname
      )}
    >
      {children}
    </div>
  );
};

export default ContainerBox;
