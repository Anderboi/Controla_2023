import React from "react";
import ContentBlock from "@/components/common/ContentBlock";
import GallaryDataCard from "@/components/common/cards/GalleryDataCard";
import InfoDataGrid from "@/components/common/grids/InfoDataGrid";
import ProjectSheetBlock from "./components/ProjectSheetBlock";
import getProjectSchemaData from "@/lib/actions/getProjectSchemaData";
import { ChevronRight } from "lucide-react";

export const revalidate = 0;

const Schemas = async ({ params }: { params: { id: number } }) => {
  const projectId = params.id;
  const projectTasks = await getProjectSchemaData(projectId);

  return (
    <>
      {/* //? Схемы */}
      <ContentBlock title="Схемы">
        <article className="space-y-4">
          <ProjectSheetBlock
            data={projectTasks.filter((item) => item.sheet === "Обмерный план")}
          />
          <ProjectSheetBlock
            data={projectTasks.filter(
              (item) => item.sheet === "Схема демонтажа конструкций"
            )}
          />
          <ProjectSheetBlock
            data={projectTasks.filter(
              (item) => item.sheet === "Кладочный план"
            )}
          />
          <ProjectSheetBlock
            data={projectTasks.filter(
              (item) => item.sheet === "Схема расстановки мебели и оборудования"
            )}
          />
          <ProjectSheetBlock
            data={projectTasks.filter((item) => item.sheet === "План потолков")}
          />
          <ProjectSheetBlock
            data={projectTasks.filter(
              (item) => item.sheet === "Схема размещения напольного покрытия"
            )}
          />
          <ProjectSheetBlock
            data={projectTasks.filter(
              (item) => item.sheet === "Схема размещения контура тёплого пола"
            )}
          />
          <ProjectSheetBlock
            data={projectTasks.filter(
              (item) =>
                item.sheet ===
                "Схема размещения потолочных осветительных приборов"
            )}
          />
          <ProjectSheetBlock
            data={projectTasks.filter(
              (item) => item.sheet === "Схема электрокоммуникаций с привязками"
            )}
          />
          <ProjectSheetBlock
            data={projectTasks.filter(
              (item) => item.sheet === "Схема привязки электровыводов"
            )}
          />
          <ProjectSheetBlock
            data={projectTasks.filter(
              (item) => item.sheet === "Схема управления освещением"
            )}
          />
          <ProjectSheetBlock
            data={projectTasks.filter(
              (item) =>
                item.sheet ===
                "Схема расположения приборов кондиционирования и вентиляции"
            )}
          />
          <ProjectSheetBlock
            data={projectTasks.filter(
              (item) =>
                item.sheet === "Схема расположения сантехнического оборудования"
            )}
          />
          <ProjectSheetBlock
            data={projectTasks.filter(
              (item) => item.sheet === "Схема расположения межкомнатных дверей"
            )}
          />
          <ProjectSheetBlock
            data={projectTasks.filter(
              (item) => item.sheet === "Схема маркировки разверток"
            )}
          />
          <ProjectSheetBlock
            data={projectTasks.filter(
              (item) => item.sheet === "Развертки помещений"
            )}
          />
        </article>
      </ContentBlock>
      {/* //? Спецификации */}
      <ContentBlock title="Спецификации">
        <InfoDataGrid>
          <GallaryDataCard
            size="md"
            illustration="01"
            actionIcon={<ChevronRight className="text-secondary-text-dark" />}
          >
            Спецификация мебели
          </GallaryDataCard>
          <GallaryDataCard
            size="md"
            illustration="02"
            actionIcon={<ChevronRight className="text-secondary-text-dark" />}
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
            actionIcon={<ChevronRight className="text-secondary-text-dark" />}
          >
            Примыкание потолка
          </GallaryDataCard>
        </InfoDataGrid>
      </ContentBlock>
    </>
  );
};

export default Schemas;
