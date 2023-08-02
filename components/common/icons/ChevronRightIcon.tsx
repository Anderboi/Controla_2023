import React from "react";
import { IconProps } from "@/types/icon_illustration";

interface Porps extends IconProps {
  type: "down" | "right";
}

const ChevronRightIcon = ({ className, type }: Porps) => {
  if (type === "right") {
    return (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`${className} h-6 w-6`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    );
  } else if (type === "down") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`${className} h-6 w-6`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    );
  }
};

export default ChevronRightIcon;
