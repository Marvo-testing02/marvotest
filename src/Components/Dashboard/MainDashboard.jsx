import React from 'react';
import dayjs from 'dayjs';
import useDashboardStore from '../../Store/useDashboardStore/useDashboardStore';


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
