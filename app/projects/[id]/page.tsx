"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import getCurrntProject from "@/actions/getCurrentProject";

export const revalidate = 0;

//TODO: настроить получение данных по проекту
const ProjectPage = async () => {
  const params = useSearchParams();

  const id = params.get("id");

  if (id) {
    const project = await getCurrntProject(+id);
    console.log(project);
  }

  return <div>project</div>;
};

export default ProjectPage;
