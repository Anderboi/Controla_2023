import React from "react";
import Header from "@/components/feature/header/Header";
import getCurrntProject from "@/lib/actions/getCurrentProject";

export const revalidate = 0;

//TODO: настроить получение данных по проекту
const ProjectPage = async ({
  params,
  children,
}: {
  params: { id: number };
  children: React.ReactNode;
}) => {
  const project = await getCurrntProject(+params.id);

  return (
    <div className="flex //h-[calc(100dvh-16px)]">
      <section
        className="
          flex
          w-full
          flex-col
          gap-y-2
          //overflow-y-auto
          rounded-lg
          no-scrollbar
          max-sm:mb-2
          "
      >
        <Header
          title={project.address_street || ""}
          addressDetails={project?.address_city || ""}
        />
        <div className="flex flex-col gap-y-2">{children}</div>
      </section>
    </div>
  );
};

export default ProjectPage;
