import React from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

interface ContainerBoxProps {
  children: React.ReactNode;
  classname?: string;
  image?: string;
  type?: "card" | "frame";
}

const ContainerBox = ({
  children,
  image,
  classname,
  type = "frame",
}: ContainerBoxProps) => {
  return (
    <div
      className={twMerge(
        `
        bg-transparent-bg-dark/10
        p-3
        rounded-lg
        `,
        type === "frame" ? "sm:p-6" : "sm:p-4",
        classname
      )}
    >
      {/* {image && <Image src={image} alt='cover' fill/>} */}
      {children}
    </div>
  );
};

export default ContainerBox;
