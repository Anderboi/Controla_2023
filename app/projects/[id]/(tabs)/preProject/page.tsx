import React from "react";

import PremisesBlock from "./components/premises/PremisesBlock";
import EngeneeringSystemsBlock from "./components/engeneering/EngeneeringSystemsBlock";
import CommonInfoBlock from "./components/CommonInfoBlock";
import ResidingInfoBlock from "./components/residents/ResidingInfoBlock";
import PDFBlock from './components/pdf/PDFBlock';

import getCurrntProject from "@/actions/getCurrentProject";
// import getProjectInfo from "@/actions/getProjectInfo";
// import getResidentsInfo from "@/actions/getResidentsInfo";
// import PDFWrapper from "./components/pdf/PDFWrapper";

const PreProject = async ({ params }: { params: { id: number } }) => {
  const projectId = params.id;

  const project = await getCurrntProject(projectId);
  // const info = await getProjectInfo(id);
  // const residingInfo = await getResidentsInfo(id);

  return (
    <>
      {/* <MyPDFView /> */}
      <CommonInfoBlock project={project} />
      <ResidingInfoBlock projectId={projectId} />
      <PremisesBlock projectId={projectId} />
      <EngeneeringSystemsBlock projectId={projectId} />
      <PDFBlock projectId={projectId}/>
    </>
  );
};

export default PreProject;
