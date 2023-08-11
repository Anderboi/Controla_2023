import React from "react";
import EditIcon from "./icons/EditIcon";

interface ContentBlockProps {
  title: string;
  children: React.ReactNode;
}

const ContentBlock = ({ title, children }: ContentBlockProps) => {
  return (
    <div>
      <div className="flex justify-between pb-1">
        <h2
          className="
            text-start
            text-lg
            font-bold
            sm:text-xl
            "
        >
          {title}
        </h2>
        <div className="flex items-center justify-center gap-3">
          <EditIcon className=" cursor-pointer text-secondary-text-dark sm:hover:text-accent-dark" />
          
        </div>
      </div>
      {children}
    </div>
  );
};

export default ContentBlock;
