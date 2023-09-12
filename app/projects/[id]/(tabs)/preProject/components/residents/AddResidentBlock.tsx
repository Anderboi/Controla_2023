"use client";

import React from "react";
import { usePathname } from "next/navigation";

import GallaryDataCard from "@/components/common/cards/GalleryDataCard";
import AddIcon from "@/components/common/icons/AddIcon";

import useCommonModal from "@/hooks/useCommonModal";
import { shallow } from "zustand/shallow";

import { VscPersonAdd } from "react-icons/vsc";

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
      className="border-dashed border-primary-border-dark bg-transparent sm:border"
      illustration={<VscPersonAdd />}
      actionIcon={<AddIcon />}
      onClick={handleOnAdd}
    >
      <span>Добавить</span>
    </GallaryDataCard>
  );
};

export default AddResidentBlock;
