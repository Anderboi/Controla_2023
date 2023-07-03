import React from "react";
import { twMerge } from "tailwind-merge";

interface ContainerBoxProps {
  children: React.ReactNode;
  classname?: string;
  type?: "card" | "frame";
}

const ContainerBox = ({
  children,
  classname,
  type = "frame",
}: ContainerBoxProps) => {
  return (
    <div
      className={twMerge(
        `bg-transparent-bg-dark/10
        p-3
        rounded-lg
        `,
        type === "frame" ? "sm:p-6" : "sm:p-4",
        classname
      )}
    >
      {children}
    </div>
  );
};

export default ContainerBox;
