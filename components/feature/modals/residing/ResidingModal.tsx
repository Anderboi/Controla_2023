"use client";

import React from "react";

import SideModal from "@/components/common/SideModalHeadless";
import useCommonModal from "@/hooks/useCommonModal";
import ResidingDataForm from "./ResidingDataForm";
import InfoIcon from "@/components/common/icons/InfoIcon";

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
        <div
          className="
            flex 
            flex-col
            divide-y-[1px]  
            divide-primary-border-dark 
            rounded-lg 
            bg-elevated-1-bg-dark 
            px-4
            "
        >
          <div className="flex items-center justify-between py-4 text-secondary-text-dark">
            <div>
              <span className="text-sm [text-wrap:balance]">- Возраст: </span>
              <span className="text-sm [text-wrap:balance]">
                {modal.data?.age}
              </span>
            </div>
            <span>
              <InfoIcon className="h-5 w-5 cursor-pointer text-sm text-secondary-text-dark" />
            </span>
          </div>

          <div className="flex items-center justify-between py-4 text-secondary-text-dark">
            <div>
              <span className="text-sm [text-wrap:balance]">- Пол: </span>
              <span className="text-sm [text-wrap:balance]">
                {modal.data?.gender}
              </span>
            </div>
            <span>
              <InfoIcon className="h-5 w-5 cursor-pointer text-sm text-secondary-text-dark" />
            </span>
          </div>

          <div className="flex items-center justify-between py-4 text-secondary-text-dark">
            <div>
              <span className="text-sm [text-wrap:balance]">
                - Ограничения по здоровью:{" "}
              </span>
              <span className="text-sm [text-wrap:balance]">
                {modal.data?.health_concerns}
              </span>
            </div>
            <span>
              <InfoIcon className="h-5 w-5 cursor-pointer text-sm text-secondary-text-dark" />
            </span>
          </div>

          <div className="flex items-center justify-between py-4 text-secondary-text-dark">
            <div>
              <span className="text-sm [text-wrap:balance]">- Увлечения: </span>
              <span className="text-sm [text-wrap:balance]">
                {modal.data?.lifestyle}
              </span>
            </div>
            <span>
              <InfoIcon className="h-5 w-5 cursor-pointer text-sm text-secondary-text-dark" />
            </span>
          </div>
        </div>
      </SideModal>
    );
  }
};

export default ResidingModal;
