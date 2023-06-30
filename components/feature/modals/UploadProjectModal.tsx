"use client";

import Modal from "@/components/common/Modal";
import useUploadModal from "@/hooks/useUploadModal";
import React, { useState } from "react";
import CreateNewProject from "../NewProject";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from '@/components/common/inputs/Input';

const UploadProjectModal = () => {
  const uploadModal = useUploadModal();
  const [isLoading, setIsLoading] = useState();

  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      address_country: "",
      address_city: "",
      address_street: "",
      area: "",
      design_team: [],
      client: "",
    },
  });

  const onChange = (open: boolean) => {
    if (!open) {
      reset();
      uploadModal.onClose();
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    // TODO: Upload to supabase
  };

  return (
    <Modal
      title="Создать новый проект"
      description="Вам необходимо ввести основные параметры проекта, чтобы создать его."
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          id="country"
          disabled={isLoading}
          {...register("country", { required: true })}
          placeholder="Укажите страну"
        />
      </form>
    </Modal>
  );
};

export default UploadProjectModal;
