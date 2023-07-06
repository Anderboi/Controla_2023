"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useUploadRoomsModal from "@/hooks/useUploadRoomsModal";
import usePopulateRoomsList from "@/hooks/usePopulateRoomsList";

import Modal from "@/components/common/Modal";
import Input from "@/components/common/inputs/Input";
import Button from "@/components/common/inputs/Button";
import Chips from "@/components/common/inputs/Chips";

import { toast } from "react-hot-toast";
import uniqid from "uniqid";
import roomsList from "@/lib/roomsList";

const UploadRoomsList = () => {
  const uploadModal = useUploadRoomsModal();
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const pathname = usePathname();

  const projectId = Number(pathname.split("/")[pathname.split("/").length - 2]);

  const [isLoading, setIsLoading] = useState(false);

  const { addRoom, removeRoom, rooms, cleanList } = usePopulateRoomsList();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {},
  });

  const onChange = (open: boolean) => {
    if (!open) {
      reset();
      uploadModal.onClose();
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async () => {
    try {
      setIsLoading(true);

      const { error: supabaseError } = await supabaseClient
        .from("room_info")
        .insert(rooms);

      if (supabaseError) {
        return toast.error(supabaseError.message);
      }

      router.refresh();
      setIsLoading(false);
      cleanList();
      toast.success("Помещения добавлены");
      reset();
      uploadModal.onClose();
    } catch (error) {
      toast.error("error.message");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Modal
      title="Создать перечень помещений"
      // description="Вам необходимо ввести основные параметры проекта, чтобы создать его."
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-3 h-fit"
      >
        {errors.address_country && errors.root?.type === "required" && (
          <span>Необходимо заполнить</span>
        )}

        <Input placeholder="Укажите название помещения" />
        <div className="flex flex-wrap gap-2">
          {roomsList.map((room) => (
            <Chips
              type="sm"
              className="text-white"
              key={room.label}
              onClick={() =>
                addRoom({
                  name: room.value,
                  project_id: projectId,
                  area: 4, //TODO: add area info
                  room_id: Number(
                    projectId.toString() + rooms.length.toString()
                  ),
                  room_number: rooms.length+1,
                })
              }
            >
              {room.value}
            </Chips>
          ))}
        </div>
        <div
          className="
            flex 
            flex-col 
            gap-2 
            text-sm 
            border-t-2 
            border-primary-border-dark 
            pt-4
            overflow-y-auto
            h-fit
            "
        >
          {rooms.map((item, index) => (
            <Chips
              onClose={() => removeRoom(item.room_id)} //TODO: add id on remove logic
              isActive
              className=""
              type="md"
              hasRightIcon
            >
              <span>{`${item.room_number?.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}. ${item.name}`}</span>
            </Chips>
          ))}
        </div>

        <Button
          disabled={isLoading}
          type="submit"
          mode="action"
          className="mt-4"
        >
          Добавить
        </Button>
      </form>
    </Modal>
  );
};

export default UploadRoomsList;
