"use client";

import React from "react";
import Image from "next/image";
import FavouriteButton from "../../feature/FavouriteButton";
import { Database } from "@/types/supabase";
import useLoadImage from "@/hooks/useLoadImage";
import RemoveButton from "../inputs/RemoveButton";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

interface ProjectCardProps {
  data: Database["public"]["Tables"]["projects"]["Row"];
  onClick: (id: number) => void;
}

const ProjectCard = ({ data, onClick }: ProjectCardProps) => {
  const imagePath = useLoadImage(data.cover_img, "project");
  const route = useRouter();

  const { supabaseClient } = useSessionContext();

  const handleRemove = async (event: any) => {
    event.preventDefault();
    event.stopPropagation();

    console.log(data.project_id);

    const isConfirmed = confirm(`Are you sure you want to remove`);

    if (isConfirmed) {
      const table = await supabaseClient
        .from("projects")
        .delete()
        .eq("project_id", data.project_id);

      if (table.error) {
        toast.error(table.error?.message);
      } else if (data.cover_img) {
        // Remove from storage
        const bucket = await supabaseClient.storage
          .from("images")
          .remove([data.cover_img]);

        if (bucket.error) {
          toast.error(bucket.error?.message);
        } else {
          toast.success("Обложка удалена");
        }
      }
      toast.success("Проект удален");
      console.log("deleted");
      route.refresh();
    }
  };

  return (
    <div
      onClick={() => onClick(data.project_id)}
      className="
        relative
        group
        flex
        flex-col
        items-center
        justify-center
        overflow-hidden
        gap-y-3
        md:gap-y-4
        cursor-pointer
        sm:bg-elevated-1-bg-dark
        sm:hover:bg-elevated-2-bg-dark
        sm:rounded-lg
        sm:p-4
        "
    >
      <FavouriteButton
        projectId={data.project_id}
        className="
          absolute
          top-[-4px]
          sm:top-4
          left-1
          sm:left-6
          z-20
          "
      />
      <RemoveButton
        className="
        absolute
        top-[4px]
        sm:top-4
        right-1
        sm:right-6
        z-20
        "
        handleClick={handleRemove}
      />
      <div
        className="
          relative
          w-full
          h-full
          overflow-hidden
          md:saturate-0
          group-hover:saturate-100
          aspect-square
          md:drop-shadow-spt
          rounded-lg
          "
      >
        {imagePath ? (
          <Image
            src={imagePath}
            alt="cover"
            className="
              object-cover 
              aspect-square
              "
            fill
          />
        ) : (
          <Image
            src={"logos/ellipse_round.svg"}
            alt="placeholder"
            fill
            className="
              p-8 
              bg-secondary-bg-dark 
              aspect-square
              "
          />
        )}
      </div>
      <div
        className="
          flex 
          flex-col
          gap-y-1
          justify-center 
          items-start 
          w-full
          "
      >
        <span
          className="
            text-sm
            md:text-base
            font-bold
            w-full
            line-clamp-1
            "
        >
          {data.address_street}
        </span>
        <p
          className="
            text-xs
            md:text-sm
            text-secondary-text-dark
            //truncate
            line-clamp-2
            min-h-[2lh]
            "
        >
          <span className="font-bold">Площадь: </span>
          {`${data.area} кв.м.`}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
