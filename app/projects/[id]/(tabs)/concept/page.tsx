import React from "react";
import ContentBlock from "@/components/common/ContentBlock";
import GallaryDataCard from "@/components/common/cards/GalleryDataCard";
import InfoDataGrid from "@/components/common/grids/InfoDataGrid";
import ChevronRightIcon from "@/components/common/icons/ChevronRightIcon";
import AddIcon from "@/components/common/icons/AddIcon";
import RangeSlider from '@/components/common/inputs/RangeSlider';

const Concept = () => {
  return (
    <>
      <RangeSlider
        max={100000000}
        min={100000}
        step={10000}
        initMax={25000000}
        initMin={15000000}
      />
      <ContentBlock title="Планировка">
        <InfoDataGrid>
          <GallaryDataCard
            size="md"
            type="outlined"
            illustration={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-[30px] w-[30px] sm:h-12 sm:w-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
            }
            actionIcon={<AddIcon className="text-secondary-text-dark" />}
          >
            <span className="sm:text-secondary-text-dark">Добавить</span>
          </GallaryDataCard>
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
            type="outlined"
            illustration={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-[30px] w-[30px] sm:h-12 sm:w-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
            }
            actionIcon={<AddIcon className="text-secondary-text-dark" />}
          >
            <span className="sm:text-secondary-text-dark">Добавить</span>
          </GallaryDataCard>
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
            type="outlined"
            illustration={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-[30px] w-[30px] sm:h-12 sm:w-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
            }
            actionIcon={<AddIcon className="text-secondary-text-dark" />}
          >
            <span className="sm:text-secondary-text-dark">Добавить</span>
          </GallaryDataCard>
          <GallaryDataCard
            size="md"
            illustration={101}
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
