import React from "react";
import getCurrntProject from "@/actions/getCurrentProject";
import Header from "@/components/common/Header";
import ContainerBox from "@/components/common/ContainerBox";
import Link from "next/link";
import Chips from "@/components/common/inputs/Chips";

export const revalidate = 0;

//TODO: настроить получение данных по проекту
const ProjectPage = async ({ params }: { params: { id: number } }) => {
  const project = await getCurrntProject(+params.id);

  return (
    <section className="h-full flex flex-col gap-y-2 w-full">
      <Header
        title={project.address_street || ""}
        subtitle={project.address_country || ""}
        image={project.cover_img}
        addressDetails={project?.address_city || ""}
        startDate={project.created_at || ""}
      />
      {/* <Image alt='cover' src={project?.cover_img || ''} width={150} height={150}/> */}
      <ContainerBox classname="h-full w-full">
        <ul className="w-full flex gap-6 pb-6 items-center justify-start overflow-x-scroll no-scrollbar">
          <li>
            <Chips>Предпроектная стадия</Chips>
          </li>
          <li>
            <Chips>Эскизная стадия</Chips>
          </li>
          <li>
            <Chips>Рабочая стадия</Chips>
          </li>
          <li>
            <Chips>Комплектация</Chips>
          </li>
          <li>
            <Chips>Строительство</Chips>
          </li>
        </ul>
        <div>{project.address_city}</div>
      </ContainerBox>
    </section>
  );
};

export default ProjectPage;
