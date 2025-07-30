import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { Typography } from '@mui/material';
import DashboardOverviewPage from '../../Pages/DashboardPages/Overview/DashboardOverviewPage';
import DashboardMyTaskPage from '../../Pages/DashboardPages/MyTask/DashboardMyTaskPage';
import useDashboardStore from '../../Store/useDashboardStore/useDashboardStore';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

function MainDashboard() {
    const [value, setValue] = React.useState('1');
    const [startDate, setStartDate] = React.useState(dayjs());
    const [endDate, setEndDate] = React.useState(dayjs());
    const setCurrentPageTitle = useDashboardStore((state) => state.setCurrentPageTitle);
    const { currentPageTitle } = useDashboardStore();
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
    };


    return (
        <>
            <div className="py-2">
               
            </div >


        </>
    );
}

export default MainDashboard;
