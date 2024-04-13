"use client";

import Image from "next/image";
import { Database } from "@/types/supabase";
import useLoadImage from "@/hooks/useLoadImage";
import { useSessionContext, useUser } from "@supabase/auth-helpers-react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import RemoveButton from '@/components/common/inputs/RemoveButton';
import FavouriteButton from '@/components/feature/FavouriteButton';

interface ProjectCardProps {
  data: Database["public"]["Tables"]["projects"]["Row"];
  isFavourite: boolean;
}

const ProjectCard = ({ data, isFavourite }: ProjectCardProps) => {
  const router = useRouter();
  const imagePath = useLoadImage(data.cover_img, "project");

  const { supabaseClient } = useSessionContext();
  const user = useUser();

  const handleRemove = async (event: any) => {
    event.preventDefault();
    event.stopPropagation();

    if (data.user_id !== user?.id) {
      toast.error("Вы не можете удалить этот проект");
      return;
    }

    const isConfirmed = confirm(`Вы действительно хотите удалить проект?`);

    if (isConfirmed) {
      const { error } = await supabaseClient
        .from("projects")
        .delete()
        .eq("project_id", data.project_id);

      if (error) {
        toast.error(error?.message);
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
      router.refresh();
    }
  };

  return (
    <div
      onClick={() => router.push(`/projects/${data.project_id}`)}
      className="
        group

        flex
        cursor-pointer
        flex-col
        relative

        items-center
        justify-center
        
        overflow-hidden
        transition
        duration-500
        ease-in-out
        
        rounded-lg
        
        sm:p-4
        
        sm:pb-8
        hover:sm:shadow-md
        dark:bg-elevated-1-bg-dark
        sm:hover:dark:bg-elevated-2-bg-dark
        
        gap-y-2
        md:gap-y-4
        "
    >
      <section
        className="
        relative
        aspect-video
        sm:aspect-square
        size-full
        overflow-hidden
        rounded-lg
        "
      >
        <div
          className="
          absolute
          px-4
          py-2
          sm:px-2
          sm:py-0
          flex
          justify-between
          items-center
          w-full
          z-10
          "
        >
          <FavouriteButton
            isChecked={isFavourite}
            projectId={data.project_id}
          />
          <RemoveButton handleClick={handleRemove} />
        </div>

        {imagePath ? (
          <Image
            src={imagePath}
            alt="cover"
            className="
              aspect-square
              object-cover
              brightness-50
              "
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            //placeholder='blur'
            //blurDataURL={'/favicon.svg'}
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
        <p
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
        </p>
        <p
          className="
            truncate
            text-base
            sm:text-xs
            font-normal
            leading-3
            text-secondary-text-light 
            dark:text-secondary-text-dark

            "
        >
          Площадь: {`${data.area} кв.м.`}
        </p>
      </section>
    </div>
  );
};

export default ProjectCard;
