import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from 'next/headers';

import { Database } from "@/types/supabase";



const getResidentsInfo = async (id: number): Promise<Database['public']['Tables']['inhabitant_info']['Row'][]> => {
  const supabase = createServerComponentClient({cookies});

  const { data, error } = await supabase
    .from("inhabitant_info")
    .select("*")
    .eq("project_id", id).select()
    

  if (error) {
    console.log(error.message);
  }

  return data as any;
};

export default getResidentsInfo;
