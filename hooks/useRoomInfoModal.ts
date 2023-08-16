import { create } from "zustand";
import { Database } from "@/types/supabase";

interface RoomInfoModalStore {
  title: string;
  data?: Database["public"]["Tables"]["room_info"]["Row"] | null;
  furniture: Database["public"]["Tables"]["room_furnishing"]["Row"][] | null;
  isOpen: boolean;
  onOpen: (
    title: string,
    data: Database["public"]["Tables"]["room_info"]["Row"] | null,
    furniture: Database["public"]["Tables"]["room_furnishing"]["Row"][] | null
  ) => void;
  onClose: () => void;
}

const useRoomInfoModal = create<RoomInfoModalStore>((set) => ({
  title: "",
  isOpen: false,
  data: null,
  furniture: null,
  onOpen: (title, data, furniture) =>
    set({ isOpen: true, title: title, data: data, furniture: furniture }),
  onClose: () => set({ isOpen: false }),
}));

export default useRoomInfoModal;
