import React from "react";
import { Database } from "@/types/supabase";

interface FavouriteProjectItemProps {
  data: Database["public"]["Tables"]["projects"]["Row"];
  onClick?: (id: number) => void;
}

const FavouriteProjectItem = ({ data, onClick }: FavouriteProjectItemProps) => {
  const handleClick = () => {
    if (onClick) {
      return onClick(data.project_id);
    }
  };
  return (
    <div
      className="
      line-clamp-1
      cursor-pointer
      break-all
      rounded-md
      p-2
      text-sm
      text-primary-text-dark
      hover:bg-transparent-bg-dark/10
      "
      onClick={handleClick}
    >
      {data.address_street}
    </div>
  );
};

export default FavouriteProjectItem;
