"use client";

import { useUser } from "@/hooks/useUser";
import { Project } from "@/types/supabase";
import React from "react";
import FavouriteProjectItem from "./FavouriteProjectItem";

interface FavContentProps {
  projects: Project[];
}

const FavouriteContent = ({ projects }: FavContentProps) => {
  const { user } = useUser();

  return (
    <div
      className="
        flex
        flex-col
        gap-y-2
        overflow-y-scroll
        h-full
        w-full
        no-scrollbar
        overscroll-contain
        "
    >
      {user &&
        projects.map((project) => (
          <FavouriteProjectItem
            key={project.project_id}
            data={project}
            onClick={() => {}}
          />
        ))}
    </div>
  );
};

export default FavouriteContent;
