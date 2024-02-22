"use client";

import React, { useState } from "react";
import Button from "@/components/common/inputs/Button";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useUser } from "@/hooks/useUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import useUploadModal from "@/hooks/useUploadModal";

import { toast } from "react-hot-toast";
import uniqid from "uniqid";
import Modal from "@/components/common/Modal";

import { PhotoIcon } from "@heroicons/react/24/solid";
import AsyncSelectContactComponent from "@/components/common/inputs/AsyncSelectContactComponent";
import { twMerge } from "tailwind-merge";
import { schemaData } from "@/lib/workingStageSupabaseFillRows";
import { Input } from '@/components/ui/input';

const UploadProjectModal = () => {
  const uploadModal = useUploadModal();
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
    defaultValues: {
      address_country: "",
      address_city: "",
      address_street: "",
      area: "",
      storeys: 1,
      design_team: [],
      client: "",
      cover_img: null,
      client_id: "",
    },
  });

  //? Confirm on closing or missclicking
  const handleClose = () => {
    const isConfirmed = confirm(
      `Вы уверены что хотите закрыть окно? Все данные будут потеряны.`
    );

    if (isConfirmed) {
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
          client_id: values.client_id.value,
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
            stage: 1,
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

        // ? fill set of checkpoints for working stage page
        const wsData = schemaData(projectData.project_id);
        const { error: schemasError } = await supabaseClient
          .from("working_stage")
          .insert(wsData);

        if (schemasError) {
          return toast.error(schemasError.message);
        }
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
            className="block text-sm font-medium leading-6 text-secondary-text-dark"
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
              errors.address_country && `border-red-500 ring-red-500`,
              `block flex-1 border-0 bg-elevated-2-bg-dark py-1.5 px-3 focus:ring-1 sm:text-sm sm:leading-6 placeholder:text-xs`
            )}
          />
          {/* <small
            className={twMerge(
              "opacity-0",
              errors.address_country && "text-xs text-red-500 opacity-100"
            )}
          >
            {"Country is required"}
          </small> */}
        </div>
        <div>
          <label
            className="block text-sm font-medium text-secondary-text-dark"
            htmlFor="address_city"
          >
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
          {/* <small
            className={twMerge(
              "opacity-0",
              errors.address_city && "text-xs text-red-500 opacity-100"
            )}
          >
            {"City is required"}
          </small> */}
        </div>
        <div>
          <label
            className="block text-sm font-medium text-secondary-text-dark"
            htmlFor="address_street"
          >
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
          {/* <small
            className={twMerge(
              "opacity-0",
              errors.address_street && "text-xs text-red-500 opacity-100"
            )}
          >
            {"Street address is required"}
          </small> */}
        </div>
        <div className="flex gap-4">
          <div>
            <label
              className="block text-sm font-medium text-secondary-text-dark"
              htmlFor="building"
            >
              Дом
            </label>
            <input
              type="number"
              maxLength={5}
              id="building"
              disabled={isLoading}
              {...register("building", { required: true })}
              placeholder="№"
              className={twMerge(
                errors.building && `border-red-500 ring-red-500`
              )}
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-secondary-text-dark"
              htmlFor="room_number"
            >
              Кв.
            </label>
            <input
              type="number"
              maxLength={5}
              id="room_number"
              disabled={isLoading}
              {...register("room_number", { required: false })}
              placeholder="№"
            />
          </div>
        </div>
        <div>
          <label
            className="block text-sm font-medium text-secondary-text-dark"
            htmlFor="area"
          >
            Площадь
          </label>
          <input
            type="number"
            min={0}
            maxLength={60}
            id="area"
            disabled={isLoading}
            {...register("area", {
              required: true,
              min: 0,
              validate: {
                positive: (v) => parseInt(v) > 0 || "should be greater than 0",
              },
            })}
            placeholder="кв.м."
            className={twMerge(errors.area && `border-red-500 ring-red-500`)}
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-secondary-text-dark"
            htmlFor="residing"
          >
            Проживающих
          </label>
          <input
            type="number"
            max={20}
            min={0}
            id="residing"
            disabled={isLoading}
            {...register("residing", { required: false })}
            placeholder="Кол-во человек"
          />
        </div>
        <div>
          <label
            htmlFor="purpose"
            className="block text-sm font-medium text-secondary-text-dark"
          >
            Назначнение
          </label>
          <select id="purpose" {...register("purpose", { required: false })}>
            <option value={"Жилое"}>Жилое</option>
            <option value={"Коммерческое"}>Коммерческое</option>
            <option value={"Для аренды"}>Для аренды</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="storeys"
            className="block text-sm font-medium text-secondary-text-dark"
          >
            Этажность
          </label>
          <select id="storeys" {...register("storeys", { required: false })}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
        </div>

        {/* //? Selector Components Block */}
        <div className="col-span-2">
          <label
            htmlFor="client_id"
            className="block text-sm font-medium text-secondary-text-dark"
          >
            Клиент
          </label>
          <AsyncSelectContactComponent control={control} name="client_id" />
        </div>
        <div className="col-span-2">
          <label
            htmlFor="client_id"
            className="block text-sm font-medium text-secondary-text-dark"
          >
            Команда
          </label>
          <AsyncSelectContactComponent
            control={control}
            isMultiple
            name="team"
          />
        </div>

        {/* //? Upload file block */}
        <div className="col-span-2">
          <label
            htmlFor="cover-photo"
            className="block text-sm font-medium leading-6 text-secondary-text-dark "
          >
            Загрузите обложку проекта (Не обязательно)
          </label>
          <div
            className="
              mt-2 
              flex 
              justify-center 
              rounded-lg
              border 
              border-dashed 
              border-primary-border-dark 
              px-6 
              py-10
              "
          >
            <div className="text-center">
              <PhotoIcon
                className="mx-auto h-12 w-12 text-primary-text-dark"
                aria-hidden="true"
              />
              <div className="mt-4 flex text-sm leading-6 text-secondary-text-dark">
                <label
                  htmlFor="file-upload"
                  className="bg-white-dark relative cursor-pointer rounded-md font-semibold text-accent-dark focus-within:outline-none focus-within:ring-2 focus-within:ring-accent-dark focus-within:ring-offset-2 hover:text-accent-light"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
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

        <Button
          disabled={isLoading}
          type="submit"
          mode="action"
          size="small"
          className="sticky bottom-6 col-span-2 mt-4 bg-accent-dark text-primary-text-light text-md"
        >
          Создать
        </Button>
      </form>
    </Modal>
  );
};

export default UploadProjectModal;
