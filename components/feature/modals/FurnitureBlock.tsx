"use client";

import React from "react";
import BasicMultiSelector from "@/components/common/inputs/BasicMultiSelector";
import InfoBlock from "../infoblock/InfoBlock";
import InfoItem from "@/components/common/InfoBlock/InfoItem";

import { furnitureList } from "@/lib/furnitureEquipmentList";

import { Database } from "@/types/supabase";

interface Props {
  title?: string;
  room_number: number;
  furniture: Database["public"]["Tables"]["room_furnishing"]["Row"][] | null;
  callback: (e: any) => void;
}

const FurnitureBlock = ({ title, furniture, callback, room_number }: Props) => {
  const roomType = (type?: string) => {
    if (!title) {
      return;
    }
    switch (type) {
      case "Гостиная": {
        return furnitureList.livingRoom;
      }
      case "Мастер спальня": {
        return furnitureList.bedroom;
      }
      case "Спальня": {
        return furnitureList.bedroom;
      }
      case "Детская комната": {
        return furnitureList.bedroom;
      }
      case "Ванная комната": {
        return furnitureList.bathroom;
      }
      case "Санузел": {
        return furnitureList.bathroom;
      }
      case "Кухня":
        {
          return furnitureList.kitchen;
        }
        break;

      default:
        {
          return undefined;
        }
        break;
    }
  };

  return (
    <InfoBlock
      label="Мебель"
      button={
        furniture && furniture.length === 0 ? (
          <div className="inline-flex space-x-4 py-4">
            <div className="w-full ">
              <BasicMultiSelector
                type="creatable"
                content={roomType(title)}
                callback={callback}
              />
            </div>
            {/* <Button
            mode="ghost_accent"
            size="small"
            className="mb-4 px-8"
            onClick={() => callback(equipment)}
          >
            +
          </Button> */}
          </div>
        ) : (
          <></>
        )
      }
    >
      {furniture ? (
        <>
          {furniture.map(
            (item) =>
              item.room_number === room_number && (
                <InfoItem
                  key={item.id}
                  content={item.name || "name"}
                  title={item.name || "name"}
                />
              )
          )}
        </>
      ) : (
        <></>
      )}
    </InfoBlock>
  );
};

export default FurnitureBlock;
