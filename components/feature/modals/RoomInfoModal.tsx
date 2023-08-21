"use client";

import React, { useState } from "react";
import SideModal from "@/components/common/SideModalHeadless";
import FurnitureBlock from "./FurnitureBlock";

import useRoomInfoModal from "@/hooks/useRoomInfoModal";
import { useRouter } from "next/navigation";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

import toast from "react-hot-toast";
import Button from "@/components/common/inputs/Button";

const RoomInfoModal = () => {
  const roomModal = useRoomInfoModal();
  const router = useRouter();
  const supabase = useSupabaseClient();

  const [furnitureList, setFurnitureList] = useState([]);


  if (!roomModal.data) {
    return;
  }

  const project_id = roomModal.data?.project_id;

  const onSubmit = async () => {
    
    if (!furnitureList) {
      return;
    }
    const array = furnitureList.map(
      (item: { label: string; value: string }) => ({
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
        room_number: roomModal.data?.room_number,
      })
    );

    const { data, error } = await supabase
      .from("room_furnishing")
      .insert(array)
      .select();

    if (error) {
      return toast.error(error.message);
    }

    if (!error && data) {
      toast.success("Success");
      //TODO: add useState for furnData, show selector on empty, data on full
      roomModal.onClose()
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
        title={roomModal.data?.name}
        furniture={roomModal.furniture}
        room_number={roomModal.data.room_number}
        callback={setFurnitureList}
      />
      {/* <EquipmentBlock project_id={project_id} /> */}
      <Button className="w-full" mode="action" onClick={onSubmit}>
        Сохранить
      </Button>
    </SideModal>
  );
};

export default RoomInfoModal;
