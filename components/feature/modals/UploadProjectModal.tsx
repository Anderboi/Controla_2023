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
import ModalAlt from "@/components/common/ModalAlt";

import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

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
      //client_id:'',
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
          //client_id: values.client_id,
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

        // const { error: engeneeringError } = await supabaseClient
        //   .from("engeneering_data")
        //   .insert({
        //     project_id: projectData.project_id,
        //     heating: null,
        //     conditioning: null,
        //     plumbing: null,
        //     electric: null,
        //   });

        // if (engeneeringError) {
        //   return toast.error(engeneeringError.message);
        // }
      }

      // router.refresh();

      setIsLoading(false);
      router.push(`projects/${projectData.project_id}/preProject`);
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
    <ModalAlt
      title="Создать новый проект"
      description="Вам необходимо ввести основные параметры проекта, чтобы создать его."
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="
          flex
          flex-col
          gap-y-3

          //relative
          //overflow-y-auto
          "
      >
        <div>
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
                type="number"
                id="building"
                disabled={isLoading}
                {...register("building", { required: true })}
                placeholder="№"
              />
              <Input
                label="Квартира"
                maxLength={60}
                type="number"
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
                h-fit 
                w-full 
                items-center 
                rounded-md 
                px-6 
                py-2.5
                text-start 
                indent-0 
                text-sm 
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
                h-fit
                w-full
                items-center
                rounded-md
                px-6
                py-2.5
                text-start
                indent-0
                text-sm
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
          <div className="">
            {/* //TODO: add choose client component */}
            <ContactsMultiSelector isMulti label="Клиенты" />
            <ContactsMultiSelector isMulti label="Команда" />
          </div>
          {/* //TODO: add choose team component */}

          {/* //? Upload file block */}
          <div>
            {/* <label className="mb-2 inline-block text-xs text-primary-text-dark">
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
          /> */}

            {/* Alt Upload */}
            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-xs font-medium leading-6 text-primary-text-dark"
              >
                Загрузите обложку проекта (Не обязательно)
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-primary-border-dark px-6 py-10">
                <div className="text-center">
                  <PhotoIcon
                    className="mx-auto h-12 w-12 text-primary-text-dark"
                    aria-hidden="true"
                  />
                  <div className="mt-4 flex text-sm leading-6 text-secondary-text-dark">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-accent-dark focus-within:outline-none focus-within:ring-2 focus-within:ring-accent-dark focus-within:ring-offset-2 hover:text-accent-light"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        // name="file-upload"
                        type="file"
                        className="sr-only"
                        {...register("cover_img", { required: false })}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-secondary-text-dark">
                    PNG, JPG up to 5MB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button
          disabled={isLoading}
          type="submit"
          mode="action"
          size="small"
          className="mt-4 w-full sticky bottom-6"
        >
          Создать
        </Button>
      </form>
    </ModalAlt>
  );
};

export default UploadProjectModal;
