import React from "react";
import ContentBlock from "@/components/common/ContentBlock";
import InfoDataGrid from "@/components/common/grids/InfoDataGrid";
import AddResidentBlock from "./AddResidentBlock";
import getResidentsInfo from "@/actions/getResidentsInfo";
import ResidingCard from "./ResidingCard";

interface ResidingInfoBlockProps {
  projectId: number;
}

const ResidingInfoBlock = async ({ projectId }: ResidingInfoBlockProps) => {
  const residents = await getResidentsInfo(projectId);
  return (
    <ContentBlock title="Информация о проживающих">
      <InfoDataGrid>
        <AddResidentBlock />
        {residents.map((resident, index) => (
          <ResidingCard key={index} resident={resident} />
        ))}
      </InfoDataGrid>
    </ContentBlock>
  );
};

export default ResidingInfoBlock;
