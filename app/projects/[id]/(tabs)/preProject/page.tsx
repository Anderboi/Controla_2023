import React from "react";
import ContainerBox from "@/components/common/ContainerBox";
import getCurrntProject from "@/actions/getCurrentProject";
import CommonInfoBlock from './components/CommonInfoBlock';

const PreProject = async ({
  searchParams,
  params,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
  params: { id: number };
}) => {
  console.log(searchParams);

  const project = await getCurrntProject(params.id);
  return (
    <>
      <CommonInfoBlock project={project}/>
    </>
  );
};

export default PreProject;
