import React from 'react'
import RoomCard from './RoomCard'
import { Database } from '@/types/supabase';
import getRoomEquipment from '@/actions/getRoomFilling';

interface RoomCardProps {
  data: Database["public"]["Tables"]["room_info"]["Row"];
}



const RoomCardWrapper = async ({data}: RoomCardProps) => {

const furniture = await getRoomEquipment(data.project_id)

  return (
    <>
      <RoomCard data={data} furniture={furniture} />
    </>
  );
};

export default RoomCardWrapper