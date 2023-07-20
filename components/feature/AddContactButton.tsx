"use client";

import React, { useEffect, useState } from "react";

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";

import { AiOutlinePlus } from "react-icons/ai";

import { toast } from "react-hot-toast";
import IconButton from "../common/inputs/IconButton";
import { twMerge } from "tailwind-merge";

interface AddContactButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
}

const AddContactButton = ({
  id,
  className,
  ...props
}: AddContactButtonProps) => {
  const router = useRouter();

  const { supabaseClient } = useSessionContext();

  const authModal = useAuthModal();
  const { user } = useUser();

  const [isContact, setIsContact] = useState(false);

  useEffect(() => {
    if (!user?.id) {
      return;
    }

    //? Зачем это?
    const fetchData = async () => {
      const { data, error } = await supabaseClient
        .from("contacts")
        .select("*")
        .eq("user_id", user?.id)
        .eq("contact", id)
        .maybeSingle();

      if (!error && data) {
        setIsContact(true);
      }
    };

    fetchData();
  }, [id, supabaseClient, user?.id]);

  const handleSetContact = async (e: any) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();

    if (!user) {
      return authModal.onOpen();
    }

    if (isContact) {
      const { error } = await supabaseClient
        .from("contacts")
        .delete()
        .eq("user_id", user?.id)
        .eq("contact", id);

      if (error) {
        toast.error(error.message);
      } else {
        setIsContact(false);
        toast.success("Удалено из избранного");
      }
    } else {
      const { error } = await supabaseClient
        .from("contacts")
        .insert({ user_id: user.id, contact: id });

      if (error) {
        toast.error(error.message);
      } else {
        setIsContact(true);
        toast.success("Добавлено в избранные!");
      }
    }
    router.refresh();
  };

  return (
    <IconButton
      Icon={AiOutlinePlus}
      onClick={handleSetContact}
      className={twMerge(
        isContact ? "opacity-100 rotate-45" : "opacity-0",
        className
      )}
      {...props}
    />
  );
};

export default AddContactButton;
