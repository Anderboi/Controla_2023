import React from "react";
import RoomCard from "./RoomCard";
import { Database } from "@/types/supabase";
import getRoomEquipment from "@/lib/actions/getRoomFilling";

interface RoomCardProps {
  data: Database["public"]["Tables"]["room_info"]["Row"];
}

const RoomCardWrapper = async ({ data }: RoomCardProps) => {
  const furniture = await getRoomEquipment(data.project_id, data.room_number);

  // const currentRoomData = furniture.filter(
  //   (item) => item.room_number === data.room_number
  // );

  return (
    <>
      <RoomCard data={data} furniture={furniture} />
    </>
  );
};

export default RoomCardWrapper;
