"use client";

import { useUser } from "@/hooks/useUser";
import { Database } from "@/types/supabase";
import React from "react";
import FavouriteProjectItem from "./FavouriteProjectItem";
import { useRouter } from "next/navigation";

interface FavContentProps {
  projects: Database["public"]["Tables"]["projects"]["Row"][];
}

const FavouriteContent = ({ projects }: FavContentProps) => {
  const { user } = useUser();
  const route = useRouter();

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
            onClick={() => {
              route.push(`/projects/${project.project_id}/preProject`);
            }}
          />
        ))}
    </div>
  );
};

export default FavouriteContent;
