import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { Database } from "@/types/supabase";

const getProjectSchemaData = async (
  projectId: number
): Promise<Database["public"]["Tables"]["working_stage"]["Row"][]> => {
  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase
    .from("working_stage")
    .select(`*`)
    .eq("project_id", projectId)
    .order("id");

  if (error) {
    console.log(error.message);
  }

  return (data as any) || [];
};

export default getProjectSchemaData;
