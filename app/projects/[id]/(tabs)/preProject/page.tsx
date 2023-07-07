import React from "react";
import getCurrntProject from "@/actions/getCurrentProject";
import CommonInfoBlock from './components/CommonInfoBlock';
import PremisesBlock from './components/PremisesBlock';
import EngeneeringSystemsBlock from './components/EngeneeringSystemsBlock';

const PreProject = async ({
  params,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
  params: { id: number };
}) => {

  const project = await getCurrntProject(params.id);

  return (
    <>
      <CommonInfoBlock project={project} />
      <PremisesBlock id={params.id} />
      <EngeneeringSystemsBlock/>
    </>
  );
};

export default PreProject;
