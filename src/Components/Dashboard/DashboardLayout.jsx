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
import EastIcon from '@mui/icons-material/East';

export default function DashboardLayout() {
    const [value, setValue] = useState('1');
    const [startDate, setStartDate] = useState(dayjs());
    const [endDate, setEndDate] = useState(dayjs());
    const location = useLocation();
    const navigate = useNavigate();
    const setCurrentPageTitle = useDashboardStore((state) => state.setCurrentPageTitle);
    const { currentPageTitle } = useDashboardStore();

    const isDashboardRoute = location.pathname === '/dashboard';





    useEffect(() => {
        const path = location.pathname;
        const pathToTitleMap = {
            '/dashboard': 'Dashboard',
            '/dashboard/my-task': 'My Task',
            '/dashboard/documents': 'Documents',
            '/dashboard/team': 'Team',
            '/dashboard/reports': 'Reports',
            '/dashboard/admin': 'Admin',
        };

        const matchedTitle = pathToTitleMap[path];
        if (matchedTitle) {
            setCurrentPageTitle(matchedTitle);
        }
    }, [location.pathname, setCurrentPageTitle]);




    const handleChange = (event, newValue) => {
        setValue(newValue);

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
                        <Box className="flex flex-col gap-4 md:flex-row md:items-center lg:items-end  md:justify-between mt-3">
                            <Box sx={{ scrollbarWidth: 'none' }} className="w-full overflow-x-auto ">
                                <TabList
                                    onChange={handleChange}
                                    aria-label="dashboard tabs"
                                    sx={{
                                        minWidth: '600px',
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
                                                whiteSpace: 'nowrap',
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
                            </Box>

                            {/* Filters only on Dashboard tab */}
                            {currentPageTitle === 'Dashboard' && isDashboardRoute && (
                                <LocalizationProvider dateAdapter={AdapterDayjs} >
                                    <Box sx={{ width: '70%' }} className="flex flex-col sm:flex-row flex-wrap gap-0 items-start sm:items-center sm:justify-end  sm:w-auto">
                                        <MobileDatePicker
                                            value={startDate}
                                            onChange={setStartDate}
                                            slotProps={{
                                                textField: {
                                                    variant: 'outlined',
                                                    size: 'small',
                                                    sx: {
                                                        bgcolor: 'white',
                                                        width: '190px',
                                                        height: '56px',
                                                        px: 1,
                                                        py: 0,
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        '& .MuiInputBase-root': {
                                                            height: '32px',
                                                            minHeight: '32px',
                                                            fontSize: '14px',
                                                        },
                                                        '& fieldset': {
                                                            border: 'none',
                                                        },
                                                        '&:hover fieldset': {
                                                            border: 'none',
                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            border: 'none',
                                                        },
                                                    },
                                                },
                                            }}
                                        />



                                        <Typography className="hidden sm:inline bg-[#C1C7CD] p-4 ">
                                            <EastIcon sx={{ color: '#697077' }} />
                                        </Typography>
                                        <MobileDatePicker
                                            value={endDate}
                                            onChange={setEndDate}
                                            slotProps={{
                                                textField: {
                                                    variant: 'outlined',
                                                    size: 'small',
                                                    sx: {
                                                        bgcolor: 'white',
                                                        width: '190px',
                                                        height: '56px',
                                                        px: 1,
                                                        py: 0,
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        '& .MuiInputBase-root': {
                                                            height: '32px',
                                                            minHeight: '32px',
                                                            fontSize: '14px',
                                                        },
                                                        '& fieldset': {
                                                            border: 'none',
                                                        },
                                                        '&:hover fieldset': {
                                                            border: 'none',
                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            border: 'none',
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

                    {/* TabPanels or Route Outlet */}
                    {isDashboardRoute ? (
                        <>
                            <TabPanel sx={{ p: 0 }} value="1">
                                <DashboardOverviewPage />
                            </TabPanel>
                            <TabPanel sx={{ p: 0 }} value="2">
                                <DashboardMyTaskPage />
                            </TabPanel>
                            <TabPanel sx={{ p: 0 }} value="3">
                                Item Three
                            </TabPanel>
                        </>
                    ) : (
                        <Outlet />
                    )}
                </TabContext>

            </div>
        </SidebarLayout>
    );
}
