import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { User } from "@/types/supabase";
import getContacts from "./getContacts";

const getContactsByTitle = async (title: string): Promise<User[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  if (!title) {
    const allProjects = await getContacts();
    return allProjects;
  }

  const { data: sessionData, error: sessionError } =
    await supabase.auth.getSession();

  if (sessionError) {
    console.log(sessionError.message);

    return [];
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
