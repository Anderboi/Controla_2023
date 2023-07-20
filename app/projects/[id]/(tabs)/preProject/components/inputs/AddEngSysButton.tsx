"use client";

import Button from "@/components/common/inputs/Button";
import useEngeneeringModal from "@/hooks/engeneering/useEngeneeringModal";
import React from "react";

interface Props {
  type: string | null;
  className?: string;
}

const AddEngSysButton = ({ type, className }: Props) => {
  const engModal = useEngeneeringModal();

  return (
    <Button
      className={className}
      mode="ghost_accent"
      size="small"
      onClick={() => type && engModal.onOpen(type)}
    >
      Добавить
    </Button>
  );
};

export default AddEngSysButton;
