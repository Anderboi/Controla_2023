import React from "react";
import ProjectCard from "@/components/common/cards/ProjectCard";
import { Database } from "@/types/supabase";

import CreateNewProjectBlock from "./CreateNewProjectBlock";
import GallaryGrid from "@/components/common/grids/GallaryGrid";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

interface ProjectsGalleryProps {
  projects: Database["public"]["Tables"]["projects"]["Row"][];
}

//TODO getProjects here?
const ProjectsGallery = async ({ projects }: ProjectsGalleryProps) => {
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase
    .from("favourite_projects")
    .select("project_id");

  if (!data) {
    return;
  }
  const favoriteProjects = data.map((item) => item.project_id);

  if (projects.length === 0) {
    return <CreateNewProjectBlock />;
  }

  return (
    <GallaryGrid>
      {projects.map((project) => (
        <ProjectCard
          isFavourite={favoriteProjects.includes(project.project_id)}
          key={project.project_id}
          data={project}
        />
      ))}
    </GallaryGrid>
  );
};

export default ProjectsGallery;
