import { create } from "zustand";

interface Item {
  name: string;
  id: number;
}

interface EngeneeringModalStore {
  isOpen: boolean;
  data: string[] | null;
  type: "heating" | "conditioning" | "plumbing" | "electric" | null;
  array: Item[];
  onOpen: (
    type: "heating" | "conditioning" | "plumbing" | "electric" | null
  ) => void;
  onClose: () => void;
  addValue: (value: Item) => void;
  removeValue: (id: number) => void;
  loadData: (data: string[]) => void;
}

const useEngeneeringModal = create<EngeneeringModalStore>((set) => ({
  isOpen: false,
  data: null,
  array: [],
  type: null,
  onOpen: (type) => set({ isOpen: true, type: type }),
  onClose: () => set({ isOpen: false, type: null }),

  loadData: (data) => {
    set((state) => ({
      data: data,
    }));
  },

  addValue: ({ name, id }) =>
    set((state) => ({
      array: [...state.array, { name, id }],
    })),

  removeValue: (id) =>
    set((state) => ({
      array: state.array.filter((item) => item.id !== id),
    })),

  cleanArray: () => {
    set(() => ({
      array: [],
    }));
  },
}));

export default useEngeneeringModal;
