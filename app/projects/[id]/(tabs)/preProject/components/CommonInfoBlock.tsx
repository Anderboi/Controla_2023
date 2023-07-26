import React from "react";
import ContainerBox from "@/components/common/ContainerBox";
import ContentBlock from "@/components/common/ContentBlock";
import InfoBlock from "@/components/feature/infoblock/InfoBlock";

import getProjectInfo from "@/actions/getProjectInfo";

import { Database } from "@/types/supabase";

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
            py-1
            bg-elevated-1-bg-dark
            text-primary-text-dark
            divide-y-[0.5px]
            "
        >
          <InfoBlock
            label="Адрес: "
            body={
              <>
                <span className="text-primary-text-dark">
                  {project.address_street}
                </span>
                <br />
                <span className="text-sm">{`${project.address_country}, ${project.address_city}`}</span>
              </>
            }
          />
          <InfoBlock
            label="Площадь объекта: "
            body={
              <>
                <span className="text-3xl font-black text-primary-text-dark">
                  {project.area}
                </span>
                <span className="text-sm"> кв.м.</span>
              </>
            }
          />
          <InfoBlock
            label="Назначение объекта: "
            body={projectInfo?.purpose || ""}
          />
          <InfoBlock
            label="Этажность: "
            body={
              <>
                <span className="text-3xl font-black text-primary-text-dark">
                  {projectInfo?.storeys || "1"}
                </span>
                <span className="text-sm">{" этаж"}</span>
              </>
            }
          />
          <InfoBlock
            label="Количество единовременно проживающих: "
            body={
              <>
                <span className="text-3xl font-black text-primary-text-dark">
                  {projectInfo?.residing || "1"}
                </span>
                <span className="text-sm">{" человека"}</span>
              </>
            } //TODO: окончание фразы от числа добавить
          />
        </ContainerBox>
      </ContentBlock>
    </>
  );
};

export default CommonInfoBlock;
