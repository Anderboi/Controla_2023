import React from "react";
import getCurrntProject from "@/actions/getCurrentProject";
import PremisesBlock from "./components/PremisesBlock";
import EngeneeringSystemsBlock from "./components/EngeneeringSystemsBlock";
import CommonInfoBlockAlt from './components/CommonInfoBlockAlt';
import ResidingInfoBlock from './components/ResidingInfoBlock';

const PreProject = async ({
  params,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
  params: { id: number };
}) => {
  const id = params.id;

  const project = await getCurrntProject(id);

  return (
    <>
      <CommonInfoBlockAlt project={project} />
      <ResidingInfoBlock projectId={id} />
      <PremisesBlock id={id} />
      <EngeneeringSystemsBlock id={id} />
    </>
  );
};

export default PreProject;
