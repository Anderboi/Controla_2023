import React from "react";
import { Database } from "@/types/supabase";
import Image from "next/image";
import useLoadImage from "@/hooks/useLoadImage";

interface FavouriteProjectItemProps {
  data: Database["public"]["Tables"]["projects"]["Row"];
  onClick?: (id: number) => void;
}

const FavouriteProjectItem = ({ data, onClick }: FavouriteProjectItemProps) => {
  const coverImage = useLoadImage(data.cover_img || null, "project");

  const handleClick = () => {
    if (onClick) {
      return onClick(data.project_id);
    }
  };
  return (
    <>
      <div
        className="
          hidden
          sm:flex
          gap-4
          justify-start
          line-clamp-2
          cursor-pointer
          break-all
          rounded-md
          lg:p-2
          text-sm
          text-primary-text-dark
          hover:bg-transparent-bg-dark/10
          group
          "
        onClick={handleClick}
      >
        <div
          className="
            relative
            sm:max-lg:w-[64px]
            lg:h-[40px]
            lg:w-[40px]
            aspect-square
            rounded-lg
            overflow-clip
            
            "
        >
          <span
            className="
              absolute
              hidden
              group-hover:block
              top-[50%]
              left-[50%]
              translate-x-[-50%]
              translate-y-[-50%]
              text-center
              z-10
              text-xl
              font-bold
              "
          >
            {`${data.address_street?.split("")[0]}${
              data.address_street?.split("")[1]
            }`}
          </span>
          {data.cover_img ? (
            <Image
              alt="cover"
              src={coverImage || ""}
              fill
              className="aspect-square object-cover opacity-100 group-hover:opacity-50"
            />
          ) : (
            <div className="aspect-square bg-gradient-to-b from-accent-dark/50 to-elevated-1-bg-dark"></div>
          )}
        </div>
        <span className="hidden lg:flex ">{data.address_street}</span>
      </div>
    </>
  );
};

export default FavouriteProjectItem;
