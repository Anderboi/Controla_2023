import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { User } from "@/types/supabase";

const getContacts = async (): Promise<User[]> => {
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
    .from("contacts")
    .select("*")
    .eq("id", sessionData.session?.user.id)
    .order("full_name", { ascending: false });

  if (error) {
    console.log(error);
  }

  return (data as any) || [];
};

export default getContacts;
