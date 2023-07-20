"use client";

import React, { useEffect, useState } from "react";

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
}

const FavouriteButton = ({ projectId, ...props }: FavButtonProps) => {
  const router = useRouter();
  const { supabaseClient } = useSessionContext();

  const authModal = useAuthModal();
  const { user } = useUser();

  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    if (!user?.id) {
      return;
    }

    const fetchData = async () => {
      const { data, error } = await supabaseClient
        .from("favourite_projects")
        .select("*")
        .eq("user_id", user?.id)
        .eq("project_id", projectId)
        .maybeSingle();

      if (!error && data) {
        setIsFavourite(true);
      }
    };

    fetchData();
  }, [projectId, supabaseClient, user?.id]);

  const Icon = isFavourite ? AiFillStar : AiOutlineStar;

  const handleFav = async (e: any) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();

    if (!user) {
      return authModal.onOpen();
    }

    if (isFavourite) {
      const { error } = await supabaseClient
        .from("favourite_projects")
        .delete()
        .eq("user_id", user?.id)
        .eq("project_id", projectId);

      if (error) {
        toast.error(error.message);
      } else {
        setIsFavourite(false);
        toast.success("Удалено из избранного");
      }
    } else {
      const { error } = await supabaseClient
        .from("favourite_projects")
        .insert({ user_id: user.id, project_id: projectId });

      if (error) {
        toast.error(error.message);
      } else {
        setIsFavourite(true);
        toast.success("Добавлено в избранные!");
      }
    }
    router.refresh();
  };

  return (
    <IconButton
      Icon={Icon}
      onClick={handleFav}
      className={twMerge(
        
        isFavourite && "opacity-100"
      )}
      {...props}
    />
  );
};

export default FavouriteButton;
