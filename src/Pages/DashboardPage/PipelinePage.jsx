import React, { useState } from "react";
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
    Paper,
    Chip,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    TableContainer,
} from "@mui/material";


import dashboardIcon from "../../assets/PipelineIcons/DashboardIcon.svg";
import contactsIcon from "../../assets/PipelineIcons/ContactsIcon.svg";
import campaignsIcon from "../../assets/PipelineIcons/CampaignIcon.svg";
import pipelineIcon from "../../assets/PipelineIcons/PipelineBuilderIcon.svg";
import reportsIcon from "../../assets/PipelineIcons/ReportsIcon.svg";
import settingsIcon from "../../assets/PipelineIcons/SettingsIcon.svg";
import notificationIcon from "../../assets/PipelineIcons/NotificationsIcon.svg";
import logoImg from "../../assets/logo/BlueLogo.png";
import searchIcon from "../../assets/PipelineIcons/SearchIcon.svg";
import filterIcon from "../../assets/PipelineIcons/FilterIcon.svg";
import exportIcon from "../../assets/PipelineIcons/ExportIcon.svg";
import createIcon from "../../assets/PipelineIcons/SaveIcon.svg";

const navItems = [
    { key: "dashboard", text: "Dashboard", icon: dashboardIcon },
    { key: "contacts", text: "Contacts", icon: contactsIcon },
    { key: "campaigns", text: "Campaigns", icon: campaignsIcon },
    { key: "pipeline", text: "Pipeline Builder", icon: pipelineIcon },
    { key: "reports", text: "Reports", icon: reportsIcon },
    { key: "settings", text: "Settings", icon: settingsIcon },
];

const Sidebar = ({ selectedTab, setSelectedTab }) => (
    <Box
        sx={{
            width: 250,
            bgcolor: "#fff",
            height: "80vh",
            p: 2,
            borderRight: "1px solid #e0e0e0",
            fontFamily: "Inter, sans-serif",
        }}
    >
        <Box sx={{ mb: 6, textAlign: "center" }}>
            <img src={logoImg} alt="Logo" width={120} />
        </Box>
        <List>
            {navItems.map(({ key, text, icon }) => (
                <ListItem
                    key={key}
                    button
                    selected={selectedTab === key}
                    onClick={() => setSelectedTab(key)}
                    sx={{
                        borderRadius: 1,
                        mb: 1,
                        backgroundColor: selectedTab === key ? "#E3F2FD" : "transparent",
                    }}
                >
                    <ListItemIcon>
                        <img src={icon} alt={`${text} icon`} width={24} height={24} />
                    </ListItemIcon>
                    <ListItemText
                        primary={text}
                        primaryTypographyProps={{
                            fontFamily: "Inter, sans-serif",
                            color: "#0D141C",
                            fontWeight: 550,
                            fontSize: "16px",
                        }}
                    />
                </ListItem>
            ))}
        </List>

        <Box sx={{ textAlign: "center", mt: 2 }}>
            <Button
                variant="contained"
                fullWidth
                sx={{ fontFamily: "Inter, sans-serif", textTransform: "none" }}
            >
                Start Campaign
            </Button>
        </Box>

        <Box sx={{ mt: 9 }}>
            <ListItem>
                <ListItemIcon>
                    <img src={notificationIcon} alt="Notifications" width={24} height={24} />
                </ListItemIcon>
                <ListItemText
                    primary="Notifications"
                    primaryTypographyProps={{
                        fontFamily: "Inter, sans-serif",
                        color: "#0D141C",
                        fontWeight: 550,
                        fontSize: "16px",
                    }}
                />
            </ListItem>
        </Box>
    </Box>
);
const DashboardTab = ({ label, count, active }) => (
    <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            color: active ? '#6B7280' : '#0D141C',
            cursor: 'pointer',
        }}
    >
        <Typography
            sx={{
                fontWeight: active ? 500 : 600, 
                color: active ? '#6B7280' : '#0D141C',
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
            }}
        >
            {label}
        </Typography>
        {count !== undefined && (
            <Chip
                label={count > 99 ? '99+' : count}
                size="small"
                sx={{
                    height: 20,
                    fontSize: 12,
                    fontWeight: 600,
                    color: '#E5E7EB',
                    backgroundColor: '#697077',
                }}
            />
        )}
    </Box>
);
const TopBar = () => (

    <Box sx={{ px: 4, pt: 3, fontFamily: "Inter, sans-serif" }}>

        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <Typography variant="h4" fontWeight="bold" fontSize={50} color="#0D141C">
                Pipeline Library
            </Typography>

          
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    width: 290,
                    height: 46,
                    border: "1px solid #1A6DF6",
                    borderRadius: "8px",
                    backgroundColor: "#FFFFFF",
                    px: 2,
                    gap: 1,
                }}
            >
                <input
                    type="text"
                    placeholder="Search pipelines"
                    style={{
                        border: "none",
                        outline: "none",
                        background: "transparent",
                        fontFamily: "Inter, sans-serif",
                        fontSize: 14,
                        color: "#0D141C",
                        flex: 1,
                    }}
                />
            </Box>
        </Box>

        <Box
            sx={{
                mt: 3,
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                overflowX: 'auto',
            }}
        >
            <DashboardTab label="Overview" count={99} />
            <DashboardTab label="Tasks" count={7} />
            <DashboardTab label="Documents" count={2} />
            <DashboardTab label="Team" count={99} />
            <DashboardTab label="Reports" />
            <DashboardTab label="Admin" active />
            <Typography fontSize={20} color="#6B7280">
                •••
            </Typography>
        </Box>
        <Box
            sx={{
                mt: 2,
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 4,
            }}
        >
            <img src={searchIcon} alt="Search" width={20} />
            <img src={filterIcon} alt="Filter" width={20} />
            <img src={exportIcon} alt="Export" width={20} />
            <img src={createIcon} alt="Create" width={20} />

            <Button
                variant="outlined"
                sx={{
                    border: "none",
                    borderRadius: 4,
                    textTransform: "none",
                    px: 3,
                    fontFamily: "Inter, sans-serif",
                    backgroundColor: '#EBEDF2',
                    color: '#121417',
                    boxShadow: "none",
                    '&:hover': {
                        backgroundColor: "#EBEDF2",
                    },
                }}
            >
                Create New Pipeline
            </Button>
        </Box>


        <Box sx={{ mt: 3 }}>
            <Box
                sx={{
                    display: "flex",
                    gap: 6,
                    borderBottom: "2px solid #dde2e7ff",
                }}
            >
                {["All", "Linked", "Drafts", "Templates"].map((label, idx) => (
                    <Typography
                        key={label}
                        sx={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: 16,
                            fontWeight: 550,
                            color: label === "All" ? "#0D141C" : "#5C758A",
                            borderBottom: "4px solid #dde2e7ff",
                            pb: 0,
                            padding: 1
                        }}
                    >
                        {label}
                    </Typography>
                ))}
            </Box>
        </Box>


    </Box>
);


const PipelineCards = () => {
    const cards = [
        { title: "Lead Magnet WhatsApp Flow", type: "WhatsApp" },
        { title: "Onboarding Email Sequence", type: "Email" },
        { title: "Customer Feedback SMS Flow", type: "SMS" },
    ];

    return (
        <Box sx={{ px: 4, pt: 3, fontFamily: "Inter, sans-serif" }}>
           
            <Typography variant="h3" fontWeight="bold" fontSize={30} color="#0D141C" mb={3}>
                Pipeline Library
            </Typography>

            
            <Box sx={{ display: "flex", gap: 4 }}>
                {cards.map((card, i) => (
                    <Box key={i} sx={{ width: 351 }}>
                       
                        <Box
                            sx={{
                                width: "100%",
                                height: 127,
                                backgroundColor: "#BBDFFF",
                                borderRadius: 2,
                            }}
                        />

                        
                        <Typography
                            fontWeight={600}
                            fontSize={15}
                            color="#0D141C"
                            mt={1}
                            textAlign="left"
                        >
                            {card.title}
                        </Typography>
                        <Typography fontSize={14} color="#6B7280" textAlign="left">
                            {card.type}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};



const PipelineTable = () => {
    const rows = [
        {
            name: "Lead Magnet WhatsApp Flow",
            type: "WhatsApp",
            steps: "6 Steps",
            campaign: "Fitness Blast July 24",
            status: "Active"
        },
        {
            name: "Onboarding Email Sequence",
            type: "Email",
            steps: "4 Steps",
            campaign: "Welcome New Users",
            status: "Draft"
        },
        {
            name: "Customer Feedback SMS Flow",
            type: "SMS",
            steps: "3 Steps",
            campaign: "Post-Purchase Survey",
            status: "Archived"
        }
    ];

    return (
        <Box sx={{ px: 3, mt: 4, fontFamily: "Inter, sans-serif" }}>
            <TableContainer
                component={Paper}
                sx={{
                    border: "1px solid #E5E7EB",
                    borderRadius: 2,
                    boxShadow: "none",
                    width: 1108
                }}
            >
                <Table>
                    <TableHead>
                        <TableRow>
                            {["Name", "Type", "Total Steps", "Linked Campaign", "Status", "Actions"].map(
                                (header, index) => (
                                    <TableCell
                                        key={index}
                                        sx={{
                                            fontWeight: 600,
                                            color: header === "Actions" ? "#5C758A" : "#121417",
                                            borderRight: "1px solid #E5E7EB",
                                            borderBottom: "1px solid #E5E7EB",
                                            whiteSpace: "nowrap"
                                        }}
                                    >
                                        {header}
                                    </TableCell>
                                )
                            )}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {rows.map((row, i) => (
                            <TableRow
                                key={i}
                                sx={{
                                    "& td": {
                                        borderRight: "1px solid #E5E7EB",
                                        borderBottom: "1px solid #E5E7EB"
                                    }
                                }}
                            >
                                <TableCell sx={{ color: "#121417" }}>{row.name}</TableCell>
                                <TableCell sx={{ color: "#5C758A" }}>{row.type}</TableCell>
                                <TableCell sx={{ color: "#5C758A" }}>{row.steps}</TableCell>
                                <TableCell sx={{ color: "#5C758A" }}>{row.campaign}</TableCell>
                                <TableCell>
                                    <Chip
                                        label={row.status}
                                        sx={{
                                            borderRadius: 2,
                                            px: 1.5,
                                            fontWeight: 500,
                                            fontSize: 13,
                                            color: "#121417",
                                            backgroundColor: "#EBEDF2"
                                        }}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        fontWeight={600}
                                        fontSize={14}
                                        sx={{ color: "#5C758A", cursor: "pointer" }}
                                    >
                                        Edit Flow
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

const PipelinePage = () => {
    const [selectedTab, setSelectedTab] = useState("pipeline");

    return (
        <Box sx={{ display: "flex", backgroundColor: "#F2F9FF", fontFamily: "Inter, sans-serif", height: 868, width: 1440 }}>
            <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            <Box sx={{ flexGrow: 1 }}>
                <TopBar />
                <PipelineCards />

                <PipelineTable />
            </Box>
        </Box>
    );
};

export default PipelinePage;
