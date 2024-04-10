"use client";

import React, { useState } from "react";
import BasicMultiSelector from "@/components/common/inputs/BasicMultiSelector";
import CreatableSelect from "react-select/creatable";

import { usePathname, useRouter } from "next/navigation";
import useUploadRoomsModal from "@/hooks/useUploadRoomsModal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

import toast from "react-hot-toast";
import roomsList from "@/lib/roomsList";
import { Button } from '@/components/ui/button';
import MultipleSelector from '@/components/ui/multipleSelector';

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
      <span
        className="
        text-xs 
        text-secondary-text-light
        dark:text-secondary-text-dark
        uppercase
        "
      >
        {`${storey} этаж`}
      </span>
      <li
        className="
          flex
          flex-col
          items-center
          justify-between
          gap-4
          py-2
          text-sm
          leading-6
          sm:flex-row
          "
      >
        <div
          className="
            w-full
            "
        >
          {/* <input
            name="rooms"
            list="rooms"
            className="w-full bg-transparent rounded-lg"
          /> */}

          {/* <MultipleSelector creatable defaultOptions={roomsList}/> */}
          
          <BasicMultiSelector
            isMulti
            type="creatable"
            content={roomsList}
            callback={setRooms}
          />
        </div>
        <div className="w-full sm:w-fit sm:shrink-0">
          <Button
            onClick={onSubmit}
            disabled={isLoading}
            type="submit"
            variant={"ghost"}
            // className="
            //   w-full
            //   sm:w-fit
            //   "
          >
            Добавить
          </Button>
        </div>
      </li>
    </>
  );
};

export default AddRoomsBlock;
