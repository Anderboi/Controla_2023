import React from "react";
import SideModal from "@/components/common/SideModalHeadless";
import InfoBlock from "../infoblock/InfoBlock";
import InfoItem from "@/components/common/InfoBlock/InfoItem";
import Button from "@/components/common/inputs/Button";
import useRoomInfoModal from "@/hooks/useRoomInfoModal";
import BasicMultiSelector from "@/components/common/inputs/BasicMultiSelector";
import { furnitureList } from "@/lib/furnitureEquipmentList";

const RoomInfoModal = () => {
  const roomModal = useRoomInfoModal();

  const project_id = roomModal.data?.project_id;

  if (!project_id) {
    return;
  }
  // const roomFurnishingData = await getRoomInfo(project_id);

  // console.log(
  //   roomFurnishingData.map((item) => {
  //     item.name;
  //   })
  // );
  const roomInfo = roomModal.data;

  const roomType = (type?: string) => {
    if (!roomInfo?.name) {
      return;
    }

    switch (type) {
      case "Гостиная": {
        return furnitureList.livingRoom;
      }
      case "Спальня" || "Мастер спальня" || "Детская комната": {
        return furnitureList.bedroom;
      }
      case "Ванная комната" || "Санузел": {
        return furnitureList.bathroom;
      }
      case "Кухня":
        {
          return furnitureList.kitchen;
        }
        break;

      default:
        {
          return undefined;
        }
        break;
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
      <InfoBlock
        label="Мебель"
        button={
          <div className="inline-flex space-x-4 pb-4">
            <div className="w-full">
              <BasicMultiSelector
                type="creatable"
                content={roomType(roomInfo?.name)}
                callback={() => {}} //TODO: add callback
              />
            </div>
            <Button mode="ghost_accent" size="small" className="mb-4 px-8">
              +
            </Button>
          </div>
        }
      >
        {
          <>
            <InfoItem
              content={roomInfo?.area?.toString() || "Не назначено"}
              title="Площадь"
            />
            <InfoItem
              content={roomInfo?.room_number.toString()}
              title="fdgfdg"
            />
            <InfoItem content="dfgfdg" title="fdgfdg" />
          </>
        }
      </InfoBlock>
      <InfoBlock
        label="Оборудование"
        button={
          <Button
            mode="ghost_accent"
            size="small"
            className=" text-secondary-text-dark mb-4"
          >
            +
          </Button>
        }
      >
        {
          <>
            <InfoItem
              content={roomInfo?.furnishing || ""}
              title="fd dfgdfg dfgdfg dfgdggfd"
            />
            <InfoItem content="dfgfdg" title="fdgfdg" />
          </>
        }
      </InfoBlock>
    </SideModal>
  );
};

export default RoomInfoModal;
