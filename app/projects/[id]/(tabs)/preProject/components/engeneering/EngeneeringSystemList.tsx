"use client";

import React from "react";
import DataCard from "@/components/common/cards/DataCard";
import InfoDataGrid from "@/components/common/grids/InfoDataGrid";
import Illustration from "@/components/common/illustrations/engeneering/Illustrations";

import { engSystems } from "@/lib/engeneering";
import { Database } from "@/types/supabase";

import { twMerge } from "tailwind-merge";
import useEngeneeringModal from "@/hooks/engeneering/useEngeneeringModal";
import GallaryDataCard from "@/components/common/cards/GalleryDataCard";
import { ChevronRight } from 'lucide-react';

interface Props {
  data: Database["public"]["Tables"]["engeneering_data"]["Row"];
}

const EngeneeringSystemList = ({ data }: Props) => {
  const engModal = useEngeneeringModal();

  const handleOnClick = (type: string) => {
    //@ts-ignore
    engModal.onOpen(type, data[type]); //TODO: fix this data[type]
  };
  
  return (
    <InfoDataGrid>
      {engSystems.map(({ name, label }, index) => (
        <GallaryDataCard
          key={index}
          size="md"
          onClick={() => handleOnClick(name)}
          actionIcon={
            <ChevronRight type="right" className="text-secondary-text-dark" />
          }
          illustration={
            <Illustration
              type={name}
              size={48}
              className={twMerge(
                `
                fill-secondary-text-dark
                //w-16
                //h-16
                transition-all
                `,
                data &&
                  Object.entries(data).find(
                    ([key, value]) => key === name
                  )?.[1] !== null
                  ? "fill-accent-light dark:fill-accent-dark"
                  : "fill-primary-border-dark"
              )}
            />
          }
        >
          <span className="//text-right [text-wrap:balance]">{label}</span>
        </GallaryDataCard>
      ))}
    </InfoDataGrid>
  );
};

export default EngeneeringSystemList;
