import { create } from "zustand";

interface CommonModalStore {
  title: string;
  isOpen: boolean;
  type: string | null;
  onOpen: (title: string, type: string) => void;
  onClose: () => void;
}

const useCommonModal = create<CommonModalStore>((set) => ({
  title: "",
  isOpen: false,
  type: null,
  onOpen: (title, type) => set({ isOpen: true, title: title, type: type }),
  onClose: () => set({ isOpen: false, type: null }),
}));

export default useCommonModal;
