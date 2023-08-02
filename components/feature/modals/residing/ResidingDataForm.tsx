import Button from "@/components/common/inputs/Button";
import useCommonModal from "@/hooks/useCommonModal";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";

const ResidingDataForm = () => {
  const modal = useCommonModal();

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

  const handleClose = () => {
    const isConfirmed = confirm(
      `Are you sure you want to close window? All your data will be lost.`
    );

    if (isConfirmed) {
      reset();
      modal.onClose();
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    // try {
    //   setIsLoading(true);
    //   const imageFile =
    //     values.cover_img !== "" ? values.cover_img?.[0] : null;
    //   let projectCover;
    //   if (!user) {
    //     toast.error("Missing User");
    //     return;
    //   }
    //   const uniqId = uniqid();
    //   const streetAddress = `${values.address_street} ${values.building} / ${values.room_number}`;
    //   //* Upload projectImage if it exists
    //   if (imageFile) {
    //     const { data: projectData, error: projectError } =
    //       await supabaseClient.storage
    //         .from("projects")
    //         .upload(`project-${uniqId}`, imageFile || null, {
    //           cacheControl: "3600",
    //           upsert: false,
    //         });
    //     projectCover = projectData?.path;
    //     // //? Если не удалось загрузить изображение, которое не обязательное к загрузке
    //     if (projectError) {
    //       // setIsLoading(false);
    //       return toast.error("Не удалось загрузить изображение");
    //     }
    //   }
    //   const { data: projectData, error: supabaseError } =
    //     await supabaseClient
    //       .from("projects")
    //       .insert({
    //         user_id: user.id,
    //         address_country: values.address_country,
    //         address_city: values.address_city,
    //         address_street: streetAddress,
    //         area: values.area,
    //         cover_img: imageFile ? projectCover : null,
    //         client_id: values.client_id.value,
    //       })
    //       .select()
    //       .single();
    //   if (supabaseError) {
    //     return toast.error(supabaseError.message);
    //   }
    //   if (projectData) {
    //     const { error: infoError } = await supabaseClient
    //       .from("project_info")
    //       .insert({
    //         project_id: projectData.project_id,
    //         purpose: values.purpose,
    //         storeys: values.storeys,
    //         residing: values.residing,
    //         stage: 1,
    //       });
    //     if (infoError) {
    //       return toast.error(infoError.message);
    //     }
    //     const { error: engeneeringError } = await supabaseClient
    //       .from("engeneering_data")
    //       .insert({
    //         project_id: projectData.project_id,
    //         heating: null,
    //         conditioning: null,
    //         plumbing: null,
    //         electric: null,
    //       });
    //     if (engeneeringError) {
    //       return toast.error(engeneeringError.message);
    //     }
    //   }
    //   // router.refresh();
    //   setIsLoading(false);
    //   router.push(`projects/${projectData.project_id}/preProject`);
    //   toast.success("Проект создан");
    //   reset();
    //   uploadModal.onClose();
    // } catch (error) {
    //   toast.error("error.message");
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="
          grid 
          grid-cols-2 
          gap-x-4
          gap-y-4
          "
    >
      <div className="col-span-2">
        <label className="block text-sm font-medium " htmlFor="name">
          Имя
        </label>
        <input
          type="text"
          maxLength={32}
          id="name"
          disabled={isLoading}
          {...register("name", { required: false, minLength: 3 })}
          placeholder="Укажите имя"
          className={twMerge(
            errors.address_country && `border-red-500 ring-red-500`
          )}
        />
      </div>
      <div>
        <label className="block text-sm font-medium" htmlFor="age">
          Возраст
        </label>
        <input
          type="number"
          max={100}
          min={0}
          id="age"
          disabled={isLoading}
          {...register("age", { required: false, max: 100, min: 0 })}
        />
      </div>
      <div>
        <label htmlFor="sex" className="block text-sm font-medium">
          Пол
        </label>
        <select id="sex" {...register("sex", { required: false })}>
          <option defaultValue={"-"}>--</option>
          <option value={"Мужской"}>Мужской</option>
          <option value={"Женский"}>Женский</option>
        </select>
      </div>
      <div className="col-span-2">
        <label className="block text-sm font-medium " htmlFor="health_concerns">
          Имя
        </label>
        <input
          type="text"
          maxLength={32}
          id="health_concerns"
          disabled={isLoading}
          {...register("health_concerns", { required: false})}
          placeholder=""
          className={twMerge(
            errors.address_country && `border-red-500 ring-red-500`
          )}
        />
      </div>
      <div className="col-span-2">
        <label className="block text-sm font-medium " htmlFor="lifestyle">
          Имя
        </label>
        <input
          type="text"
          maxLength={32}
          id="lifestyle"
          disabled={isLoading}
          {...register("lifestyle", { required: false })}
          placeholder=""
          className={twMerge(
            errors.address_country && `border-red-500 ring-red-500`
          )}
        />
      </div>

      <Button
        disabled={isLoading}
        type="submit"
        mode="action"
        size="small"
        className="mt-4 col-span-2 sticky bottom-6"
      >
        Создать
      </Button>
    </form>
  );
};

export default ResidingDataForm;
