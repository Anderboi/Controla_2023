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
  // refreshList: () => void;
  // onClose: () => void;
}

const usePopulateRoomsList = create<RoomsListStore>((set) => ({
  // ...initialState,
  rooms: [],
  addRoom: ({ area, name, project_id, room_number, room_id }: Room) => {
    set((state) => ({
      rooms: [
        ...state.rooms,
        { 
          area, 
          name, 
          project_id, 
          // room_number, 
          room_id 
        } as Room,
      ]
    }));
  },

  // refreshList: () => {
  //   set((state) => ({
  //     rooms: state.rooms.map((room, index) => {
  //       ({...room, room_number: index + 1, room_id: index+1} as Room)
  //       return room
  //     }),
  //   }));
  // },
  removeRoom: (id) => {
    set((state) => ({
      rooms: state.rooms
        .filter((room) => room.room_id !== id)
        .map((room, index) => {
          ({
            ...room,
            room_number: index + 1,
            room_id: Number(room.project_id?.toString() + index.toString()),
          }) as Room;

          return room;
        }),
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
