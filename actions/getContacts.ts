import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getContacts = async (): Promise<any[]> => {
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
    .select("contact(*)")
    .eq("user_id", sessionData.session?.user.id);

  if (error) {
    console.log(error);
    return [];
  }
  if (!data) {
    return [];
  }

  // return data as any || []
  return data.map((item) => ({
    ...item.contact,
  }));
};

export default getContacts;
