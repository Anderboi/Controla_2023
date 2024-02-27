import Header from "@/components/feature/header/Header";
import ProjectsGallery from "./_components/ProjectsGallery";
import getProjectsByTitle from "@/lib/actions/getProjectsByTitle";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import ContainerBox from "@/components/common/ContainerBox";
import SearchInput from "@/components/common/inputs/SearchInput";
import AddProjectButton from "@/components/feature/header/AddProjectButton";

export const revalidate = 0;

interface SearchProps {
  searchParams: {
    title: string;
  };
}

const ProjectsPage = async ({ searchParams }: SearchProps) => {
  //TODO move getProjects to ProjectsGallary
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
      <Header title="Проекты" adjustableButton={<AddProjectButton />} />
      <ContainerBox
        className="
          relative
          flex
          h-full
          flex-col
          overflow-y-auto
          no-scrollbar
          gap-6
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
            bg-secondary-bg-light/80
            dark:bg-secondary-bg-dark/80
            
            backdrop-blur-md
            "
        >
          <SearchInput urlRoute="/projects" />
        </div>
        <ProjectsGallery projects={projects} />
      </ContainerBox>
    </>
  );
};

export default ProjectsPage;
