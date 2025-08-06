// /Store/useDashboardStore/useDashboardStore.js

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useDashboardStore = create(
    persist(
        (set) => ({
            currentPageTitle: 'Dashboard',
            setCurrentPageTitle: (title) => set({ currentPageTitle: title }),


            searchQuery: '',
            setSearchQuery: (query) => set({ searchQuery: query }),
        }),
        {
            name: 'dashboard-storage',
        }
    )
);

export default useDashboardStore;
