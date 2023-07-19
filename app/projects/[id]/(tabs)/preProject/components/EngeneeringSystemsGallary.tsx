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
    if (!data[type]) {
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
      {engSystems.map((item, index) => {
        return (
          <>
            {item.name === "conditioning" && (
              <DataCard
                illustration={
                  <Illustration
                    type={"conditioning"}
                    size={60}
                    className={twMerge(
                      `
                          fill-secondary-text-dark
                          w-16
                          h-16
                          `,
                      !data.conditioning
                        ? "fill-primary-border-dark"
                        : "fill-accent-dark"
                    )}
                  />
                }
                isFilled={
                  (data.conditioning && data.conditioning?.length > 0) || false
                }
                onClick={handleOnClick}
                // engeneeringData={engData.conditioning}
                type={item.name}
                label={item.label}
                key={index}
              />
            )}
            {item.name === "electric" && (
              <DataCard
                illustration={
                  <Illustration
                    type={"electric"}
                    size={60}
                    className={twMerge(
                      `
                          fill-secondary-text-dark
                          w-16
                          h-16
                          `,
                      !data.electric
                        ? "fill-primary-border-dark"
                        : "fill-accent-dark"
                    )}
                  />
                }
                isFilled={(data.electric && data.electric?.length > 0) || false}
                onClick={handleOnClick}
                // engeneeringData={engData.conditioning}
                type={item.name}
                label={item.label}
                key={index}
              />
            )}
            {item.name === "heating" && (
              <DataCard
                illustration={
                  <Illustration
                    type={"heating"}
                    size={60}
                    className={twMerge(
                      `
                          fill-secondary-text-dark
                          w-16
                          h-16
                          `,
                      !data.heating
                        ? "fill-primary-border-dark"
                        : "fill-accent-dark"
                    )}
                  />
                }
                isFilled={(data.heating && data.heating?.length > 0) || false}
                onClick={handleOnClick}
                // engeneeringData={engData.conditioning}
                type={item.name}
                label={item.label}
                key={index}
              />
            )}
            {item.name === "plumbing" && (
              <DataCard
                illustration={
                  <Illustration
                    type={"plumbing"}
                    size={60}
                    className={twMerge(
                      `
                          fill-secondary-text-dark
                          w-16
                          h-16
                          `,
                      !data.plumbing
                        ? "fill-primary-border-dark"
                        : "fill-accent-dark"
                    )}
                  />
                }
                isFilled={(data.plumbing && data.plumbing?.length > 0) || false}
                onClick={handleOnClick}
                // engeneeringData={engData.conditioning}
                type={item.name}
                label={item.label}
                key={index}
              />
            )}
          </>
        );
      })}
    </div>
  );
};

export default EngeneeringSystemsGallary;
