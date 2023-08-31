import React from "react";
import getCurrntProject from "@/actions/getCurrentProject";
import getProjectInfo from "@/actions/getProjectInfo";
import getResidentsInfo from "@/actions/getResidentsInfo";
import PDFWrapper from "./PDFWrapper";
import getUserById from "@/actions/getUserById";

interface Props {
  projectId: number;
}

const PDFBlock = async ({ projectId }: Props) => {
  const project = await getCurrntProject(projectId);
  const info = await getProjectInfo(projectId);
  const residingInfo = await getResidentsInfo(projectId);
  const client = await getUserById(project.client_id);
  
  return (
    <>
      <PDFWrapper
        info={info}
        project={project}
        residents={residingInfo}
        client={client}
      />
    </>
  );
};

export default PDFBlock;
