"use client";

import Button from "../../common/inputs/MyButton";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useUploadModal from "@/hooks/useUploadModal";
import { Plus } from "lucide-react";

const AddProjectButton = () => {
  const authModal = useAuthModal();
  const uploadModal = useUploadModal();
  const { user } = useUser();

  const onClick = () => {
    if (!user) {
      return authModal.onOpen();
    }
    return uploadModal.onOpen();
  };

  return (
    <Button
      mode="ghost"
      corner="round"
      className="
      flex
      sm:min-w-[48px]
      sm:min-h-[48px]
      items-center
      justify-center
      border-none
      sm:dark:bg-primary-bg-dark
      dark:text-secondary-text-dark
      "
      // onClick={() => router.push("projects/createproject/step1")}
      onClick={onClick}
    >
      <Plus size={24} />
    </Button>
  );
};

export default AddProjectButton;
