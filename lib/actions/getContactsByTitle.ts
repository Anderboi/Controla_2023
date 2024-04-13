import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { Database } from "@/types/supabase";
import getContacts from "./getContacts";

const getContactsByTitle = async (
  title: string
): Promise<Database["public"]["Tables"]["users"]["Row"][]> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  if (!title) {
    const allContacts = await getContacts();
    return allContacts;
  }

  const { data, error } = await supabase
    .from("users")
    .select("*")
    // .eq("id", sessionData.session?.user.id)
    .ilike("full_name", `%${title}%`)
    .order("full_name", { ascending: false });

  if (error) {
    console.log(error.message);
  }

  return (data as any) || [];
};

export default getContactsByTitle;
