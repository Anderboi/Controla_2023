"use client";

import DataCard from "@/components/common/cards/DataCard";
import Illustration from "@/components/common/illustrations/engeneering/Illustrations";
import useEngeneeringModal from "@/hooks/engeneering/useEngeneeringModal";
import { engSystems } from "@/lib/engeneering";
import { Database } from "@/types/supabase";
import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  data: Database["public"]["Tables"]["engeneering_data"]["Row"];
}

const EngeneeringSystemsGallary = ({ data }: Props) => {
  const engModal = useEngeneeringModal();

  const handleOnClick = (type: string) => {
    //@ts-ignore
    if (data[type] === null) {
      //@ts-ignore
      engModal.onOpen(type);
    } else {
      //@ts-ignore
      engModal.loadData(data[type]);
      //@ts-ignore
      engModal.onOpen(type);
    }
  };

  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        gap-4
        "
    >
      {Object.entries(data)
        .filter((item) => item[0] !== "project_id")
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
        ))}
    </div>
  );
};

export default EngeneeringSystemsGallary;
