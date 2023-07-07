import ContainerBox from "@/components/common/ContainerBox";
import ContentBlock from "@/components/common/ContentBlock";
import React from "react";

const EngeneeringSystemsBlock = () => {
  return (
    <ContentBlock title="Инженерные системы">
      <ContainerBox
        classname="
        flex
        flex-row
        gap-2
        bg-elevated-1-bg-dark
        overflow-auto
        "
      >
        <ContainerBox
          type="card"
          classname="
          w-[180px]
          min-h-[220px]
          break-all
          bg-elevated-2-bg-dark
          flex
          flex-col
          justify-between
          items-end
          text-end
          "
        >
          <div>sd</div>
          <p>
            Система <br /> кондиционирования
          </p>
        </ContainerBox>

        <ContainerBox
          type="card"
          classname="
          w-[180px]
          min-h-[220px]
          break-word
          bg-elevated-2-bg-dark
          flex
          flex-col
          justify-between
          items-end
          text-end
          overflow-clip
          "
        >
          <div>sd</div>
          <p>
            Система <br /> водоочистки
          </p>
        </ContainerBox>

        <ContainerBox
          type="card"
          classname="
          w-[180px]
          min-h-[220px]
          break-word
          bg-elevated-2-bg-dark
          flex
          flex-col
          justify-between
          items-end
          text-end
          "
        >
          <div>sd</div>
          <p>
            Система <br /> отопления
          </p>
        </ContainerBox>

        <ContainerBox
          type="card"
          classname="
          w-[180px]
          min-h-[220px]
          break-all
          bg-elevated-2-bg-dark
          flex
          flex-col
          justify-between
          items-end
          text-end
          "
        >
          <div>sd</div>
          <p>
            Система <br /> электроснабжения
          </p>
        </ContainerBox>
      </ContainerBox>
    </ContentBlock>
  );
};

export default EngeneeringSystemsBlock;
