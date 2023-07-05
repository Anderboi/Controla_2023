import getPremises from "@/actions/getPremises";
import getProjectInfo from "@/actions/getProjectInfo";
import ContainerBox from "@/components/common/ContainerBox";
import InfoBlock from "@/components/feature/infoblock/InfoBlock";
import { Database } from "@/types/supabase";
import React from "react";

interface BlockProps {
  project: Database["public"]["Tables"]["projects"]["Row"];
}

const CommonInfoBlock = async ({ project }: BlockProps) => {
  const projectInfo = await getProjectInfo(project.project_id);
  const premises = await getPremises(project.project_id);

  return (
    <ContainerBox classname="bg-elevated-1-bg-dark flex flex-col gap-y-1 text-primary-text-dark">
      <h2 className="sm:text-xl pb-2 font-bold">Общая информация по проекту</h2>
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
      <InfoBlock label="Этажность: " body={`${projectInfo?.storeys} этаж`} />
      <InfoBlock
        label="Количество единовременно проживающих: "
        body={`${projectInfo?.residing} человека`} //TODO: окончание фразы от числа добавить
      />
      <div
        className="
          flex 
          flex-col 
          sm:flex-row 
          justify-between 
          gap-y-4 
          sm:items-end 
          w-full 
          border-t-[0.5px] 
          border-primary-border-dark 
          py-2
          "
      >
        <span>Перечень помещений </span>
        <span>{`${premises} помещений`}</span>
      </div>
    </ContainerBox>
  );
};

export default CommonInfoBlock;
