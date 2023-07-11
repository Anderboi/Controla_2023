"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

import Modal from "@/components/common/Modal";
import Button from "@/components/common/inputs/Button";
import engeneeringSystems from "@/lib/engeneering";

import useEngeneeringModal from "@/hooks/engeneering/useEngeneeringModal";
import Checkbox from "@/components/common/inputs/Checkbox";
import toast from "react-hot-toast";
import { twMerge } from "tailwind-merge";

const EngeneeringModal = () => {
  const engModal = useEngeneeringModal();
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const pathname = usePathname();

  const projectId = Number(pathname.split("/")[pathname.split("/").length - 2]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabaseClient
        .from("engeneering_data")
        .select("*")
        .eq("project_id", projectId);

      if (error) toast.error(error.message);
      else {
        // ! Error possible null data
        if (data[0]) {
          setHeatingArray(data[0].heating);
          setConditionArray(data[0].conditioning);
          setPlumbingArray(data[0].plumbing);
        } else {
          setHeatingArray([]);
          setConditionArray([]);
          setPlumbingArray([]);
        }
      }
    };
    fetchData();
  }, [supabaseClient, projectId]);

  const [isLoading, setIsLoading] = useState(false);
  const [heatingArray, setHeatingArray] = useState<string[]>([]);
  const [plumbingArray, setPlumbingArray] = useState<string[]>([]);
  const [conditionArray, setConditionArray] = useState<string[]>([]);

  interface EngSystem {
    conditioning: string[];
    heating: string[];
    plumbing: string[];
  }

  const onChange = (open: boolean) => {
    if (!open && projectId) {
      engModal.onClose();
    }
  };

  // ! OnSubmits
  const onSubmitHeating = async () => {
    try {
      setIsLoading(true);
      const { error: supabaseError } = await supabaseClient
        .from("engeneering_data")
        .upsert(
          { project_id: projectId, heating: heatingArray },
          { onConflict: "project_id" }
        )
        .eq("project_id", projectId)
        .select();

      if (supabaseError) {
        return toast.error(supabaseError.message);
      }
      setIsLoading(false);
      toast.success("Информация по системе отопления добавлена");
    } catch (error) {
      toast.error("error.message");
    } finally {
      setIsLoading(false);
      engModal.onClose();
    }
  };
  const onSubmitConditioning = async () => {
    try {
      setIsLoading(true);
      const { error: supabaseError } = await supabaseClient
        .from("engeneering_data")
        .upsert(
          { project_id: projectId, conditioning: conditionArray },
          { onConflict: "project_id" }
        );

      if (supabaseError) {
        return toast.error(supabaseError.message);
      }
      setIsLoading(false);
      toast.success("Информация по кондиционированию и вентиляции добавлена");
    } catch (error) {
      toast.error("error.message");
    } finally {
      setIsLoading(false);
      engModal.onClose();
    }
  };
  const onSubmitPlumbing = async () => {
    try {
      setIsLoading(true);
      const { error: supabaseError } = await supabaseClient
        .from("engeneering_data")
        .upsert(
          { project_id: projectId, plumbing: plumbingArray },
          { onConflict: "project_id" }
        );

      if (supabaseError) {
        return toast.error(supabaseError.message);
      }
      setIsLoading(false);
      toast.success("Информация по водоочистке добавлена");
    } catch (error) {
      toast.error("error.message");
    } finally {
      setIsLoading(false);
      engModal.onClose();
    }
  };

  //! handleOnClicks
  const handleOnClickHeating = (value: string) => {
    if (heatingArray.includes(value)) {
      setHeatingArray(heatingArray.filter((item) => item !== value));
    } else {
      setHeatingArray((oldValue) => [...oldValue, value]);
    }
  };
  const handleOnClickPlumbing = (value: string) => {
    if (plumbingArray.includes(value)) {
      setPlumbingArray(plumbingArray.filter((item) => item !== value));
    } else {
      setPlumbingArray((oldValue) => [...oldValue, value]);
    }
  };
  const handleOnClickConditioning = (value: string) => {
    if (conditionArray && conditionArray.includes(value)) {
      setConditionArray(conditionArray.filter((item) => item !== value));
    } else {
      setConditionArray((oldValue) => [...oldValue, value]);
    }
  };

  //! switches
  switch (engModal.type) {
    case "conditioning":
      return (
        <Modal
          title="Система кондиционирования и вентиляции"
          isOpen={engModal.isOpen}
          onChange={onChange}
        >
          <form className="flex flex-col h-[450px]">
            {/* Input Block */}
            <div className="flex flex-col gap-4 overflow-y-auto no-scrollbar">
              {engeneeringSystems.conditioning.map(
                ({ name, label, id }, index) => (
                  <label
                    key={index}
                    htmlFor={name}
                    className="
                        group
                        cursor-pointer
                        flex
                        justify-start
                        items-start
                        gap-4
                        p-6
                        rounded-lg
                        border
                        border-primary-border-dark
                        group:focus:border-accent-dark
                        hover:bg-elevated-3-bg-dark
                        "
                  >
                    <div className="flex items-center h-5">
                      <Checkbox
                        onChange={() => handleOnClickConditioning(label)}
                        value={label}
                        name={name}
                        id={name}
                        checked={conditionArray?.includes(label)}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-primary-text-dark text-sm line-clamp-2">
                        {label}
                      </p>
                      <p className="text-xs text-secondary-text-dark line-clamp-4">
                        sdffdfgdfgkl;gfkhfgjhkjfgkhjfgh //TODO: add description
                      </p>
                    </div>
                  </label>
                )
              )}
            </div>
            {/* Button Block */}
            <div className="flex justify-end">
              <Button
                onClick={() => router.back()}
                disabled={isLoading}
                type="submit"
                mode="ghost"
                className="mt-4"
                size="small"
              >
                Отменить
              </Button>
              <Button
                onClick={onSubmitConditioning}
                // onClick={onSubmit}
                disabled={isLoading}
                type="submit"
                mode="action"
                className="mt-4"
                size="small"
              >
                Добавить
              </Button>
            </div>
          </form>
        </Modal>
      );
      break;

    case "heating":
      return (
        <Modal
          title="Системы отопления"
          // description="Вам необходимо ввести основные параметры проекта, чтобы создать его."
          isOpen={engModal.isOpen}
          onChange={onChange}
        >
          <form className="flex flex-col h-[450px]">
            {/* Input Block */}
            <div className="flex flex-col gap-4 overflow-y-auto no-scrollbar">
              {engeneeringSystems.heating.map(({ name, label }, index) => (
                <label
                  key={index}
                  htmlFor={name}
                  className={twMerge(
                    `
                      group
                      cursor-pointer
                      flex
                      justify-start
                      items-start
                      gap-4
                      p-6
                      rounded-lg
                      border
                      border-primary-border-dark
                      group:focus:border-accent-dark
                      hover:bg-elevated-3-bg-dark
                      `,
                    heatingArray?.includes(label) &&
                      `border-accent-dark shadow-[0_0_16px_0_rgba(26,177,123,.25)]`
                  )}
                >
                  <div className="flex items-center h-5">
                    <Checkbox
                      onChange={() => handleOnClickHeating(label)}
                      value={label}
                      name={name}
                      id={name}
                      checked={heatingArray?.includes(label)}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-primary-text-dark text-sm line-clamp-2">
                      {label}
                    </p>
                    <p className="text-xs text-secondary-text-dark line-clamp-4">
                      sdffdfgdfgkl;gfkhfgjhkjfgkhjfgh //TODO: add description
                    </p>
                  </div>
                </label>
              ))}
            </div>
            {/* Button Block */}
            <div className="flex justify-end">
              <Button
                onClick={() => router.back()}
                disabled={isLoading}
                type="submit"
                mode="ghost"
                className="mt-4"
                size="small"
              >
                Отменить
              </Button>
              <Button
                onClick={onSubmitHeating}
                // onClick={onSubmit}
                disabled={isLoading}
                type="submit"
                mode="action"
                className="mt-4"
                size="small"
              >
                Добавить
              </Button>
            </div>
          </form>
        </Modal>
      );

      break;

    case "plumbing":
      return (
        <Modal
          title="Система водоподготовки и фильтрации"
          // description="Вам необходимо ввести основные параметры проекта, чтобы создать его."
          isOpen={engModal.isOpen}
          onChange={onChange}
        >
          <form className="flex flex-col h-[450px]">
            {/* Input Block */}
            <div className="flex flex-col gap-4 overflow-y-auto no-scrollbar">
              {engeneeringSystems.plumbing.map(({ name, label }, index) => (
                <label
                  key={index}
                  htmlFor={name}
                  className={twMerge(
                    `
                      group
                      cursor-pointer
                      flex
                      justify-start
                      items-start
                      gap-4
                      p-6
                      rounded-lg
                      border
                      border-primary-border-dark
                      group:focus:border-accent-dark
                      hover:bg-elevated-3-bg-dark
                      `,
                    heatingArray.includes(label) &&
                      `border-accent-dark shadow-[0_0_16px_0_rgba(26,177,123,.25)]`
                  )}
                >
                  <div className="flex items-center h-5">
                    <Checkbox
                      onChange={() => handleOnClickPlumbing(label)}
                      value={label}
                      name={name}
                      id={name}
                      checked={plumbingArray?.includes(label)}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-primary-text-dark text-sm line-clamp-2">
                      {label}
                    </p>
                    <p className="text-xs text-secondary-text-dark line-clamp-4">
                      sdffdfgdfgkl;gfkhfgjhkjfgkhjfgh //TODO: add description
                    </p>
                  </div>
                </label>
              ))}
            </div>
            {/* Button Block */}
            <div className="flex justify-end">
              <Button
                onClick={() => router.back()}
                disabled={isLoading}
                type="submit"
                mode="ghost"
                className="mt-4"
                size="small"
              >
                Отменить
              </Button>
              <Button
                onClick={onSubmitPlumbing}
                // onClick={onSubmit}
                disabled={isLoading}
                type="submit"
                mode="action"
                className="mt-4"
                size="small"
              >
                Добавить
              </Button>
            </div>
          </form>
        </Modal>
      );

    default:
      return (
        <Modal
          title="Нет информации по системам"
          // description="Вам необходимо ввести основные параметры проекта, чтобы создать его."
          isOpen={engModal.isOpen}
          onChange={onChange}
        >
          <span>Нет инфы</span>
        </Modal>
      );
  }
};

export default EngeneeringModal;
