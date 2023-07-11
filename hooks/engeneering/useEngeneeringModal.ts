import { create } from "zustand";

interface Item {
  name: string;
  id: number;
}

interface EngeneeringModalStore {
  isOpen: boolean;
  type: "heating" | "conditioning" | "plumbing" | null;
  array: Item[];
  // plumbing: string[];
  // heating: string[];
  onOpenHeating: () => void;
  onOpenConditioning: () => void;
  onOpenWater: () => void;
  onClose: () => void;
  addValue: (value: Item) => void;
  removeValue: (id: number) => void;
}

const useEngeneeringModal = create<EngeneeringModalStore>((set) => ({
  isOpen: false,
  array: [],
  // heating: [],
  // plumbing: [],
  type: null,
  onOpenHeating: () => set({ isOpen: true, type: "heating" }),
  onOpenConditioning: () => set({ isOpen: true, type: "conditioning" }),
  onOpenWater: () => set({ isOpen: true, type: "plumbing" }),
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
