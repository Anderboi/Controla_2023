import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from 'next/headers';

import { Database } from "@/types/supabase";



const getProjectInfo = async (id: number): Promise<Database['public']['Tables']['project_info']['Row']> => {
  const supabase = createServerComponentClient({cookies});

  const { data, error } = await supabase
    .from("project_info")
    .select("*")
    .eq("project_id", id)
    .single();

  if (error) {
    console.log(error.message);
  }

  return data as any;
};

export default getProjectInfo;
