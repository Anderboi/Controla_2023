import { useSupabaseClient } from "@supabase/auth-helpers-react";

const useLoadImage = (
  cover_img: string | null,
  type: "project" | "contact"
) => {
  const supabaseClient = useSupabaseClient();

  if (!cover_img || cover_img === null) {
    return null;
  }

  if (type === "project") {
    const image = cover_img || "";

    const { data: imageData } = supabaseClient.storage
      .from("projects")
      .getPublicUrl(image);

    return imageData.publicUrl;
  }

  if (type === "contact") {
    const image = cover_img || "";

    const { data: imageData } = supabaseClient.storage
      .from("users")
      .getPublicUrl(image);

    return imageData.publicUrl;
  }
};

export default useLoadImage;
