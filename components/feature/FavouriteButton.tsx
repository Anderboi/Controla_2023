"use client";

import React, { useState } from "react";

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";

import { AiOutlineStar, AiFillStar } from "react-icons/ai";

import { toast } from "react-hot-toast";
import IconButton from "../common/inputs/IconButton";
import { twMerge } from "tailwind-merge";

interface FavButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  projectId: number;
  isChecked: boolean;
}

const FavouriteButton = ({
  projectId,
  isChecked,
  ...props
}: FavButtonProps) => {
  const router = useRouter();
  const { supabaseClient } = useSessionContext();

  const authModal = useAuthModal();
  const { user } = useUser();

  const [isFavorite, setIsFavorite] = useState(isChecked);

  const Icon = isFavorite ? AiFillStar : AiOutlineStar;

  const handleFav = async (e: any) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();

    if (!user) {
      return authModal.onOpen();
    }

    if (isFavorite) {
      const { error } = await supabaseClient
        .from("favourite_projects")
        .delete()
        .eq("user_id", user?.id)
        .eq("project_id", projectId);

      if (error) {
        toast.error(error.message);
      } else {
        setIsFavorite(false);
        toast.success("Удалено из избранного");
      }
    } else {
      const { error } = await supabaseClient
        .from("favourite_projects")
        .insert({ user_id: user.id, project_id: projectId });

      if (error) {
        toast.error(error.message);
      } else {
        setIsFavorite(true);
        toast.success("Добавлено в избранные!");
      }
    }
    router.refresh();
  };

  return (
    <IconButton
      Icon={Icon}
      onClick={handleFav}
      className={twMerge(isFavorite && "opacity-100 text-accent-light dark:text-accent-dark")}
      {...props}
    />
  );
};

export default FavouriteButton;
