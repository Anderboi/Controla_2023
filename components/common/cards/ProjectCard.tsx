"use client";

import useLoadImage from "@/hooks/useLoadImage";
import { Project } from "@/types/supabase";
import Image from "next/image";
import React from "react";

interface ProjectCardProps {
  data: Project;
  // onClick: (id: number) => void;
}

const ProjectCard = ({
  data,
}: //  onClick
ProjectCardProps) => {
  const imagePath = useLoadImage(data);

  return (
    <div
      // onClick={() => onClick(data.project_id)}
      className="
      relative
      group 
      flex
      flex-col
      items-center
      justify-center
      rounded-[20px]
      overflow-hidden
      gap-y-6
      bg-transparent-bg-dark/10
      cursor-pointer
      hover:bg-transparent-bg-dark/20

      min-h-[335px]

      p-4
      "
    >
      <div className="relative aspect-square w-full h-full rounded-lg overflow-hidden">
        <Image
          // TODO: add placeholder image
          src={imagePath || ""}
          alt="cover"
          className="object-cover"
          fill
        />
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
          text-md
          font-bold
          w-full
          line-clamp-2
          "
        >
          {data.address_street}
        </span>
        <div
          className="
          text-sm
          truncate
          "
        >
          <span className="font-bold">Area: </span>
          {data.address_city}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
