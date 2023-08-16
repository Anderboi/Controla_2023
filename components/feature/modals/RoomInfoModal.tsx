'use client'

import React, { useState } from "react";
import SideModal from "@/components/common/SideModalHeadless";
import FurnitureBlock from "./FurnitureBlock";
import EquipmentBlock from './EquipmentBlock';

import useRoomInfoModal from "@/hooks/useRoomInfoModal"
import { useRouter } from 'next/navigation';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

import toast from 'react-hot-toast';

const RoomInfoModal = () => {
  const roomModal = useRoomInfoModal();
  const router = useRouter();
  const supabase = useSupabaseClient();

  if (!roomModal.data) {
    return;
  }

  const project_id = roomModal.data?.project_id;

  const onSubmit = async (value:any[]) => {
    const array = value.map((item) => ({
      project_id: project_id,
      brand: null,
      materials: null,
      name: item.value,
      price: null,
      quantity: 1,
      tech_spec: null,
      link: null,
      isDelivered: false,
      isOrdered: false,
      room_number: roomModal.data?.room_number
    }));

  const { data, error } = await supabase
    .from("room_furnishing")
    .insert(array)
    .select();

  if (error) {
    return toast.error(error.message);
  }

  if (!error && data) {
    console.log(data);
    toast.success("Success");
    //TODO: add useState for furnData, show selector on empty, data on full
    // setSelectedEq(data.)
    router.refresh();
  }
  };

  const onChange = (open: boolean) => {
    if (!open) {
      roomModal.onClose();
    }
  };

  return (
    <SideModal
      isOpen={roomModal.isOpen}
      title={roomModal.title}
      onChange={onChange}
    >
      <FurnitureBlock
        furniture={roomModal.furniture}
        room_number={roomModal.data.room_number}
        callback={onSubmit}
        title={roomModal.data?.name}
      />
      <EquipmentBlock project_id={project_id} />
    </SideModal>
  );
};

export default RoomInfoModal;
