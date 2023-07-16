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
            <div className="flex flex-col justify-center items-center w-full ">
              <span className="text-center py-4">
                Нет назначенных помещений
              </span>
              <AddRoomsBlock />
            </div>
          ) : (
            <div className="flex gap-6 overflow-y-auto no-scrollbar scroll-smooth">
              {premises.map((item) => (
                <div
                  className="
                  bg-elevated-1-bg-dark 
                  p-3
                  min-h-[180px]
                  min-w-[148px]
                  flex
                  flex-col 
                  items-end 
                  text-end 
                  justify-between
                  rounded-lg
                  hover:bg-elevated-2-bg-dark
                  cursor-pointer
                  break-words
                  "
                >
                  <span
                    className="
                    text-6xl
                    text-opacity-20
                    text-secondary-text-dark
                    "
                  >
                    {item.room_number?.toLocaleString("en-US", {
                      minimumIntegerDigits: 2,
                      useGrouping: false,
                    })}
                  </span>
                  <div className="flex flex-col justify-end items-end">
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
