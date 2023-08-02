import { create } from "zustand";

interface Item {
  name: string;
  id: number;
}

interface CommonModalStore {
  title: string;
  isOpen: boolean;
  // data: string[] | null;
  type: string | null;
  // array: Item[];
  onOpen: (
    title: string,
    type: string,
  ) => void;
  onClose: () => void;
  // addValue: (value: Item) => void;
  // removeValue: (id: number) => void;
}

const useCommonModal = create<CommonModalStore>((set) => ({
  title: "",
  isOpen: false,
  // data: null,
  // array: [],
  type: null,
  onOpen: (title, type) =>
    set({ isOpen: true, title: title, type: type }),
  onClose: () => set({ isOpen: false, 
    type: null, 
    // data: null 
  }),

  // addValue: ({ name, id }) =>
  //   set((state) => ({
  //     array: [...state.array, { name, id }],
  //   })),

  // removeValue: (id) =>
  //   set((state) => ({
  //     array: state.array.filter((item) => item.id !== id),
  //   })),

  // cleanArray: () => {
  //   set(() => ({
  //     array: [],
  //   }));
  // },
})
);

export default useCommonModal;
