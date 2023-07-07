"use client";

import useLoadImage from "@/hooks/useLoadImage";
import { Database } from "@/types/supabase";
import Image from "next/image";
import React from "react";
import FavouriteButton from "../../feature/FavouriteButton";

interface ProjectCardProps {
  data: Database["public"]["Tables"]["projects"]["Row"];
  onClick: (id: number) => void;
}

const ProjectCard = ({ data, onClick }: ProjectCardProps) => {
  const imagePath = useLoadImage(data.cover_img, 'project');

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
        rounded-lg
        overflow-hidden
        gap-y-4
        bg-elevated-1-bg-dark
        cursor-pointer
        hover:bg-elevated-2-bg-dark
        min-h-[335px]
        p-4
        "
    >
      <FavouriteButton
        projectId={data.project_id}
        className="
          absolute
          top-4
          left-6
          z-50
          "
      />
      <div
        className="
          relative
          w-full 
          h-full 
          rounded-lg 
          overflow-hidden
          saturate-0
          group-hover:saturate-100
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
          w-full"
      >
        <span
          className="
            text-base
            font-bold
            w-full
            line-clamp-1
            "
        >
          {data.address_street}
        </span>
        <p
          className="
            text-secondary-text-dark
            text-sm
            truncate
            "
        >
          <span className="font-bold">Area: </span>
          {data.address_city}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
