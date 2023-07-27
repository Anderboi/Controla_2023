import React from "react";
import getProjectInfo from "@/actions/getProjectInfo";
import ContentBlock from "@/components/common/ContentBlock";
import { VscPersonAdd, VscPerson } from "react-icons/vsc";
import GallaryDataCard from "@/components/common/cards/GallaryDataCard";
import AddIcon from "@/components/common/icons/AddIcon";
import ChevronRightIcon from "@/components/common/icons/ChevronRightIcon";

interface ResidingInfoBlockProps {
  projectId: number;
}

const ResidingInfoBlock = async ({ projectId }: ResidingInfoBlockProps) => {
  const porojectInfo = await getProjectInfo(projectId);

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
          {/* //! + Add */}
          <GallaryDataCard
            size="md"
            className="bg-transparent sm:border border-dashed border-primary-border-dark"
            illustration={<VscPersonAdd className="" />}
            actionIcon={<AddIcon />}
          >
            <span>Добавить</span>
          </GallaryDataCard>

          <GallaryDataCard
            size="md"
            illustration={<VscPerson className="text-accent-dark" />}
            actionIcon={<ChevronRightIcon />}
          >
            <>
              <span>38 лет</span>
              <span>жен.</span>
            </>
          </GallaryDataCard>
        </div>
      </ContentBlock>
    </>
  );
};

export default ResidingInfoBlock;
