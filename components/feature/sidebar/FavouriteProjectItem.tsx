import ContainerBox from "@/components/common/ContainerBox";
import { Project } from "@/types/supabase";
import React from "react";

interface FavouriteProjectItemProps {
  data: Project;
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
      rounded-md 
      p-2 
      line-clamp-1 
      break-all 
      text-sm
      hover:bg-transparent-bg-dark/10
      cursor-pointer
      "
      onClick={handleClick}
    >
      {data.address_street}
    </div>
  );
};

export default FavouriteProjectItem;
