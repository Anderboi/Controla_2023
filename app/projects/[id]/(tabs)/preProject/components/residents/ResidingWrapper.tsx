import React from "react";
import getResidentsInfo from "@/lib/actions/getResidentsInfo";
import ResidingInfoBlock from '../ResidingInfoBlock';

interface ResidingBlockProps {
  projectId: number;
}

const ResidingWrapper = async ({ projectId }: ResidingBlockProps) => {
  const residents = await getResidentsInfo(projectId);

  return <ResidingInfoBlock residents={residents} />;
};

export default ResidingWrapper;
