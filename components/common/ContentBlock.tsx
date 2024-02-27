"use client";

import ContainerBox from "./ContainerBox";

interface ContentBlockProps {
  title: string;
  children: React.ReactNode;
}

const ContentBlock = ({ title, children }: ContentBlockProps) => {
  return (
    <ContainerBox className="transition ease-in-out delay-50">
      <h2
        className="
          text-start
          text-base
          px-4
          sm:px-6
          "
      >
        {title}
      </h2>
      {children}
    </ContainerBox>
  );
};

export default ContentBlock;
