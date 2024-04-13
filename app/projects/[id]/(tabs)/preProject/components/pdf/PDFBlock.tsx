import React from "react";
import getCurrntProject from "@/lib/actions/getCurrentProject";
import getProjectInfo from "@/lib/actions/getProjectInfo";
import getResidentsInfo from "@/lib/actions/getResidentsInfo";
import PDFWrapper from "./PDFWrapper";
import getUserById from "@/lib/actions/getUserById";
import getPremises from "@/lib/actions/getPremises";
import getEngeneeringData from "@/lib/actions/getEngeneeringData";

interface Props {
  projectId: number;
}

const PDFBlock = async ({ projectId }: Props) => {
  const project = await getCurrntProject(projectId);
  const info = await getProjectInfo(projectId);
  const residingInfo = await getResidentsInfo(projectId);
  const client = await getUserById(project.client_id);
  const premises = await getPremises(projectId);
  const engeneeringData = await getEngeneeringData(projectId);

  return (
    <PDFWrapper
      info={info}
      project={project}
      residents={residingInfo}
      client={client}
      premises={premises}
      engeneeringData={engeneeringData}
    />
  );
};

export default PDFBlock;
