import React from "react";
import Header from "@/components/common/Header";
import ContainerBox from "@/components/common/ContainerBox";
import ProjectsGallery from "./components/ProjectsGallery";
import SearchInput from "@/components/common/inputs/SearchInput";
import getProjectsByTitle from "@/actions/getProjectsByTitle";

export const revalidate = 0;

interface SearchProps {
  searchParams: {
    title: string;
  };
}

const ProjectsPage = async ({ searchParams }: SearchProps) => {
  const projects = await getProjectsByTitle(searchParams.title);

  return (
    <>
      {/* //TODO: придумать решение по переносу header в layout */}
      <Header title="Проекты" />
      <ContainerBox
        classname="
        overflow-y-auto
        no-scrollbar
        h-full
        flex
        flex-col
        gap-y-6
        "
      >
        <SearchInput />
        <ProjectsGallery projects={projects} />
      </ContainerBox>
    </>
  );
};

export default ProjectsPage;
