"use client";

import React from "react";
import { usePathname } from "next/navigation";

import Modal from "@/components/common/Modal";

import useEngeneeringModal from "@/hooks/engeneering/useEngeneeringModal";
import EngineeringSystemCheckBlock from "./engTypes/EngineeringSystemCheckBlock";
import SideModal from "@/components/common/SideModal";
import { engSystems } from "@/lib/engeneering";
import InfoIcon from "@/components/common/icons/InfoIcon";

const EngeneeringModal = () => {
  const engModal = useEngeneeringModal();
  const pathname = usePathname();

  const projectId = Number(pathname.split("/")[pathname.split("/").length - 2]);

  const onChange = (open: boolean) => {
    if (!open) {
      engModal.onClose();
    }
  };

  //! switches
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
    // switch (engModal.type) {
    //   case "conditioning":
    //     return (
    //       <SideModal
    //         title="Система кондиционирования и вентиляции"
    //         isOpen={engModal.isOpen}
    //         onChange={onChange}
    //       >
    //         <EngineeringSystemCheckBlock type="conditioning" />
    //       </SideModal>
    //     );
    //     break;

    //   case "heating":
    //     return (
    //       <SideModal
    //         title="Система отопления"
    //         // description="Вам необходимо ввести основные параметры проекта, чтобы создать его."
    //         isOpen={engModal.isOpen}
    //         onChange={onChange}
    //       >
    //         <EngineeringSystemCheckBlock type="heating" />
    //       </SideModal>
    //     );

    //     break;

    //   case "plumbing":
    //     return (
    //       <SideModal
    //         title="Система водоподготовки и фильтрации"
    //         // description="Вам необходимо ввести основные параметры проекта, чтобы создать его."
    //         isOpen={engModal.isOpen}
    //         onChange={onChange}
    //       >
    //         <EngineeringSystemCheckBlock type="plumbing" />
    //       </SideModal>
    //     );

    //   default:
    //     return (
    //       <SideModal
    //         title="Нет информации по системам"
    //         // description="Вам необходимо ввести основные параметры проекта, чтобы создать его."
    //         isOpen={engModal.isOpen}
    //         onChange={onChange}
    //       >
    //         <span>Нет инфы</span>
    //       </SideModal>
    //     );
    // }
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
                <InfoIcon className="text-secondary-text-dark text-sm h-5 w-5 cursor-pointer" />
              </span>
            </div>
          ))}
        </div>
      </SideModal>
    );
  }
};

export default EngeneeringModal;
