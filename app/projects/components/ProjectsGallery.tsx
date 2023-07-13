"use client";

import React from "react";
import { useRouter } from "next/navigation";
import ProjectCard from "@/components/common/cards/ProjectCard";
import Button from "@/components/common/inputs/Button";
import { Database } from "@/types/supabase";
import GallaryGrid from '@/components/common/GallaryGrid';

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
    <GallaryGrid>
      {projects.map((project) => (
        <ProjectCard
          onClick={() => {
            route.push(`/projects/${project.project_id}/preProject`);
          }}
          key={project.project_id}
          data={project}
        />
      ))}
    </GallaryGrid>
  );
};

export default ProjectsGallery;
