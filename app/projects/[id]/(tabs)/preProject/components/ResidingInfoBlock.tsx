import React from "react";
import ContentBlock from "@/components/common/ContentBlock";
import ResidingGallary from "./ResidingGallary";

interface ResidingInfoBlockProps {
  projectId: number;
}

const ResidingInfoBlock = ({ projectId }: ResidingInfoBlockProps) => {

  return (
    <>
      <ContentBlock title="Информация о проживающих">
        <div
          className="
            sm:inline-flex
            //flex 
            //flex-col 
            //sm:flex-row 
            
            sm:gap-3
            overflow-x-auto 
            no-scrollbar 
            bg-elevated-1-bg-dark 
            sm:bg-transparent 
            max-sm:px-4
            rounded-lg
            sm:divide-none
            divide-y
            divide-primary-border-dark
            "
        >
          <ResidingGallary />
        </div>
      </ContentBlock>
    </>
  );
};

export default ResidingInfoBlock;
