"use client";

import React from "react";
import GallaryDataCard from "@/components/common/cards/GalleryDataCard";
import useRoomInfoModal from "@/hooks/useRoomInfoModal";

import { IoColorPaletteOutline, IoTvOutline } from "react-icons/io5";
import { TbSofa } from "react-icons/tb";
import ChevronRightIcon from "@/components/common/icons/ChevronRightIcon";
import { Database } from "@/types/supabase";

interface RoomCardProps {
  data: Database["public"]["Tables"]["room_info"]["Row"];
  furniture: Database["public"]["Tables"]["room_furnishing"]["Row"][];
}

const RoomCard = ({ data, furniture }: RoomCardProps) => {
  const roomModal = useRoomInfoModal();

  // const currentRoomData = furniture.filter(
  //   (item) => item.room_number === data.room_number
  // ); 

  const handleOnClick = (
    title: string,
    data: Database["public"]["Tables"]["room_info"]["Row"]
  ) => {
    roomModal.onOpen(title, data, furniture);
  };

  return (
    <GallaryDataCard
      onClick={() => handleOnClick(data.name, data)}
      size="md"
      illustration={
        <div>
          {data.room_number?.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
        </div>
      }
      actionIcon={
        <ChevronRightIcon type="right" className="text-secondary-text-dark" />
      }
    >
      <div
        className="
          flex
          flex-col
          items-start
          justify-end
          sm:items-end
          "
      >
        <span className="text-right">{data.name}</span>
        <div className="flex gap-2">
          <TbSofa className="text-secondary-text-dark " size={20} />
          <IoTvOutline className="text-secondary-text-dark " size={20} />
          <IoColorPaletteOutline
            className="text-secondary-text-dark "
            size={20}
          />
        </div>
      </div>
    </GallaryDataCard>
  );
};

export default RoomCard;
