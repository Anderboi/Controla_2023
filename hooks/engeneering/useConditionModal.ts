import { create } from "zustand";

interface ConditionModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useConditionModal = create<ConditionModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useConditionModal;
