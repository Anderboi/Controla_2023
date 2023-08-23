import React from 'react'
import ContentBlock from '@/components/common/ContentBlock';
import GallaryDataCard from '@/components/common/cards/GalleryDataCard';
import InfoDataGrid from '@/components/common/grids/InfoDataGrid';
import ChevronRightIcon from '@/components/common/icons/ChevronRightIcon';

const Schemas = () => {
  return (
    <>
      <ContentBlock title="Схемы">
        <InfoDataGrid>
          <GallaryDataCard
            size="md"
            illustration="01"
            actionIcon={
              <ChevronRightIcon
                type="right"
                className="text-secondary-text-dark"
              />
            }
          >
            Обмерный план
          </GallaryDataCard>
          <GallaryDataCard
            size="md"
            illustration="02"
            actionIcon={
              <ChevronRightIcon
                type="right"
                className="text-secondary-text-dark"
              />
            }
          >
            План демонтажа
          </GallaryDataCard>
        </InfoDataGrid>
      </ContentBlock>
      <ContentBlock title="Спецификации">
        <InfoDataGrid>
          <GallaryDataCard
            size="md"
            illustration="01"
            actionIcon={
              <ChevronRightIcon
                type="right"
                className="text-secondary-text-dark"
              />
            }
          >
            Спецификация мебели
          </GallaryDataCard>
          <GallaryDataCard
            size="md"
            illustration="02"
            actionIcon={
              <ChevronRightIcon
                type="right"
                className="text-secondary-text-dark"
              />
            }
          >
            Спецификация светильников
          </GallaryDataCard>
        </InfoDataGrid>
      </ContentBlock>
      <ContentBlock title="Узлы и детали">
        <InfoDataGrid>
          <GallaryDataCard
            size="md"
            illustration='01'
            actionIcon={
              <ChevronRightIcon
                type="right"
                className="text-secondary-text-dark"
              />
            }
          >
            Примыкание потолка
          </GallaryDataCard>
          
        </InfoDataGrid>
      </ContentBlock>
    </>
  );
}

export default Schemas