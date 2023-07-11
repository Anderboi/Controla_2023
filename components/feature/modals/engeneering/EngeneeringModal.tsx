"use client";

import React from "react";
import { usePathname } from "next/navigation";

import Modal from "@/components/common/Modal";

import useEngeneeringModal from "@/hooks/engeneering/useEngeneeringModal";
import EngineeringSystemCheckBlock from './engTypes/EngineeringSystemCheckBlock';

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
  switch (engModal.type) {
    case "conditioning":
      return (
        <Modal
          title="Система кондиционирования и вентиляции"
          isOpen={engModal.isOpen}
          onChange={onChange}
        >
          <EngineeringSystemCheckBlock type="conditioning" />
        </Modal>
      );
      break;

    case "heating":
      return (
        <Modal
          title="Системы отопления"
          // description="Вам необходимо ввести основные параметры проекта, чтобы создать его."
          isOpen={engModal.isOpen}
          onChange={onChange}
        >
          <EngineeringSystemCheckBlock type="heating" />
        </Modal>
      );

      break;

    case "plumbing":
      return (
        <Modal
          title="Система водоподготовки и фильтрации"
          // description="Вам необходимо ввести основные параметры проекта, чтобы создать его."
          isOpen={engModal.isOpen}
          onChange={onChange}
        >
          <EngineeringSystemCheckBlock type="plumbing" />
        </Modal>
      );

    default:
      return (
        <Modal
          title="Нет информации по системам"
          // description="Вам необходимо ввести основные параметры проекта, чтобы создать его."
          isOpen={engModal.isOpen}
          onChange={onChange}
        >
          <span>Нет инфы</span>
        </Modal>
      );
  }
};

export default EngeneeringModal;
