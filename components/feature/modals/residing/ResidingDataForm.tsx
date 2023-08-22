import { useState } from "react";
import { useRouter } from 'next/navigation';
import Button from '@/components/common/inputs/Button';

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import useCommonModal from "@/hooks/useCommonModal";

import toast from 'react-hot-toast';
import { twMerge } from 'tailwind-merge';

const ResidingDataForm = () => {
  const modal = useCommonModal();
  const supabaseClient = useSupabaseClient();
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      gender: "",
      age: 0,
      health_concerns: "",
      lifestyle: '',
      name: '',
    },
  });

  // const handleClose = () => {
  //   const isConfirmed = confirm(
  //     `Are you sure you want to close window? All your data will be lost.`
  //   );

  //   if (isConfirmed) {
  //     reset();
  //     modal.onClose();
  //   }
  // };

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    try {
      setIsLoading(true);

      const { data: projectData, error: supabaseError } = await supabaseClient
        .from("inhabitant_info")
        .insert({
          project_id: modal.data,
          name: values.name,
          gender: values.gender,
          age: values.age,
          health_concerns: values.health_concerns,
          lifestyle: values.lifestyle,
        });
      if (supabaseError) {
        return toast.error(supabaseError.message);
      }
      
      
      setIsLoading(false);
      toast.success("Человек добавлен");
      router.refresh();
      reset();
      modal.onClose();
    } catch (error) {
      toast.error("error.message");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="
          grid 
          grid-cols-2 
          gap-4
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
        <label htmlFor="gender" className="block text-sm font-medium">
          Пол
        </label>
        <select id="gender" {...register("gender", { required: false })}>
          {/* <option defaultValue={"-"}>--</option> */}
          <option value={"Мужской"}>Мужской</option>
          <option value={"Женский"}>Женский</option>
        </select>
      </div>
      <div className="col-span-2">
        <label className="block text-sm font-medium " htmlFor="health_concerns">
          Здоровье
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
          Увлечения
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
        className="sticky bottom-6 col-span-2 mt-4"
      >
        Создать
      </Button>
    </form>
  );
};

export default ResidingDataForm;
