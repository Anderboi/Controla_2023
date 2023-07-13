"use client";

import React from "react";
import { useRouter } from "next/navigation";
import ProjectCard from "@/components/common/cards/ProjectCard";
import Button from "@/components/common/inputs/Button";
import { Database } from "@/types/supabase";

interface ProjectsGalleryProps {
  projects: Database["public"]["Tables"]["projects"]["Row"][];
}

const ProjectsGallery = ({ projects }: ProjectsGalleryProps) => {
  const route = useRouter();

  if (projects.length === 0) {
    return (
      <article
        className="
          flex
          flex-col
          items-center
          justify-center
          max-w-sm 
          m-auto 
          gap-6
        "
      >
        <h1>Еще нет ни одного проекта.</h1>
        <Button mode="action">Создать первый проект</Button>
      </article>
    );
  }

  return (
    <div
      className="
        grid
        grid-cols-2
        sm:grid-cols-2
        md:grid-cols-3
        xl:grid-cols-4
        2xl:grid-cols-5
        gap-3
      "
    >
      {projects.map((project) => (
        <ProjectCard
          onClick={() => {
            route.push(`/projects/${project.project_id}/preProject`);
          }}
          key={project.project_id}
          data={project}
        />
      ))}
    </div>
  );
};

export default ProjectsGallery;
