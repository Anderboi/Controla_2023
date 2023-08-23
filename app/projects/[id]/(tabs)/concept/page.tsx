import React from "react";
import ContentBlock from "@/components/common/ContentBlock";
import GallaryDataCard from "@/components/common/cards/GalleryDataCard";
import InfoDataGrid from "@/components/common/grids/InfoDataGrid";
import ChevronRightIcon from "@/components/common/icons/ChevronRightIcon";

const Concept = () => {
  return (
    <>
      <ContentBlock title="Планировка">
        <InfoDataGrid>
          <GallaryDataCard
            size="md"
            illustration="1"
            actionIcon={
              <ChevronRightIcon
                type="right"
                className="text-secondary-text-dark"
              />
            }
          >
            Вариант
          </GallaryDataCard>
          <GallaryDataCard
            size="md"
            illustration="2"
            actionIcon={
              <ChevronRightIcon
                type="right"
                className="text-secondary-text-dark"
              />
            }
          >
            Вариант
          </GallaryDataCard>
        </InfoDataGrid>
      </ContentBlock>
      <ContentBlock title="Аналоги / Коллаж">
        <InfoDataGrid>
          <GallaryDataCard
            size="md"
            illustration="1"
            actionIcon={
              <ChevronRightIcon
                type="right"
                className="text-secondary-text-dark"
              />
            }
          >
            Вариант
          </GallaryDataCard>
          <GallaryDataCard
            size="md"
            illustration="2"
            actionIcon={
              <ChevronRightIcon
                type="right"
                className="text-secondary-text-dark"
              />
            }
          >
            Вариант
          </GallaryDataCard>
        </InfoDataGrid>
      </ContentBlock>
      <ContentBlock title="Визуализация">
        <InfoDataGrid>
          <GallaryDataCard
            size="md"
            illustration={
              101
            }
            actionIcon={
              <ChevronRightIcon
                type="right"
                className="text-secondary-text-dark"
              />
            }
          >
            Прихожая
          </GallaryDataCard>
          <GallaryDataCard
            size="md"
            illustration="102"
            actionIcon={
              <ChevronRightIcon
                type="right"
                className="text-secondary-text-dark"
              />
            }
          >
            Гостиная
          </GallaryDataCard>
        </InfoDataGrid>
      </ContentBlock>
    </>
  );
};

export default Concept;
