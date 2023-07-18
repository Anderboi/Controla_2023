import React from "react";
import getPremises from "@/actions/getPremises";
import AddRoomsBlock from "./AddRoomsBlock";
import ContentBlock from "@/components/common/ContentBlock";
import { IoColorPaletteOutline, IoTvOutline } from "react-icons/io5";
import { TbSofa } from "react-icons/tb";

interface PremisesBlockProps {
  id: number;
}

const PremisesBlock = async ({ id }: PremisesBlockProps) => {
  const premises = await getPremises(id);

  return (
    <>
      <ContentBlock title="Состав помещений">
        <div>
          {premises.length === 0 ? (
            <div className="flex w-full flex-col items-center justify-center ">
              <span className="py-4 text-center">
                Нет назначенных помещений
              </span>
              <AddRoomsBlock />
            </div>
          ) : (
            <div className="flex gap-4 overflow-y-auto scroll-smooth no-scrollbar">
              {premises.map((item, index) => (
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
                      <TbSofa className="text-secondary-text-dark " size={20} />
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
              ))}
            </div>
          )}
        </div>
      </ContentBlock>
    </>
  );
};

export default PremisesBlock;
