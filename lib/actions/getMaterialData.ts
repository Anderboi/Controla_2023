import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { Database } from "@/types/supabase";

const getMaterialData = async (): Promise<
  Database["public"]["Tables"]["database"]["Row"][]
> => {
  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase.from("database").select("*");

  if (error) {
    console.log(error.message);
  }

  console.log(data);
  

  return (data as any) || [];
};

export default getMaterialData;
