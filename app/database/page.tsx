import ContainerBox from "@/components/common/ContainerBox";
import ContentBlock from "@/components/common/ContentBlock";
import ProjectCard from "@/components/common/cards/ProjectCard";
import GallaryGrid from "@/components/common/grids/GallaryGrid";
import React from "react";

const page = () => {
  return (
    <>
      <ContentBlock title="Мебель">
        <ContainerBox
          className="
            flex
            flex-col
            divide-y-[0.5px]
            bg-elevated-1-bg-dark
            !py-0
            text-primary-text-dark
            "
        >
          <GallaryGrid>sddfsdfsdgdfgdf</GallaryGrid>
        </ContainerBox>
      </ContentBlock>
      <ContentBlock title="Свет">
        <ContainerBox
          className="
            flex
            flex-col
            divide-y-[0.5px]
            bg-elevated-1-bg-dark
            !py-0
            text-primary-text-dark
            "
        >
          <GallaryGrid>sddfsdfsdgdfgdf</GallaryGrid>
        </ContainerBox>
      </ContentBlock>
      <ContentBlock title="Сантехника">
        <ContainerBox
          className="
            flex
            flex-col
            divide-y-[0.5px]
            bg-elevated-1-bg-dark
            !py-0
            text-primary-text-dark
            "
        >
          <GallaryGrid>
            <div
              className="
                group
                relative
                flex
                cursor-pointer
                flex-col
                items-center
                justify-center
                gap-y-3
                overflow-hidden
                sm:rounded-lg
                sm:bg-elevated-1-bg-dark
                sm:p-4
                sm:hover:bg-elevated-2-bg-dark
                md:gap-y-4
                "
            >
              S
            </div>
          </GallaryGrid>
        </ContainerBox>
      </ContentBlock>
    </>
  );
};

export default page;
