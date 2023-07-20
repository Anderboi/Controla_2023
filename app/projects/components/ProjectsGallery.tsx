import React from "react";
import ProjectCard from "@/components/common/cards/ProjectCard";
import { Database } from "@/types/supabase";
import GallaryGrid from "@/components/common/GallaryGrid";
import CreateNewProjectBlock from './CreateNewProjectBlock';

interface ProjectsGalleryProps {
  projects: Database["public"]["Tables"]["projects"]["Row"][];
}

const ProjectsGallery = ({ projects }: ProjectsGalleryProps) => {


  if (projects.length === 0) {
    return (
      <CreateNewProjectBlock/>
    );
  }

  return (
    <GallaryGrid>
      {projects.map((project) => (
        <ProjectCard
         
          key={project.project_id}
          data={project}
        />
      ))}
    </GallaryGrid>
  );
};

export default ProjectsGallery;
