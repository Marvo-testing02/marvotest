import { Box, Button, FormControl, InputAdornment, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from '@mui/icons-material/Clear';
import {
    BarChart, Bar, XAxis, YAxis, ResponsiveContainer,
} from "recharts";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Popover } from '@mui/material';
import { format } from 'date-fns';
import dayjs from 'dayjs';


function DashboardReportPage() {
    const [search, setSearch] = useState("");
    const [channel, setChannel] = useState("");
    // const [dateRange, setDateRange] = useState("");
    const [tags, setTags] = useState("");
    const [exportType, setExportType] = useState("");
    const [smartReportType, setSmartReportType] = useState("");
    const [dateRange, setDateRange] = useState([
        {
            startDate: null,
            endDate: null,
            key: 'selection',
        }
    ]);



    const [anchorEl, setAnchorEl] = useState(null);
    const mockData = [
        { name: "Campaign A", channel: "Facebook", tags: "Fitness", date: "2025-08-01", exportType: "PDF", smartReportType: "Summary" },
        { name: "Campaign B", channel: "Instagram", tags: "eCom", date: "2025-08-03", exportType: "CSV", smartReportType: "Detailed" },
        { name: "Campaign C", channel: "WhatsApp", tags: "VIP", date: "2025-07-25", exportType: "Excel", smartReportType: "Summary" },
        { name: "Campaign D", channel: "Email", tags: "Warm", date: "2025-08-05", exportType: "PDF", smartReportType: "Detailed" },
        { name: "Campaign E", channel: "Facebook", tags: "Cold", date: "2025-07-29", exportType: "CSV", smartReportType: "Summary" },
        { name: "Campaign F", channel: "Instagram", tags: "VIP", date: "2025-08-06", exportType: "Excel", smartReportType: "Detailed" },
        { name: "Campaign G", channel: "WhatsApp", tags: "Fitness", date: "2025-08-02", exportType: "PDF", smartReportType: "Summary" },
        { name: "Campaign H", channel: "Email", tags: "eCom", date: "2025-08-04", exportType: "CSV", smartReportType: "Detailed" },
        { name: "Campaign I", channel: "Facebook", tags: "VIP", date: "2025-07-30", exportType: "Excel", smartReportType: "Summary" },
        { name: "Campaign J", channel: "Instagram", tags: "Warm", date: "2025-08-07", exportType: "PDF", smartReportType: "Detailed" },
        { name: "Campaign K", channel: "WhatsApp", tags: "Cold", date: "2025-08-01", exportType: "CSV", smartReportType: "Summary" },
        { name: "Campaign L", channel: "Email", tags: "VIP", date: "2025-07-26", exportType: "Excel", smartReportType: "Detailed" },
        { name: "Campaign M", channel: "Facebook", tags: "Fitness", date: "2025-07-27", exportType: "PDF", smartReportType: "Summary" },
        { name: "Campaign N", channel: "Instagram", tags: "eCom", date: "2025-08-05", exportType: "CSV", smartReportType: "Detailed" },
        { name: "Campaign O", channel: "WhatsApp", tags: "Warm", date: "2025-08-03", exportType: "Excel", smartReportType: "Summary" },
        { name: "Campaign P", channel: "Email", tags: "Cold", date: "2025-07-31", exportType: "PDF", smartReportType: "Detailed" },
        { name: "Campaign Q", channel: "Facebook", tags: "VIP", date: "2025-08-06", exportType: "CSV", smartReportType: "Summary" },
        { name: "Campaign R", channel: "Instagram", tags: "Fitness", date: "2025-08-07", exportType: "Excel", smartReportType: "Detailed" },
        { name: "Campaign S", channel: "WhatsApp", tags: "eCom", date: "2025-07-28", exportType: "PDF", smartReportType: "Summary" },
        { name: "Campaign T", channel: "Email", tags: "Warm", date: "2025-08-02", exportType: "CSV", smartReportType: "Detailed" },
    ];

    const data = [
        { label: "Campaigns Sent", value: "127", change: 0 },
        { label: "Total Replies", value: "8,542", change: 0 },
        { label: "Leads Dropped", value: "1,219", change: 0 },
        { label: "CTR", value: "28.4%", change: 0 },
        { label: "Conversion Rate", value: "11.6%", change: 0 },
        { label: "Avg Response Time", value: "1 hr 20 mins", change: 0 },
    ];
    const [filteredData, setFilteredData] = useState(mockData);

    const filterData = () => {
        const filtered = mockData.filter(item =>
            item.name.toLowerCase().includes(search.toLowerCase()) &&
            (channel ? item.channel === channel : true) &&
            (dateRange[0].startDate && dateRange[0].endDate
                ? dayjs(item.date).isAfter(dayjs(dateRange[0].startDate).subtract(1, 'day')) &&
                dayjs(item.date).isBefore(dayjs(dateRange[0].endDate).add(1, 'day'))
                : true) &&
            (tags ? item.tags === tags : true) &&
            (exportType ? item.exportType === exportType : true) &&
            (smartReportType ? item.smartReportType === smartReportType : true)
        );

        setFilteredData(filtered);
    };



    useEffect(() => {
        filterData();
    }, [search, channel, dateRange, tags, exportType, smartReportType]);

    const handleClearFilters = () => {
        setSearch("");
        setChannel("");
        setDateRange([
            {
                startDate: null,
                endDate: null,
                key: 'selection',
            }
        ]);
        setTags("");
        setExportType("");
        setSmartReportType("");
    };


    const filters = [
        {
            label: "Channel",
            value: channel,
            setValue: setChannel,
            options: ["Facebook", "WhatsApp", "Email", "Instagram"],
        },

        {
            label: "Tags",
            value: tags,
            setValue: setTags,
            options: ["Warm", "Cold",],
        },
        {
            label: "Export",
            value: exportType,
            setValue: setExportType,
            options: ["PDF", "CSV", "Excel"],
        },
        {
            label: "Smart Report Type",
            value: smartReportType,
            setValue: setSmartReportType,
            options: ["Summary", "Detailed"],
        },
    ];

    // Dummy Data
    const monthlyPerformance = [
        { month: "Jan", value: 20 },
        { month: "Feb", value: 22 },
        { month: "Mar", value: 23 },
        { month: "Apr", value: 25 },
        { month: "May", value: 26 },
        { month: "Jun", value: 26 },
        { month: "Jul", value: 25 },
    ];

    const channelEngagement = [
        { channel: "WhatsApp", value: 1800 },
        { channel: "Email", value: 1500 },
        { channel: "Instagram", value: 2400 },
        { channel: "Facebook", value: 2000 },
    ];

    const leadsStatus = [
        { label: "Warm", value: 300 },
        { label: "Hot", value: 300 },
        { label: "Cold", value: 300 },
        { label: "Dropped", value: 300 },
    ];

    const campaignTableData = [
        { name: "Campaign Alpha", channel: "WhatsApp", sent: 250, replies: 50, ctr: "20%", conversion: "5%", status: "Active" },
        { name: "Campaign Beta", channel: "Email", sent: 300, replies: 75, ctr: "25%", conversion: "10%", status: "Completed" },
        { name: "Campaign Gamma", channel: "Instagram", sent: 200, replies: 40, ctr: "20%", conversion: "8%", status: "Active" },
        { name: "Campaign Delta", channel: "Facebook", sent: 220, replies: 55, ctr: "25%", conversion: "12%", status: "Completed" },
        { name: "Campaign Epsilon", channel: "WhatsApp", sent: 300, replies: 60, ctr: "20%", conversion: "10%", status: "Active" },
    ];

    const handleDateClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    return (
        <div className=' mt-10 w-full flex flex-col '>
            {/* Search Input */}
            <TextField
                variant="outlined"
                placeholder="Search campaigns by name, creator, tag, or type"
                size="small"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon sx={{ color: "#5C738A" }} />
                        </InputAdornment>
                    ),
                }}
                sx={{
                    mb: 1.5,
                    minWidth: "160px",
                    padding: "4px 12px",
                    marginBottom: "22px",
                    backgroundColor: "#EBEDF2",
                    borderRadius: "8px",
                    "& fieldset": { border: "none" },
                    "& input::placeholder": {
                        color: "#5C738A",
                        opacity: 1,
                    },
                }}
            />

            {/* Filters Section */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: 'row',
                    gap: 1.5,
                    justifyContent: 'space-between',
                    mb: 2,
                    width: "100%",
                    flexWrap: "wrap",
                }}
            >
                <div className='flex flex-row flex-wrap  gap-2'>

                    <Button
                        onClick={handleDateClick}
                        sx={{
                            minWidth: 140,
                            borderRadius: '12px',
                            backgroundColor: "#EBEDF2",
                            fontSize: "14px",
                            fontWeight: 500,
                            textTransform: "none",
                            color: "#000",
                            padding: "6px 16px",
                        }}
                    >
                        {(dateRange[0].startDate && dateRange[0].endDate)
                            ? `${format(dateRange[0].startDate, 'dd/MM/yyyy')} - ${format(dateRange[0].endDate, 'dd/MM/yyyy')}`
                            : "Select Date Range"}
                    </Button>

                    <Popover
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                    >
                        <DateRange
                            editableDateInputs={true}
                            onChange={item => {
                                setDateRange([item.selection]);
                                handleClose();
                            }}
                            moveRangeOnFirstSelection={false}
                            ranges={dateRange}
                        />
                    </Popover>

                    {filters.map((filter, index) => (
                        <FormControl size="small" key={index} sx={{ minWidth: 140 }}>
                            <Select
                                displayEmpty
                                value={filter.value}
                                onChange={(e) => filter.setValue(e.target.value)}
                                IconComponent={KeyboardArrowDownIcon}
                                renderValue={(selected) =>
                                    selected === "" ? (
                                        <span style={{ color: "#000000", backgroundColor: "#EBEDF2" }}>
                                            {filter.label}
                                        </span>
                                    ) : (
                                        selected
                                    )
                                }
                                sx={{
                                    color: "#000000",
                                    pl: "16px",
                                    pr: "8px",
                                    borderRadius: "12px",
                                    backgroundColor: "#EBEDF2",
                                    fontSize: "14px",
                                    fontWeight: 500,
                                    "& .MuiSelect-select": { py: 0.8, pl: 2 },
                                    "& fieldset": { border: "none" },
                                }}

                                MenuProps={{
                                    PaperProps: {
                                        sx: {
                                            borderRadius: "12px",
                                            overflow: "hidden",
                                            marginTop: '10px',
                                            fontWeight: 500
                                        },
                                    },
                                }}
                            >
                                {filter.options.map((opt) => (
                                    <MenuItem
                                        key={opt}
                                        value={opt}
                                        sx={{
                                            color: "#000000",
                                            fontSize: "13px",
                                            fontWeight: 500,
                                            borderRadius: "8px",

                                        }}
                                    >
                                        {opt}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    ))}
                </div>


                <Button
                    onClick={handleClearFilters}
                    startIcon={<ClearIcon />}
                    sx={{

                        pl: "16px",
                        pr: "16px",
                        borderRadius: "12px",
                        backgroundColor: "#EBEDF2",
                        color: "#000000",
                        fontSize: "14px",
                        fontWeight: 500,
                        textTransform: "none",
                        "&:hover": {
                            backgroundColor: "#d6dce5",
                        },
                    }}
                >
                    Clear All Filters
                </Button>

            </Box>

            {/* box data */}

            <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 w-full mt-4">
                {data.map((item, index) => (
                    <Paper
                        key={index}
                        elevation={3}
                        className="flex flex-col justify-center px-5 py-3 h-[120px] rounded-xl"
                        sx={{
                            boxShadow: 'none',
                            border: '1.5px solid #D6DBE3',
                            backgroundColor: "#FFFFFF",
                            borderRadius: '12px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px'

                        }}
                    >
                        <Typography sx={{ fontSize: "17px", fontWeight: 500, color: "black" }}>
                            {item.label}
                        </Typography>
                        <Typography sx={{ fontSize: "20px", fontWeight: 700, color: "#000000" }}>
                            {item.value}
                        </Typography>
                    </Paper>
                ))}
            </Box>

            {/* Avg Response Time */}
            <Box className="h-112px mt-4">
                <Paper
                    className="flex flex-col justify-center px-5 py-3 h-[120px] rounded-xl"
                    sx={{
                        boxShadow: 'none',
                        border: '1.5px solid #D6DBE3',
                        backgroundColor: "#FFFFFF",
                        borderRadius: '12px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px'
                    }}
                >

                    <Typography sx={{ fontSize: "17px", fontWeight: 500, color: "black" }}>
                        Avg Response Time
                    </Typography>
                    <Typography sx={{ fontSize: "20px", fontWeight: 700, color: "#000000" }}>
                        1 hr 20 mins
                    </Typography>

                </Paper>
            </Box>

            {/* Charts and Graphs */}

            <Typography variant="h6" sx={{ fontWeight: 700, mt: 5 }}>
                Charts and Graphs
            </Typography>

            <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4  ">
                {/* Monthly Campaign Performance */}
                <Paper className="p-5" sx={{ backgroundColor: "#FFFFFF", border: "1.5px solid #D6DBE3", boxShadow: 'none', borderRadius: '12px' }}>
                    <Typography sx={{ fontSize: "16px", fontWeight: 600, mb: 1 }}>
                        Monthly Campaign Performance (Jan–Dec)
                    </Typography>
                    <Typography sx={{ fontSize: "34px", fontWeight: 700 }}>127</Typography>
                    <Typography sx={{ fontSize: "15px", mb: 2, fontWeight: 700 }}>Jan–Dec</Typography>
                    <ResponsiveContainer width="100%" height={242}>
                        <BarChart data={monthlyPerformance}>
                            <XAxis dataKey="month" axisLine={false} tickLine={false} />
                            <Bar dataKey="value" fill="#D9ECFF" barSize={34} radius={[3, 3, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </Paper>

                {/* Channel-Wise Engagement Comparison */}
                <Paper className="p-5" sx={{ backgroundColor: "#FFFFFF", border: "1.5px solid #D6DBE3", boxShadow: 'none', borderRadius: '12px' }}>
                    <Typography sx={{ fontSize: "16px", fontWeight: 600, mb: 1 }}>
                        Channel-Wise Engagement Comparison
                    </Typography>
                    <Typography sx={{ fontSize: "34px", fontWeight: 700 }}>8,542</Typography>
                    <Typography sx={{ fontSize: "15px", mb: 2, fontWeight: 700 }}>Q1 2024</Typography>
                    <ResponsiveContainer width="100%" height={242}>
                        <BarChart data={channelEngagement} layout="vertical" barCategoryGap={12}>
                            <YAxis dataKey="channel" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                            <XAxis type="number" hide />
                            <Bar dataKey="value" fill="#D9ECFF" barSize={35} radius={[0, 3, 3, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </Paper>

                {/* Leads Status */}
                <Paper className="p-4 rounded-xl" sx={{ backgroundColor: "#FFFFFF", border: "1.5px solid #D6DBE3", boxShadow: 'none', borderRadius: '12px' }}>
                    <Typography sx={{ fontSize: "16px", fontWeight: 600, mb: 1 }}>
                        Leads Status
                    </Typography>
                    <Typography sx={{ fontSize: "34px", fontWeight: 700 }}>1,219</Typography>
                    <Typography sx={{ fontSize: "15px", mb: 2, fontWeight: 700 }}>Q1 2024</Typography>
                    <ResponsiveContainer width="100%" height={242}>
                        <BarChart data={leadsStatus}>
                            <XAxis dataKey="label" axisLine={false} tickLine={false} />
                            <Bar dataKey="value" fill="#CFE5FC" barSize={34} radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </Paper>
            </Box>


            {/* Funnel Analysis */}
            <Typography variant="h6" sx={{ fontWeight: 700, mt: 6, mb: 2 }}>
                Funnel Analysis
            </Typography>

            <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                    { label: "Sent", value: 100 },
                    { label: "Seen", value: 800 },
                    { label: "Replied", value: 600 },
                    { label: "Clicked", value: 400 },
                    { label: "Converted", value: 300 },
                ].map((item, index) => (
                    <Paper
                        key={index}
                        elevation={3}
                        className="flex flex-col justify-center px-5 py-3 h-[120px]"
                        sx={{
                            boxShadow: 'none',
                            border: '1.5px solid #D6DBE3',
                            backgroundColor: "#FFFFFF",
                            borderRadius: '12px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',

                        }}
                    >
                        <Typography sx={{ fontSize: "16px", fontWeight: 500, color: "black" }}>
                            {item.label}
                        </Typography>
                        <Typography sx={{ fontSize: "25px", fontWeight: 700, color: "#000000" }}>
                            {item.value}
                        </Typography>
                    </Paper>
                ))}
            </Box>

            {/*  table section*/}


            <Typography variant="h6" sx={{ fontWeight: 700, mt: 6, mb: 2 }}>
                Campaign Table List
            </Typography>

            <TableContainer
                component={Paper}
                sx={{
                    border: "2px solid #D4DBE3",
                    borderRadius: "12px",
                    boxShadow: "none",
                    mt: 2,
                    mb: 2
                }}
            >
                <Table
                    sx={{
                        '& .MuiTableCell-root': {
                            padding: '18px 24px',
                            fontSize: '15px',
                        },
                        '& .MuiTableRow-root': {
                            height: '60px',
                        },
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell><b>Campaign Name</b></TableCell>
                            <TableCell><b>Channel</b></TableCell>
                            <TableCell><b>Sent</b></TableCell>
                            <TableCell><b>Replies</b></TableCell>
                            <TableCell><b>CTR</b></TableCell>
                            <TableCell><b>Conversion</b></TableCell>
                            <TableCell><b>Status</b></TableCell>
                            <TableCell><b>Action</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* {campaignTableData.map((row, idx) => (
                            <TableRow key={idx}>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>
                                    <Typography sx={{ color: "#5C758A" }}>{row.channel}</Typography>
                                </TableCell >
                                <TableCell sx={{ color: "#5C758A" }}>{row.sent}</TableCell>
                                <TableCell sx={{ color: "#5C758A" }}>{row.replies}</TableCell>
                                <TableCell sx={{ color: "#5C758A" }}>{row.ctr}</TableCell>
                                <TableCell sx={{ color: "#5C758A" }}>{row.conversion}</TableCell>
                                <TableCell>
                                    <span
                                        className="px-3 py-1 flex justify-center rounded-full text-sm 
                                        bg-gray-200 text-gray-800  w-[60%] 
                                           "
                                    >
                                        {row.status}
                                    </span>
                                </TableCell>
                                <TableCell>
                                    <span className=' text-[#5C758A] font-semibold'> View</span>
                                </TableCell>
                            </TableRow>
                        ))} */}

                        {filteredData.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.channel}</TableCell>
                                <TableCell>{item.tags}</TableCell>
                                <TableCell>{item.dateRange}</TableCell>
                                <TableCell>{item.exportType}</TableCell>
                                <TableCell>{item.smartReportType}</TableCell>
                                <TableCell>
                                    <span className="text-[#5C758A] font-semibold">View</span>
                                </TableCell>
                                <TableCell>
                                    <span className="text-[#5C758A] font-semibold"></span>
                                </TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>


        </div>
    );
}

export default DashboardReportPage;
