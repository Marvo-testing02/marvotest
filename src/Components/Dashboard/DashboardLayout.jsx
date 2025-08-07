import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import SidebarLayout from './DashboardComponents/SideBarLayout/SidebarLayout';
import Navbar from './DashboardComponents/DashboardNavbar/Navbar';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import dayjs from 'dayjs';
import { DatePicker } from 'antd';
import 'antd/dist/reset.css';
import DashboardOverviewPage from '../../Pages/DashboardPages/Overview/DashboardOverviewPage';
import DashboardMyTaskPage from '../../Pages/DashboardPages/MyTask/DashboardMyTaskPage';
import useDashboardStore from '../../Store/useDashboardStore/useDashboardStore';

export default function DashboardLayout() {
  const [value, setValue] = useState('1');
  const [dateRange, setDateRange] = useState([dayjs(), dayjs()]);
  const location = useLocation();
  const navigate = useNavigate();
  const setCurrentPageTitle = useDashboardStore((state) => state.setCurrentPageTitle);
  const { currentPageTitle } = useDashboardStore();
  const isDashboardRoute = location.pathname === '/dashboard';

  useEffect(() => {
    const pathToTitleMap = {
      '/dashboard': 'Dashboard',
      '/dashboard/my-task': 'My Task',
      '/dashboard/documents': 'Documents',
      '/dashboard/team': 'Team',
      '/dashboard/reports': 'Reports',
      '/dashboard/admin': 'Admin',
    };
    const matchedTitle = pathToTitleMap[location.pathname];
    if (matchedTitle) setCurrentPageTitle(matchedTitle);
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
    setCurrentPageTitle(tabTitleMap[newValue] || 'Dashboard');

    if (!isDashboardRoute) navigate('/dashboard');
  };

  return (
    <SidebarLayout>
      <div className='flex flex-col w-full'>
        <Navbar />

        <TabContext value={isDashboardRoute ? value : ''}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Box className="flex flex-col gap-4 md:flex-row md:items-center lg:items-end md:justify-between mt-3">
              <Box sx={{ scrollbarWidth: 'none' }} className="w-full overflow-x-auto">
                <TabList
                  onChange={handleChange}
                  aria-label="dashboard tabs"
                  sx={{
                    minWidth: '600px',
                    '.MuiTabs-flexContainer': { flexWrap: 'nowrap' },
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
                          ? { borderBottom: '2px solid #1976d2' }
                          : {},
                        '&:hover': { backgroundColor: 'transparent' },
                      }}
                    />
                  ))}
                </TabList>
              </Box>

              {currentPageTitle === 'Dashboard' && isDashboardRoute && (
                <Box
                  sx={{ width: '70%' }}
                  className="flex flex-col sm:flex-row flex-wrap gap-0 items-start sm:items-center sm:justify-end sm:w-auto"
                >
                  <DatePicker.RangePicker
                    picker="date" // keep as date range
                    value={dateRange}
                    onChange={(dates) => setDateRange(dates)}
                    allowClear={false}
                    format="DD/MM/YYYY"
                    className="!bg-white !w-[400px] !h-14 !rounded-md"
                    dropdownClassName="single-month-dropdown"
                    ranges={{
                      Today: [dayjs().startOf('day'), dayjs().endOf('day')],
                      Yesterday: [
                        dayjs().subtract(1, 'day').startOf('day'),
                        dayjs().subtract(1, 'day').endOf('day'),
                      ],
                      'Last week': [
                        dayjs().subtract(1, 'week').startOf('week'),
                        dayjs().subtract(1, 'week').endOf('week'),
                      ],
                      'Last month': [
                        dayjs().subtract(1, 'month').startOf('month'),
                        dayjs().subtract(1, 'month').endOf('month'),
                      ],
                      'Last quarter': [
                        dayjs().subtract(1, 'quarter').startOf('quarter'),
                        dayjs().subtract(1, 'quarter').endOf('quarter'),
                      ],
                    }}
                    panelRender={(panel) => (
                      <div style={{ display: 'flex', flexDirection: 'column', width: 'fit-content' }}>
                        {panel}
                      </div>
                    )}
                  />
                </Box>
              )}
            </Box>
          </Box>

          {isDashboardRoute ? (
            <>
              <TabPanel sx={{ p: 0 }} value="1">
                <DashboardOverviewPage />
              </TabPanel>
              <TabPanel sx={{ p: 0 }} value="2">
                <DashboardMyTaskPage />
              </TabPanel>
              <TabPanel sx={{ p: 0 }} value="3">
                Documents Page
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
