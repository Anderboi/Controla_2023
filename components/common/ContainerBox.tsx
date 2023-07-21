import React from "react";
import { twMerge } from "tailwind-merge";

interface ContainerBoxProps {
  children: React.ReactNode;
  classname?: string;
  image?: string;
  type?: "card" | "frame";
  onClick?: () => void;
}

const ContainerBox = ({
  children,
  classname,
  type = "frame",
  onClick
}: ContainerBoxProps) => {
  return (
    <div
      className={twMerge(
        `
        bg-secondary-bg-dark
        p-4
        rounded-lg
        `,
        type === "frame" ? "sm:p-4" : "sm:p-4",
        classname
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default ContainerBox;
