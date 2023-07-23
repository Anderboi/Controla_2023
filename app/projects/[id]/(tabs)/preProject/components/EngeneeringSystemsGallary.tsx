"use client";

import React from "react";
import DataCard from "@/components/common/cards/DataCard";
import Illustration from "@/components/common/illustrations/engeneering/Illustrations";
import useEngeneeringModal from "@/hooks/engeneering/useEngeneeringModal";
import { engSystems } from "@/lib/engeneering";
import { Database } from "@/types/supabase";
import { twMerge } from "tailwind-merge";

interface Props {
  data: Database["public"]["Tables"]["engeneering_data"]["Row"];
}

const EngeneeringSystemsGallary = ({ data }: Props) => {
  const engModal = useEngeneeringModal();

  console.log(Boolean(data));
  

  const handleOnClick = (type: string) => {
    //@ts-ignore

    console.log(type, data[type]);

    //@ts-ignore
    // if (data[type] === null || undefined) {
    //@ts-ignore
    engModal.onOpen(type, data[type]); //TODO: fix this
    // } else {
    //@ts-ignore
    // engModal.loadData(data[type]);
    //@ts-ignore
    // engModal.onOpen(type);
    // }
  };

  return (
    <div
      className="
        grid
        grid-cols-1
        gap-3
        sm:grid-cols-2
        "
    >
      {engSystems.map(({ name, label }, index) => (
        <DataCard
          illustration={
            <Illustration
              type={name}
              size={60}
              className={twMerge(
                `
                fill-secondary-text-dark
                w-16
                h-16
                transition-all
                sm:-translate-x-8
                sm:rotate-12
                sm:group-hover:-translate-x-4
                `,
                data &&
                  Object.entries(data).find(
                    ([key, value]) => key === name
                  )?.[1] !== null
                  ? "fill-accent-dark"
                  : "fill-primary-border-dark"
              )}
            />
          }
          isFilled={
            data &&
            Object.entries(data).find(([key, value]) => key === name)?.[1] !==
              null
              ? true
              : false
          }
          onClick={() => handleOnClick(name)}
          // type={name}
          label={label || ""}
          key={index}
        />
      ))}
      {/* {Object.entries(data)
        .filter(([key, value]) => key !== "project_id")
        .map(([key, value], index) => (
          <DataCard
            illustration={
              <Illustration
                type={key}
                size={60}
                className={twMerge(
                  `
                    fill-secondary-text-dark
                    w-16
                    h-16
                    `,
                  !value ? "fill-primary-border-dark" : "fill-accent-dark"
                )}
              />
            }
            isFilled={value !== null || false}
            onClick={handleOnClick}
            type={key}
            label={
              engSystems.find(({ name, label }) => name === key)?.label || ""
            }
            key={index}
          />
        ))} */}
    </div>
  );
};

export default EngeneeringSystemsGallary;
