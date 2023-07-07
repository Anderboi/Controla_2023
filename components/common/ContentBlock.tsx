import React from "react";

interface ContentBlockProps {
  title: string;
  children: React.ReactNode;
}

const ContentBlock = ({ title, children }: ContentBlockProps) => {
  return (
    <div>
      <h2 className="px-6 sm:text-2xl pb-2 font-bold">{title}</h2>
      {children}
    </div>
  );
};

export default ContentBlock;
