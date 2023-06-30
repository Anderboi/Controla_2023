"use client";

import Modal from "@/components/common/Modal";
import useUploadModal from "@/hooks/useUploadModal";
import React from "react";

const UploadProjectModal = () => {
  const onChange = (open: boolean) => {
    if (!open) {
      uploadModal.onClose();
    }
  };

  const uploadModal = useUploadModal();
  return (
    <Modal
      title="Создать новый проект"
      description="Вам необходимо ввести основные параметры проекта, чтобы создать его."
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      Form
    </Modal>
  );
};

export default UploadProjectModal;
