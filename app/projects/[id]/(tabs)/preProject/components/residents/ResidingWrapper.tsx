import React from "react";
import ResidingInfoBlock from "./ResidingInfoBlock";
import getResidentsInfo from "@/lib/actions/getResidentsInfo";

interface ResidingBlockProps {
  projectId: number;
}

const ResidingWrapper = async ({ projectId }: ResidingBlockProps) => {
  const residents = await getResidentsInfo(projectId);

  return <ResidingInfoBlock residents={residents} />;
};

export default ResidingWrapper;
