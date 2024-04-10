"use client";

import React from "react";

import useEngeneeringModal from "@/hooks/engeneering/useEngeneeringModal";
import EngineeringSystemCheckBlock from "./engTypes/EngineeringSystemCheckBlock";
import SideModal from "@/components/common/SideModalHeadless";
import { engSystems } from "@/lib/engeneering";
import { Info } from 'lucide-react';

const EngeneeringModal = () => {
  const engModal = useEngeneeringModal();

  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      engModal.onClose();
    }
  };

  const title = engSystems.find(({ name, label }) => name === engModal.type)?.label || "Data";

  return (
    <SideModal
      title={title}
      isOpen={engModal.isOpen}
      onChange={handleOpenChange}
    >
      {!engModal.data ? (
        <EngineeringSystemCheckBlock type={engModal.type} />
      ) : (
        <section
          className="
            flex 
            flex-col 
            divide-y-DEFAULT  
            divide-primary-border-dark 
            rounded-lg 
            bg-elevated-1-bg-dark 
            px-4
            "
        >
          {engModal.data.map((item, index) => (
            <article
              key={index}
              className="flex items-center justify-between gap-3 py-4 text-secondary-text-dark"
            >
              <span className="text-sm [text-wrap:balance]"> - {item}</span>
              <span>
                <Info className="size-5 cursor-pointer text-sm text-secondary-text-dark" />
              </span>
            </article>
          ))}
        </section>
      )}
    </SideModal>
  );
};

export default EngeneeringModal;
