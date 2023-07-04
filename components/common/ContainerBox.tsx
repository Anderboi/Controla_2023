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
  image,
  classname,
  type = "frame",
  onClick
}: ContainerBoxProps) => {
  return (
    <div
      className={twMerge(
        `
        bg-secondary-bg-dark
        p-3
        rounded-lg
        `,
        type === "frame" ? "sm:p-6" : "sm:p-4",
        classname
      )}
      onClick={onClick}
    >
      {/* {image && <Image src={image} alt='cover' fill/>} */}
      {children}
    </div>
  );
};

export default ContainerBox;
