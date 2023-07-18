"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import BasicMultiSelector from "@/components/common/inputs/BasicMultiSelector";
import Button from "@/components/common/inputs/Button";
import toast from "react-hot-toast";

import useUploadRoomsModal from "@/hooks/useUploadRoomsModal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

import roomsList from "@/lib/roomsList";

interface SelectProps {
  value: string;
  label: string;
}

const AddRoomsBlock = () => {
  const uploadModal = useUploadRoomsModal();
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const pathname = usePathname();

  const [rooms, setRooms] = useState<SelectProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const projectId = Number(pathname.split("/")[pathname.split("/").length - 2]);

  const onSubmit = async () => {
    try {
      setIsLoading(true);

      const roomsArray = rooms.map((room, index) => {
        return {
          name: room.value,
          area: null,
          project_id: projectId,
          room_id: Number(projectId.toString() + index.toString()),
          room_number: index + 1,
        };
      });

      const { error: supabaseError } = await supabaseClient
        .from("room_info")
        .insert(roomsArray);

      if (supabaseError) {
        return toast.error(supabaseError.message);
      }

      router.refresh();
      setIsLoading(false);
      toast.success("Помещения добавлены");
      uploadModal.onClose();
    } catch (error) {
      toast.error("error.message");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='z-50 w-full'>
      <BasicMultiSelector
        type="creatable"
        content={roomsList}
        callback={setRooms}
        
      />
      <Button
        onClick={onSubmit}
        disabled={isLoading}
        type="submit"
        mode="action"
        className="mt-4"
      >
        Добавить
      </Button>
    </div>
  );
};

export default AddRoomsBlock;
