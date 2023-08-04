import React from "react";
import ProjectCard from "@/components/common/cards/ProjectCard";
import { Database } from "@/types/supabase";

import CreateNewProjectBlock from './CreateNewProjectBlock';
import GallaryGrid from '@/components/common/grids/GallaryGrid';

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
