import React from "react";
import Header from "@/components/feature/header/Header";
import ContainerBox from "@/components/common/ContainerBox";
import ProjectsGallery from "./components/ProjectsGallery";
import SearchInput from "@/components/common/inputs/SearchInput";
import getProjectsByTitle from "@/actions/getProjectsByTitle";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AddProjectButton from "@/components/feature/header/AddProjectButton";

export const revalidate = 0;

interface SearchProps {
  searchParams: {
    title: string;
  };
}

const ProjectsPage = async ({ searchParams }: SearchProps) => {
  const projects = await getProjectsByTitle(searchParams.title);
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/");
  }

  return (
    <>
      {/* //TODO: придумать решение по переносу header в layout */}
      <Header title="Проекты" adjustableButton={<AddProjectButton />} />
      <ContainerBox
        className="
          //gap-y-6
          relative
          flex
          h-full
          flex-col
          overflow-y-auto
          !p-0
          no-scrollbar
        "
      >
        <div
          className="
            sticky
            left-0
            top-0
            z-20
            w-full
            rounded-t-lg
            bg-secondary-bg-dark/80
            p-4
            backdrop-blur-md
            "
        >
          <SearchInput />
        </div>
        <div className="px-4">
          <ProjectsGallery projects={projects} />
        </div>
      </ContainerBox>
    </>
  );
};

export default ProjectsPage;
