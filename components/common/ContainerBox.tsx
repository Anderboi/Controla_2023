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
        bg-transparent-bg-dark/10
        p-3
        sm:p-6
        `,
        classname
      )}
    >
      {children}
    </div>
  );
};

export default ContainerBox;
