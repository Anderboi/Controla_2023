"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import toast from "react-hot-toast";

import CheckDataCard from "@/components/common/cards/CheckDataCard";
import Button from "@/components/common/inputs/MyButton";

import useEngeneeringModal from "@/hooks/engeneering/useEngeneeringModal";
import { engeneeringSystems } from "@/lib/engeneering";

export interface EngeneeringType {
  type: "conditioning" | "heating" | "plumbing" | "electric";
}

const EngineeringSystemCheckBlock = ({ type }: EngeneeringType) => {
  const supabaseClient = useSupabaseClient();
  const engModal = useEngeneeringModal();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [array, setArray] = useState<string[]>([]);

  // ? ProjectId from url [id]
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchData = async () => {
      if (!type) {
        return;
      }
      const { data, error } = await supabaseClient
        .from("engeneering_data")
        .select(type)
        .eq("project_id", id);

      if (error) toast.error(error.message);

      //! обязательно проверять условие (имеет значение)
      // @ts-ignore
      if (data && data?.[type]) {
        // @ts-ignore
        setArray(data?.[type]);
      } else {
        setArray([]);
      }
    };

    fetchData();
  }, [supabaseClient, id, type]);

  const onSubmit = async () => {
    try {
      setIsLoading(true);

      if (type === "conditioning") {
        const { error: supabaseError } = await supabaseClient
          .from("engeneering_data")
          .upsert(
            { project_id: id, conditioning: array },
            { onConflict: "project_id" }
          );

        if (supabaseError) {
          return toast.error(supabaseError.message);
        }
      }
      if (type === "heating") {
        const { error: supabaseError } = await supabaseClient
          .from("engeneering_data")
          .upsert(
            { project_id: id, heating: array },
            { onConflict: "project_id" }
          );

        if (supabaseError) {
          return toast.error(supabaseError.message);
        }
      }
      if (type === "plumbing") {
        const { error: supabaseError } = await supabaseClient
          .from("engeneering_data")
          .upsert(
            { project_id: id, plumbing: array },
            { onConflict: "project_id" }
          );

        if (supabaseError) {
          return toast.error(supabaseError.message);
        }
      }
      if (type === "electric") {
        const { error: supabaseError } = await supabaseClient
          .from("engeneering_data")
          .upsert(
            { project_id: id, electric: array },
            { onConflict: "project_id" }
          );

        if (supabaseError) {
          return toast.error(supabaseError.message);
        }
      }

      setIsLoading(false);
      toast.success("Данные успешно добавлены");
    } catch (error) {
      toast.error("error.message");
    } finally {
      setIsLoading(false);
      engModal.onClose();
      router.refresh(); // Выдает результат на странице сразу
    }
  };

  const handleOnClick = (value: string) => {
    if (array && array.includes(value)) {
      setArray(array.filter((item) => item !== value));
    } else {
      setArray((oldValue) => [...oldValue, value]);
    }
  };

  const systemArray = engeneeringSystems[type] || [];
  // type === "conditioning"
  //   ? engeneeringSystems.conditioning
  //   : type === "heating"
  //   ? engeneeringSystems.heating
  //   : engeneeringSystems.plumbing;

  return (
    <form className="flex flex-col">
      {/*//? Input Block */}
      <div
        className="
          relative
          flex
          flex-col
          gap-2
          overflow-y-auto 
          rounded-lg 
          bg-transparent
          no-scrollbar
          "
      >
        {systemArray.map(({ name, label }, index) => (
          <CheckDataCard
            key={index}
            name={name}
            value={label}
            isChecked={array?.includes(label)}
            onChange={() => handleOnClick(label)}
          />
        ))}
      </div>
      {/*//? Button Block */}
      <div
        className="
          sticky 
          bottom-0
          flex
          justify-end
          bg-secondary-bg-dark
          pb-4
          "
      >
        <Button
          onClick={() => engModal.onClose()}
          disabled={isLoading}
          type="button"
          mode="ghost"
          className="mt-4"
          size="small"
        >
          Отмена
        </Button>
        <Button
          onClick={onSubmit}
          disabled={isLoading}
          type="submit"
          mode="action"
          className="mt-4"
          size="small"
        >
          Добавить
        </Button>
      </div>
    </form>
  );
};

export default EngineeringSystemCheckBlock;
