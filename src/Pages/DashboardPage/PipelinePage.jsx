// Inside PipelinePage.jsx

import React, { useState } from "react";
import {
    Box,
    Typography,
    Chip,
    Button,
    Paper,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    TableContainer,
} from "@mui/material";

import searchIcon from "../../assets/PipelineIcons/SearchIcon.svg";
import filterIcon from "../../assets/PipelineIcons/FilterIcon.svg";
import exportIcon from "../../assets/PipelineIcons/ExportIcon.svg";
import createIcon from "../../assets/PipelineIcons/SaveIcon.svg";

const tabs = ["All", "Linked", "Drafts", "Templates"];

const Sidebar = () => (
    <Box
        sx={{
            width: 272,
            bgcolor: "#fff",
            height: 691,
            p: 2,
            borderRight: "1px solid #e0e0e0",
            fontFamily: "Inter, sans-serif",
        }}
    />
);

const DashboardTab = ({ label, count, active, onClick }) => {
    const displayCount = count > 99 ? '99+' : count;

    return (
        <Box
            onClick={onClick}
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
                    label={displayCount}
                    size="small"
                    sx={{
                        height: 20,
                        fontSize: 12,
                        fontWeight: 500,
                        color: '#E5E7EB',
                        backgroundColor: '#697077',
                        px: 0,
                    }}
                />
            )}
        </Box>
    );
};

const TopBar = ({ selectedTab, setSelectedTab }) => {
    const tabCounts = {
        Overview: 101,
        Tasks: 7,
        Documents: 2,
        Team: 153,
        Reports: 0,
        Admin: 13,
    };

    return (
        <Box sx={{ px: 4, pt: 3, fontFamily: "Inter, sans-serif" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
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

            <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', gap: 4, overflowX: 'auto' }}>
                {Object.entries(tabCounts).map(([label, count]) => (
                    <DashboardTab
                        key={label}
                        label={label}
                        count={count}
                        active={label === "Admin"}
                        onClick={() => {}}
                    />
                ))}
                <Typography fontSize={20} color="#6B7280">•••</Typography>
            </Box>

            <Box sx={{ mt: 2, display: "flex", gap: 4 }}>
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
                        '&:hover': { backgroundColor: "#EBEDF2" },
                    }}
                >
                    Create New Pipeline
                </Button>
            </Box>

            <Box sx={{ mt: 3 }}>
                <Box sx={{ display: "flex", gap: 6, borderBottom: "2px solid #dde2e7ff" }}>
                    {tabs.map((label) => (
                        <Typography
                            key={label}
                            onClick={() => setSelectedTab(label)}
                            sx={{
                                cursor: "pointer",
                                fontFamily: "Inter, sans-serif",
                                fontSize: 16,
                                fontWeight: 550,
                                color: selectedTab === label ? "#0D141C" : "#5C758A",
                                borderBottom: selectedTab === label ? "4px solid #0D141C" : "4px solid transparent",
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
};

const PipelineCards = ({ selectedTab }) => {
    const allCards = [
        { title: "Lead Magnet WhatsApp Flow", type: "WhatsApp", tab: "Linked" },
        { title: "Onboarding Email Sequence", type: "Email", tab: "Drafts" },
        { title: "Customer Feedback SMS Flow", type: "SMS", tab: "Templates" },
    ];

    const filteredCards = selectedTab === "All" ? allCards : allCards.filter(c => c.tab === selectedTab);

    return (
        <Box sx={{ px: 4, pt: 3, fontFamily: "Inter, sans-serif" }}>
            <Typography variant="h3" fontWeight="bold" fontSize={30} color="#0D141C" mb={3}>
                {selectedTab} Pipelines
            </Typography>
            <Box sx={{ display: "flex", gap: 4 }}>
                {filteredCards.map((card, i) => (
                    <Box key={i} sx={{ width: 351 }}>
                        <Box sx={{ width: "100%", height: 127, backgroundColor: "#BBDFFF", borderRadius: 2 }} />
                        <Typography fontWeight={600} fontSize={15} color="#0D141C" mt={1} textAlign="left">
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

const PipelineTable = ({ selectedTab }) => {
    const allRows = [
        {
            name: "Lead Magnet WhatsApp Flow",
            type: "WhatsApp",
            steps: "6 Steps",
            campaign: "Fitness Blast July 24",
            status: "Linked"
        },
        {
            name: "Onboarding Email Sequence",
            type: "Email",
            steps: "4 Steps",
            campaign: "Welcome New Users",
            status: "Drafts"
        },
        {
            name: "Customer Feedback SMS Flow",
            type: "SMS",
            steps: "3 Steps",
            campaign: "Post-Purchase Survey",
            status: "Templates"
        }
    ];

    const filteredRows = selectedTab === "All" ? allRows : allRows.filter(r => r.status === selectedTab);

    return (
        <Box sx={{ px: 3, mt: 4, fontFamily: "Inter, sans-serif" }}>
            <TableContainer component={Paper} sx={{ border: "1px solid #E5E7EB", borderRadius: 2, boxShadow: "none", width: 1108 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {["Name", "Type", "Total Steps", "Linked Campaign", "Status", "Actions"].map((header) => (
                                <TableCell
                                    key={header}
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
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredRows.map((row, i) => (
                            <TableRow key={i} sx={{ "& td": { borderRight: "1px solid #E5E7EB", borderBottom: "1px solid #E5E7EB" } }}>
                                <TableCell sx={{ color: "#121417" }}>{row.name}</TableCell>
                                <TableCell sx={{ color: "#5C758A" }}>{row.type}</TableCell>
                                <TableCell sx={{ color: "#5C758A" }}>{row.steps}</TableCell>
                                <TableCell sx={{ color: "#5C758A" }}>{row.campaign}</TableCell>
                                <TableCell>
                                    <Chip label={row.status} sx={{ borderRadius: 2, px: 1.5, fontWeight: 500, fontSize: 13, color: "#121417", backgroundColor: "#EBEDF2" }} />
                                </TableCell>
                                <TableCell>
                                    <Typography fontWeight={600} fontSize={14} sx={{ color: "#5C758A", cursor: "pointer" }}>
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
    const [selectedTab, setSelectedTab] = useState("All");

    return (
        <Box sx={{ display: "flex", backgroundColor: "#F2F9FF", fontFamily: "Inter, sans-serif", height: 868, width: 1475 }}>
            <Sidebar />
            <Box sx={{ flexGrow: 1 }}>
                <TopBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                <PipelineCards selectedTab={selectedTab} />
                <PipelineTable selectedTab={selectedTab} />
            </Box>
        </Box>
    );
};

export default PipelinePage;
