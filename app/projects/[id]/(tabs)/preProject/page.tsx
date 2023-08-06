import React from "react";
import getCurrntProject from "@/actions/getCurrentProject";
import PremisesBlock from "./components/premises/PremisesBlock";
import EngeneeringSystemsBlock from "./components/engeneering/EngeneeringSystemsBlock";
import CommonInfoBlock from './components/commonInfo/CommonInfoBlock';
import ResidingInfoBlock from './components/residents/ResidingInfoBlock';

const PreProject = async ({
  params,
}: {
  params: { id: number };
}) => {
  const id = params.id;

  const project = await getCurrntProject(id);

  return (
    <>
      <CommonInfoBlock project={project} />
      <ResidingInfoBlock projectId={id} />
      <PremisesBlock id={id} />
      <EngeneeringSystemsBlock id={id} />
    </>
  );
};

export default PreProject;
