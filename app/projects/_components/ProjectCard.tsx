"use client";

import Image from "next/image";
import FavouriteButton from "../../../components/feature/FavouriteButton";
import { Database } from "@/types/supabase";
import useLoadImage from "@/hooks/useLoadImage";
import RemoveButton from "../../../components/common/inputs/RemoveButton";
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
      onClick={() => route.push(`/projects/${data.project_id}`)}
      className="
        //sm:border
        group

        relative
        flex
        cursor-pointer
        flex-col

        items-center
        justify-center
        gap-y-2
        
        overflow-hidden
        border-solid
        border-primary-border-light
        transition
        duration-500
        ease-in-out
        
        dark:border-elevated-2-bg-dark
        sm:rounded-lg
        sm:p-4
        
        sm:pb-8
        hover:sm:shadow-md
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
          left-2
          top-0
          z-10
          dark:bg-black-dark/50
          sm:left-5
          sm:top-3
          "
      />
      <RemoveButton
        className="
          absolute
          right-2
          top-0
          z-10
          dark:bg-black-dark/50
          sm:right-5
          sm:top-3
          "
        handleClick={handleRemove}
      />
      <section
        className="
          //md:saturate-0
          //md:drop-shadow-spt
          relative
          aspect-video
          size-full
          overflow-hidden
          rounded-lg
          group-hover:saturate-100
          sm:aspect-square
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
          bottom-4
          left-4
          flex
          w-full
          flex-col
          items-start
          
          justify-center
          gap-y-1
          max-sm:absolute
          "
      >
        <span
          className="
            w-full
            truncate
            text-base
            text-primary-text-light
            dark:text-primary-text-dark
            max-sm:text-2xl
            "
        >
          {data.address_street}
        </span>
        <p
          className="
            //min-h-[2lh]
            truncate
            text-xs
            font-normal
            leading-3
            text-secondary-text-light 
            dark:text-secondary-text-dark

            max-sm:hidden
            "
        >
          <span>Площадь: </span>
          {`${data.area} кв.м.`}
        </p>
      </section>
    </div>
  );
};

export default ProjectCard;
