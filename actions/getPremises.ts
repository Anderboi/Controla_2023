import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { Database } from "@/types/supabase";

const getPremises = async (
  id: number
): Promise<Database["public"]["Tables"]["room_info"]["Row"][]> => {
  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase
    .from("room_info")
    .select("*, room_furnishing(*)")
    .eq("project_id", id)
    .order("room_number", { ascending: true });

  if (error) {
    console.log(error.message);
  }

  return (data as any) || [];
};

export default getPremises;
