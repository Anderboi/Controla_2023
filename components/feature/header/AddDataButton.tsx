"use client";

import React from "react";
import Button from "../../common/inputs/MyButton";
// import useAuthModal from "@/hooks/useAuthModal";
// import { useUser } from "@/hooks/useUser";
import { MdOutlineAdd } from "react-icons/md";
import useUploadDataModal from "@/hooks/useUploadDataModal";

const AddDataButton = () => {
  // const authModal = useAuthModal();
  // const { user } = useUser();
  const uploadModal = useUploadDataModal();

  const onClick = () => {
    // if (!user) {
    //   return authModal.onOpen();
    // }

    return uploadModal.onOpen();
  };

  return (
    <Button
      mode="ghost"
      corner="round"
      className="flex size-10 items-center justify-center border-none bg-secondary-bg-dark"
      onClick={onClick}
    >
      <MdOutlineAdd fontSize={24} />
    </Button>
  );
};

export default AddDataButton;
