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

const AddRoomsBlockAlt = () => {
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

  // [...Array(projectInfo.storeys)].map((e, i) => ()

  return (
    // <div className="flex w-full flex-col items-start justify-start gap-4 sm:flex-row">
    <div className="px-0 w-full py-4 //sm:grid //sm:grid-cols-3 sm:gap-4 sm:px-0">
      {/* <dt className="text-sm font-medium leading-6 text-primary-text-dark">
          1-й этаж
        </dt> */}
      <dd
        className="
            mt-2 
            text-sm 
            text-secondary-text-dark 
            //sm:col-span-2
            sm:mt-0
            rounded-lg
            bg-elevated-1-bg-dark
            "
      >
        <ul
          role="list"
          className="
            px-4
            divide-y
            divide-primary-border-dark 
            rounded-lg
            //bg-secondary-bg-dark
            //border 
            border-primary-border-dark
            "
        >
          <li className=" flex items-center justify-between py-4 //pl-4 //pr-5 text-sm leading-6">
            <div className="flex w-0 flex-1 items-center">
              <div
                className="
                    //ml-4 
                    flex 
                    min-w-0 
                    flex-1 
                    gap-2
                    "
              >
                <BasicMultiSelector
                  isMulti
                  type="creatable"
                  content={roomsList}
                  callback={setRooms}
                />
              </div>
            </div>
            <div className="ml-4 flex-shrink-0">
              <Button
                size="small"
                onClick={onSubmit}
                disabled={isLoading}
                type="submit"
                mode="ghost"
                className="w-full sm:w-fit"
              >
                Добавить
              </Button>
            </div>
          </li>

          <li className=" flex items-center justify-between py-4 //pl-4 //pr-5 text-sm leading-6">
            <div className="flex w-0 flex-1 items-center">
              <div
                className="
                    //ml-4 
                    flex 
                    min-w-0 
                    flex-1 
                    gap-2
                    "
              >
                <BasicMultiSelector
                  isMulti
                  type="creatable"
                  content={roomsList}
                  callback={setRooms}
                />
              </div>
            </div>
            <div className="ml-4 flex-shrink-0">
              <Button
                size="small"
                onClick={onSubmit}
                disabled={isLoading}
                type="submit"
                mode="ghost"
                className="w-full sm:w-fit"
              >
                Добавить
              </Button>
            </div>
          </li>
        </ul>
      </dd>
    </div>
    // </div>
  );
};

export default AddRoomsBlockAlt;
