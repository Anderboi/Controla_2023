'use client'

import React from "react";
import Image from "next/image";
import FavouriteButton from "../../feature/FavouriteButton";
import { Database } from "@/types/supabase";
import useLoadImage from "@/hooks/useLoadImage";
import RemoveButton from "../inputs/RemoveButton";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { toast } from "react-hot-toast";
import { useRouter } from 'next/navigation';

interface ProjectCardProps {
  data: Database["public"]["Tables"]["projects"]["Row"];

}

const ProjectCard = ({ data }: ProjectCardProps) => {

  const route = useRouter();
  const imagePath = useLoadImage(data.cover_img, "project");

  const { supabaseClient } = useSessionContext();

  const handleRemove = async (event: any) => {
    event.preventDefault();
    event.stopPropagation();

    const isConfirmed = confirm(`Are you sure you want to remove`);

    if (isConfirmed) {
      const table = await supabaseClient
        .from("projects")
        .delete()
        .eq("project_id", data.project_id);

      if (table.error) {
        toast.error(table.error?.message);
      } else if (data.cover_img) {

        //! Remove file from storage
        const bucket = await supabaseClient.storage
          .from("projects")
          .remove([data.cover_img]);

        if (bucket.error) {
          toast.error(bucket.error?.message);
        } 
      }
      toast.success("Проект удален");
    }
  };

  return (
    <div
      onClick={() => route.push(`/projects/${data.project_id}/preProject`)}
      className="
        group
        relative
        flex
        cursor-pointer
        flex-col
        items-center
        justify-center
        gap-y-3
        overflow-hidden
        sm:rounded-lg
        sm:bg-elevated-1-bg-dark
        sm:p-4
        sm:hover:bg-elevated-2-bg-dark
        md:gap-y-4
        "
    >
      <FavouriteButton
        projectId={data.project_id}
        className="
          absolute
          left-1
          top-[-4px]
          z-10
          sm:left-6
          sm:top-4
          "
      />
      <RemoveButton
        className="
          absolute
          right-1
          top-[-4px]
          z-10
          sm:right-6
          sm:top-4
          "
        handleClick={handleRemove}
      />
      <div
        className="
          //md:saturate-0
          relative
          aspect-square
          h-full
          w-full
          overflow-hidden
          rounded-lg
          group-hover:saturate-100
          md:drop-shadow-spt
          "
      >
        {imagePath ? (
          <Image
            src={imagePath}
            alt="cover"
            className="
              aspect-square 
              object-cover
              "
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            // placeholder='blur'
            // blurDataURL={'/favicon.svg'}
          />
        ) : (
          <div
            className="
              //bg-gradient-to-b
              //from-green-500
              
              //to-green-700
              h-full

              w-full
              bg-gradient-to-br 
              from-accent-dark/50
              "
          ></div>
        )}
      </div>
      <div
        className="
          flex 
          w-full
          flex-col
          items-start 
          justify-center 
          gap-y-1
          "
      >
        <span
          className="
            line-clamp-1
            w-full
            text-sm
            font-bold
            md:text-base
            "
        >
          {data.address_street}
        </span>
        <p
          className="
            //truncate
            line-clamp-2
            min-h-[2lh]
            text-xs
            text-secondary-text-dark
            md:text-sm
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
