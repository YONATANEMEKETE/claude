import { create } from 'zustand';

interface SidebarState {
  isOpen: boolean;
  OpenSidebar: () => void;
  closeSidebar: () => void;
}

const useSidebar = create<SidebarState>((set) => ({
  isOpen: false,
  OpenSidebar: () => set({ isOpen: true }),
  closeSidebar: () => set({ isOpen: false }),
}));

export default useSidebar;
