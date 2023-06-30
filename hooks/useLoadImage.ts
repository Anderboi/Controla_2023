import { Project } from "@/types/supabase";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const useLoadImage = (project: Project) => {
  const supabaseClient = useSupabaseClient();

  if (!project || project.cover_img === null) {
    return null;
  }

  const image = project.cover_img || '';

  const { data: imageData } = supabaseClient.storage
    .from("projects")
    .getPublicUrl(image);

  return imageData.publicUrl;
};

export default useLoadImage;
