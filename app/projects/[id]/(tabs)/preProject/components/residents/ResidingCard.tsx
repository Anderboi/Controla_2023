'use client'

import React from 'react'
import GallaryDataCard from '@/components/common/cards/GalleryDataCard';
import ChevronRightIcon from "@/components/common/icons/ChevronRightIcon";

import { VscPerson } from "react-icons/vsc";

import { Database } from '@/types/supabase';

interface ResidingCardProps {
  resident: Database["public"]["Tables"]["inhabitant_info"]["Row"];
}

const ResidingCard = ({resident}: ResidingCardProps) => {
  return (
    <GallaryDataCard
      size="md"
      illustration={<VscPerson className="text-accent-dark" />}
      actionIcon={
        <ChevronRightIcon type="right" className="text-secondary-text-dark" />
      }
      onClick={()=>console.log('handleOnClick')}
    >
      <>
        <span>{resident.name}</span>
        <span className="text-secondary-text-dark">{resident.gender}</span>
        <span className="text-secondary-text-dark">{resident.age}</span>
      </>
    </GallaryDataCard>
  );
};

export default ResidingCard