"use client";

import Modal from "@/components/common/Modal";
import useUploadModal from "@/hooks/useUploadModal";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "@/components/common/inputs/Input";
import Button from "@/components/common/inputs/Button";
import { toast } from "react-hot-toast";
import { useUser } from "@/hooks/useUser";
import uniqid from "uniqid";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import ContactsLiveSearch from '@/components/common/inputs/ContactsLiveSearch';
import ContactsMultiSelector from '@/components/common/inputs/ContactsMultiSelector';

const UploadProjectModal = () => {
  const uploadModal = useUploadModal();
  const { user } = useUser();
  const supabaseClient = useSupabaseClient();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      address_country: "",
      address_city: "",
      address_street: "",
      area: "",
      design_team: [],
      client: "",
      cover_img: "",
    },
  });
  
 

  const onChange = (open: boolean) => {
    if (!open) {
      reset();
      uploadModal.onClose();
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    try {
      setIsLoading(true);

      const imageFile = values.cover_img?.[0];

      if (!imageFile || !user) {
        toast.error("Missing Files");
        return;
      }

      const uniqId = uniqid();

      //* Upload projectImage
      const { data: projectData, error: projectError } =
        await supabaseClient.storage
          .from("projects")
          .upload(`project-${uniqId}`, imageFile, {
            cacheControl: "3600",
            upsert: false,
          });

      // //? Если не удалось загрузить изображение, которое не обязательное к загрузке
      if (projectError) {
        setIsLoading(false);
        return toast.error("Не удалось загрузить изображение");
      }

      const { error: supabaseError } = await supabaseClient
        .from("projects")
        .insert({
          user_id: user.id,
          address_country: values.address_country,
          address_city: values.address_city,
          address_street: values.address_street,
          area: values.area,
          cover_img: projectData.path,
        });

      if (supabaseError) {
        return toast.error(supabaseError.message);
      }

      router.refresh();
      // router.push(`/${8}/preProject`);

      setIsLoading(false);
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
      onChange={onChange}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-3">
        <Input
          maxLength={32}
          type="text"
          id="address_country"
          disabled={isLoading}
          {...register("address_country", { required: true })}
          placeholder="Укажите страну"
        />
        <Input
          maxLength={32}
          type="text"
          id="address_city"
          disabled={isLoading}
          {...register("address_city", { required: true })}
          placeholder="Укажите город"
        />
        <Input
          maxLength={60}
          type="text"
          id="address_street"
          disabled={isLoading}
          {...register("address_street", { required: true })}
          placeholder="Укажите улицу и номер дома / 'квартиры'"
        />
        <Input
          type="number"
          id="area"
          disabled={isLoading}
          {...register("area", { required: true })}
          placeholder="Укажите площадь объекта"
        />

        {/* //TODO: add choose client component */}
        {/* <ContactsLiveSearch/> */}
        <ContactsMultiSelector/>
        {/* //TODO: add choose team component */}

        {/* //? Upload file block */}
        <div>
          <label className="mb-2 inline-block text-primary-text-dark text-sm">
            Загрузите обложку проекта
          </label>
          <Input
            type="file"
            id="cover_img"
            disabled={isLoading}
            accept="image/*"
            className="
            text-primary-text-dark
            relative m-0 block flex-auto
            px-0 py-4
            transition duration-300 ease-in-out
            cursor-pointer
            w-full min-w-0
            file:-my-4
            file:overflow-hidden 
            file:rounded-none 
            file:border-0 
            file:border-solid 
            file:border-inherit 
            file:bg-neutral-100 
            file:px-3 
            file:py-4
            file:text-neutral-700 
            file:transition
            file:duration-150 
            file:ease-in-out 
            file:[border-inline-end-width:1px] 
            file:[margin-inline-end:0.75rem]
            hover:file:bg-neutral-200 
            focus:border-primary 
            focus:text-neutral-700 
            focus:shadow-te-primary 
            focus:outline-none
            "
            {...register("cover_img", { required: false })}
          />
        </div>
        <Button
          disabled={isLoading}
          type="submit"
          mode="action"
          className="mt-4"
        >
          Создать
        </Button>
      </form>
    </Modal>
  );
};

export default UploadProjectModal;
