import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { Project } from "@/types/supabase";

const getFavouriteProjects = async (): Promise<Project[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  const { data: sessionData, error: sessionError } =
    await supabase.auth.getSession();

  if (sessionError) {
    console.log(sessionError.message);

    return [];
  }

  const { data, error } = await supabase
    .from("favourite_projects")
    .select("*, project_id(*)")
    .eq("user_id", sessionData.session?.user.id)
    .order("created_at", { ascending: false });

  if (error) {
    console.log(error.message);
    return [];
  }

  if (!data) {
    return [];
  }

  return data.map((item)=> ({
    ...item.project_id
  }));
};

export default getFavouriteProjects;
