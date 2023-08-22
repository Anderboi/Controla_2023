import React from "react";

import ContentBlock from "@/components/common/ContentBlock";
import EngeneeringSystemsGallary from "./EngeneeringSystemsGallary";

import getEngeneeringData from "@/actions/getEngeneeringData";
import EngeneeringSystemList from './EngeneeringSystemList';

const EngeneeringSystemsBlock = async ({ id }: { id: number }) => {
  const engData = await getEngeneeringData(id);

  return (
    <>
      <ContentBlock title="Инженерные системы">
        {/* <EngeneeringSystemsGallary data={engData} /> */}
        <EngeneeringSystemList data={engData}/>
      </ContentBlock>
    </>
  );
};

export default EngeneeringSystemsBlock;
