import React from "react";
import Link from "next/link";

import ContainerBox from "@/components/common/ContainerBox";
import ContentBlock from "@/components/common/ContentBlock";

import useConditionModal from "@/hooks/engeneering/useConditionModal";
import useUploadModal from "@/hooks/useUploadModal";

const engSystems = [
  { label: "Система кондиционирования", name: "conditioning" },
  { label: "Система водоочистки" },
  { label: "Система отопления" },
  { label: "Система электроснабжения" },
];

const EngeneeringSystemsBlock = () => {


  return (
    <>
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
            // <Link href={`?name=${item}`}>
            // <Link href={`preProject/engModal`}>
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
              >
                <div>sd</div>
                <p>{item.label}</p>
              </ContainerBox>
            // </Link>
          ))}
        </div>
      </ContentBlock>
    </>
  );
};

export default EngeneeringSystemsBlock;
