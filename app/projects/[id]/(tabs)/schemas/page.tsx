import React from "react";
import ContentBlock from "@/components/common/ContentBlock";
import GallaryDataCard from "@/components/common/cards/GalleryDataCard";
import InfoDataGrid from "@/components/common/grids/InfoDataGrid";
import ChevronRightIcon from "@/components/common/icons/ChevronRightIcon";
import Accordion from "@/components/common/InfoBlock/Accordion";
import CheckboxGroup from "@/components/common/inputs/CheckboxGroup";
import DimmensionsBlock from './components/DimmensionsBlock';
import DemolitionBlock from './components/DemolitionBlock';

const Schemas = () => {
  return (
    <>
      <ContentBlock title="Схемы">
        <article className="space-y-4">
          <DimmensionsBlock/>
          <DemolitionBlock/>
          <Accordion title="Кладочный план">
            <CheckboxGroup name="0021">Demolition 01</CheckboxGroup>
          </Accordion>
          <Accordion title="Схема расстановки мебели и оборудования">
            <CheckboxGroup name="0021">Demolition 01</CheckboxGroup>
          </Accordion>
          <Accordion title="План потолков">
            <CheckboxGroup name="0021">Demolition 01</CheckboxGroup>
          </Accordion>
          <Accordion title="Схема размещения напольного покрытия">
            <CheckboxGroup name="0021">Demolition 01</CheckboxGroup>
          </Accordion>
          <Accordion title="Схема размещения контура тёплого пола">
            <CheckboxGroup name="0021">Demolition 01</CheckboxGroup>
          </Accordion>
          <Accordion title="Схема размещения потолочных осветительных приборов">
            <CheckboxGroup name="0021">Demolition 01</CheckboxGroup>
          </Accordion>
          <Accordion title="Схема электрокоммуникаций с привязками">
            <CheckboxGroup name="0021">Demolition 01</CheckboxGroup>
          </Accordion>
          <Accordion title="Схема привязки электровыводов">
            <CheckboxGroup name="0021">Demolition 01</CheckboxGroup>
          </Accordion>
          <Accordion title="Схема управления освещением">
            <CheckboxGroup name="0021">Demolition 01</CheckboxGroup>
          </Accordion>
          <Accordion title="Схема расположения приборов кондиционирования и вентиляции">
            <CheckboxGroup name="0021">Demolition 01</CheckboxGroup>
          </Accordion>
          <Accordion title="Схема расположения сантехнического оборудования">
            <CheckboxGroup name="0021">Demolition 01</CheckboxGroup>
          </Accordion>
          <Accordion title="Схема расположения межкомнатных дверей">
            <CheckboxGroup name="0021">Demolition 01</CheckboxGroup>
          </Accordion>
          <Accordion title="Схема маркировки разверток">
            <CheckboxGroup name="0021">Demolition 01</CheckboxGroup>
          </Accordion>
          <Accordion title="Развертки помещений">
            <CheckboxGroup name="0021">Demolition 01</CheckboxGroup>
          </Accordion>
        </article>
      </ContentBlock>

      {/* //? Спецификации */}
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
            illustration="01"
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
};

export default Schemas;
