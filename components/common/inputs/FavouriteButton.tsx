"use client";

import React, { useEffect, useState } from "react";

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";

import { AiOutlineStar, AiFillStar } from "react-icons/ai";

import { twMerge } from "tailwind-merge";
import { toast } from "react-hot-toast";

interface FavButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  projectId: number;
}

const FavouriteButton = ({ className, projectId }: FavButtonProps) => {
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
        .single();

      if (!error && data) {
        setIsFavourite(true);
      }
    };

    fetchData();
  }, [projectId, supabaseClient, user?.id]);

  const Icon = isFavourite ? AiFillStar : AiOutlineStar;

  const handleFav = async () => {
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
    <button
      className={twMerge(
        `
        transition
        rounded-full
        hover:bg-transparent-bg-dark/20
        p-1
        translate
        translate-y-1/4
        group-hover:opacity-100
        hover:scale-110
        `,
        isFavourite ? "opacity-100 " : "opacity-0",
        className
      )}
      onClick={handleFav}
    >
      <Icon className="hover:text-accent-dark" size={25} />
    </button>
  );
};

export default FavouriteButton;
