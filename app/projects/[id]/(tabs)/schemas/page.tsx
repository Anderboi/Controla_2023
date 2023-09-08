import React from "react";
import ContentBlock from "@/components/common/ContentBlock";
import GallaryDataCard from "@/components/common/cards/GalleryDataCard";
import InfoDataGrid from "@/components/common/grids/InfoDataGrid";
import ChevronRightIcon from "@/components/common/icons/ChevronRightIcon";
import Accordion from "@/components/common/InfoBlock/Accordion";

const Schemas = () => {
  return (
    <>
      <ContentBlock title="Схемы">
        <article className="space-y-4">
          <Accordion title="Обмерный план">
            <section className="space-x-4 flex items-center justify-between">
              <label htmlFor="01">sdasd</label>
              <input type="checkbox" name="01" id="01" />
            </section>
            <section className="space-x-4 flex items-center justify-between">
              <label htmlFor="02">sdasd</label>
              <input type="checkbox" name="02" id="02" />
            </section>
            <section className="space-x-4 flex items-center justify-between">
              <label htmlFor="03">sdasd</label>
              <input type="checkbox" name="03" id="03" />
            </section>
            <section className="space-x-4 flex items-center justify-between">
              <label htmlFor="04">sdasd</label>
              <input type="checkbox" name="04" id="04" />
            </section>
          </Accordion>
          <Accordion title="Схема демонтажа конструкций">
            <section className="space-x-4 flex items-center justify-between">
              <label htmlFor="01">sdasd</label>
              <input type="checkbox" name="01" id="01" />
            </section>
          </Accordion>
          <Accordion title="Кладочный план">
            <section className="space-x-4 flex items-center justify-between">
              <label htmlFor="01">sdasd</label>
              <input type="checkbox" name="01" id="01" />
            </section>
          </Accordion>
          <Accordion title="Схема расстановки мебели и оборудования">
            <section className="space-x-4 flex items-center justify-between">
              <label htmlFor="01">sdasd</label>
              <input type="checkbox" name="01" id="01" />
            </section>
          </Accordion>
          <Accordion title="План потолков">
            <section className="space-x-4 flex items-center justify-between">
              <label htmlFor="01">sdasd</label>
              <input type="checkbox" name="01" id="01" />
            </section>
          </Accordion>
          <Accordion title="Схема размещения напольного покрытия">
            <section className="space-x-4 flex items-center justify-between">
              <label htmlFor="01">sdasd</label>
              <input type="checkbox" name="01" id="01" />
            </section>
          </Accordion>
          <Accordion title="Схема размещения контура тёплого пола">
            <section className="space-x-4 flex items-center justify-between">
              <label htmlFor="01">sdasd</label>
              <input type="checkbox" name="01" id="01" />
            </section>
          </Accordion>
          <Accordion title="Схема размещения потолочных осветительных приборов">
            <section className="space-x-4 flex items-center justify-between">
              <label htmlFor="01">sdasd</label>
              <input type="checkbox" name="01" id="01" />
            </section>
          </Accordion>
          <Accordion title="Схема электрокоммуникаций с привязками">
            <section className="space-x-4 flex items-center justify-between">
              <label htmlFor="01">sdasd</label>
              <input type="checkbox" name="01" id="01" />
            </section>
          </Accordion>
          <Accordion title="Схема привязки электровыводов">
            <section className="space-x-4 flex items-center justify-between">
              <label htmlFor="01">sdasd</label>
              <input type="checkbox" name="01" id="01" />
            </section>
          </Accordion>
          <Accordion title="Схема управления освещением">
            <section className="space-x-4 flex items-center justify-between">
              <label htmlFor="01">sdasd</label>
              <input type="checkbox" name="01" id="01" />
            </section>
          </Accordion>
          <Accordion title="Схема расположения приборов кондиционирования и вентиляции">
            <section className="space-x-4 flex items-center justify-between">
              <label htmlFor="01">sdasd</label>
              <input type="checkbox" name="01" id="01" />
            </section>
          </Accordion>
          <Accordion title="Схема расположения сантехнического оборудования">
            <section className="space-x-4 flex items-center justify-between">
              <label htmlFor="01">sdasd</label>
              <input type="checkbox" name="01" id="01" />
            </section>
          </Accordion>
          <Accordion title="Схема расположения межкомнатных дверей">
            <section className="space-x-4 flex items-center justify-between">
              <label htmlFor="01">sdasd</label>
              <input type="checkbox" name="01" id="01" />
            </section>
          </Accordion>
          <Accordion title="Схема маркировки разверток">
            <section className="space-x-4 flex items-center justify-between">
              <label htmlFor="01">sdasd</label>
              <input type="checkbox" name="01" id="01" />
            </section>
          </Accordion>
          <Accordion title="Развертки помещений">
            <section className="space-x-4 flex items-center justify-between">
              <label htmlFor="01">sdasd</label>
              <input type="checkbox" name="01" id="01" />
            </section>
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
