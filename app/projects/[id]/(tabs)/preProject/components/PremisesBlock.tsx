import React from "react";
import ContainerBox from "@/components/common/ContainerBox";
import getPremises from "@/actions/getPremises";
import AddRoomsBlock from "./AddRoomsBlock";
import ContentBlock from '@/components/common/ContentBlock';

interface PremisesBlockProps {
  id: number;
}

const PremisesBlock = async ({ id }: PremisesBlockProps) => {
  const premises = await getPremises(id);

  return (
    <>
      <ContentBlock title="Состав помещений">
        <ContainerBox
          classname="
            bg-elevated-1-bg-dark 
            flex
            gap-y-1
            gap-x-2
            text-primary-text-dark
            overflow-auto 
            no-scrollbar
            scroll-smooth
            "
        >
          {premises.length === 0 ? (
            <div className="flex flex-col justify-center items-center">
              <span className="text-center py-6">Нет помещений</span>
              <AddRoomsBlock />
            </div>
          ) : (
            <>
              {premises.map((item) => (
                <div
                  className="
                  bg-elevated-2-bg-dark 
                  p-3
                  min-h-[220px]
                  min-w-[180px]
                  flex
                  flex-col 
                  items-end 
                  text-end 
                  justify-between
                  rounded-lg
                  hover:bg-elevated-3-bg-dark
                  cursor-pointer
                  break-words
                  "
                >
                  <span className="
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
                  <span>{item.name}</span>
                </div>
              ))}
            </>
          )}
        </ContainerBox>
      </ContentBlock>
    </>
  );
};

export default PremisesBlock;
