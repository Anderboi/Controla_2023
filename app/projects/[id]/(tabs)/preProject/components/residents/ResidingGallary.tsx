import React from "react";
import getResidentsInfo from "@/actions/getResidentsInfo";
import AddResidentBlock from "./AddResidentBlock";
import GallaryDataCard from "@/components/common/cards/GalleryDataCard";
import { VscPerson } from "react-icons/vsc";
import ChevronRightIcon from "@/components/common/icons/ChevronRightIcon";

const ResidingGallary = async ({ project_id }: { project_id: number }) => {
  const residents = await getResidentsInfo(project_id);

  return (
    <>
      <AddResidentBlock />
      <div
        className="
          flex
          w-full
          gap-3
          "
      >
        {residents.map((resident, index) => (
          <GallaryDataCard
          key={index}
            size="md"
            illustration={<VscPerson className="text-accent-dark" />}
            actionIcon={
              <ChevronRightIcon
                type="right"
                className="text-secondary-text-dark"
              />
            }
            // onClick={handleOnClick}
          >
            <>
              <span>{resident.name}</span>
              <span className="text-secondary-text-dark">
                {resident.gender}
              </span>
              <span className="text-secondary-text-dark">{resident.age}</span>
            </>
          </GallaryDataCard>
        ))}
      </div>
    </>
  );
};

export default ResidingGallary;
