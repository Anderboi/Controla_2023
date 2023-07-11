import React from "react";

import ContainerBox from "@/components/common/ContainerBox";
import ContentBlock from "@/components/common/ContentBlock";
import InfoBlock from "@/components/feature/infoblock/InfoBlock";
import getEngeneeringData from "@/actions/getEngeneeringData";
import AddEngSysButton from './inputs/AddEngSysButton';

const engSystems = [
  { label: "Система кондиционирования и вентиляции", name: "conditioning" },
  { label: "Система водоподготовки и фильтрации", name: "plumbing" },
  { label: "Система отопления", name: "heating" },
];

const EngeneeringSystemsBlock = async ({ id }: { id: number }) => {
  const engData = await getEngeneeringData(id);

  return (
    <>
      <ContentBlock title="Инженерные системы">
        <ContainerBox
          classname="
            flex 
            flex-col 
            gap-y-1
            justify-center
            items-center
            bg-elevated-1-bg-dark 
            text-primary-text-dark
            "
        >
          {engSystems.map((item) => {
            return (
              <>
                {item.name === "conditioning" && (
                  <InfoBlock
                    label={`${item.label}:`}
                    body={
                      engData?.conditioning ? (
                        `${engData?.conditioning?.map((i) => i)}`
                      ) : (
                        <AddEngSysButton type={item.name} />
                      )
                    }
                  />
                )}
                {item.name === "heating" && (
                  <InfoBlock
                    label={`${item.label}:`}
                    body={
                      engData?.heating ? (
                        `${engData?.heating?.map((i) => i)}`
                      ) : (
                        <AddEngSysButton type={item.name} />
                      )
                    }
                  />
                )}
                {item.name === "plumbing" && (
                  <InfoBlock
                    label={`${item.label}:`}
                    body={
                      engData.plumbing ? (
                        `${engData?.plumbing?.forEach((i) => i)}`
                      ) : (
                        <AddEngSysButton type={item.name} />
                      )
                    }
                  />
                )}
              </>
            );
          })}
        </ContainerBox>
      </ContentBlock>
    </>
  );
};

export default EngeneeringSystemsBlock;
