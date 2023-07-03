import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from 'next/headers';

import { Project } from "@/types/supabase";

const getCurrntProject = async (id: number): Promise<Project> => {
  const supabase = createServerComponentClient({cookies});

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("project_id", id)
    .single();

  if (error) {
    console.log(error.message);
  }

  return data as any;
};

export default getCurrntProject;
