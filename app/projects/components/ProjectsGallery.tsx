import ProjectCard from "@/components/common/cards/ProjectCard";
import Button from "@/components/common/inputs/Button";
import { Project } from "@/types/supabase";
import React from "react";

interface ProjectsGalleryProps {
  projects: Project[];
}

const ProjectsGallery = ({ projects }: ProjectsGalleryProps) => {
  if (projects.length === 0) {
    return (
      <article className="flex flex-col items-center justify-center h-full max-w-sm m-auto gap-6">
        <h1>Еще нет ни одного проекта.</h1>
        <Button mode="action">Создать первый проект</Button>
      </article>
    );
  }

  return (
    <div
      className="
      grid
      grid-cols-1
      
      sm:grid-cols-2
      lg:grid-cols-3
      xl:grid-cols-3
      2xl:grid-cols-4
      gap-3
      mt-4
      "
    >
      {projects.map((project) => (
        <ProjectCard
          key={project.project_id}
          data={project}
          // onClick={() => {}}
        />
      ))}
    </div>
  );
};

export default ProjectsGallery;
