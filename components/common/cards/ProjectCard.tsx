"use client";

import useLoadImage from "@/hooks/useLoadImage";
import { Project } from "@/types/supabase";
import Image from "next/image";
import React from "react";
import FavouriteButton from '../inputs/FavouriteButton';

interface ProjectCardProps {
  data: Project;
  onClick: (id: number) => void;
}

const ProjectCard = ({ data, onClick }: ProjectCardProps) => {
  const imagePath = useLoadImage(data);

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
      bg-transparent-bg-dark/10
      cursor-pointer
      hover:bg-transparent-bg-dark/20
      min-h-[335px]
      p-4
      "
    >
      <FavouriteButton projectId={data.project_id} className='absolute top-4 left-6 z-50 opacity-0'/>
      <div
        className="
        relative 
        aspect-square 
        w-full 
        h-full 
        rounded-lg 
        overflow-hidden
        saturate-0
        hover:saturate-100
        "
      >
        {imagePath ? (
          <Image
            // TODO: add placeholder image
            src={imagePath}
            alt="cover"
            className="object-cover"
            fill
          />
        ) : (
          <Image
            src={"logos/ellipse_round.svg"}
            alt="placeholder"
            fill
            className="
              p-8 
              bg-secondary-bg-dark"
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
