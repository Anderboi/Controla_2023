'use client'

import React from "react";

import SideModal from "@/components/common/SideModal";
import useCommonModal from "@/hooks/useCommonModal";
import GalleryDataCard from "@/components/common/cards/GalleryDataCard";
import ResidingDataForm from "./ResidingDataForm";

const ResidingModal = () => {
  const modal = useCommonModal();

  const onChange = (open: boolean) => {
    if (!open) {
      modal.onClose();
    }
  };

  if (modal.type === "add_residing") {
    // ? Add Data
    return (
      <SideModal title={modal.title} isOpen={modal.isOpen} onChange={onChange}>
        {/* //! FORM */}
        <ResidingDataForm />
      </SideModal>
    );
  } else {
    //? Show Data
    return (
      <SideModal title={modal.title} isOpen={modal.isOpen} onChange={onChange}>
        <div className="flex flex-col gap-4">
          <GalleryDataCard>sdfsdfsdfsdf</GalleryDataCard>
        </div>
      </SideModal>
    );
  }
};

export default ResidingModal;
