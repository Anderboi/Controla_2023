"use client";

import FavouriteProjectItem from "./FavouriteProjectItem";

import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";

import { Database } from "@/types/supabase";

interface FavContentProps {
  projects: Database["public"]["Tables"]["projects"]["Row"][] | null;
}

const FavouriteContent = ({ projects }: FavContentProps) => {
  const { user } = useUser();
  const route = useRouter();

  return (
    <>
      {user && projects && (
        <div
          className="
            flex
            h-full
            w-full
            flex-col
            gap-y-2
            overflow-y-scroll
            overscroll-contain
            no-scrollbar
            "
        >
          {projects.map((project) => (
            <FavouriteProjectItem
              key={project.project_id}
              data={project}
              onClick={() => {
                route.push(`/projects/${project.project_id}/preProject`);
              }}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default FavouriteContent;
