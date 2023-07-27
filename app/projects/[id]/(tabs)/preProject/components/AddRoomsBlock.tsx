"use client";

import React, { useState } from "react";
import Button from "@/components/common/inputs/Button";
import BasicMultiSelector from "@/components/common/inputs/BasicMultiSelector";

import { usePathname, useRouter } from "next/navigation";
import useUploadRoomsModal from "@/hooks/useUploadRoomsModal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

import toast from "react-hot-toast";
import roomsList from "@/lib/roomsList";

interface SelectProps {
  value: string;
  label: string;
}

const AddRoomsBlock = ({ storey }: { storey: number }) => {
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

      uploadModal.setStorey(storey);

      const roomsArray = rooms.map((room, index) => {
        return {
          name: room.value,
          area: null,
          project_id: projectId,
          room_number: Number(
            storey.toString() +
              (index < 10
                ? (index + 1).toString().padStart(2, "0")
                : (index + 1).toString())
          ),
          storey: storey,
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
    <>
      <span>{`${storey} этаж`}</span>
      <li
        className="
          flex
          flex-col
          sm:flex-row
          gap-4
          items-center
          justify-between
          py-2
          text-sm
          leading-6
          "
      >
        <div
          className="
            w-full
            "
        >
          <BasicMultiSelector
            isMulti
            type="creatable"
            content={roomsList}
            callback={setRooms}
          />
        </div>
        <div className="sm:flex-shrink-0 w-full sm:w-fit">
          <Button
            size="small"
            onClick={onSubmit}
            disabled={isLoading}
            type="submit"
            mode="ghost_accent"
            className="
              w-full 
              sm:w-fit
              "
          >
            Добавить
          </Button>
        </div>
      </li>
    </>
  );
};

export default AddRoomsBlock;
