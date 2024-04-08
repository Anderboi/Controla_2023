"use client";

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useUploadModal from "@/hooks/useUploadModal";
import { Plus } from "lucide-react";
import { Button } from '@/components/ui/button';

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
      size={"icon"}
      variant={"secondary"}
      className="
          dark:bg-transparent
          "
      // onClick={() => router.push("projects/createproject/step1")}
      onClick={onClick}
    >
      <Plus size={24} />
    </Button>
  );
};

export default AddProjectButton;
