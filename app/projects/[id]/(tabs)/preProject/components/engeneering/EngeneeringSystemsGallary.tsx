"use client";

import React from "react";
import DataCard from "@/components/common/cards/DataCard";
import Illustration from "@/components/common/illustrations/engeneering/Illustrations";
import useEngeneeringModal from "@/hooks/engeneering/useEngeneeringModal";
import { engSystems } from "@/lib/engeneering";
import { Database } from "@/types/supabase";
import { twMerge } from "tailwind-merge";
import ContentBlockGrid from "@/components/common/grids/ContentBlockGrid";

interface Props {
  data: Database["public"]["Tables"]["engeneering_data"]["Row"];
}

const EngeneeringSystemsGallary = ({ data }: Props) => {
  const engModal = useEngeneeringModal();


  const handleOnClick = (type: string) => {
    //@ts-ignore
    engModal.onOpen(type, data[type]); //TODO: fix this data[type]
  };

  return (
    <ContentBlockGrid>
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
                //sm:-translate-x-8
                //sm:rotate-12
                //sm:group-hover:-translate-x-4
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
     
    </ContentBlockGrid>
  );
};

export default EngeneeringSystemsGallary;
