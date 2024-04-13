import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface AvatarProps {
  type: "round" | "rectangular";
  image?: string;
  size?: number;
}

const Avatar = ({ type, image, size }: AvatarProps) => {
  return (
    <Image
      className={twMerge(
        `dark:bg-secondary-text-dark bg-secondary-text-light w-[${size}px] h-[${size}px]`,
        type === "round" ? "rounded-full" : "rounded-md "
      )}
      alt="avatar"
      src={image || "/icons/dashboard_filled.svg"}
      height={size}
      width={size}
    />
  );
};

export default Avatar;
