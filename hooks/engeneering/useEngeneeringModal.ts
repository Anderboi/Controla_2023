import { create } from "zustand";

interface Item {
  name: string;
  id: number;
}

interface EngeneeringModalStore {
  isOpen: boolean;
  data: string[] | null;
  type: "conditioning" | "heating" | "plumbing" | "electric";
  array: Item[];
  onOpen: (
    type: "conditioning" | "heating" | "plumbing" | "electric",
    data: string[] | null
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
  type: "conditioning",
  onOpen: (type, data) => set({ isOpen: true, type: type, data: data }),
  onClose: () => set({ isOpen: false }),

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
