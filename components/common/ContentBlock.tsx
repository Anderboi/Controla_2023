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
        pb-1
        text-start
        text-[21px]
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
