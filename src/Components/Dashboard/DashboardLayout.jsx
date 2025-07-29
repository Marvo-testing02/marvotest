import React from 'react';
import { Outlet } from 'react-router-dom';
import SidebarLayout from './DashboardComponents/SideBarLayout/SidebarLayout';


export default function DashboardLayout() {
    return (
        <SidebarLayout>
            <Outlet />
        </SidebarLayout>
    );
}
