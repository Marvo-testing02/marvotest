import React from 'react';
import {
    Box,
    Typography,
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
    Menu,
    MenuItem,
} from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

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
        status: 'Active',
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
    // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box className=" mt-4 bg-[#f5faff] min-h-screen ">
            <Tabs
                textColor='#001D6C'
                value={0}
                className="mb-6"
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
                    },
                    '.Mui-selected': {
                        color: '#001D6C', 
                    },
                }} >
                <Tab disableRipple label="Tasks" />
                <Tab disableRipple label="Calender" />
                <Tab disableRipple label="Manage" />
            </Tabs>

            <Box className="flex gap-0 mb-6 flex-wrap">
                <Button sx={{ borderRadius: '9px 0px 0px 9px', border: '1px solid #CFDBE8', color: 'black', padding: '9px', background: 'white' }} variant="outlined">All (7)</Button>
                <Button sx={{ borderRadius: '0px 0px 0px 0px', border: '1px solid #CFDBE8', color: 'gray' }} variant="outlined">Due Today</Button>
                <Button sx={{ borderRadius: '0px 0px 0px 0px', border: '1px solid #CFDBE8', color: 'gray' }} variant="outlined">Overdue</Button>
                <Button sx={{ borderRadius: '0px 9px 9px 0px', border: '1px solid #CFDBE8', color: 'gray' }} variant="outlined">Completed</Button>
            </Box>

            <div className='flex flex-col justify-center items-center mb-3 '>
                <Paper
                    sx={{ background: '#F3F3F3', width: '757px', border: '2px solid #CFDBE8', borderRadius: '12px', boxShadow: 'none' }}
                    className="flex flex-col justify-center items-center h-[206px] mb-4 p-4 relative"
                >
                    <Box sx={{ boxShadow: 'none' }} className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                        <Button
                            sx={{
                                background: '#EEFFF4',
                                fontSize: '20px',
                                color: 'gray',
                                fontWeight: 600,
                            }}
                            endIcon={
                                <ArrowDropDown style={{ fontSize: '22px' }} className="text-black" />
                            }
                        >
                            Import CSV
                        </Button>
                        <Typography
                            sx={{
                                width: '30vw',
                                display: 'flex',
                                flexDirection: 'column',
                                fontSize: '20px',
                            }}
                            className="text-gray-400 absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 text-center"
                        >
                            Drag and drop file here or paste here
                        </Typography>
                    </Box>
                </Paper>
            </div>


            <TableContainer sx={{ borderRadius: '12px', border: '2px solid #D4DBE3' }} component={Paper}>
                <Table
                    sx={{
                        // minWidth: 1000, 
                        '& .MuiTableCell-root': {
                            padding: '36px 24px',
                            fontSize: '16px',
                        },
                        '& .MuiTableRow-root': {
                            height: '72px', // Increase row height
                        },
                    }}>
                    <TableHead >
                        <TableRow  >
                            <TableCell >Owner</TableCell>
                            <TableCell>Campaign Name</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Channel</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Last Updated</TableCell>
                            <TableCell>Tag</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {taskData.map((task, index) => (
                            <TableRow key={index}>
                                <TableCell sx={{ fonts: '14px', fontWeight: 400, color: '#5C738A' }}>{task.owner}</TableCell>
                                <TableCell>{task.campaign}</TableCell>
                                <TableCell sx={{ fonts: '14px', fontWeight: 400, color: '#5C738A' }}>{task.type}</TableCell>
                                <TableCell sx={{ fonts: '14px', fontWeight: 400, color: '#5C738A' }}>{task.channel}</TableCell>
                                <TableCell>
                                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                                        {task.status}
                                    </span>
                                </TableCell>
                                <TableCell sx={{ fonts: '14px', fontWeight: 400, color: '#5C738A' }}>{task.date}</TableCell>
                                <TableCell>
                                    <span style={{ whiteSpace: 'nowrap' }} className="bg-gray-200 text-gray-800 px-3 py-1  rounded-full text-sm">
                                        {task.tag}
                                    </span>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box >
    );
}

export default DashboardMyTaskPage;
