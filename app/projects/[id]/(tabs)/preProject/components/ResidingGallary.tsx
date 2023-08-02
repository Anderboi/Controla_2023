"use client";

import React from "react";
import GallaryDataCard from "@/components/common/cards/GalleryDataCard";
import AddIcon from "@/components/common/icons/AddIcon";
import ChevronRightIcon from "@/components/common/icons/ChevronRightIcon";
import { VscPersonAdd, VscPerson } from "react-icons/vsc";
import useCommonModal from "@/hooks/useCommonModal";

const ResidingGallary = () => {
  const modal = useCommonModal();

  const handleOnClick = () => {
    modal.onOpen("Информация о проживающих", "residing");
  };

  const handleOnAdd = () => {
    modal.onOpen("Добавить информацию", "add_residing");
  };

  return (
    <>
      <GallaryDataCard
        size="md"
        className="bg-transparent sm:border border-dashed border-primary-border-dark"
        illustration={<VscPersonAdd className="" />}
        actionIcon={<AddIcon />}
        onClick={handleOnAdd}
      >
        <span>Добавить</span>
      </GallaryDataCard>

      <GallaryDataCard
        size="md"
        illustration={<VscPerson className="text-accent-dark" />}
        actionIcon={<ChevronRightIcon type='right'/>}
        onClick={handleOnClick}
      >
        <>
          <span>38 лет</span>
          <span>жен.</span>
        </>
      </GallaryDataCard>
    </>
  );
};

export default ResidingGallary;
