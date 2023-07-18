"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import toast from "react-hot-toast";

import CheckDataCard from "@/components/common/cards/CheckDataCard";
import Button from "@/components/common/inputs/Button";

import useEngeneeringModal from "@/hooks/engeneering/useEngeneeringModal";
import {engeneeringSystems} from "@/lib/engeneering";

interface BlockProps {
  type: "conditioning" | "plumbing" | "heating";
}

const EngineeringSystemCheckBlock = ({ type }: BlockProps) => {
  const supabaseClient = useSupabaseClient();
  const engModal = useEngeneeringModal();

  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const [array, setArray] = useState<string[]>([]);

  const projectId = Number(pathname.split("/")[pathname.split("/").length - 2]); //TODO: optimise, or make utility

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabaseClient
        .from("engeneering_data")
        .select(type)
        .eq("project_id", projectId);

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
  }, [supabaseClient, projectId]);

  const onSubmit = async () => {
    try {
      setIsLoading(true);

      if (type === "conditioning") {
        const { error: supabaseError } = await supabaseClient
          .from("engeneering_data")
          .upsert(
            { project_id: projectId, conditioning: array },
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
            { project_id: projectId, heating: array },
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
            { project_id: projectId, plumbing: array },
            { onConflict: "project_id" }
          );

        if (supabaseError) {
          return toast.error(supabaseError.message);
        }
      }

      setIsLoading(false);
      toast.success("Информация по кондиционированию и вентиляции добавлена");
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

  const sysArray =
    type === "conditioning"
      ? engeneeringSystems.conditioning
      : type === "heating"
      ? engeneeringSystems.heating
      : engeneeringSystems.plumbing;

  return (
    <form className="flex h-[450px] flex-col ">
      {/* Input Block */}
      <div
        className="
          flex 
          flex-col 
          gap-4 
          overflow-y-auto 
          no-scrollbar 
          bg-elevated-1-bg-dark
          rounded-lg
          "
      >
        {sysArray.map(({ name, label }, index) => (
          <CheckDataCard
            key={index}
            name={name}
            value={label}
            isChecked={array?.includes(label)}
            onChange={() => handleOnClick(label)}
          />
        ))}
      </div>
      {/* Button Block */}
      <div className="flex justify-end">
        <Button
          onClick={() => router.back()}
          disabled={isLoading}
          type="submit"
          mode="ghost"
          className="mt-4"
          size="small"
        >
          Отмена
        </Button>
        <Button
          onClick={onSubmit}
          // onClick={onSubmit}
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
