import React from "react";
import ChevronRightIcon from "./icons/ChevronRightIcon";
import EditIcon from "./icons/EditIcon";

interface ContentBlockProps {
  title: string;
  children: React.ReactNode;
}

const ContentBlock = ({ title, children }: ContentBlockProps) => {
  return (
    <div>
      <div className="flex justify-between">
        <h2
          className="
            pb-1
            text-start
            text-lg
            sm:text-xl
            font-bold
            "
        >
          {title}
        </h2>
        <div className="flex justify-center items-center gap-3">
          <EditIcon className=" text-secondary-text-dark sm:hover:text-accent-dark cursor-pointer" />
          <ChevronRightIcon
            type="down"
            className=" text-secondary-text-dark sm:hover:text-accent-dark cursor-pointer"
          />
        </div>
      </div>
      {children}
    </div>
  );
};

export default ContentBlock;
