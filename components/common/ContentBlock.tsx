import React from "react";

interface ContentBlockProps {
  title: string;
  children: React.ReactNode;
}

const ContentBlock = ({ title, children }: ContentBlockProps) => {
  return (
    <div>
      <h2
        className="
        //px-6
        text-[21px]
        text-start
        pb-1
        font-bold
      "
      >
        {title}
      </h2>
      {children}
    </div>
  );
};

export default ContentBlock;
