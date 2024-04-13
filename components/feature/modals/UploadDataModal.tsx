"use client";

import React, { useState } from "react";
import Button from "@/components/common/inputs/MyButton";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useUser } from "@/hooks/useUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";

import { toast } from "react-hot-toast";
import uniqid from "uniqid";
import Modal from "@/components/common/Modal";

import AsyncSelectContactComponent from "@/components/common/inputs/AsyncSelectContactComponent";
import { twMerge } from "tailwind-merge";
import useUploadDataModal from "@/hooks/useUploadDataModal";

const UploadDataModal = () => {
  const uploadModal = useUploadDataModal();

  const { user } = useUser();
  const supabaseClient = useSupabaseClient();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {},
  });

  //? Confirm on closing or missclicking
  const handleClose = () => {
    const isConfirmed = confirm(
      `Are you sure you want to close window? All your data will be lost.`
    );

    if (isConfirmed) {
      reset();
      uploadModal.onClose();
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    try {
      setIsLoading(true);

      //! ?
      const uniqId = uniqid();

      const { data: baseData, error: baseError } = await supabaseClient
        .from("database")
        .insert({})
        .select()
        .single();

      if (baseError) {
        return toast.error(baseError.message);
      }

      setIsLoading(false);
      router.push(`projects/${baseData.project_id}/preProject`);
      toast.success("Проект создан");
      reset();
      uploadModal.onClose();
    } catch (error) {
      toast.error("error.message");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      title="Создать новый проект"
      description="Вам необходимо ввести основные параметры проекта, чтобы создать его."
      isOpen={uploadModal.isOpen}
      onChange={handleClose}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="
          grid 
          grid-cols-2 
          gap-4
          "
      >
        <div>
          <label
            className="block text-sm font-medium"
            htmlFor="address_country"
          >
            Страна
          </label>
          <input
            type="text"
            maxLength={32}
            id="address_country"
            disabled={isLoading}
            {...register("address_country", { required: true, minLength: 3 })}
            placeholder="Укажите страну"
            className={twMerge(
              errors.address_country && `border-red-500 ring-red-500`
            )}
          />
        </div>
        <div>
          <label className="block text-sm font-medium" htmlFor="address_city">
            Город
          </label>
          <input
            type="text"
            maxLength={32}
            id="address_city"
            disabled={isLoading}
            {...register("address_city", { required: true })}
            placeholder="Укажите город"
            className={twMerge(
              errors.address_city && `border-red-500 ring-red-500`
            )}
          />
        </div>
        <div>
          <label className="block text-sm font-medium" htmlFor="address_street">
            Улица
          </label>
          <input
            type="text"
            maxLength={60}
            id="address_street"
            disabled={isLoading}
            {...register("address_street", {
              required: "Street address is required",
            })}
            placeholder="Укажите улицу"
            className={twMerge(
              errors.address_street && `border-red-500 ring-red-500`
            )}
          />
        </div>

        {/* //? Selector Components Block */}
        <div className="col-span-2">
          <label htmlFor="client_id" className="block text-sm font-medium">
            Клиент
          </label>
          <AsyncSelectContactComponent control={control} name="client_id" />
        </div>
        <div className="col-span-2">
          <label htmlFor="client_id" className="block text-sm font-medium">
            Команда
          </label>
          <AsyncSelectContactComponent
            control={control}
            isMultiple
            name="team"
          />
        </div>

        <Button
          disabled={isLoading}
          type="submit"
          mode="action"
          size="small"
          className="sticky bottom-6 col-span-2 mt-4"
        >
          Создать
        </Button>
      </form>
    </Modal>
  );
};

export default UploadDataModal;
