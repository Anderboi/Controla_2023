import create from "zustand";

interface Props {
  stage: "preProject" | "concept" | "schemas" | "furnishing" | "construction";
  loading: boolean;
  error: string | null;
}

export const useProjectState = create<Props>((set) => ({
  stage: "preProject",
  loading: false,
  error: null,
}));
