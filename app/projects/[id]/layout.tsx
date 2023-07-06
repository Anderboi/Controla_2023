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
        <TabsBar/>
        <div className='flex flex-col gap-y-6'>{children}</div>
      </ContainerBox>
    </section>
  );
};

export default ProjectPage;
