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

      <SearchInput urlRoute="/projects"
      // className="sticky top-[80px] z-20" 
      />

      <ContainerBox
        className="
          relative
          flex
          h-fit
          flex-col
          //overflow-y-hidden
          no-scrollbar
          gap-6
          max-sm:mb-2
          "
      >
        <ProjectsGallery projects={projects} />
      </ContainerBox>
    </>
  );
};

export default ProjectsPage;
