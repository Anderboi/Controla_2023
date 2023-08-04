import React from "react";

import ContentBlock from "@/components/common/ContentBlock";
import EngeneeringSystemsGallary from "./EngeneeringSystemsGallary";

import getEngeneeringData from "@/actions/getEngeneeringData";

const EngeneeringSystemsBlock = async ({ id }: { id: number }) => {
  const engData = await getEngeneeringData(id);

  return (
    <>
      <ContentBlock title="Инженерные системы">
        <EngeneeringSystemsGallary data={engData} />
      </ContentBlock>
    </>
  );
};

export default EngeneeringSystemsBlock;
