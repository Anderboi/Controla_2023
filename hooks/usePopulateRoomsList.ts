import { Database } from "@/types/supabase";
import { create } from "zustand";

// interface Room {
//   id: string;
//   name: string;
// }

type Room = Database["public"]["Tables"]["room_info"]["Row"];

interface RoomsListStore {
  rooms: Room[];
  addRoom: ({ name, room_id, area, project_id, room_number }: Room) => void;
  removeRoom: (id: number) => void;
  cleanList: () => void;
  // onClose: () => void;
}

const usePopulateRoomsList = create<RoomsListStore>((set) => ({
  // ...initialState,
  rooms: [],
  addRoom: ({ area, name, project_id, room_id, room_number }: Room) => {
    set((state) => ({
      rooms: [
        ...state.rooms,
        { area, name, project_id, room_id, room_number } as Room,
      ],
    }));
  },
  removeRoom: (id) => {
    set((state) => ({
      rooms: state.rooms.filter((room) => room.room_id !== id),
    }));
  },
  cleanList: () => {
    set((state) => ({
      rooms: [],
    }));
  },
  // onClose: () => set({ isOpen: false }),
}));

export default usePopulateRoomsList;
