'use client'

import React from 'react'
import GallaryDataCard from '@/components/common/cards/GalleryDataCard';
import AddIcon from '@/components/common/icons/AddIcon';
import useCommonModal from '@/hooks/useCommonModal';
import { usePathname } from 'next/navigation';
import { VscPersonAdd } from 'react-icons/vsc';

const AddResidentBlock = () => {
    const modal = useCommonModal();
    const pathname = usePathname();
    const projectId = Number(
      pathname.split("/")[pathname.split("/").length - 2]
    ); //TODO: optimise, or make utility

    const handleOnClick = () => {
      modal.onOpen("Информация о проживающих", "residing", projectId);
    };

    const handleOnAdd = () => {
      modal.onOpen("Добавить информацию", "add_residing", projectId);
    };
  return (
    <GallaryDataCard
      size="md"
      className="border-dashed border-primary-border-dark bg-transparent sm:border"
      illustration={<VscPersonAdd className="" />}
      actionIcon={<AddIcon />}
      onClick={handleOnAdd}
    >
      <span>Добавить</span>
    </GallaryDataCard>
  );
}

export default AddResidentBlock