import React from "react";
import getPremises from "@/actions/getPremises";
import ContentBlock from "@/components/common/ContentBlock";

import getProjectInfo from "@/actions/getProjectInfo";

import AddRoomsBlock from "./AddRoomsBlock";
import InfoDataGrid from "@/components/common/grids/InfoDataGrid";
import RoomCardWrapper from "./RoomCardWrapper";

interface PremisesBlockProps {
  id: number;
}

const PremisesBlock = async ({ id }: PremisesBlockProps) => {
  const premises = await getPremises(id);
  const projectInfo = await getProjectInfo(id);

  return (
    <>
      <ContentBlock title="Состав помещений">
        {Array.from(Array(projectInfo.storeys)).map((storey, i) => (
          <div key={i}>
            {premises && premises.find((key) => key.storey === i + 1) ? (
              <>
                {projectInfo.storeys > 1 && (
                  <span className="text-sm">{`${i + 1} этаж`}</span>
                )}
                <InfoDataGrid> 
                  {premises.map(
                    (item, index) =>
                      item.storey === i + 1 && (
                        <RoomCardWrapper key={index} data={item} />
                      )
                  )}
                </InfoDataGrid>
              </>
            ) : (
              <div
                className="
                  flex 
                  w-full 
                  flex-col 
                  items-center 
                  justify-center 
                  gap-6
                  "
              >
                <div className="w-full">
                  <AddRoomsBlock storey={i + 1} />
                </div>
              </div>
            )}
          </div>
        ))}
      </ContentBlock>
    </>
  );
};

export default PremisesBlock;
