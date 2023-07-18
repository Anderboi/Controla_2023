"use client";

import React from "react";
import Button from "../../common/inputs/Button";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useUploadModal from "@/hooks/useUploadModal";
import { useRouter } from "next/navigation";
import { MdOutlineAdd } from "react-icons/md";

const AddProjectButton = () => {
  const authModal = useAuthModal();
  const { user } = useUser();
  const uploadModal = useUploadModal();

  const onClick = () => {
    if (!user) {
      return authModal.onOpen();
    }

    //TODO: check for subscription

    return uploadModal.onOpen();
  };

  return (
    <Button
      mode="ghost"
      corner="round"
      className="flex h-10 w-10 items-center justify-center border-none bg-secondary-bg-dark"
      onClick={onClick}
    >
      <MdOutlineAdd fontSize={24} />
    </Button>
  );
};

export default AddProjectButton;
