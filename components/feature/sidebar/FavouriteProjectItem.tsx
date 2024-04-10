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
          group
          hidden
          cursor-pointer
          items-center
          justify-start
          gap-4
          truncate
          break-all
          rounded-md
          text-base
          text-primary-text-dark
          hover:bg-transparent-bg-dark/10
          dark:text-primary-text-dark
          sm:flex
          lg:p-2
          "
        onClick={handleClick}
      >
        <div
          className="
            relative
            aspect-square
            text-clip
            rounded-lg
            sm:max-lg:w-16
            lg:size-10
            
            "
        >
          <span
            className="
              absolute
              left-[50%]
              top-[50%]
              z-10
              hidden
              translate-x-[-50%]
              translate-y-[-50%]
              text-center
              text-xl
              font-bold
              group-hover:block
              "
          >
            {`${data.address_street?.split("")[0]}`}
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
