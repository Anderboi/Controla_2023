"use client";

import React, { useState } from "react";
import Button from "@/components/common/inputs/Button";
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
      case "Спальня" || "Мастер спальня" || "Детская комната": {
        return furnitureList.bedroom;
      }
      case "Ванная комната" || "Санузел": {
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

  const [equipment, setEquipment] = useState<
    { label: string; value: string }[]
  >([]);

  return (
    <InfoBlock
      label="Мебель"
      button={
        <div className="inline-flex space-x-4 pt-4">
          <div className="w-full">
            <BasicMultiSelector
              type="creatable"
              content={roomType(title)}
              callback={setEquipment} //TODO: add callback
            />
          </div>
          <Button
            mode="ghost_accent"
            size="small"
            className="mb-4 px-8"
            onClick={() => callback(equipment)}
          >
            +
          </Button>
        </div>
      }
    >
      {furniture ? (
        <>
          {furniture.map((item) => (
            item.room_number === room_number && <InfoItem
              key={item.id}
              content={item.name || "name"}
              title={item.name || "name"}
            />
          ))}
        </>
      ) : (
        <></>
      )}
    </InfoBlock>
  );
};

export default FurnitureBlock;
