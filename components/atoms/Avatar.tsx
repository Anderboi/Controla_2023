import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface AvatarProps {
  type: "round" | "rectangular";
  image: string;
}

const Avatar = ({ type, image }: AvatarProps) => {
  return (
    <Image
      className={twMerge(
        ` bg-secondary-text-dark`,
        type === "round" ? "rounded-full" : "rounded-xl"
      )}
      alt="avatar"
      src={image || "/icons/dashboard_filled.svg"}
      height={48}
      width={48}
    />
  );
};

export default Avatar;
