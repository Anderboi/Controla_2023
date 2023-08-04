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
            //flex
            //flex-col
            //sm:flex-row
            divide-y
            
            divide-primary-border-dark
            overflow-x-auto
            rounded-lg
            bg-elevated-1-bg-dark
            no-scrollbar
            max-sm:px-4
            sm:inline-flex
            sm:gap-3
            sm:divide-none
            sm:bg-transparent
            "
        >
          <ResidingGallary project_id={projectId} />
        </div>
      </ContentBlock>
    </>
  );
};

export default ResidingInfoBlock;
