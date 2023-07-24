import React from "react";
import getPremises from "@/actions/getPremises";
import ContentBlock from "@/components/common/ContentBlock";
import { IoColorPaletteOutline, IoTvOutline } from "react-icons/io5";
import { TbSofa } from "react-icons/tb";
import getProjectInfo from "@/actions/getProjectInfo";
import AddRoomsBlockAlt from "./AddRoomsBlockAlt";

interface PremisesBlockProps {
  id: number;
}

const PremisesBlock = async ({ id }: PremisesBlockProps) => {
  const premises = await getPremises(id);
  const projectInfo = await getProjectInfo(id);
  console.log(premises.find((key) => key.storey === 2));

  return (
    <>
      <ContentBlock title="Состав помещений">
        {Array.from(Array(projectInfo.storeys)).map((storey, i) => (
          <div className="pt-4">
            {premises && premises.find((key) => key.storey === i + 1) ? (
              <>
                <span className="text-sm">{`${i + 1} этаж`}</span>
                <div
                  className="
                  flex
                  gap-3
                  overflow-y-auto
                  scroll-smooth
                  no-scrollbar
                  "
                >
                  {premises.map(
                    (item, index) =>
                      item.storey === i + 1 && (
                        <>
                          <div
                            key={index}
                            className="
                      flex
                      min-h-[180px]
                      min-w-[148px]
                      cursor-pointer
                      flex-col
                      items-end
                      justify-between
                      break-words
                      rounded-lg
                      bg-elevated-1-bg-dark
                      p-3
                      text-end
                      hover:bg-elevated-2-bg-dark
                      "
                          >
                            <span
                              className="
                      text-6xl
                      text-secondary-text-dark
                      text-opacity-20
                      "
                            >
                              {item.room_number?.toLocaleString("en-US", {
                                minimumIntegerDigits: 2,
                                useGrouping: false,
                              })}
                            </span>
                            <div
                              className="
                        flex
                        flex-col
                        items-end
                        justify-end
                        "
                            >
                              <span className="text-sm">{item.name}</span>
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
                          </div>
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
                {/* <span className="py-4 text-center">
                  Нет назначенных помещений
                </span> */}
                <div className="w-full">
                  <AddRoomsBlockAlt storey={i + 1} />
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
