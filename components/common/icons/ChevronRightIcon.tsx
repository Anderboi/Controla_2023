import React from "react";
import { IconProps } from '@/types/icon_illustration';

const ChevronRightIcon = ({className}:IconProps) => {
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
};

export default ChevronRightIcon;
