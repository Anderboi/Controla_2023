import { Database } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getUserById = async (userId: string | null): Promise<Database['public']['Tables']['users']['Row']['full_name']> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  const { data, error } = await supabase
    .from("users")
    .select("full_name")
    .eq("id", userId)
    .single();

  if (error) {
    console.log(error);
  }
  if (!data) {
    console.log("no data");
    return "";
  }

  return data.full_name as any;
};

export default getUserById;
