import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from 'next/headers';

import { Database } from "@/types/supabase";



const getRoomEquipment = async (id: number): Promise<Database['public']['Tables']['room_furnishing']['Row'][]> => {
  const supabase = createServerComponentClient({cookies});

  const { data, error } = await supabase
    .from("room_furnishing")
    .select("*")
    .eq("project_id", id)
    

  if (error) {
    console.log(error.message);
  }

  return (data as any) || [];
};

export default getRoomEquipment;
