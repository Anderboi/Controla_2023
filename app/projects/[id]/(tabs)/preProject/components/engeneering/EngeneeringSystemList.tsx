"use client";

import React from "react";
import InfoDataGrid from "@/components/common/grids/InfoDataGrid";

import { engSystems } from "@/lib/engeneering";
import { Database } from "@/types/supabase";

import { twMerge } from "tailwind-merge";
import useEngeneeringModal from "@/hooks/engeneering/useEngeneeringModal";
import GallaryDataCard from "@/components/common/cards/GalleryDataCard";
import { ChevronRight } from "lucide-react";

interface Props {
  data: Database["public"]["Tables"]["engeneering_data"]["Row"];
}

const EngeneeringSystemList = ({ data }: Props) => {
  const engModal = useEngeneeringModal();

  const handleOnClick = (systemType: string) => {
    //@ts-ignore
    engModal.onOpen(systemType, data[systemType]); //TODO: fix this data[systemType]
  };

  return (
    <>
      <InfoDataGrid className="max-sm:hidden">
        {engSystems.map(({ name, label, icon }, index) => (
          <GallaryDataCard
            key={index}
            size="md"
            onClick={() => handleOnClick(name)}
            actionIcon={
              <ChevronRight type="right" className="text-secondary-text-dark" />
            }
            illustration={
              <span
                className={twMerge(
                  `!w-[48px] h-12
                  text-secondary-text-light
                  dark:text-secondary-text-dark
                  transition-all`,
                  data &&
                    Object.entries(data).find(
                      ([key, value]) => key === name
                    )?.[1] !== null
                    ? "text-accent-light dark:text-accent-dark"
                    : "text-primary-border-dark"
                )}
              >
                {icon}
              </span>
            }
          >
            <span className="text-balance">{label}</span>
          </GallaryDataCard>
        ))}
      </InfoDataGrid>
      <div className="sm:hidden">
        {engSystems.map(({ name, label, icon }, index) => (
          <GallaryDataCard
            key={index}
            size="md"
            onClick={() => handleOnClick(name)}
            actionIcon={
              <ChevronRight type="right" className="text-secondary-text-dark" />
            }
            illustration={
              <span
                className={twMerge(
                  `!w-[48px] h-12
                  text-secondary-text-light
                  dark:text-secondary-text-dark
                  transition-all`,
                  data &&
                    Object.entries(data).find(
                      ([key, value]) => key === name
                    )?.[1] !== null
                    ? "text-accent-light dark:text-accent-dark"
                    : "text-primary-border-dark"
                )}
              >
                {icon}
              </span>
            }
          >
            <span className="text-balance">{label}</span>
          </GallaryDataCard>
        ))}
      </div>
    </>
  );
};

export default EngeneeringSystemList;
