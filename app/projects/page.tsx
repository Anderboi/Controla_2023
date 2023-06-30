import getProjects from "@/actions/getProjects";
import ContainerBox from "@/components/common/ContainerBox";
import Header from "@/components/common/Header";
import React from "react";
import ProjectsGallery from './components/ProjectsGallery';

export const revalidate = 0;

const ProjectsPage = async () => {
  const projects = await getProjects();

  return (
    <article className="flex flex-col gap-y-2 h-full">
      {/* //TODO: придумать решение по переносу header в layout */}
      <Header title="Проекты" />
      <ContainerBox classname="px-8 py-8 h-full">
          <ProjectsGallery projects={projects} />
      </ContainerBox>
    </article>
  );
};

export default ProjectsPage;
