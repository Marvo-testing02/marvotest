import { create } from 'zustand';

const useDashboardStore = create((set) => ({
    currentPageTitle: 'Dashboard',
    setCurrentPageTitle: (title) => set({ currentPageTitle: title }),
}));

export default useDashboardStore;
