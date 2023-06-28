import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { supabaseServer } from "../../lib/supabaseServer";
import { revalidatePath } from "next/cache";
import React from "react";
import { cookies } from 'next/headers';

const NewProject = async () => {
  const addProject = async (formData: FormData) => {
    "use server";

    const address_country = formData.get("address_country");
    const address_city = formData.get("address_city");
    const address_street = formData.get("address_street");
    console.log(address_city);
    
    const supabase = createServerActionClient({cookies})
    await supabase
      .from("projects")
      .insert([{ address_street, address_city, address_country }]);
      
    revalidatePath("/");
  };

  return (
    <form onSubmit={addProject}>
      <input type="text" name="address_city" />
      <input type="text" name="address_street" />
      <input type="text" name="address_country" />
      <button type='submit'>Создать</button>
    </form>
  );
};

export default NewProject;
