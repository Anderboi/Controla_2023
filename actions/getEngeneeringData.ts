import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { Database } from "@/types/supabase";

const getEngeneeringData = async (
  id: number
): Promise<Database["public"]["Tables"]["engeneering_data"]["Row"]> => {
  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase
    .from("engeneering_data")
    .select("*")
    .eq("project_id", id)
    .single();

  if (error) {
    console.log(error.message);
  }

  return (data as any) || []; // TODO: [] or null ?
};

export default getEngeneeringData;
