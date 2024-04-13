import React from "react";
import ContentBlock from "@/components/common/ContentBlock";

import getProjectInfo from "@/lib/actions/getProjectInfo";

import { Database } from "@/types/supabase";
import InfoItem from "@/components/common/InfoBlock/InfoItem";
import {
  BoxSelect,
  CalendarFold,
  Hash,
  Home,
  Layers3,
  Type,
  Users,
} from "lucide-react";

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
            key={"contract_number"}
            icon={<Hash />}
            title="Номер договора"
            content={`Номер договора`}
          />
          <InfoItem
            key={"address"}
            icon={<Home />}
            title="Адрес"
            content={`${project.address_country}, ${project.address_city}, ${project.address_street}`}
          />
          <InfoItem
            key={"area"}
            icon={<BoxSelect />}
            title="Площадь объекта"
            content={`${project.area} кв.м.`}
          />
          <InfoItem
            key={"purpose"}
            icon={<Type />}
            title="Назначение объекта"
            content={projectInfo.purpose || "Жилое"}
          />
          <InfoItem
            key={"storey"}
            icon={<Layers3 />}
            title="Этажность"
            content={`${projectInfo.storeys} этаж`}
          />

          <div className="grid-cols-2 max-sm:grid">
            <InfoItem
              key={"start_date"}
              icon={<CalendarFold />}
              title="Дата начала"
              content={`00/00/0000`}
            />
            <InfoItem
              key={"end_date"}
              icon={<CalendarFold />}
              title="Дата окнчания"
              content={`00/00/0000`}
            />
          </div>
        </dl>
      </ContentBlock>
    </>
  );
};

export default CommonInfoBlock;
