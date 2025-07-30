import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import SidebarLayout from './DashboardComponents/SideBarLayout/SidebarLayout';
import Navbar from './DashboardComponents/DashboardNavbar/Navbar';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { DatePicker, MobileDatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { Typography } from '@mui/material';
import DashboardOverviewPage from '../../Pages/DashboardPages/Overview/DashboardOverviewPage';
import DashboardMyTaskPage from '../../Pages/DashboardPages/MyTask/DashboardMyTaskPage';
import useDashboardStore from '../../Store/useDashboardStore/useDashboardStore';

export default function DashboardLayout() {
    const [value, setValue] = useState('1');
    const [startDate, setStartDate] = useState(dayjs());
    const [endDate, setEndDate] = useState(dayjs());
    const location = useLocation();
    const navigate = useNavigate();
    const setCurrentPageTitle = useDashboardStore((state) => state.setCurrentPageTitle);
    const { currentPageTitle } = useDashboardStore();

    const isDashboardRoute = location.pathname === '/dashboard';

    const handleChange = (event, newValue) => {
        setValue(newValue);

        // Set page title based on tab
        const tabTitleMap = {
            '1': 'Dashboard',
            '2': 'My Task',
            '3': 'Documents',
            '4': 'Team',
            '5': 'Reports',
            '6': 'Admin',
        };
        const pageTitle = tabTitleMap[newValue] || 'Dashboard';
        setCurrentPageTitle(pageTitle);

        // Navigate to /dashboard if not already there
        if (!isDashboardRoute) {
            navigate('/dashboard');
        }
    };


    return (
        <SidebarLayout>
            <div className='flex flex-col w-full'>
                <Navbar />

                <TabContext value={isDashboardRoute ? value : ''}>
                    {/* Tab List + Filters */}
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Box className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mt-3">
                            <TabList
                                onChange={handleChange}
                                aria-label="dashboard tabs"
                                className="overflow-x-auto whitespace-nowrap"
                                sx={{
                                    maxWidth: '100%',
                                    '.MuiTabs-flexContainer': {
                                        flexWrap: 'nowrap',

                                    },
                                }}
                            >
                                {[
                                    ['Overview', '1'],
                                    ['Tasks', '2'],
                                    ['Documents', '3'],
                                    ['Team', '4'],
                                    ['Reports', '5'],
                                    ['Admin', '6'],
                                    ['...', '7'],
                                ].map(([label, val]) => (
                                    <Tab
                                        disableRipple
                                        key={val}
                                        label={label}
                                        value={val}
                                        sx={{
                                            fontWeight: 600,
                                            backgroundColor: 'transparent',
                                            textTransform: 'none',
                                            minWidth: 90,

                                            '&.Mui-selected': isDashboardRoute
                                                ? {
                                                    borderBottom: '2px solid #1976d2',
                                                }
                                                : {},
                                            '&:hover': {
                                                backgroundColor: 'transparent',
                                            },
                                        }}
                                    />
                                ))}
                            </TabList>

                            {/* Filters only on Dashboard tab */}
                            {currentPageTitle === "Dashboard" && isDashboardRoute && (
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <Box className="  flex flex-wrap gap-1 items-center">
                                        <MobileDatePicker
                                            label="Start Date"
                                            value={startDate}
                                            onChange={setStartDate}
                                            slotProps={{
                                                textField: {
                                                    variant: 'standard',
                                                    size: 'large',


                                                    sx: {
                                                        bgcolor: 'white',
                                                        '& .MuiOutlinedInput-root': {
                                                            borderRadius: 1,
                                                            backgroundColor: 'white',
                                                            border:'none'
                                                        },
                                                    },
                                                },
                                            }}
                                        />
                                        <Typography>to</Typography>
                                        <MobileDatePicker
                                            label="End Date"
                                            value={endDate}
                                            onChange={setEndDate}
                                            slotProps={{
                                                textField: {
                                                    variant: 'outlined',
                                                    size: 'small',
                                                    sx: {
                                                        bgcolor: 'white',
                                                        '& .MuiOutlinedInput-root': {
                                                            borderRadius: 1,
                                                            backgroundColor: 'white',
                                                        },
                                                    },
                                                },
                                            }}
                                        />
                                    </Box>
                                </LocalizationProvider>
                            )}
                        </Box>
                    </Box>

                    {/* Conditionally show TabPanels or Route content */}
                    {isDashboardRoute ? (
                        <>
                            <TabPanel sx={{ p: 0 }} value="1">
                                <DashboardOverviewPage />
                            </TabPanel>
                            <TabPanel sx={{ p: 0 }} value="2">
                                <DashboardMyTaskPage />
                            </TabPanel>
                            <TabPanel sx={{ p: 0 }} value="3">Item Three</TabPanel>
                        </>
                    ) : (
                        <Outlet />
                    )}
                </TabContext>
            </div>
        </SidebarLayout>
    );
}
