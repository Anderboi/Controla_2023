"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import useUploadRoomsModal from "@/hooks/useUploadRoomsModal";
import usePopulateRoomsList from "@/hooks/usePopulateRoomsList";

import Modal from "@/components/common/Modal";
import Input from "@/components/common/inputs/Input";
import Button from "@/components/common/inputs/Button";
import Chips from "@/components/common/inputs/Chips";

import { toast } from "react-hot-toast";
import roomsList from "@/lib/roomsList";

const UploadRoomsList = () => {
  const uploadModal = useUploadRoomsModal();
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const pathname = usePathname();

  const projectId = Number(pathname.split("/")[pathname.split("/").length - 2]);

  const [isLoading, setIsLoading] = useState(false);
  const [inputText, setInputText] = useState("");

  const { addRoom, removeRoom, rooms, cleanList } = usePopulateRoomsList();

  const onChange = (open: boolean) => {
    if (!open) {
      cleanList();
      uploadModal.onClose();
    }
  };

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      rooms.map((room, index) => {
        (room.room_number = index),
          (room.room_id = Number(
            room.project_id?.toString() + index.toString()
          ));
      });

      const { error: supabaseError } = await supabaseClient
        .from("room_info")
        .insert(
          rooms.map((room, index) => {
            room.room_number = index + 1;
            room.room_id = Number(
              room.project_id?.toString() + index.toString()
            );
            return room;
          })
        );

      if (supabaseError) {
        return toast.error(supabaseError.message);
      }

      router.refresh();
      setIsLoading(false);
      cleanList();
      toast.success("Помещения добавлены");
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
        onSubmit={(e) => {
          e.preventDefault();
          
          addRoom({
            name: inputText,
            area: null,
            project_id: projectId,
            room_id: rooms.length + 1,
            room_number: null,
          });
          setInputText("");
        }}
      >
        <Input
          type="text"
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          placeholder="Укажите название помещения"
          value={inputText}
          name="name"
          id="name"
        />
      </form>
      <div className="flex flex-col gap-y-3 pt-6 h-fit">
        <div className="flex flex-wrap gap-2">
          {roomsList.map((room, index) => (
            <Chips
              type="sm"
              className="text-white"
              key={room.label}
              onClick={() =>
                addRoom({
                  name: room.value,
                  project_id: projectId,
                  area: null, //TODO: add area info
                  room_id: Number(projectId.toString() + index.toString()),
                  room_number: rooms.length + 1,
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
            max-h-[20vh]
            overflow-y-scroll
            no-scrollbar
            h-fit
            "
        >
          {rooms.map((item, index) => (
            <Chips
              key={index}
              onClose={() => {
                removeRoom(item.room_id);
              }}
              isActive
              type="md"
              hasRightIcon
            >
              <span>{item.name}</span>
            </Chips>
          ))}
        </div>
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
    </Modal>
  );
};

export default UploadRoomsList;
