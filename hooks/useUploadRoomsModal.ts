import { create } from "zustand";

interface UploadRoomsModalStore {
  isOpen: boolean;
  storey: number;
  setStorey: (storey: number) => void;
  onOpen: () => void;
  onClose: () => void;
}

const useUploadRoomsModal = create<UploadRoomsModalStore>((set) => ({
  isOpen: false,
  storey: 1,
  setStorey: (storey) => set({ storey }),
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useUploadRoomsModal;
