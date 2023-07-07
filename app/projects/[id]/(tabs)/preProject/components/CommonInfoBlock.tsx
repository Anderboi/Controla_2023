import getProjectInfo from "@/actions/getProjectInfo";
import ContainerBox from "@/components/common/ContainerBox";
import InfoBlock from "@/components/feature/infoblock/InfoBlock";
import { Database } from "@/types/supabase";
import React from "react";
import ContentBlock from "@/components/common/ContentBlock";

interface BlockProps {
  project: Database["public"]["Tables"]["projects"]["Row"];
}

const CommonInfoBlock = async ({ project }: BlockProps) => {
  const projectInfo = await getProjectInfo(project.project_id);

  return (
    <>
      <ContentBlock title="Общая информация по проекту">
        <ContainerBox classname="bg-elevated-1-bg-dark flex flex-col gap-y-1 text-primary-text-dark">
          <InfoBlock
            label="Адрес: "
            body={`${project.address_country}, ${project.address_city}, ${project.address_street}`}
          />
          <InfoBlock
            label="Площадь подлежащая проектированию: "
            body={`${project.area} кв.м.`}
          />
          <InfoBlock
            label="Назначение объекта: "
            body={projectInfo?.purpose || ""}
          />
          <InfoBlock
            label="Этажность: "
            body={
              projectInfo?.storeys ? `${projectInfo?.storeys} этаж` : "1 этаж"
            }
          />
          <InfoBlock
            label="Количество единовременно проживающих: "
            body={`${projectInfo?.residing} человека`} //TODO: окончание фразы от числа добавить
          />
        </ContainerBox>
      </ContentBlock>
    </>
  );
};

export default CommonInfoBlock;
