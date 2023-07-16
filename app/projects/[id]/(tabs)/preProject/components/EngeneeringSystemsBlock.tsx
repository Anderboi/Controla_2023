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
            justify-center
            divide-y-[0.5px]
            items-center
            bg-elevated-1-bg-dark 
            text-primary-text-dark
            "
        >
          {engSystems.map((item,index) => {
            return (
              <>
                {item.name === "conditioning" && (
                  <InfoBlock
                    key={index}
                    label={`${item.label}:`}
                    body={
                      engData?.conditioning ? (
                        <div className="flex flex-col gap-y-1 ">
                          {engData?.conditioning?.map((i, index) => (
                            <span key={index}>{`- ${i}`}</span>
                          ))}
                        </div>
                      ) : (
                        <AddEngSysButton className="w-full" type={item.name} />
                      )
                    }
                  />
                )}
                {item.name === "heating" && (
                  <InfoBlock
                    key={index}
                    label={`${item.label}:`}
                    body={
                      engData?.heating ? (
                        <div className="flex flex-col">
                          {engData?.heating?.map((i, index) => (
                            <span key={index}>{`- ${i}`}</span>
                          ))}
                        </div>
                      ) : (
                        <AddEngSysButton className="w-full" type={item.name} />
                      )
                    }
                  />
                )}
                {item.name === "plumbing" && (
                  <InfoBlock
                    label={`${item.label}:`}
                    body={
                      engData.plumbing ? (
                        <div className="flex flex-col">
                          {engData?.plumbing?.map((i, index) => (
                            <span key={index}>{`- ${i}`}</span>
                          ))}
                        </div>
                      ) : (
                        <AddEngSysButton className="w-full" type={item.name} />
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
