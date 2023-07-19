import { create } from "zustand";

interface Item {
  name: string;
  id: number;
}

interface EngeneeringModalStore {
  isOpen: boolean;
  type: "heating" | "conditioning" | "plumbing" | null;
  array: Item[];
  onOpen: (type: "heating" | "conditioning" | "plumbing" | null) => void;
  onClose: () => void;
  addValue: (value: Item) => void;
  removeValue: (id: number) => void;
}

const useEngeneeringModal = create<EngeneeringModalStore>((set) => ({
  isOpen: false,
  array: [],
  type: null,
  onOpen: (type) => set({ isOpen: true, type: type }),
  onClose: () => set({ isOpen: false, type: null }),

  addValue: ({ name, id }) =>
    set((state) => ({
      array: [...state.array, { name, id }],
    })),

  removeValue: (id) =>
    set((state) => ({
      array: state.array.filter((item) => item.id !== id),
    })),

  cleanArray: () => {
    set((state) => ({
      array: [],
    }));
  },
}));

export default useEngeneeringModal;
