import ContainerBox from "@/components/common/ContainerBox";
import { supabase } from '@/lib/supabase';
import { redirect } from "next/navigation";
import React from "react";

const ProjectsPage = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/");
  }

  return (
    <ContainerBox classname="px-8 py-8">
      <div>ProjectsPage</div>
    </ContainerBox>
  );
};

export default ProjectsPage;
