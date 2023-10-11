import React from "react";
import ContainerBox from "@/components/common/ContainerBox";
import ContentBlock from "@/components/common/ContentBlock";
import GallaryGrid from "@/components/common/grids/GallaryGrid";
import getMaterialData from "@/actions/getMaterialData";

const DataPage = async () => {
  const materialData = await getMaterialData();

  return (
    <>
      <ContentBlock title="Мебель">
        <ContainerBox
          className="
            flex
            flex-col
            divide-y-[0.5px]
            bg-elevated-1-bg-dark
            //!py-0
            text-primary-text-dark
            "
        >
          <GallaryGrid>
            {materialData.map((item) => (
              <div
                className="
                  border 
                  border-primary-border-dark 
                  rounded-lg 
                  p-4 
                  flex 
                  flex-col
                  justify-between
                  "
              >
                <span className='underline text-xl font-black'>{item.name}</span>
                <div
                  className="
                  flex 
                  flex-col
                  items-end
                  "
                >
                  <span className="text-sm">{item.price_range}</span>
                  <span className="text-xs text-secondary-text-dark">
                    {item.phone}
                  </span>
                  <span className="text-sm">
                    <a href={item.url || ""}>link</a>
                  </span>
                </div>
              </div>
            ))}
          </GallaryGrid>
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

export default DataPage;
