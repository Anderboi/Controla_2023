"use client";

import React, { useState } from "react";
import Modal from "@/components/common/Modal";
import Input from "@/components/common/inputs/Input";
import Button from "@/components/common/inputs/Button";
import ContactsMultiSelector from "@/components/common/inputs/ContactsMultiSelector";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useUser } from "@/hooks/useUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import useUploadModal from "@/hooks/useUploadModal";

import { toast } from "react-hot-toast";
import uniqid from "uniqid";
import { Database } from "@/types/supabase";

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
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      address_country: "",
      address_city: "",
      address_street: "",
      area: "",
      storeys: 1,
      design_team: [],
      client: "",
      cover_img: null,
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

      const imageFile = values.cover_img !== "" ? values.cover_img?.[0] : null;
      let projectCover;
      if (!user) {
        toast.error("Missing User");
        return;
      }

      const uniqId = uniqid();

      const streetAddress = `${values.address_street} ${values.building} / ${values.room_number}`;

      //* Upload projectImage if it exists

      if (imageFile) {
        const { data: projectData, error: projectError } =
          await supabaseClient.storage
            .from("projects")
            .upload(`project-${uniqId}`, imageFile || null, {
              cacheControl: "3600",
              upsert: false,
            });
        projectCover = projectData?.path;

        // //? Если не удалось загрузить изображение, которое не обязательное к загрузке
        if (projectError) {
          // setIsLoading(false);
          return toast.error("Не удалось загрузить изображение");
        }
      }

      const { data: projectData, error: supabaseError } = await supabaseClient
        .from("projects")
        .insert({
          user_id: user.id,
          address_country: values.address_country,
          address_city: values.address_city,
          address_street: streetAddress,
          area: values.area,
          cover_img: imageFile ? projectCover : null,
        })
        .select()
        .single();

      if (supabaseError) {
        return toast.error(supabaseError.message);
      }

      if (projectData) {
        const { error: infoError } = await supabaseClient
          .from("project_info")
          .insert({
            project_id: projectData.project_id,
            purpose: values.purpose,
            storeys: values.storeys,
            residing: values.residing,
          });

        if (infoError) {
          return toast.error(infoError.message);
        }

        const { error: engeneeringError } = await supabaseClient
          .from("engeneering_data")
          .insert({
            project_id: projectData.project_id,
            heating: null,
            conditioning: null,
            plumbing: null,
            electric: null,
          });

        if (engeneeringError) {
          return toast.error(engeneeringError.message);
        }
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
        <div className="grid grid-cols-2 gap-3">
          <Input
            label="Страна"
            maxLength={32}
            type="text"
            id="address_country"
            disabled={isLoading}
            {...register("address_country", { required: true })}
            placeholder="Россия"
          />
          <Input
            label="Город"
            maxLength={32}
            type="text"
            id="address_city"
            disabled={isLoading}
            {...register("address_city", { required: true })}
            placeholder="Москва"
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Input
            label="Улица"
            maxLength={60}
            type="text"
            id="address_street"
            className=" w-full"
            disabled={isLoading}
            {...register("address_street", { required: true })}
            placeholder="ул. Тверская"
          />
          <div className="grid grid-cols-2 gap-3">
            <Input
              label="Дом"
              maxLength={60}
              type="text"
              id="building"
              disabled={isLoading}
              {...register("building", { required: true })}
              placeholder="№"
            />
            <Input
              label="Квартира"
              maxLength={60}
              type="text"
              id="room_number"
              disabled={isLoading}
              {...register("room_number", { required: true })}
              placeholder="№"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Input
            label="Площадь"
            type="number"
            id="area"
            disabled={isLoading}
            {...register("area", { required: true })}
            placeholder="кв.м."
          />
          <Input
            label="Кол-во жильцов"
            type="number"
            id="residing"
            disabled={isLoading}
            {...register("residing", { required: true })}
            placeholder="# человек"
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="w-full">
            <label htmlFor="purpose" className="text-xs">
              Назначнение
            </label>
            <select
              id="purpose"
              className=" 
                w-full 
                h-fit 
                px-6 
                py-2.5 
                rounded-md 
                text-start
                items-center 
                text-sm 
                indent-0 
                leading-3"
              {...register("purpose", { required: false })}
            >
              <option value={"Жилое"}>Жилое</option>
              <option value={"Коммерческое"}>Коммерческое</option>
              <option value={"Для аренды"}>Для аренды</option>
            </select>
          </div>
          <div className="w-full">
            <label htmlFor="storeys" className="text-xs">
              Этажность
            </label>
            <select
              id="storeys"
              className="
                w-full
                h-fit
                px-6
                py-2.5
                rounded-md
                text-start
                items-center
                text-sm
                indent-0
                leading-3
                "
              {...register("storeys", { required: false })}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </div>
        </div>

        {/* //TODO: add choose client component */}
        <ContactsMultiSelector isMulti label="Клиенты" />
        <ContactsMultiSelector isMulti label="Команда" />
        {/* //TODO: add choose team component */}

        {/* //? Upload file block */}
        <div>
          <label className="mb-2 inline-block text-xs text-primary-text-dark">
            {`Загрузите обложку проекта (Не обязательно)`}
          </label>
          <Input
            type="file"
            id="cover_img"
            disabled={isLoading}
            accept="image/*"
            className="
            focus:border-primary
            focus:shadow-te-primary relative m-0 block
            w-full min-w-0
            flex-auto cursor-pointer px-0
            py-4
            text-primary-text-dark transition
            duration-300
            ease-in-out 
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
            focus:text-neutral-700 
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
