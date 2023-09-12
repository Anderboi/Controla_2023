import { create } from "zustand";
import { Database } from "@/types/supabase";

interface WorkingStageStore {
  checks: Database["public"]["Tables"]["working_stage"]["Row"][];
}

const useWorkingStageChecks = create<WorkingStageStore>((set) => ({
  checks: [],
}));

export default useWorkingStageChecks;
