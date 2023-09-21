import { create } from "zustand";
import { Database } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import toast from "react-hot-toast";

interface WorkingStageStore {
  checks: { page: string; isDone: boolean }[];
  fetchChecks: (projectId: number) => void;
  onChange: (projectId: number, value: string, isDone: boolean) => void;
}

const useWorkingStageChecks = create<WorkingStageStore>((set) => ({
  checks: [],
  fetchChecks: async (projectId) => {
    const supabase = createServerComponentClient({ cookies });

    const { data, error } = await supabase
      .from("working_stage")
      .select("page, isDone")
      .eq("project_id", projectId);

    if (error) {
      toast.error(error.message);
    } else {
      //? Fills CHECKS with data fetched from supabase server
      set({ checks: await data });

      return data;
    }
  },
  onChange: async (projectId, value, isDone) => {
    const supabase = createServerComponentClient({ cookies });

    const { data, error } = await supabase
      .from("working_stage")
      .upsert({ project_id: projectId, page: value, isDone: isDone });

    error && toast.error(error.message);
  },
}));

export default useWorkingStageChecks;
