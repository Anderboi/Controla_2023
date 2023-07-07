import React from "react";
import ContainerBox from "@/components/common/ContainerBox";
import getPremises from "@/actions/getPremises";
import AddRoomsBlock from "./AddRoomsBlock";
import Button from "@/components/common/inputs/Button";

interface PremisesBlockProps {
  id: number;
}

const PremisesBlock = async ({ id }: PremisesBlockProps) => {
  const premises = await getPremises(id);

  return (
    <div>
      <h2 className="px-6 sm:text-xl pb-2 font-bold">Перечень помещений</h2>
      <ContainerBox classname="bg-elevated-1-bg-dark flex flex-col gap-y-1 text-primary-text-dark">
        {premises.length === 0 ? (
          <div className="flex flex-col justify-center items-center">
            <span className="text-center py-6">Нет помещений</span>
            <AddRoomsBlock />
          </div>
        ) : (
          <div className="flex gap-2 overflow-auto no-scrollbar">
            {premises.map((item) => (
              <div
                className="
                bg-elevated-2-bg-dark 
                p-2 
                min-h-[150px] 
                min-w-[140px]
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
                <span className="text-6xl text-opacity-20 text-secondary-text-dark">
                  {item.room_number?.toLocaleString("en-US", {
                    minimumIntegerDigits: 2,
                    useGrouping: false,
                  })}
                </span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        )}
        {/* <AddRoomsBlock /> */}
      </ContainerBox>
    </div>
  );
};

export default PremisesBlock;
