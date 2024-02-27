"use client";

import React from "react";
import GallaryDataCard from "@/components/common/cards/GalleryDataCard";
import useCommonModal from "@/hooks/useCommonModal";

import { Database } from "@/types/supabase";
import { ChevronRight, CircleUser } from 'lucide-react';

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
      illustration={
        <CircleUser  className="text-accent-light dark:text-accent-dark" />
      }
      actionIcon={
        <ChevronRight className="text-secondary-text-light dark:text-secondary-text-dark" />
      }
      onClick={handleClick}
    >
      <div className="flex flex-col sm:items-end">
        <span className="text-primary-text-light dark:text-primary-text-dark text-base">
          {resident.name}
        </span>
        <span className="text-secondary-text-light dark:text-secondary-text-dark text-xs">
          {resident.gender}
        </span>
        <span className="text-secondary-text-light dark:text-secondary-text-dark text-xs">
          {resident.age}
        </span>
      </div>
    </GallaryDataCard>
  );
};

export default ResidingCard;
