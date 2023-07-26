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
        pb-1
        text-start
        text-lg
        sm:text-xl
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
