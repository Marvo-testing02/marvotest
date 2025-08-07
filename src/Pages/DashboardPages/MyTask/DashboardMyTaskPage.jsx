import React, { useState } from 'react';
import {
    Box,
    Paper,
    Button,
    Tabs,
    Tab,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    useMediaQuery,
    useTheme,
} from '@mui/material';


const taskData = [
    {
        owner: 'Rohit Panchal',
        campaign: 'July B2B Cold Email Campaign',
        type: 'Cold Email',
        channel: 'Email',
        status: 'Active',
        date: '2024-07-10',
        tag: 'B2B',
    },
    {
        owner: 'Riya Sinha',
        campaign: 'Instagram Ad - Real Estate',
        type: 'Paid Ad',
        channel: 'Instagram',
        status: 'Paused',
        date: '2024-07-09',
        tag: 'Real Estate',
    },
    {
        owner: 'Anil Kumar',
        campaign: 'Facebook Retargeting Campaign',
        type: 'Paid Ad',
        channel: 'Facebook',
        status: 'Active',
        date: '2024-07-11',
        tag: 'E-commerce',
    },
    {
        owner: 'Sneha Verma',
        campaign: 'Google Search Ad - Fitness',
        type: 'Paid Ad',
        channel: 'Google',
        status: 'Completed',
        date: '2024-07-12',
        tag: 'Fitness',
    },
    {
        owner: 'Vikram Sharma',
        campaign: 'LinkedIn Outreach - Tech Industry',
        type: 'Cold Email',
        channel: 'LinkedIn',
        status: 'Scheduled',
        date: '2024-07-15',
        tag: 'Technology',
    },
    {
        owner: 'Meera Gupta',
        campaign: 'Twitter Ad - Fashion',
        type: 'Paid Ad',
        channel: 'Twitter',
        status: 'Active',
        date: '2024-07-16',
        tag: 'Fashion',
    },
];

function DashboardMyTaskPage() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [filterStatus, setFilterStatus] = useState('All');

    const today = new Date().toISOString().split("T")[0];

    const filteredTasks = taskData.filter((task) => {
        if (filterStatus === 'All') return true;
        if (filterStatus === 'Due Today') return task.date === today;
        if (filterStatus === 'Overdue') return task.date < today;
        if (filterStatus === 'Completed') return task.status === 'Completed';
        return true;
    });

    const buttonStyle = {
        color: "#000000",
        pl: "8px",
        pr: "8px",
        borderRadius: "12px",
        backgroundColor: "#EBEDF2",
        fontSize: "14px",
        fontWeight: 500,
        textTransform: "none",
        py: 0.5,
        border: "none",
        "&:hover": {
            backgroundColor: "#dce0e8",
        },
    };

    return (
        <Box className="mt-4 bg-[#f5faff] min-h-screen px-2 sm:px-6">
            {/* Tabs */}
            <Tabs
                textColor="#001D6C"
                value={0}
                className="mb-6"
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                TabIndicatorProps={{
                    sx: {
                        height: '2px',
                        width: '40px',
                        left: 'calc(5% - 10px)',
                        backgroundColor: '#001D6C',
                    },
                }}
                sx={{
                    minHeight: '30px',
                    '.MuiTab-root': {
                        minHeight: '30px',
                        paddingTop: '4px',
                        paddingBottom: '4px',
                        color: '#555',
                        fontSize: isMobile ? '12px' : '14px',
                    },
                    '.Mui-selected': {
                        color: '#001D6C',
                    },
                }}
            >
                <Tab disableRipple label="Tasks" />
                <Tab disableRipple label="Calendar" />
                <Tab disableRipple label="Manage" />
            </Tabs>

            {/* Filter Buttons */}
            <Box className="flex flex-wrap gap-3 lg:gap-3 md:gap-3 mb-6">
                {["All", "Due Today", "Overdue", "Completed"].map((label, idx) => (
                    <Button
                        key={label}
                        onClick={() => setFilterStatus(label)}
                        variant="outlined"
                        sx={{ ...buttonStyle }}
                    >
                        {label}
                    </Button>
                ))}
            </Box>



            {/* Task Table */}
            <TableContainer
                component={Paper}
                sx={{
                    borderRadius: '12px',
                    border: '2px solid #D4DBE3',
                    overflowX: 'auto',
                }}
            >
                <Table
                    sx={{
                        minWidth: 650,
                        '& .MuiTableCell-root': {
                            padding: isMobile ? '12px 8px' : '6px 24px',
                            fontSize: isMobile ? '12px' : '16px',
                        },
                        '& .MuiTableRow-root': {
                            height: isMobile ? '50px' : '72px',
                        },
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>Owner</TableCell>
                            <TableCell>Campaign</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Channel</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Last Updated</TableCell>
                            <TableCell>Tag</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredTasks.map((task, index) => (
                            <TableRow key={index}>
                                <TableCell sx={{ color: '#5C738A' }}>{task.owner}</TableCell>
                                <TableCell>{task.campaign}</TableCell>
                                <TableCell sx={{ color: '#5C738A' }}>{task.type}</TableCell>
                                <TableCell sx={{ color: '#5C738A' }}>{task.channel}</TableCell>
                                <TableCell>
                                    <span className="bg-gray-100 text-gray-800 px-2 py-2 rounded-full text-xs sm:text-sm">
                                        {task.status}
                                    </span>
                                </TableCell>
                                <TableCell sx={{ color: '#5C738A' }}>{task.date}</TableCell>
                                <TableCell sx={{ width: 'auto', whiteSpace: 'nowrap' }}>
                                    <span className="bg-gray-200 text-gray-800 px-2 py-2 rounded-full text-xs sm:text-sm max-w-xs overflow-hidden text-ellipsis whitespace-nowrap">
                                        {task.tag}
                                    </span>

                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default DashboardMyTaskPage;
