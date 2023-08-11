import { create } from "zustand";
import { Database } from '@/types/supabase';

interface RoomInfoModalStore {
  title: string;
  data?: Database["public"]["Tables"]["room_info"]["Row"] | null;
  isOpen: boolean;
  onOpen: (title: string, data: any) => void;
  onClose: () => void;
}

const useRoomInfoModal = create<RoomInfoModalStore>((set) => ({
  title: "",
  isOpen: false,
  data: null,
  onOpen: (title, data) =>
    set({ isOpen: true, title: title, data: data }),
  onClose: () => set({ isOpen: false }),
}));

export default useRoomInfoModal;
