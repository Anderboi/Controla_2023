import React from "react";
import ContainerBox from "@/components/common/ContainerBox";
import ContentBlock from "@/components/common/ContentBlock";

import getProjectInfo from "@/actions/getProjectInfo";

import { Database } from "@/types/supabase";
import InfoItem from "@/components/common/InfoBlock/InfoItem";

interface BlockProps {
  project: Database["public"]["Tables"]["projects"]["Row"];
}

const CommonInfoBlock = async ({ project }: BlockProps) => {
  const projectInfo = await getProjectInfo(project.project_id);

  return (
    <>
      <ContentBlock title="Общая информация">
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
          <dl className="divide-y divide-primary-border-dark">
            <InfoItem
              title="Адрес"
              content={`${project.address_country}, ${project.address_city}, ${project.address_street}`}
            />
            <InfoItem
              title="Площадь объекта"
              content={`${project.area} кв.м.`}
            />
            <InfoItem
              title="Назначение объекта"
              content={projectInfo.purpose || "Жилое"}
            />
            <InfoItem
              title="Этажность"
              content={`${projectInfo.storeys} этаж`}
            />
            <InfoItem
              title="Количество единовременно проживающих"
              content={`${projectInfo.residing} человека`}
            />
          </dl>
        </ContainerBox>
      </ContentBlock>
    </>
  );
};

export default CommonInfoBlock;
