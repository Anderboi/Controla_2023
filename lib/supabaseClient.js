// import { createClient } from "@supabase/supabase-js";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
// import { Database } from "@/types/supabase";
// import { createClient } from '@supabase/supabase-js';


export const supabaseClient = createClientComponentClient<Database>({});

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// export const supabaseClient = createClient(supabaseUrl, supabaseKey);

