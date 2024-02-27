"use client";

import React, { useState } from "react";
import SideModal from "@/components/common/SideModalHeadless";
import FurnitureBlock from "./FurnitureBlock";

import useRoomInfoModal from "@/hooks/useRoomInfoModal";
import { shallow } from "zustand/shallow";
import { useRouter } from "next/navigation";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

import toast from "react-hot-toast";
import Button from "@/components/common/inputs/MyButton";

const RoomInfoModal = () => {
  const { roomData, isOpen, onClose, furniture, title } = useRoomInfoModal(
    (state) => ({
      roomData: state.data,
      isOpen: state.isOpen,
      onClose: state.onClose,
      furniture: state.furniture,
      title: state.title,
    }),
    shallow
  );
  const router = useRouter();
  const supabase = useSupabaseClient();

  const [furnitureList, setFurnitureList] = useState([]);

  if (!roomData) {
    return;
  }

  const project_id = roomData?.project_id;

  const furnitureBlockCallback = () => {};

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
        room_number: roomData?.room_number,
      })
    );

    const { data: furnishingData, error: furnishingError } = await supabase
      .from("room_furnishing")
      .insert(array)
      .select();

    if (furnishingError) {
      return toast.error(furnishingError.message);
    }

    if (!furnishingError && furnishingData) {
      toast.success("Success");
      //TODO: add useState for furnData, show selector on empty, data on full
      onClose();
      router.refresh();
    }
  };

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <SideModal isOpen={isOpen} title={title} onChange={onChange}>
      <FurnitureBlock
        title={roomData?.name}
        furniture={furniture}
        room_number={roomData.room_number}
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
