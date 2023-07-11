"use client";

import Button from "@/components/common/inputs/Button";
import useEngeneeringModal from "@/hooks/engeneering/useEngeneeringModal";
import React from "react";

interface Props {
  type: string;
}

const AddEngSysButton = ({ type }: Props) => {
  const engModal = useEngeneeringModal();

  switch (type) {
    case "conditioning":
      return (
        <Button
          mode="action"
          size="small"
          onClick={() => engModal.onOpenConditioning()}
        >
          Добавить
        </Button>
      );
      break;
    case "plumbing":
      return (
        <Button
          mode="action"
          size="small"
          onClick={() => {return engModal.onOpenWater()}}
        >
          Добавить
        </Button>
      );
    case "heating":
      return (
        <Button
          mode="action"
          size="small"
          onClick={() => engModal.onOpenHeating()}
        >
          Добавить
        </Button>
      );
    default:
      return <span>Нет информации</span>;
      break;
  }
};

export default AddEngSysButton;
