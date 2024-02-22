"use client";

import Button from "../../common/inputs/Button";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useUploadModal from "@/hooks/useUploadModal";
import { MdOutlineAdd } from "react-icons/md";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";

const AddProjectButton = () => {
  const authModal = useAuthModal();
  const uploadModal = useUploadModal();
  const { user } = useUser();
  const router = useRouter();

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
      className="flex min-w-[48px] min-h-[48px] items-center justify-center border-none dark:bg-secondary-bg-dark"
      // onClick={() => router.push("projects/createproject/step1")}
      onClick={onClick}
    >
      <Plus size={24} />
    </Button>
  );
};

export default AddProjectButton;
