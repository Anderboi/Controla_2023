"use client";

import ContainerBox from "@/components/common/ContainerBox";
import ContentBlock from "@/components/common/ContentBlock";
import useUploadModal from "@/hooks/useUploadModal";
import React from "react";

const engSystems = [
  "Система кондиционирования",
  "Система водоочистки",
  "Система отопления",
  "Система электроснабжения",
];

const EngeneeringSystemsBlock = () => {
  const conditionModal = useUploadModal(); //TODO: Нужен свой hook

  const onClick = () => {
    //TODO: check for subscription

    return conditionModal.onOpen();
  };

  return (
    <ContentBlock title="Инженерные системы">
      <div
        className="
        w-full
        px-6
        py-2
        flex
        flex-row
        gap-6
        overflow-auto
        "
      >
        {engSystems.map((item) => (
          <ContainerBox
            type="card"
            classname="
            w-[184px]
            min-h-[230px]
            break-all
            bg-elevated-1-bg-dark
            flex
            flex-col
            justify-between
            items-end
            text-end
            hover:bg-elevated-2-bg-dark
            "
            onClick={onClick}
          >
            <div>sd</div>
            <p>{item}</p>
          </ContainerBox>
        ))}
      </div>
    </ContentBlock>
  );
};

export default EngeneeringSystemsBlock;
