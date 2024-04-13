import React from "react";

import ContentBlock from "@/components/common/ContentBlock";

import getEngeneeringData from "@/lib/actions/getEngeneeringData";
import EngeneeringSystemList from "./EngeneeringSystemList";

const EngeneeringSystemsBlock = async ({
  projectId,
}: {
  projectId: number;
}) => {
  const engData = await getEngeneeringData(projectId);

  return (
    <>
      <ContentBlock title="Инженерные системы">
        {/* <EngeneeringSystemsGallary data={engData} /> */}
        <EngeneeringSystemList data={engData} />
      </ContentBlock>
    </>
  );
};

export default EngeneeringSystemsBlock;
