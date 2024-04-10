"use client";

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
  isFavourite: boolean;
}

const ProjectCard = ({ data, isFavourite }: ProjectCardProps) => {

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
      route.refresh();
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
        gap-y-2
        overflow-hidden
        pb-2
        transition
        duration-500
        ease-in-out
        sm:rounded-lg
        sm:p-4
        sm:pb-8
        sm:dark:bg-elevated-1-bg-dark
        sm:hover:dark:bg-elevated-2-bg-dark
        md:gap-y-4
        "
    >
      <FavouriteButton
        isChecked={isFavourite}
        projectId={data.project_id}
        className="
          absolute
          -top-1
          left-1
          z-10
          sm:left-5
          sm:top-3
          "
      />
      <RemoveButton
        className="
          absolute
          -top-1
          right-1
          z-10
          sm:right-5
          sm:top-3
          "
        handleClick={handleRemove}
      />
      <section
        className="
          //md:saturate-0
          relative
          aspect-square
          size-full
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
              size-full
              bg-gradient-to-br
              from-accent-light/50
              dark:from-accent-dark/50
              "
          ></div>
        )}
      </section>
      <section
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
            w-full
            truncate
            text-base
            text-primary-text-light
            dark:text-primary-text-dark
            "
        >
          {data.address_street}
        </span>
        <p
          className="
            //min-h-[2lh]
            text-tertiary-text-light-text-light
            truncate
            text-sm
            font-normal
            leading-3
            dark:text-tertiary-text-dark
            md:text-[13px]
            "
        >
          <span className="font-normal">Площадь: </span>
          {`${data.area} кв.м.`}
        </p>
      </section>
    </div>
  );
};

export default ProjectCard;
