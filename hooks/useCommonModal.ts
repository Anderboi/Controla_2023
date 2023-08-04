import { create } from "zustand";

interface CommonModalStore {
  title: string;
  data?: any;
  isOpen: boolean;
  type: string | null;
  onOpen: (title: string, type: string, data:any) => void;
  onClose: () => void;
}

const useCommonModal = create<CommonModalStore>((set) => ({
  title: "",
  isOpen: false,
  type: null,
  data: null,
  onOpen: (title, type, data) => set({ isOpen: true, title: title, type: type, data: data }),
  onClose: () => set({ isOpen: false, type: null }),
}));

export default useCommonModal;
