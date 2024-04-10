"use client";

import React from "react";
import { usePathname } from "next/navigation";

import GallaryDataCard from "@/components/common/cards/GalleryDataCard";

import useCommonModal from "@/hooks/useCommonModal";
import { shallow } from "zustand/shallow";

import { VscPersonAdd } from "react-icons/vsc";
import { Plus, UserPlus } from 'lucide-react';

const AddResidentBlock = () => {
  const { onOpen } = useCommonModal(
    (state) => ({
      onOpen: state.onOpen,
    }),
    shallow
  );

  const pathname = usePathname();
  const projectId = Number(pathname.split("/")[pathname.split("/").length - 2]); //TODO: optimise, or make utility

  const handleOnClick = () => {
    onOpen("Информация о проживающих", "residing", projectId);
  };

  const handleOnAdd = () => {
    onOpen("Добавить информацию", "add_residing", projectId);
  };
  return (
    <GallaryDataCard
      size="md"
      className="
      border-dashed
      border-primary-bg-dark
      dark:border-accent-dark
      sm:border
      "
      illustration={<UserPlus />}
      actionIcon={<Plus />}
      onClick={handleOnAdd}
    >
      <span className='text-base text-accent-light dark:text-accent-dark'>Добавить</span>
    </GallaryDataCard>
  );
};

export default AddResidentBlock;
