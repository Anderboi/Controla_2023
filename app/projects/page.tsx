import ContainerBox from "@/components/atoms/ContainerBox";
import { supabaseServer } from '@/lib/supabaseServer';
import { redirect } from 'next/navigation';
import React from "react";

const ProjectsPage = async () => {
   const {
     data: { session },
   } = await supabaseServer.auth.getSession();

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
