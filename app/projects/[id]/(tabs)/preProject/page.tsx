import React from "react";

import PremisesBlock from "./components/premises/PremisesBlock";
import EngeneeringSystemsBlock from "./components/engeneering/EngeneeringSystemsBlock";
import CommonInfoBlock from "./components/CommonInfoBlock";
import PDFBlock from './components/pdf/PDFBlock';

import getCurrntProject from "@/actions/getCurrentProject";
import ResidingWrapper from './components/residents/ResidingWrapper';

export const revalidate = 0;

const PreProject = async ({ params }: { params: { id: number } }) => {
  const projectId = params.id;

  const project = await getCurrntProject(projectId);

  return (
    <>
      {/* <MyPDFView /> */}
      <CommonInfoBlock project={project} />
      <ResidingWrapper projectId={projectId} />
      <PremisesBlock projectId={projectId} />
      <EngeneeringSystemsBlock projectId={projectId} />
      <PDFBlock projectId={projectId} />
    </>
  );
};

export default PreProject;
