import React from "react";
import getCurrntProject from "@/actions/getCurrentProject";
import Header from "@/components/feature/header/Header";
import ContainerBox from "@/components/common/ContainerBox";
import TabsBar from "@/components/common/TabsBar";
import ContentBlock from "@/components/common/ContentBlock";
import Image from "next/image";

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
    <div className="flex h-[calc(100dvh-16px)]">
      <section
        className="
          flex
          
          w-full
          flex-col
          gap-y-2
          overflow-y-auto
          rounded-lg 
          no-scrollbar
          "
      >
        <Header
          title={project.address_street || ""}
          subtitle={project.address_country || ""}
          image={project.cover_img}
          addressDetails={project?.address_city || ""}
          startDate={project.created_at || ""}
        />

        <ContainerBox className="h-fit">
          <TabsBar />
          <div className="flex flex-col gap-y-6">{children}</div>
        </ContainerBox>
      </section>
      {/*//? experimental side block */}
      <aside className="w-[500px] pl-2 max-xl:hidden xl:flex">
        <ContainerBox className="h-full w-full">
          <ContentBlock title="Команда">
            <div className="space-y-2">
              <div className="bg-elevated-1-bg-dark rounded-lg p-2 flex space-x-2">
                <Image
                  src="/favicon.svg"
                  alt="avatar"
                  width={24}
                  height={24}
                  className="text-white-dark fill-white-dark"
                />
                <div className="flex justify-between items-center w-full">
                  <span>Andrei U</span>
                  <span className="text-xs text-secondary-text-dark pr-2">
                    Designer
                  </span>
                </div>
              </div>
              <div className="bg-elevated-1-bg-dark rounded-lg p-2 flex space-x-2">
                <Image
                  src="/favicon.svg"
                  alt="avatar"
                  width={24}
                  height={24}
                  className="text-white-dark fill-white-dark"
                />
                <span>Andrei U</span>
              </div>
              <div className="bg-elevated-1-bg-dark rounded-lg p-2 flex space-x-2">
                <Image
                  src="/favicon.svg"
                  alt="avatar"
                  width={24}
                  height={24}
                  className="text-white-dark fill-white-dark"
                />
                <span>Andrei U</span>
              </div>
            </div>
          </ContentBlock>
        </ContainerBox>
      </aside>
    </div>
  );
};

export default ProjectPage;
