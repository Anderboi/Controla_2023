"use client";

import React from "react";
import GallaryDataCard from "@/components/common/cards/GalleryDataCard";
import ChevronRightIcon from "@/components/common/icons/ChevronRightIcon";

import { VscPerson } from "react-icons/vsc";

import { Database } from "@/types/supabase";
import useCommonModal from "@/hooks/useCommonModal";

interface ResidingCardProps {
  resident: Database["public"]["Tables"]["inhabitant_info"]["Row"];
}

const ResidingCard = ({ resident }: ResidingCardProps) => {
  const residentModal = useCommonModal();

  const handleClick = () => {
    if (!resident.name) {
      return;
    }
    residentModal.onOpen(resident.name, "null", resident);
  };

  return (
    <GallaryDataCard
      size="md"
      illustration={<VscPerson className="text-accent-dark" />}
      actionIcon={
        <ChevronRightIcon type="right" className="text-secondary-text-dark" />
      }
      onClick={handleClick}
    >
      <div className="flex flex-col sm:items-end">
        <span className="text-primary-text-dark">{resident.name}</span>
        <span className="text-secondary-text-dark">{resident.gender}</span>
        <span className="text-secondary-text-dark">{resident.age}</span>
      </div>
    </GallaryDataCard>
  );
};

export default ResidingCard;
