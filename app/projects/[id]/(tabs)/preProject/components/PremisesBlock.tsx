import React from "react";
import getPremises from "@/actions/getPremises";
import ContentBlock from "@/components/common/ContentBlock";
import { IoColorPaletteOutline, IoTvOutline } from "react-icons/io5";
import { TbSofa } from "react-icons/tb";
import getProjectInfo from "@/actions/getProjectInfo";
import GallaryDataCard from '@/components/common/cards/GallaryDataCard';
import ChevronRightIcon from '@/components/common/icons/ChevronRightIcon';
import AddRoomsBlock from './AddRoomsBlock';

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
          <div className="" key={i}>
            {premises && premises.find((key) => key.storey === i + 1) ? (
              <>
                {projectInfo.storeys > 1 && (
                  <span className="text-sm">{`${i + 1} этаж`}</span>
                )}
                <div
                  className="
                    sm:inline-flex

                    //flex 
                    //flex-col 
                    //sm:flex-row 
                    
                    w-full
                    sm:gap-3
                    overflow-x-scroll
                    no-scrollbar 

                    bg-elevated-1-bg-dark 
                    sm:bg-transparent 
                    max-sm:px-4
                    rounded-lg
                    sm:divide-none
                    divide-y
                    divide-primary-border-dark
                    "
                >
                  {premises.map(
                    (item, index) =>
                      item.storey === i + 1 && (
                        <>
                          <GallaryDataCard
                            size="md"
                            illustration={
                              <div className="">
                                {item.room_number?.toLocaleString("en-US", {
                                  minimumIntegerDigits: 2,
                                  useGrouping: false,
                                })}
                              </div>
                            }
                            actionIcon={<ChevronRightIcon className='text-secondary-text-dark'/>}
                          >
                            <div
                              className="
                                flex
                                flex-col
                                items-start
                                sm:items-end
                                justify-end
                                "
                            >
                              <span className="text-right">{item.name}</span>
                              <div className="flex gap-2">
                                <TbSofa
                                  className="text-secondary-text-dark "
                                  size={20}
                                />
                                <IoTvOutline
                                  className="text-secondary-text-dark "
                                  size={20}
                                />
                                <IoColorPaletteOutline
                                  className="text-secondary-text-dark "
                                  size={20}
                                />
                              </div>
                            </div>
                          </GallaryDataCard>
                        </>
                      )
                  )}
                </div>
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
