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
    <section
      className="
          flex
          w-full
          flex-col
          gap-y-2
          rounded-lg
          no-scrollbar
          max-sm:mb-2
          "
    >
      <Header
        title={project.address_street || ""}
        addressDetails={project?.address_city || ""}
      />
      <article className="flex flex-col gap-2">{children}</article>
    </section>
  );
};

export default ProjectPage;
