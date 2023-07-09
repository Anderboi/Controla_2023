import getProjects from "@/actions/getProjects";
import ContainerBox from "@/components/common/ContainerBox";
import Header from "@/components/common/Header";
import React from "react";
import ProjectsGallery from './components/ProjectsGallery';

export const revalidate = 0;

const ProjectsPage = async () => {
  const projects = await getProjects();

  return (
    <>
      {/* //TODO: придумать решение по переносу header в layout */}
      <Header title="Проекты" />
      <ContainerBox classname="
        overflow-y-auto
        no-scrollbar
        ">
          <ProjectsGallery projects={projects} />
          
      </ContainerBox>
    </>
  );
};

export default ProjectsPage;
