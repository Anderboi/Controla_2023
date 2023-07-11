import React from "react";
import getCurrntProject from "@/actions/getCurrentProject";
import Header from "@/components/common/Header";
import ContainerBox from "@/components/common/ContainerBox";
import TabsBar from '@/components/common/TabsBar';

export const revalidate = 0;

//TODO: настроить получение данных по проекту
const ProjectPage = async ({ params, children }: { params: { id: number }, children:React.ReactNode }) => {
  const project = await getCurrntProject(+params.id);

  return (
    <section className="flex flex-col gap-y-2 w-full h-screen overflow-y-auto rounded-lg no-scrollbar">
      <Header
        title={project.address_street || ""}
        subtitle={project.address_country || ""}
        image={project.cover_img}
        addressDetails={project?.address_city || ""}
        startDate={project.created_at || ""}
      />
      <ContainerBox classname="h-fit">
        <TabsBar/>
        <div className='flex flex-col gap-y-6'>{children}</div>
      </ContainerBox>
    </section>
  );
};

export default ProjectPage;
