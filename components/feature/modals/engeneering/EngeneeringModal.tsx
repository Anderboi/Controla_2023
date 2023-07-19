"use client";

import React from "react";
import { usePathname } from "next/navigation";

import Modal from "@/components/common/Modal";

import useEngeneeringModal from "@/hooks/engeneering/useEngeneeringModal";
import EngineeringSystemCheckBlock from "./engTypes/EngineeringSystemCheckBlock";
import SideModal from "@/components/common/SideModal";

const EngeneeringModal = () => {
  const engModal = useEngeneeringModal();
  const pathname = usePathname();

  const projectId = Number(pathname.split("/")[pathname.split("/").length - 2]);

  const onChange = (open: boolean) => {
    if (!open && projectId) {
      engModal.onClose();
    }
  };

  //! switches
  if (!engModal.data) {
    switch (engModal.type) {
      case "conditioning":
        return (
          <SideModal
            title="Система кондиционирования и вентиляции"
            isOpen={engModal.isOpen}
            onChange={onChange}
          >
            <EngineeringSystemCheckBlock type="conditioning" />
          </SideModal>
        );
        break;

      case "heating":
        return (
          <SideModal
            title="Система отопления"
            // description="Вам необходимо ввести основные параметры проекта, чтобы создать его."
            isOpen={engModal.isOpen}
            onChange={onChange}
          >
            <EngineeringSystemCheckBlock type="heating" />
          </SideModal>
        );

        break;

      case "plumbing":
        return (
          <SideModal
            title="Система водоподготовки и фильтрации"
            // description="Вам необходимо ввести основные параметры проекта, чтобы создать его."
            isOpen={engModal.isOpen}
            onChange={onChange}
          >
            <EngineeringSystemCheckBlock type="plumbing" />
          </SideModal>
        );

      default:
        return (
          <SideModal
            title="Нет информации по системам"
            // description="Вам необходимо ввести основные параметры проекта, чтобы создать его."
            isOpen={engModal.isOpen}
            onChange={onChange}
          >
            <span>Нет инфы</span>
          </SideModal>
        );
    }
  } else {
    return (
      <SideModal
        title={engModal.type || "Data"}
        isOpen={engModal.isOpen}
        onChange={onChange}
      >
        <div className="flex flex-col gap-4">
          {engModal.data.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </SideModal>
    );
  }
};

export default EngeneeringModal;
