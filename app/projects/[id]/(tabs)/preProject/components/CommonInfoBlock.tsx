import React from "react";
import ContentBlock from "@/components/common/ContentBlock";

import getProjectInfo from "@/lib/actions/getProjectInfo";

import { Database } from "@/types/supabase";
import InfoItem from "@/components/common/InfoBlock/InfoItem";

interface BlockProps {
  project: Database["public"]["Tables"]["projects"]["Row"];
}

export const revalidate = 0;

const CommonInfoBlock = async ({ project }: BlockProps) => {
  const projectInfo = await getProjectInfo(project.project_id);

  return (
    <>
      <ContentBlock title="Общая информация">
        <dl>
          <InfoItem
            key={"address"}
            title="Адрес"
            content={`${project.address_country}, ${project.address_city}, ${project.address_street}`}
          />
          <InfoItem
            key={"area"}
            title="Площадь объекта"
            content={`${project.area} кв.м.`}
          />
          <InfoItem
            key={"purpose"}
            title="Назначение объекта"
            content={projectInfo.purpose || "Жилое"}
          />
          <InfoItem
            key={"storey"}
            title="Этажность"
            content={`${projectInfo.storeys} этаж`}
          />
          <InfoItem
            key={"residing"}
            title="Количество единовременно проживающих"
            content={`${projectInfo.residing} человека`}
          />
        </dl>
      </ContentBlock>
    </>
  );
};

export default CommonInfoBlock;
