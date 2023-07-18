"use client";

import React from "react";
import { useRouter } from "next/navigation";
import ProjectCard from "@/components/common/cards/ProjectCard";
import Button from "@/components/common/inputs/Button";
import { Database } from "@/types/supabase";
import GallaryGrid from "@/components/common/GallaryGrid";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useUploadModal from "@/hooks/useUploadModal";

interface ProjectsGalleryProps {
  projects: Database["public"]["Tables"]["projects"]["Row"][];
}

const ProjectsGallery = ({ projects }: ProjectsGalleryProps) => {
  const route = useRouter();

  const authModal = useAuthModal();
  const { user } = useUser();
  const uploadModal = useUploadModal();
  const onClick = () => {
    if (!user) {
      return authModal.onOpen();
    }
    //TODO: check for subscription

    return uploadModal.onOpen();
  };

  if (projects.length === 0) {
    return (
      <article
        className="
          m-auto
          flex
          max-w-sm
          flex-col
          items-center 
          justify-center 
          gap-6
        "
      >
        <h1>Еще нет ни одного проекта.</h1>
        <Button mode="action" onClick={onClick}>
          Создать первый проект
        </Button>
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
