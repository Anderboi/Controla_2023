"use client";

import BasicMultiSelector from "@/components/common/inputs/BasicMultiSelector";
import { finishingList, furnitureList } from "@/lib/furnitureEquipmentList";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import InfoBlock from "../infoblock/InfoBlock";
import InfoItem from "@/components/common/InfoBlock/InfoItem";

interface Props {
  title?: string;
  project_id: number;
}

const EquipmentBlock = ({ project_id, title }: Props) => {
  const roomType = (type?: string) => {
    if (!title) {
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

  const [equipment, setEquipment] = useState<
    { label: string; value: string }[]
  >([]);
  const router = useRouter();
  const supabase = useSupabaseClient();
  const onSubmit = async () => {
    const array = equipment.map((item) => ({
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

  return (
    <InfoBlock
      label="Оборудование"
      button={
        <div className="space-y-4 pb-4 w-full">
          <BasicMultiSelector
            type="creatable"
            label="Напольное покрытие"
            content={finishingList.floor}
            isMulti={false}
            callback={() => {}}
          />
          <BasicMultiSelector
            type="creatable"
            content={[]}
            isMulti={false}
            callback={() => {}}
          />
          <BasicMultiSelector
            type="creatable"
            content={[]}
            isMulti={false}
            callback={() => {}}
          />
          {/* <label htmlFor="gender" className="block text-sm font-medium">
              Пол
            </label>
            <select id="gender" {...register("gender", { required: false })}>
              <option defaultValue={"-"}>--</option>
              <option value={"Мужской"}>Мужской</option>
              <option value={"Женский"}>Женский</option>
            </select> */}
        </div>
      }
    >
      {
        <>
          <InfoItem
            content={
              // roomInfo?.area?.toString() ||
              "Не назначено"
            }
            title="Площадь"
          />
          <InfoItem
            content={
              // roomInfo?.room_number.toString()
              "ert"
            }
            title="fdgfdg"
          />
          <InfoItem content="dfgfdg" title="fdgfdg" />
        </>
      }
    </InfoBlock>
  );
};

export default EquipmentBlock;
