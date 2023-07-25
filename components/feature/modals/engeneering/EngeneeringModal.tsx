"use client";

import React from "react";

import useEngeneeringModal from "@/hooks/engeneering/useEngeneeringModal";
import EngineeringSystemCheckBlock from "./engTypes/EngineeringSystemCheckBlock";
import SideModal from "@/components/common/SideModal";
import { engSystems } from "@/lib/engeneering";
import InfoIcon from "@/components/common/icons/InfoIcon";

const EngeneeringModal = () => {
  const engModal = useEngeneeringModal();

  const onChange = (open: boolean) => {
    
    if (!open) {
      engModal.onClose();
    }
  };

  if (!engModal.data) {
    return (
      <SideModal
        title={
          engSystems.find(({ name, label }) => name === engModal.type)?.label ||
          "Data"
        }
        isOpen={engModal.isOpen}
        onChange={onChange}
      >
        <EngineeringSystemCheckBlock type={engModal.type} />
      </SideModal>
    );
  } else {
    return (
      <SideModal
        title={
          engSystems.find(({ name, label }) => name === engModal.type)?.label ||
          "Data"
        }
        isOpen={engModal.isOpen}
        onChange={onChange}
      >
        <div className="flex flex-col gap-4">
          {engModal.data.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <span key={index} className="text-sm ">
                - {item}
              </span>
              <span>
                <InfoIcon className="h-5 w-5 cursor-pointer text-sm text-secondary-text-dark" />
              </span>
            </div>
          ))}
        </div>
      </SideModal>
    );
  }
};

export default EngeneeringModal;
