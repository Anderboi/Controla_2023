"use client";

import React, { useState } from "react";

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";

import { toast } from "react-hot-toast";
import IconButton from "../common/inputs/IconButton";
import { twMerge } from "tailwind-merge";
import { Star, StarHalf } from "lucide-react";

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

  const Icon = isFavorite ? <Star fill='#fff'/> : <Star />;

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
      onClick={handleFav}
      className={twMerge(isFavorite && "", "sm:opacity-0 opacity-100")}
      {...props}
    >
     {Icon}
    </IconButton>
  );
};

export default FavouriteButton;
