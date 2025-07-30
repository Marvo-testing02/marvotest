// useDashboardStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useDashboardStore = create(
    persist(
        (set) => ({
            currentPageTitle: 'Dashboard',
            setCurrentPageTitle: (title) => set({ currentPageTitle: title }),
        }),
        {
            name: 'dashboard-storage', // key in localStorage
        }
    )
);

export default useDashboardStore;
